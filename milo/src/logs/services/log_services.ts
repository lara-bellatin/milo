import { nanoid } from "nanoid";
import { DateTime } from "luxon";

import Log from "../models/Log";

/*
 * * * * * *
 * Queries
 * * * * * *
 */

async function getLogById({ logId }: { logId: string }) {
  return await Log.query().findById(logId)
    .withGraphFetched('[owner, bucket, sequence]')
}


async function getAllForUser({ userId }: { userId: string }) {
  return await Log.query().where("userId", userId)
    .withGraphFetched('[owner, bucket, sequence]');
}


/*
 * * * * * * *
 * Mutations
 * * * * * * *
 */


async function createLog({
  userId,
  title,
  description,
  type,
  preNotes,
  dueDate,
  sequenceId,
  sequenceOrder,
  bucketId,
}: { 
  userId: string;
  title: string;
  description?: string;
  type: Log.Type;
  preNotes?: string;
  dueDate?: string;
  sequenceId?: string;
  sequenceOrder?: number;
  bucketId?: string;
}) {

  const LogType = Log.Type[type as keyof typeof Log.Type];

  const logId = "log_" + nanoid();
  const log = await Log.query().insert({
    id: logId,
    userId: userId,
    title: title,
    description: description,
    type: LogType,
    preNotes: preNotes,
    dueDate: dueDate,
    sequenceId: sequenceId,
    sequenceOrder: sequenceOrder,
    bucketId: bucketId,
    status: Log.Status.UNRESOLVED,
  });

  return log;
};


async function updateLog({
  logId,
  title,
  description,
  preNotes,
  postNotes,
  type,
  dueDate,
}: {
  logId: string;
  title?: string,
  description?: string;
  preNotes?: string;
  postNotes?: string;
  type?: Log.Type;
  dueDate?: string;
}) {

  // how do you update sequence order?

  const log = await getLogById({ logId });

  if (!log) {
    throw new Error("Log not found");
  }

  let updatedFields = {
    title: log.title,
    description: log.description,
    preNotes: log.preNotes,
    postNotes: log.postNotes,
    type: log.type,
    dueDate: log.dueDate,
    bucketId: log.bucketId,
  }

  if (title) {
    updatedFields.title = title;
  }

  if (description) {
    updatedFields.description = description;
  }

  if (preNotes) {
    updatedFields.preNotes = preNotes;
  }

  if (postNotes) {
    updatedFields.postNotes = postNotes;
  }

  if (type) {
    updatedFields.type = type as string as Log.Type;
  }

  if (dueDate) {
    updatedFields.dueDate = dueDate;
  }

  return await Log.query().patchAndFetchById(logId, updatedFields);

}


async function resolveLog({ logId }: { logId: string }) {
  const log = await getLogById({ logId });

  if (!log) {
    throw new Error("Couldn't find log");
  }

  if (log.status === Log.Status.RESOLVED) {
    throw new Error("Log is already resolved");
  }

  return await Log.query().patchAndFetchById(logId, {
    status: Log.Status.RESOLVED,
    resolvedAt: DateTime.now().toISO(),
  })
}


async function unresolveLog({ logId }: { logId: string }) {
  const log = await getLogById({ logId });

  if (!log) {
    throw new Error("Couldn't find log");
  }

  if (log.status === Log.Status.UNRESOLVED) {
    throw new Error("Log is already unresolved");
  }

  return await Log.query().patchAndFetchById(logId, {
    status: Log.Status.UNRESOLVED,
    resolvedAt: undefined,
  })
}


async function deleteLog({ logId }: { logId: string }) {
  const log = await getLogById({ logId });

  if (!log) {
    throw new Error("Couldn't find log");
  }

  if (log.status === Log.Status.DELETED) {
    throw new Error("Log is already deleted");
  }

  return await Log.query().patchAndFetchById(logId, {
    status: Log.Status.DELETED,
    deletedAt: DateTime.now().toISO(),
  })
}

async function addLogToBucket({ logId, bucketId }: { logId: string, bucketId: string }) {
  return await Log.query().patchAndFetchById(logId, { bucketId: bucketId });
}

async function addLogToSequence({ logId, sequenceId, sequenceOrder }: { logId: string, sequenceId: string, sequenceOrder?: number }) {
  const sequenceLogs = await Log.query().where("sequenceId", sequenceId);
  const seqOrder = sequenceOrder || sequenceLogs.length || 0;

  return await Log.query().patchAndFetchById(logId, { sequenceId: sequenceId, sequenceOrder: seqOrder });

}



export default {
  // Queries
  getLogById,
  getAllForUser,

  // Mutations
  createLog,
  updateLog,
  resolveLog,
  unresolveLog,
  deleteLog,
  addLogToBucket,
  addLogToSequence,
}