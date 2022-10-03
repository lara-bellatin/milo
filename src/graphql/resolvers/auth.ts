import UserService from "../../users/services/user_service";
import { Args, Context, ResolverFn } from "../interfaces/resolvers";

export const ensureAuthenticated = (resolver: ResolverFn) => (parent: any, args: Args, context: Context, info: any) => {
  if (context.user) {
    return resolver(parent, args, context, info);
  } else {
    throw new Error('Unauthorized');
  }
};

export default {
  Query: {
    currentUser: (_: any, __: any, context: any) => {
      return { ...context.user };
    }
  },
  Mutation: {
    login: async (_: any, { email, password }: { email: string, password: string }, context: Context) => {
      const { user } = await context.auth.authenticate('graphql-local', { email, password });
      await context.auth.login(user);
      return { user };
    },
    logout: (_: any, __: any, context: any) => {
      context.auth.logout();
      return true;
    },
    createUser: async (_: any, { input }: Args, context: Context) => {
      const user = await UserService.createUser(input);
      context.auth.login(user);
      return { user };
    }
  },
};