import { Model } from "objection";
import BaseModel from "../../utils/BaseModel";
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
    logs: Log[];

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