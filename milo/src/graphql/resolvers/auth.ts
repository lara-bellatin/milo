import UserService from "../../users/services/user_service";

const resolvers = {
  Query: {
    currentUser: (_: any, __: any, context: any) => {
      console.log("running current user")
      const user = context.user;
      console.log(user);
      return { user }
    }
  },
  Mutation: {
    login: async (_: any, { email, password }: { email: string, password: string }, context: any) => {
      const { user } = await context.authenticate('graphql-local', { email, password });
      await context.login(user);
      return { user };
    },
    logout: (_: any, __: any, context: any) => {
      context.logout();
      return true;
    },
    signup: async (_: any, { name, email, password }: { name: string, email: string, password: string }, context: any) => {
      const newUser = await UserService.createUser({ name, email, password });
      await context.login(newUser);
      return { user: newUser };
    },
  },
};
export default resolvers;