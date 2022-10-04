import { nanoid } from "nanoid";
import Bucket from "../models/Bucket";


/*
 * * * * * *
 * Queries
 * * * * * *
 */

async function getBucketById({ bucketId }: { bucketId: string }) {
  return await Bucket.query().findById(bucketId)
    .withGraphFetched('[owner, sequences, logs]');
}

async function getAllForUser({ userId }: { userId: string }) {
  return await Bucket.query().where("userId", userId)
    .withGraphFetched('[owner, sequences, logs]');
}


/*
 * * * * * * *
 * Mutations
 * * * * * * *
 */

async function createBucket({
  userId,
  title,
  description,
  type,
  dueDate,
}: {
  userId: string,
  title: string,
  description?: string;
  type: Bucket.Type;
  dueDate?: string;
}) {
  return await Bucket.query().insert({
    id: "bucket_" + nanoid(),
    userId,
    title,
    description,
    type,
    dueDate,
    status: Bucket.Status.NOT_STARTED,
  })
}


async function updateBucket({
  id,
  title,
  description,
  type,
  dueDate
}: {
  id: string;
  title?: string;
  description?: string;
  type?: Bucket.Type;
  dueDate?: string;
}) {

  const bucket = await getBucketById({ bucketId: id });

  if (!bucket) {
    throw new Error("Bucket was not found");
  }

  let updateFields = {
    title: title || bucket.title,
    description: description || bucket.description,
    type: type || bucket.type,
    dueDate: dueDate || bucket.dueDate,
  }

  return await Bucket.query().patchAndFetchById(id, updateFields);
}


async function cancelBucket({ bucketId }: { bucketId: string }) {
  const bucket = await getBucketById({ bucketId });

  if (!bucket) {
    throw new Error("Bucket could not be found");
  }

  if([Bucket.Status.CANCELED, Bucket.Status.COMPLETED].includes(bucket.status)) {
    throw new Error("Bucket cannot be canceled")
  }

  return await Bucket.query().patchAndFetchById(bucketId, { status: Bucket.Status.CANCELED });
}


async function completeBucket({ bucketId }: { bucketId: string }) {
  const bucket = await getBucketById({ bucketId });

  if (!bucket) {
    throw new Error("Bucket could not be found");
  }

  if([Bucket.Status.CANCELED, Bucket.Status.COMPLETED].includes(bucket.status)) {
    throw new Error("Bucket cannot be completed")
  }

  return await Bucket.query().patchAndFetchById(bucketId, { status: Bucket.Status.CANCELED });
};


// calculate bucket status based on unresolved logs


export default {
  // Queries
  getBucketById,
  getAllForUser,
  // Mutations
  createBucket,
  updateBucket,
  cancelBucket,
  completeBucket,
}