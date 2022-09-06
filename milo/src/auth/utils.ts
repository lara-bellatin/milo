import { AuthContext } from "../api/interfaces";
import { userAPI } from "../api/user_api";
import { bucketsAPI } from "../api/buckets_api";
import { sequencesAPI } from "../api/sequences_api";
import { logsAPI } from "../api/logs_api";


export function buildAuthenticatedContext({ user }: AuthContext) {
  return {
    user,
    apis: {
      userAPI: userAPI({ user }),
      bucketsAPI: bucketsAPI({ user }),
      sequencesAPI: sequencesAPI({ user }),
      logsAPI: logsAPI({ user }),
    },
  };
}
