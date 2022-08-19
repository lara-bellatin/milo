import { Model } from "objection";
import BaseModel from "../../utils/BaseModel";
import Bucket from "../../buckets/models/Bucket";
import Log from "../../logs/models/Log";


class Sequence extends BaseModel {
    id!: string;
    title!: string;
    status!: Sequence.Status;
    completedAt: string;
    bucketId: string;

    // relations
    bucket: Bucket;
    logs: Log;

    static get tableName() {
        return "sequences";
      }
    
    static get relationMappings() {
    return {
        creator: {
        relation: Model.HasOneRelation,
        modelClass: Bucket,
        join: {
            from: "sequences.bucketId",
            to: "buckets.id",
        },
        },
        owner: {
        relation: Model.HasManyRelation,
        modelClass: Log,
        join: {
            from: "sequences.id",
            to: "logs.sequenceId",
        },
        },
    };
    }

}

namespace Sequence {
    export enum Status {
        ACTIVE = "ACTIVE",
        COMPLETED = "COMPLETED",
        CANCELED = "CANCELED"
    }
}

export default Sequence;