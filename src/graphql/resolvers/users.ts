import { Args, Context } from "../interfaces/resolvers";
import { ensureAuthenticated } from "./auth";

export default {
  Mutation: {
    updateUser: ensureAuthenticated(async (_:any, { input }: Args, context: Context) => {
      return await context.apis?.userAPI.updateUser(input);
    }),
    deleteUser: async (_:any, __:any, context: any) => {
      return await context.unauthenticatedAPIs.userAPI.deleteUser();
    }
  },
};