import { Args, Context, ResolverFn } from "../interfaces/resolvers";
import { clearActingUserIdCookie } from "../../auth/utils";


export const ensureAuthenticated = (resolver: ResolverFn) => (parent: any, args: Args, context: Context, info: any) => {
  console.log(context);
  if (context.user) {
    return resolver(parent, args, context, info);
  } else {
    throw new Error('Unauthorized');
  }
};

export default {
  Query: {
    me: ensureAuthenticated(async (_, __, ctx) => {
      return { ...ctx.user };
    }),
    loginUser: ensureAuthenticated(async (_, __, ctx) => {
      return { ...ctx.loginUser };
    }),
  },

  Mutation: {
    login: async (_: any, { email, password }: Args, ctx: Context) => {
      const formattedEmail = email.trim().toLowerCase();
      const { user } = await ctx.unauthenticatedAPIs.passport.authenticate("graphql-local", {
        email: formattedEmail,
        password: password,
      });
      ctx.unauthenticatedAPIs.passport.login(user);
      return { user };
    },
    logout: async (_: any, __: any, ctx: Context) => {
      clearActingUserIdCookie(ctx.unauthenticatedAPIs.passport.res);
      ctx.unauthenticatedAPIs.passport.logout();
      return true;
    },
  }
}