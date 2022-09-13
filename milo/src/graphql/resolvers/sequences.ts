import { Args, Context } from "../interfaces/resolvers";
import { ensureAuthenticated } from "./auth";

export default {
  Query: {
    sequence: ensureAuthenticated(async (_:any, { sequenceId }: Args, context: Context) => {
      return await context.apis?.sequencesAPI.getSequence(sequenceId);
    }),
    sequences: ensureAuthenticated(async (_:any, __: any, context: Context) => {
      return await context.apis?.sequencesAPI.getSequences();
    }),
  },
  Mutation: {
    createSequence: ensureAuthenticated(async (_:any, { input }: Args, context: Context) => {
      return await context.apis?.sequencesAPI.createSequence(input);
    }),
    updateSequence: ensureAuthenticated(async (_:any, { input }: Args, context: Context) => {
      return await context.apis?.sequencesAPI.updateSequence(input);
    }),
    cancelSequence: ensureAuthenticated(async (_:any, { sequenceId }: Args, context: Context) => {
      return await context.apis?.sequencesAPI.cancelSequence(sequenceId);
    }),
    completeSequence: ensureAuthenticated(async (_:any, { sequenceId }: Args, context: Context) => {
      return await context.apis?.sequencesAPI.completeSequence(sequenceId);
    }),
  },
};