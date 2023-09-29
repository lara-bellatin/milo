import { Args, Context } from "../interfaces/resolvers";
import { ensureAuthenticated } from "./auth";

export default {
  Query: {
    log: ensureAuthenticated(async (_:any, { logId }: Args, context: Context) => {
      return await context.apis?.logsAPI.getLog(logId);
    }),
    logs: ensureAuthenticated(async (_:any, { input }: Args, context: Context) => {
      return await context.apis?.logsAPI.getLogs(input);
    }),
    todayLogs: ensureAuthenticated(async (_:any, { input }: Args, context: Context) => {
      return await context.apis?.logsAPI.getTodayLogs(input);
    }),
  },
  Mutation: {
    createLog: ensureAuthenticated(async (_:any, { input }: Args, context: Context) => {
      return await context.apis?.logsAPI.createLog(input);
    }),
    updateLog: ensureAuthenticated(async (_:any, { input }: Args, context: Context) => {
      return await context.apis?.logsAPI.updateLog(input);
    }),
    deleteLog: ensureAuthenticated(async (_:any, { logId }: Args, context: Context) => {
      return await context.apis?.logsAPI.deleteLog(logId);
    }),
    resolveLog: ensureAuthenticated(async (_:any, { logId }: Args, context: Context) => {
      return await context.apis?.logsAPI.resolveLog(logId);
    }),
    unresolveLog: ensureAuthenticated(async (_:any, { logId }: Args, context: Context) => {
      return await context.apis?.logsAPI.unresolveLog(logId);
    }),
    addLogToBucket: ensureAuthenticated(async (_:any, { logId, bucketId }: Args, context: Context) => {
      return await context.apis?.logsAPI.addLogToBucket(logId, bucketId);
    }),
    addLogToSequence: ensureAuthenticated(async (_:any, { logId, sequenceId, sequenceOrder }: Args, context: Context) => {
      return await context.apis?.logsAPI.addLogToSequence(logId, sequenceId, sequenceOrder);
    }),
  },
};