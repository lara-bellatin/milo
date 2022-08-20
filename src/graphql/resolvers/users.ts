import { Context } from "../interfaces/resolvers";
import { CreateUserInput } from "../../generated/graphql";

export default {
  Query: {
  },
  Mutation: {
    createUser: async (_:any, input: CreateUserInput, ctx: Context) => {
      return await ctx.unauthenticatedAPIs?.userAPI.createUser(input);
    },
  },
};
