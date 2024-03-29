import { ApolloServer } from "apollo-server-express";
import { makeExecutableSchema } from "@graphql-tools/schema";
import express from "express";
import { Model } from "objection";
import ExpressSession from "express-session";
import Redis from "ioredis";
import ConnectRedis from "connect-redis";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { v4 as uuidv4 } from "uuid";
import Knex from "knex";
import knexConfig from "./knexfile";

import typeDefs from "./src/graphql/schema";
import resolvers from "./src/graphql";
import passport from "passport";
import { buildAuthenticatedContext } from "./src/auth/utils";
import User from "./src/users/models/User";

import "./src/auth/passport_strategies";
import "dotenv/config";
import { buildContext } from "graphql-passport";


const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

export const apollo = new ApolloServer({
  schema,
  introspection: true,
  context: ({ req, res }) => {
    const baseCtx = {
      auth: buildContext({ req, res }),
    }

    const user = req.user as User | undefined;

    if (!user) {
      return baseCtx;
    }

    const authenticatedCtx = buildAuthenticatedContext({ user });
    
    return { ...baseCtx, ...authenticatedCtx };
  },
})


export function setupExpressApp(env: string) {
  const app = express();

  // Initialize DB conn
  // @ts-ignore
  const knex = Knex(knexConfig[env]);
  Model.knex(knex);

  const session: any = {
    name: "milo-sid",
    genid: () => uuidv4(),
    secret: process.env.SECRET || 'milo-secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      sameSite: "none",
      httpOnly: false,
      maxAge: 1000 * 60 * 60 * 24 * 365 * 7,
    },
  };


  if (process.env.NODE_ENV === "production") {
    const RedisStore = ConnectRedis(ExpressSession);
    const redisClient = new Redis(process.env.REDIS_URL!);

    session.cookie.secure = true;
    app.set("trust proxy", 1);

    session.store = new RedisStore({ client: redisClient });

    session.secret = process.env.SESSION_SECRET;
  } else {
    const RedisStore = ConnectRedis(ExpressSession);
    const redisClient = new Redis(process.env.REDIS_URL!);
    session.store = new RedisStore({ client: redisClient });
    session.secret = "milo-secret";
  }

  

  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(ExpressSession(session));
  app.use(passport.initialize());
  app.use(passport.session());

  return { app, knex };
}