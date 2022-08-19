import { Args, Context, ResolverFn } from "../interfaces/resolvers";
import { PASSWORD } from "../../utils/constants"


export const ensureAuthenticated = (resolver: ResolverFn) => (parent: any, args: Args, context: Context, info: any) => {
  if (context.loginPassword === PASSWORD) {
    return resolver(parent, args, context, info);
  } else {
    throw new Error('Incorrect Password');
  }
};