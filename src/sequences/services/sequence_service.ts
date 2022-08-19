import Sequence from "../models/Sequence";


/*
 * * * * * *
 * Queries
 * * * * * *
 */

async function getSequenceById({ sequenceId }: { sequenceId: string }) {
  return await Sequence.query().findById(sequenceId);
}

async function getAllForUser({ userId }: { userId: string }) {
  return await Sequence.query().where("userId", userId);
}


/*
 * * * * * * *
 * Mutations
 * * * * * * *
 */




export default {
  // Queries
  getSequenceById,
  getAllForUser,
}