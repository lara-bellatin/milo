import { AuthContext } from "./interfaces";

const logsAPI = ({ loginPassword }: AuthContext) => ({
  getLog: async ({ id }: { id: string }) => {
    return await LogService.getLogById({ logId: id });
  },
  getLogs: async () => {
    return await SplitService.getAllForUser({ userId: user.id });
  },

});