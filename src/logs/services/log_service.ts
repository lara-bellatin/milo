import Log from "../models/Log";


/*
 * * * * * *
 * Queries
 * * * * * *
 */

async function getLogById({ logId }: { logId: string }) {
  return await Log.query().findById(logId);
}

async function getAllForUser({ userId }: { userId: string }) {
  return await Log.query().where("userId", userId);
}


/*
 * * * * * * *
 * Mutations
 * * * * * * *
 */




export default {
  // Queries
  getLogById,
  getAllForUser,
}