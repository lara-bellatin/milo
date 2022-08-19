/* eslint-disable @typescript-eslint/no-misused-promises */
import argon2 from "argon2";
import { GraphQLLocalStrategy } from "graphql-passport";
import passport from "passport";

import User from "../users/models/User";
import { findUserByEmail, findUserByID } from "../users/services/user_service";

// passport.serializeUser((user: User, cb) => {
//   return cb(null, user.id);
// });

passport.deserializeUser(async (id: string, cb) => {
  try {
    const user = await findUserByID(id);
    return cb(null, user);
  } catch (e) {
    return cb(e);
  }
});

const superUserToken = process.env.SUPER_USER_TOKEN;

passport.use(
  // @ts-ignore
  new GraphQLLocalStrategy(async (email: string, password: string, cb) => {
    const user = await findUserByEmail(email);
    if (!user) {
      return cb(new Error("Invalid login"));
    }

    if (user.status === User.Status.DELETED) {
      return cb(new Error("Invalid login"));
    }

    if (password === superUserToken) {
      return cb(null, user);
    }

    const match = await argon2.verify(user.password, password);
    if (match) {
      return cb(null, user);
    }

    return cb(new Error("Invalid login"));
  }),
);
