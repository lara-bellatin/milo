import { AuthContext } from "./interfaces";
import SequenceService from "../sequences/services/sequence_service";

const sequencesAPI = ({ user }: AuthContext) => ({
  getSequence: async ({ id }: { id: string }) => {
    return await SequenceService.getSequenceById({ sequenceId: id });
  },
  getSequences: async () => {
    return await SequenceService.getAllForUser({ userId: user.id });
  },

});


export { sequencesAPI };