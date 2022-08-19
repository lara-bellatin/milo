import { AuthContext } from "./interfaces";
import LogService from "../logs/services/log_service";

const logsAPI = ({ user }: AuthContext) => ({
  getLog: async ({ id }: { id: string }) => {
    return await LogService.getLogById({ logId: id });
  },
  getLogs: async () => {
    return await LogService.getAllForUser({ userId: user.id });
  },

});


export { logsAPI };