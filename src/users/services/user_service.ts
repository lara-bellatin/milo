import Objection, { Model } from "objection";
import { ApolloError } from "apollo-server-express";
import { nanoid } from "nanoid";
import bcrypt from "bcrypt";

import User from "../models/User";
import { CreateUserInput, UpdateUserInput } from "../../generated/graphql";


export async function findUserByEmail(email: string, trx?: Objection.Transaction) {
  const user = await User.query(trx)
    .findOne({
      email: email.trim().toLowerCase(),
    })
    .withGraphFetched("[buckets, sequences, logs]");
  return user;
}

export async function findUserByID(id: string, trx?: Objection.Transaction) {
  return await User.query(trx)
    .findById(id)
    .withGraphFetched("[buckets, sequences, logs]");
}

export async function patchUserById({ userId, data }: { userId: string; data: Partial<User> }) {
  return User.query().patchAndFetchById(userId, data);
}


// MUTATIONS

async function createUser({ input, trx }: { input: CreateUserInput, trx?: Objection.Transaction }) {
  const { displayName, email, password } = input;

  if (!email) {
    throw new ApolloError("An email is required to create a new user")
  }
  const existingUser = await findUserByEmail(email, trx);

  if (existingUser) {
    throw new ApolloError("A user with this email already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const userId = "user_" + nanoid();
  const user = await Model.transaction(async (trx) => {
    const user = await User.query(trx).insert({
      id: userId,
      displayName,
      email,
      status: User.Status.ACTIVE,
      password: hashedPassword,
    });

    return user;
  });

  return user;

};


async function updateUser({ input, trx }: { input: UpdateUserInput, trx?: Objection.Transaction }) {
  const { id, displayName, username, birthday } = input;

  const user = await findUserByID(id, trx);

  if (!user) throw new ApolloError("User doesn't exist");

  let updateDisplayName = user.displayName;
  let updateUsername = user.username;
  let updateBirthday = user.birthday;

  if (displayName) {
    updateDisplayName = displayName;
  }

  if (username) {
    updateUsername = username;
  }

  if (birthday) {
    updateBirthday = birthday;
  }

  return await patchUserById({
    userId: user.id,
    data: {
      displayName: updateDisplayName,
      username: updateUsername,
      birthday: updateBirthday,
    }
  });
}

async function deleteUser({ id }: { id: string }) {
  return await patchUserById({
    userId: id,
    data: {
      status: User.Status.DELETED,
    }
  })
}


export default {
  createUser,
  updateUser,
  deleteUser,
}