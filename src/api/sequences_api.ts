import { AuthContext } from "./interfaces";
import SequenceService from "../sequences/services/sequence_service";

const sequencesAPI = ({ user }: AuthContext) => ({
  getSequence: async (sequenceId: string) => {
    return await SequenceService.getSequenceById({ sequenceId });
  },
  getSequences: async () => {
    return await SequenceService.getAllForUser({ userId: user.id });
  },
  createSequence: async (input: any) => {
    return await SequenceService.createSequence({ ...input, userId: user.id});
  },
  updateSequence: async (input: any) => {
    return await SequenceService.updateSequence(input);
  },
  cancelSequence: async (sequenceId: string) => {
    return await SequenceService.cancelSequence({ sequenceId });
  },
  completeSequence: async (sequenceId: string) => {
    return await SequenceService.completeSequence({ sequenceId });
  },

});


export { sequencesAPI };