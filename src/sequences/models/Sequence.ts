import { Model } from "objection";
import BaseModel from "../../utils/BaseModel";
import Bucket from "../../buckets/models/Bucket";
import Log from "../../logs/models/Log";
import User from "../../users/models/User";


class Sequence extends BaseModel {
    id!: string;
    title!: string;
    status!: Sequence.Status;
    completedAt: string;
    canceledAt: string;
    bucketId: string;
    userId: string;

    // relations
    bucket: Bucket;
    logs: Log[];
    owner: User;

    static get tableName() {
        return "sequences";
      }
    
    static get relationMappings() {
    return {
        bucket: {
            relation: Model.HasOneRelation,
            modelClass: Bucket,
            join: {
                from: "sequences.bucketId",
                to: "buckets.id",
            },
        },
        logs: {
            relation: Model.HasManyRelation,
            modelClass: Log,
            join: {
                from: "sequences.id",
                to: "logs.sequenceId",
            },
        },
        owner: {
            relation: Model.HasOneRelation,
            modelClass: User,
            join: {
                from: "sequences.userId",
                to: "users.id",
            }
        }
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