import { ApolloServer } from "apollo-server-express";
import { makeExecutableSchema } from "@graphql-tools/schema";
import ConnectRedis from "connect-redis";
import cookieParser from "cookie-parser";
import Redis from "ioredis";
import express from "express";
import { buildContext } from "graphql-passport";
import passport from "passport";
import ExpressSession from "express-session";
import Knex from "knex";
import { Model } from "objection";
import knexConfig from "./knexfile";
import "dotenv/config"

import resolvers from "./src/graphql";
import typeDefs from "./src/graphql/schema";
import { PRODUCTION } from "./src/utils/constants";
import { buildAuthenticatedContex } from "./src/auth/utils";
import User from "./src/users/models/User";
import { unauthenticatedUserAPI } from "./src/api/users_api";
import "./src/auth/passport_strategies";


const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

export const apollo = new ApolloServer({
    schema,
    context: async ({ req, res }) => {
        const baseCtx = {
          unauthenticatedAPIs: {
            userAPI: unauthenticatedUserAPI,
            passport: buildContext({ req, res }),
          },
          origin: req.headers.origin as string,
          ipAddress: req.ip,
        };
    
        let user = req.user as User | undefined;
    
        if (!user) {
          return baseCtx;
        }
    
        const loginUser = req.user as User;
    
        const authenticatedCtx = buildAuthenticatedContex({ user, loginUser });
    
        return { ...baseCtx, ...authenticatedCtx };
      },
});


// function ensureInternallyAuthenticated(req: Request, res: Response, next: NextFunction) {
//   // Don't authenticate locally
//   if (process.env.NODE_ENV === DEVELOPMENT || process.env.NODE_ENV === TEST) {
//     next();
//     return;
//   }

//   // If no user in session, return page not found error
//   if (!req.user) {
//     return res.status(404).send();
//   }

//   const user = req.user as User;

//   // If use is not me, return 404
//   if (user.email !== ("lara.bellatin@gmail.com")) {
//     return res.status(404).send();
//   }

//   // Authenticated user is valid
//   next();
//   return;
// }


export function setupExpressApp(env: string) {
  const app = express();

  // // Initialize DB conn
  // // @ts-ignore
  const knex = Knex(knexConfig[env]);
  Model.knex(knex);

  const session: any = {
    name: "milo-sid",
    resave: false,
    saveUninitialized: false,
    cookie: {},
  };

  if (process.env.NODE_ENV === PRODUCTION) {
    const RedisStore = ConnectRedis(ExpressSession);
    const redisClient = new Redis({ host: process.env.REDIS_HOST, port: parseInt(process.env.REDIS_PORT || '') });

    session.cookie.secure = true;
    app.set("trust proxy", 1);

    session.store = new RedisStore({ client: redisClient });

    session.secret = process.env.SESSION_SECRET;
  } else {
    const RedisStore = ConnectRedis(ExpressSession);
    const redisClient = new Redis({ host: process.env.REDIS_HOST, port: parseInt(process.env.REDIS_PORT || '') });
    session.store = new RedisStore({ client: redisClient });
    session.secret = "milo-secret";
  }

  app.use(cookieParser());
  app.use(ExpressSession(session));
  app.use(passport.initialize());
  app.use(passport.session());

  return { app, knex };
}