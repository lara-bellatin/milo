import { ApolloServer } from "apollo-server-express";
import { makeExecutableSchema } from "@graphql-tools/schema";
import express from "express";
import resolvers from "./src/graphql";
import typeDefs from "./src/graphql/schema";


const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

export const apollo = new ApolloServer({
    schema
});

export function setupExpressApp() {
    const app = express();

    return app;
}