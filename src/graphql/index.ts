import { mergeResolvers } from "@graphql-tools/merge";

import logsResolvers from "./resolvers/logs";

export default mergeResolvers([logsResolvers]);