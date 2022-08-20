import { mergeResolvers } from "@graphql-tools/merge";

import userResolvers from "./resolvers/users";
import logsResolvers from "./resolvers/logs";
import otherResolvers from "./resolvers/others";


export default mergeResolvers([userResolvers, logsResolvers, otherResolvers]);