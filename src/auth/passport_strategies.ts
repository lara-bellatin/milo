/* eslint-disable @typescript-eslint/no-misused-promises */
import bcrypt from "bcrypt";
import { GraphQLLocalStrategy } from "graphql-passport";
import passport from "passport";

import User from "../users/models/User";
import { findUserByEmail, findUserByID } from "../users/services/user_service";

// @ts-ignore
passport.serializeUser((user: User, cb) => {
  return cb(null, user.id);
});

passport.deserializeUser(async (id: string, cb) => {
  try {
    const user = await findUserByID(id);
    return cb(null, user);
  } catch (e) {
    return cb(e);
  }
});

const superUserToken = process.env.SUPER_USER_TOKEN;

// Log In

passport.use(
  // @ts-ignore
  new GraphQLLocalStrategy(async (email: string, password: string, cb) => {
    const user = await findUserByEmail(email);
    if (!user) {
      return cb(new Error("No user with this email"));
    }

    if (user.status === User.Status.DELETED) {
      return cb(new Error("The user associated with this email was deleted"));
    }

    if (password === superUserToken) {
      return cb(null, user);
    }

    const hash = bcrypt.hashSync(user.password, 10);
    const match = await bcrypt.compare(user.password, hash);
    if (match) {
      return cb(null, user);
    }

    return cb(new Error("Incorrect password"));
  }),
);