import User from "../../users/models/User";

export interface AuthContext {
  user: User;
  [key: string]: any;
}
