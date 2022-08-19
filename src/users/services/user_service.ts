import User from "../models/User";
import Objection from "objection";


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


export default {
}