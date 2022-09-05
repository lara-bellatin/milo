import { Model } from "objection";
import BaseModel from "../../utils/BaseModel";
import User from "../../users/models/User";


class Log extends BaseModel {
    id!: string;
    title!: string;
    description: string;
    // preNotes: string;
    // postNotes: string;
    // type!: Log.Type;
    // status!: Log.Status;
    // dueDate: string;
    // resolvedAt: string;
    // deletedAt: string;
    // sequenceId: string;
    // sequenceOrder: string;
    // bucketId: string;
    userId: string;

    // relations
    owner: User;

    static get tableName() {
        return "logs";
      }
    
    static get relationMappings() {
        return {
            creator: {
                relation: Model.HasOneRelation,
                modelClass: User,
                join: {
                    from: "logs.userId",
                    to: "users.id",
                },
            }
        };
    }

}

// namespace Log {
//     export enum Type {
//         PLAN = "PLAN",
//         DECISION = "DECISION",
//         TASK = "TASK",
//         WAIT = "WAIT",
//         EVENT = "EVENT",
//         PIN = "PIN",
//     }

//     export enum Status {
//         UNRESOLVED = "UNRESOLVED",
//         RESOLVED = "RESOLVED",
//         DELETED = "DELETED",
//     }
// }

export default Log;