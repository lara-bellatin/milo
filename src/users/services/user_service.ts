import Objection from "objection";
import { nanoid } from "nanoid";
import bcrypt from "bcrypt";

import User from "../models/User";


export async function findUserById(id: string, trx?: Objection.Transaction) {
  return await User.query(trx)
    .findById(id)
    .withGraphFetched('[logs, buckets, sequences]');
}

export async function findUserByEmail(email: string, trx?: Objection.Transaction) {
  const user = await User.query(trx)
    .findOne({
      email: email.trim().toLowerCase(),
    })
    .withGraphFetched("logs");
  return user;
}

async function createUser({
  displayName,
  email,
  password,
}: {
  displayName: string;
  email: string;
  password: string;
}) {
  const userWithEmailExists = await findUserByEmail(email);

  if (userWithEmailExists) {
    throw new Error("User with email already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.query().insert({
    id: "user_" + nanoid(),
    displayName,
    email,
    password: hashedPassword,
    status: User.Status.ACTIVE,
  });

  return user;
}

async function deleteUser(id: string, trx?: Objection.Transaction) {
  return await User.query(trx).patchAndFetchById(id, {
    status: User.Status.DELETED,
  })
}

async function updateUser({
  userId,
  username,
  displayName,
  birthday,
}: {
  userId: string;
  username?: string;
  displayName?: string;
  birthday?: string;
}) {
  const user = await findUserById(userId);
  if (!user) {
    throw new Error("User could not be found");
  }

  let updatedFields = {
    username: user.username,
    displayName: user.displayName,
    birthday: user.birthday,
  }

  if (username) {
    updatedFields.username = username;
  }

  if (displayName) {
    updatedFields.displayName = displayName;
  }

  if (birthday) {
    updatedFields.birthday = birthday;
  }

  return await User.query().patchAndFetchById(userId, updatedFields);
}


export default {
  createUser,
  deleteUser,
  updateUser,
}