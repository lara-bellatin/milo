import Bucket from "../models/Bucket";


/*
 * * * * * *
 * Queries
 * * * * * *
 */

async function getBucketById({ bucketId }: { bucketId: string }) {
  return await Bucket.query().findById(bucketId);
}

async function getAllForUser({ userId }: { userId: string }) {
  return await Bucket.query().where("userId", userId);
}


/*
 * * * * * * *
 * Mutations
 * * * * * * *
 */




export default {
  // Queries
  getBucketById,
  getAllForUser,
}