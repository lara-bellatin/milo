import Objection from "objection";
import User from "../models/User";
import { nanoid } from "nanoid";


export async function findUserById(id: string, trx?: Objection.Transaction) {
  return await User.query(trx)
    .findById(id)
    .withGraphFetched("logs");
}

export async function findUserByEmail(email: string, trx?: Objection.Transaction) {
  const user = await User.query(trx)
    .findOne({
      email: email.trim().toLowerCase(),
    })
    .withGraphFetched("logs");
  return user;
}

async function createUser({ name, email, password }: { name: string, email: string, password: string }) {
  const userWithEmailExists = await findUserByEmail(email);

  if (userWithEmailExists) {
    throw new Error("User with email already exists");
  }

  const user = await User.query().insert({
    id: "user_" + nanoid(),
    name,
    email,
    password,
  });

  return user;
}

export default {
  createUser,
}