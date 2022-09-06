import { AuthContext } from "./interfaces";
import { CreateLogInput, UpdateLogInput } from "src/generated/graphql";
import LogService from "../logs/services/log_services";

const logsAPI = ({ user }: AuthContext) => ({
  getLog: async ({ id }: { id: string }) => {
    return await LogService.getLogById({ logId: id });
  },
  getLogs: async () => {
    return await LogService.getAllForUser({ userId: user.id });
  },
  createLog: async (input: CreateLogInput) => {
    return await LogService.createLog({ input });
  },
  updateLog: async (input: UpdateLogInput) => {
    return await LogService.updateLog({ input })
  }

});


export { logsAPI };


// type Query {
//   log(id: String!): Log
//   logs: [Log!]!
// }

// type Mutation {
//   createLog(input: CreateLogInput!): Log!
//   updateLog(input: UpdateLogInput!): Log!
//   deleteLog(id: String!): Log
//   resolveLog(id: String!): Log
//   unresolveLog(id: String!): Log
// }