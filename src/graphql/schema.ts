import { mergeTypeDefs } from "@graphql-tools/merge";

import logs from "./schema/logs";

// add more schemas and add them to mergeTypeDefs, if a general schema is necessary, add it here and merge with typeDefs

export default mergeTypeDefs([logs])