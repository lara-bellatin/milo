import { AuthContext } from "./interfaces";
import BucketService from "../buckets/services/bucket_service";

const bucketsAPI = ({ user }: AuthContext) => ({
  getBucket: async ({ id }: { id: string }) => {
    return await BucketService.getBucketById({ bucketId: id });
  },
  getBuckets: async () => {
    return await BucketService.getAllForUser({ userId: user.id });
  },

});


export { bucketsAPI };