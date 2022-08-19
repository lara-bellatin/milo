"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupExpressApp = exports.apollo = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const schema_1 = require("@graphql-tools/schema");
const express_1 = __importDefault(require("express"));
const graphql_1 = __importDefault(require("./src/graphql"));
const schema_2 = __importDefault(require("./src/graphql/schema"));
const schema = (0, schema_1.makeExecutableSchema)({
    typeDefs: schema_2.default,
    resolvers: graphql_1.default,
});
exports.apollo = new apollo_server_express_1.ApolloServer({
    schema
});
function setupExpressApp() {
    const app = (0, express_1.default)();
    return app;
}
exports.setupExpressApp = setupExpressApp;
