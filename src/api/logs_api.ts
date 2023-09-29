import { AuthContext } from "./interfaces";
import LogService from "../logs/services/log_services";

const logsAPI = ({ user }: AuthContext) => ({
  getLog: async (logId: string) => {
    return await LogService.getLogById({ logId });
  },
  getLogs: async () => {
    return await LogService.getAllForUser({ userId: user.id });
  },
  getTodayLogs: async () => {
    return await LogService.getTodayLogs({ userId: user.id });
  },
  createLog: async (input: any) => {
    return await LogService.createLog({ userId: user.id, ...input });
  },
  updateLog: async (input: any) => {
    return await LogService.updateLog(input);
  },
  resolveLog: async(logId: string) => {
    return await LogService.resolveLog({ logId });
  },
  unresolveLog: async(logId: string) => {
    return await LogService.unresolveLog({ logId });
  },
  deleteLog: async(logId: string) => {
    return await LogService.deleteLog({ logId });
  },
  addLogToBucket: async(logId: string, bucketId: string) => {
    return await LogService.addLogToBucket({ logId, bucketId });
  },
  addLogToSequence: async(logId: string, sequenceId: string, sequenceOrder?: number) => {
    return await LogService.addLogToSequence({ logId, sequenceId, sequenceOrder });
  }

});


export { logsAPI };