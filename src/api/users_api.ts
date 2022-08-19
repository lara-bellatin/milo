
// import User from "../users/models/User";
import { findUserByID } from "../users/services/user_service";
// import {  UserUpdateInput } from "../generated/graphql";
import { AuthContext } from "./interfaces";

const usersAPI = ({ user }: AuthContext) => ({
  currentUser: async () => {
    return await findUserByID(user.id);
  },
  // updateUserInformation: async (input: UserUpdateInput) => {
  //   return await UserService.updateUserProfile(input);
  // },
  getUserById: async (userId: string) => {
    if (user.id === userId) return user;
    return await findUserByID(userId);
  },
});

export { usersAPI };
