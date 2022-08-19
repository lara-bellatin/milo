import { mergeResolvers } from "@graphql-tools/merge";

import logsResolvers from "./resolvers/logs";
import otherResolvers from "./resolvers/others";


export default mergeResolvers([logsResolvers, otherResolvers]);