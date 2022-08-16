import { ApolloServer } from "apollo-server-express";
import { makeExecutableSchema } from "@graphql-tools/schema";
import express, { NextFunction, Request, Response } from "express";
import resolvers from "./src/graphql";
import typeDefs from "./src/graphql/schema";


const forceHTTPS = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        next();
    };
  };


const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

export const apollo = new ApolloServer({
    schema
});

export function setupExpressApp() {
    const app = express();

    app.use(forceHTTPS());

    return app;
}