import { Model } from "objection";
import BaseModel from "../../utils/BaseModel";
import Sequence from "../../sequences/models/Sequence";
import Log from "../../logs/models/Log";
import User from "../../users/models/User";


class Bucket extends BaseModel {
    id!: string;
    title!: string;
    description: string;
    type!: Bucket.Type;
    status!: Bucket.Status;
    dueDate: string;
    completedAt: string;
    canceledAt: string;
    userId: string;

    // relations
    sequences: Sequence[];
    logs: Log[];
    owner: User;

    static get tableName() {
        return "buckets";
      }
    
    static get relationMappings() {
        return {
            sequences: {
                relation: Model.HasManyRelation,
                modelClass: Sequence,
                join: {
                    from: "buckets.id",
                    to: "sequences.bucketId",
                },
            },
            logs: {
                relation: Model.HasManyRelation,
                modelClass: Log,
                join: {
                    from: "buckets.id",
                    to: "logs.bucketId",
                },
            },
            owner: {
                relation: Model.HasOneRelation,
                modelClass: User,
                join: {
                    from: "buckets.userId",
                    to: "users.id",
                }
            }
        };
    }

}

namespace Bucket {
    export enum Type {
        AREA = "AREA",
        PROJECT = "PROJECT"
    }

    export enum Status {
        NOT_STARTED = "NOT_STARTED", // no logs, no tasks, no plans
        IN_PROGRESS = "IN_PROGRESS", // actions are taking place
        WAITING = "WAITING", // waiting on external factor to continue
        PASSIVE = "PASSIVE", // no action needs to be taken
        COMPLETED = "COMPLETED",
        CANCELED = "CANCELED",
    }
}

export default Bucket;