import { Model } from "objection";
import BaseModel from "../../utils/BaseModel";
import Bucket from "../../buckets/models/Bucket";
import Sequence from "../../sequences/models/Sequence";
import Log from "../../logs/models/Log";


class User extends BaseModel {
    id!: string;
    username: string;
    displayName!: string;
    email!: string;
    password!: string;
    status: User.Status;
    birthday: string;
    

    // relations
    buckets: Bucket[];
    sequences: Sequence[];
    logs: Log[];

    static get tableName() {
        return "users";
      }
    
    static get relationMappings() {
        return {
            buckets: {
                relation: Model.HasManyRelation,
                modelClass: Bucket,
                join: {
                    from: "users.id",
                    to: "buckets.userId",
                },
            },
            sequences: {
              relation: Model.HasManyRelation,
              modelClass: Sequence,
              join: {
                  from: "users.id",
                  to: "sequences.userId",
              },
            },
            logs: {
              relation: Model.HasManyRelation,
              modelClass: Log,
              join: {
                  from: "users.id",
                  to: "logs.userId",
              },
            },
        };
    }

}

namespace User {
    export enum Status {
        ACTIVE = "ACTIVE",
        DELETED = "DELETED",
    }
}

export default User;