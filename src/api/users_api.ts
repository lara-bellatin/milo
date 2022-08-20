
// import User from "../users/models/User";
import UserService, { findUserByID } from "../users/services/user_service";
import {  CreateUserInput } from "../generated/graphql";
import { AuthContext } from "./interfaces";

const unauthenticatedUserAPI = {
  createUser: async ({ input }: { input: CreateUserInput }) => {
    return await UserService.createUser({ input })
  },
}

const userAPI = ({ user }: AuthContext) => ({
  currentUser: async () => {
    return await findUserByID(user.id);
  },
  getUserById: async (userId: string) => {
    if (user.id === userId) return user;
    return await findUserByID(userId);
  },
});

export { userAPI, unauthenticatedUserAPI };
