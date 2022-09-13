import { nanoid } from "nanoid";
import Log from "../../logs/models/Log";
import LogService from "../../logs/services/log_services";
import Sequence from "../models/Sequence";


/*
 * * * * * *
 * Queries
 * * * * * *
 */

async function getSequenceById({ sequenceId }: { sequenceId: string }) {
  return await Sequence.query().findById(sequenceId)
    .withGraphFetched('[owner, bucket, logs]');
}

async function getAllForUser({ userId }: { userId: string }) {
  return await Sequence.query().where("userId", userId)
    .withGraphFetched('[owner, bucket, logs]');
}


/*
 * * * * * * *
 * Mutations
 * * * * * * *
 */

async function createSequence({
  userId,
  title,
  ordered,
  bucketId,
  logInput,
}: {
  userId: string;
  title: string;
  ordered: boolean;
  bucketId?: string;
  logInput: { 
    title: string;
    description?: string;
    type: Log.Type;
    preNotes?: string;
    dueDate?: string;
  }[];
}) {
  const sequence = await Sequence.query().insert({
    id: "seq_" + nanoid(),
    userId: userId,
    title: title,
    ordered: ordered,
    status: Sequence.Status.ACTIVE,
    bucketId: bucketId,
  });

  await Promise.all(
    logInput.map( async (logInput, index) => {
      return LogService.createLog({
        userId,
        title: logInput.title,
        description: logInput.description,
        type: logInput.type,
        preNotes: logInput.preNotes,
        dueDate: logInput.dueDate,
        bucketId: bucketId,
        sequenceId: sequence.id,
        sequenceOrder: index,
      });
    })
  );

  return sequence;
}

async function updateSequence({
  sequenceId,
  title,
  ordered,
}: {
  sequenceId: string;
  title?: string;
  ordered?: boolean;
}) {

  const sequence = await getSequenceById({ sequenceId });

  if (!sequence) {
    throw new Error("Sequence not found");
  }

  return await Sequence.query().patchAndFetchById(sequenceId, {
    title: title || sequence.title,
    ordered: ordered,
  })
}

async function cancelSequence({ sequenceId }: { sequenceId: string }) {
  const sequence = await getSequenceById({ sequenceId });

  if (!sequence) {
    throw new Error("Sequence not found")
  }

  return await Sequence.query().patchAndFetchById(sequenceId, {
    status: Sequence.Status.CANCELED,
  })
}

async function completeSequence({ sequenceId }: { sequenceId: string }) {
  const sequence = await getSequenceById({ sequenceId });

  if (!sequence) {
    throw new Error("Sequence not found")
  }

  return await Sequence.query().patchAndFetchById(sequenceId, {
    status: Sequence.Status.COMPLETED,
  })
}


export default {
  // Queries
  getSequenceById,
  getAllForUser,
  // Mutations,
  createSequence,
  updateSequence,
  cancelSequence,
  completeSequence,
}