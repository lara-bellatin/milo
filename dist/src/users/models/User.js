"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const BaseModel_1 = __importDefault(require("../../utils/BaseModel"));
const Log_1 = __importDefault(require("../../logs/models/Log"));
const Bucket_1 = __importDefault(require("../../buckets/models/Bucket"));
const Sequence_1 = __importDefault(require("../../sequences/models/Sequence"));
class User extends BaseModel_1.default {
    static get tableName() {
        return "users";
    }
    static get relationMappings() {
        return {
            logs: {
                relation: objection_1.Model.HasManyRelation,
                modelClass: Log_1.default,
                join: {
                    from: "users.id",
                    to: "logs.userId",
                },
            },
            buckets: {
                relation: objection_1.Model.HasManyRelation,
                modelClass: Bucket_1.default,
                join: {
                    from: "users.id",
                    to: "buckets.userId",
                },
            },
            sequences: {
                relation: objection_1.Model.HasManyRelation,
                modelClass: Sequence_1.default,
                join: {
                    from: "users.id",
                    to: "sequences.userId",
                },
            },
        };
    }
}
(function (User) {
    let Status;
    (function (Status) {
        Status["ACTIVE"] = "ACTIVE";
        Status["DELETED"] = "DELETED";
    })(Status = User.Status || (User.Status = {}));
})(User || (User = {}));
exports.default = User;
//# sourceMappingURL=User.js.map