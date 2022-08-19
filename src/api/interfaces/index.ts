import User from "../../users/models/User";

export interface AuthContext {
  user: User;
  loginUser: User;
  [key: string]: any;
}
