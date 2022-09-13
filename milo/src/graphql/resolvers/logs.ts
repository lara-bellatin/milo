import { Args, Context } from "../interfaces/resolvers";
import { ensureAuthenticated } from "./auth";

export default {
  Query: {
    log: ensureAuthenticated(async (_:any, { input }: Args, context: Context) => {
      return await context.apis?.logsAPI.getLog(input);
    }),
    logs: ensureAuthenticated(async (_:any, { input }: Args, context: Context) => {
      return await context.apis?.logsAPI.getLogs(input);
    }),
  },
  Mutation: {
    createLog: ensureAuthenticated(async (_:any, { input }: Args, context: Context) => {
      return await context.apis?.logsAPI.createLog(input);
    }),
    updateLog: ensureAuthenticated(async (_:any, { input }: Args, context: Context) => {
      return await context.apis?.logsAPI.updateLog(input);
    }),
    deleteLog: ensureAuthenticated(async (_:any, { input }: Args, context: Context) => {
      return await context.apis?.logsAPI.deleteLog(input);
    }),
    resolveLog: ensureAuthenticated(async (_:any, { input }: Args, context: Context) => {
      return await context.apis?.logsAPI.resolveLog(input);
    }),
    unresolveLog: ensureAuthenticated(async (_:any, { input }: Args, context: Context) => {
      return await context.apis?.logsAPI.unresolveLog(input);
    }),
    addLogToBucket: ensureAuthenticated(async (_:any, { input }: Args, context: Context) => {
      return await context.apis?.logsAPI.addLogToBucket(input);
    }),
    addLogToSequence: ensureAuthenticated(async (_:any, { input }: Args, context: Context) => {
      return await context.apis?.logsAPI.addLogToSequence(input);
    }),
  },
};