import { mergeTypeDefs } from "@graphql-tools/merge";

import users from "./schema/users";
import logs from "./schema/logs";
import buckets from "./schema/buckets";
import sequences from "./schema/sequences";

export default mergeTypeDefs([users, logs, buckets, sequences]);