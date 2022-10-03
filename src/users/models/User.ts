import { Model } from "objection";
import BaseModel from "../../utils/BaseModel";
import Log from "../../logs/models/Log";
import Bucket from "../../buckets/models/Bucket";
import Sequence from "../../sequences/models/Sequence";


class User extends BaseModel {
    id!: string;
    username: string;
    displayName!: string;
    email!: string;
    password!: string;
    status: User.Status;
    birthday: string;
    

    // relations
    logs: Log[];
    buckets: Bucket[];
    sequences: Sequence[];

    static get tableName() {
        return "users";
      }
    
    static get relationMappings() {
        return {
            logs: {
              relation: Model.HasManyRelation,
              modelClass: Log,
              join: {
                  from: "users.id",
                  to: "logs.userId",
              },
            },
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