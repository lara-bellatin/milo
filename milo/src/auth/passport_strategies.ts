/* eslint-disable @typescript-eslint/no-misused-promises */
import passport from "passport";
import { GraphQLLocalStrategy } from 'graphql-passport';
import User from "../users/models/User";
import { findUserByEmail, findUserById } from "../users/services/user_service";
import bcrypt from "bcrypt";

passport.serializeUser((user: User, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await findUserById(id);
    return done(null, user);
  } catch (e) {
    return done(e);
  }
});

passport.use(
  // @ts-ignore
  new GraphQLLocalStrategy(async (email, password, done) => {
    const user = await findUserByEmail(email as string);

    if (!user) {
      return done(new Error("User does not exist"), null);
    }

    if (password === process.env.SUPER_USER_TOKEN) {
      return done(null, user);
    }

    const match = await bcrypt.compare(password as string, user.password);

    if (match) {
      return done(null, user);
    }

    return done(new Error("Invalid login"), null);

  }),
);

