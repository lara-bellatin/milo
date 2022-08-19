import { mergeTypeDefs } from "@graphql-tools/merge";
import { gql } from "apollo-server-express";

import logs from "./schema/logs";
import sequences from "./schema/sequences";
import buckets from "./schema/buckets";

const schema = gql`
  ## SCALARS
  scalar JSON


  type Query {
    login(password: String!): Boolean
    logout: Boolean
  }
`


export default mergeTypeDefs([schema, logs, sequences, buckets])