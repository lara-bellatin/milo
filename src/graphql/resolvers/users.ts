import { Context } from "../interfaces/resolvers";
import { ensureAuthenticated } from "./others";
import { CreateUserInput } from "../../generated/graphql";

export default {
  Query: {
  },
  Mutation: {
    createUser: async (_:any, input: CreateUserInput, ctx: Context) => {
      return await ctx.unauthenticatedAPIs?.userAPI.createUser(input);
    },
    updateUser: ensureAuthenticated(async (_, { input }, ctx: Context) => {
      return await ctx.apis?.userAPI.updateUser(input);
    }),
    deleteUser: ensureAuthenticated(async (_:any, { id }, ctx: Context) => {
      return await ctx.apis?.userAPI.deleteUSer(id);
    }),
  },
};
