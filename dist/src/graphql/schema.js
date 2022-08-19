"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("@graphql-tools/merge");
const apollo_server_express_1 = require("apollo-server-express");
const logs_1 = __importDefault(require("./schema/logs"));
const sequences_1 = __importDefault(require("./schema/sequences"));
const buckets_1 = __importDefault(require("./schema/buckets"));
const schema = (0, apollo_server_express_1.gql) `
  ## SCALARS
  scalar JSON


  type Query {
    login(password: String!): Boolean
    logout: Boolean
  }
`;
exports.default = (0, merge_1.mergeTypeDefs)([schema, logs_1.default, sequences_1.default, buckets_1.default]);
