import { Args, Context } from "../interfaces/resolvers";
import { ensureAuthenticated } from "./auth";

export default {
  Query: {
    bucket: ensureAuthenticated(async (_:any, { bucketId }: Args, context: Context) => {
      return await context.apis?.bucketsAPI.getBucket(bucketId);
    }),
    buckets: ensureAuthenticated(async (_:any, __: any, context: Context) => {
      return await context.apis?.bucketsAPI.getBuckets();
    }),
  },
  Mutation: {
    createBucket: ensureAuthenticated(async (_:any, { input }: Args, context: Context) => {
      return await context.apis?.bucketsAPI.createBucket(input);
    }),
    updateBucket: ensureAuthenticated(async (_:any, { input }: Args, context: Context) => {
      return await context.apis?.bucketsAPI.updateBucket(input);
    }),
    completeBucket: ensureAuthenticated(async (_:any, { bucketId }: Args, context: Context) => {
      return await context.apis?.bucketsAPI.completeBucket(bucketId);
    }),
    cancelBucket: ensureAuthenticated(async (_:any, { bucketId }: Args, context: Context) => {
      return await context.apis?.bucketsAPI.cancelBucket(bucketId);
    }),
  },
};