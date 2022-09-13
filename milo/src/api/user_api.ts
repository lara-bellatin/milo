import { AuthContext } from "./interfaces";
import UserService, { findUserById } from "../users/services/user_service";

export const unauthenticatedUserAPI = () => ({
  createUser: async (input: any) => {
    return await UserService.createUser(input)
  }
})

const userAPI = ({ user }: AuthContext) => ({
  currentUser: async () => {
    return await findUserById(user.id);
  },
  updateUser: async (input: any) => {
    return await UserService.updateUser(input);
  },
  deleteUser: async () => {
    return await UserService.deleteUser(user.id);
  }
})

export { userAPI }