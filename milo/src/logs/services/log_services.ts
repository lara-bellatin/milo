import { nanoid } from "nanoid";
import Objection from "objection";
import { DateTime } from "luxon";

import Log from "../models/Log";
import { CreateLogInput, UpdateLogInput } from "src/generated/graphql";


/*
 * * * * * *
 * Queries
 * * * * * *
 */

async function getLogById({ logId }: { logId: string }) {
  return await Log.query().findById(logId)
    .withGraphFetched(["owner", "bucket", "sequence"]);
}


async function getAllForUser({ userId }: { userId: string }) {
  return await Log.query().where("userId", userId)
    .withGraphFetched(["owner", "bucket", "sequence"]);
}


/*
 * * * * * * *
 * Mutations
 * * * * * * *
 */


async function createLog({
  input,
  trx,
}: { 
  input: CreateLogInput;
  trx?: Objection.Transaction;
}) {

  const { title, description, type, preNotes, dueDate, sequenceId, bucketId } = input;

  const LogType = Log.Type[type as keyof typeof Log.Type];

  const logId = "log_" + nanoid();
  const log = await Log.query(trx).insert({
    id: logId,
    title: title,
    description: description || undefined,
    type: LogType,
    preNotes: preNotes || undefined,
    dueDate: dueDate || undefined,
    sequenceId: sequenceId || undefined,
    bucketId: bucketId || undefined,
  });

  return log;
};


async function updateLog({
  input,
  trx
}: {
  input: UpdateLogInput;
  trx?: Objection.Transaction;
}) {

  const log = await getLogById({ logId: input.id });

  if (!log) {
    throw new Error("Log not found");
  }

  const {title, description, preNotes, postNotes, type, dueDate, bucketId} = input;

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

  if (bucketId) {
    updatedFields.bucketId = bucketId;
  }

  return await Log.query(trx).patchAndFetchById(input.id, updatedFields);

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
}