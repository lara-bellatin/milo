import { AuthContext } from "./interfaces";
import UserService, { findUserById } from "../users/services/user_service";
import { CreateUserInput, UpdateUserInput } from "src/generated/graphql";

export const unauthenticatedUserAPI = () => ({
  createUser: async (input: CreateUserInput) => {
    return await UserService.createUser(input)
  }
})

const userAPI = ({ user }: AuthContext) => ({
  currentUser: async () => {
    return await findUserById(user.id);
  },
  updateUser: async (input: UpdateUserInput) => {
    return await UserService.updateUser(input);
  },
  deleteUser: async () => {
    return await UserService.deleteUser(user.id);
  }
})

export { userAPI }