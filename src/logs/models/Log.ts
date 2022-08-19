import { Model } from "objection";
import BaseModel from "../../utils/BaseModel";
import Sequence from "../../sequences/models/Sequence";
import Bucket from "../../buckets/models/Bucket";


class Log extends BaseModel {
    id!: string;
    title!: string;
    description: string;
    preNotes: string;
    postNotes: string;
    type!: Log.Type;
    status!: Log.Status;
    dueDate: string;
    resolvedAt: string;
    deletedAt: string;
    sequenceId: string;
    sequenceOrder: string;
    bucketId: string;

    // relations
    sequence: Sequence;
    bucket: Bucket;

    static get tableName() {
        return "logs";
      }
    
    static get relationMappings() {
        return {
            creator: {
                relation: Model.HasOneRelation,
                modelClass: Sequence,
                join: {
                    from: "logs.sequenceId",
                    to: "sequences.id",
                },
                },
                owner: {
                relation: Model.HasOneRelation,
                modelClass: Bucket,
                join: {
                    from: "logs.bucketId",
                    to: "buckets.id",
                },
            },
        };
    }

}

namespace Log {
    export enum Type {
        PLAN = "PLAN",
        DECISION = "DECISION",
        TASK = "TASK",
        WAIT = "WAIT",
        EVENT = "EVENT",
    }

    export enum Status {
        UNRESOLVED = "UNRESOLVED",
        RESOLVED = "RESOLVED",
        DELETED = "DELETED",
    }
}

export default Log;