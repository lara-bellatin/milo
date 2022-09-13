import { AuthContext } from "./interfaces";
import BucketService from "../buckets/services/bucket_service";

const bucketsAPI = ({ user }: AuthContext) => ({
  getBucket: async (bucketId: string) => {
    return await BucketService.getBucketById({ bucketId });
  },
  getBuckets: async () => {
    return await BucketService.getAllForUser({ userId: user.id });
  },
  createBucket: async(input: any) => {
    return await BucketService.createBucket({ ...input, userId: user.id });
  },
  updateBucket: async(input: any) => {
    return await BucketService.updateBucket(input);
  },
  completeBucket: async(bucketId: string) => {
    return await BucketService.completeBucket({ bucketId });
  },
  cancelBucket: async(bucketId: string) => {
    return await BucketService.cancelBucket({ bucketId });
  }

});


export { bucketsAPI };