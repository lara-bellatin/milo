"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const BaseModel_1 = __importDefault(require("../../utils/BaseModel"));
const Sequence_1 = __importDefault(require("../../sequences/models/Sequence"));
const Log_1 = __importDefault(require("../../logs/models/Log"));
const User_1 = __importDefault(require("../../users/models/User"));
class Bucket extends BaseModel_1.default {
    static get tableName() {
        return "buckets";
    }
    static get relationMappings() {
        return {
            sequences: {
                relation: objection_1.Model.HasManyRelation,
                modelClass: Sequence_1.default,
                join: {
                    from: "buckets.id",
                    to: "sequences.bucketId",
                },
            },
            logs: {
                relation: objection_1.Model.HasManyRelation,
                modelClass: Log_1.default,
                join: {
                    from: "buckets.id",
                    to: "logs.bucketId",
                },
            },
            owner: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: User_1.default,
                join: {
                    from: "buckets.userId",
                    to: "users.id",
                }
            }
        };
    }
}
(function (Bucket) {
    let Type;
    (function (Type) {
        Type["AREA"] = "AREA";
        Type["PROJECT"] = "PROJECT";
    })(Type = Bucket.Type || (Bucket.Type = {}));
    let Status;
    (function (Status) {
        Status["NOT_STARTED"] = "NOT_STARTED";
        Status["IN_PROGRESS"] = "IN_PROGRESS";
        Status["WAITING"] = "WAITING";
        Status["PASSIVE"] = "PASSIVE";
        Status["COMPLETED"] = "COMPLETED";
        Status["CANCELED"] = "CANCELED";
    })(Status = Bucket.Status || (Bucket.Status = {}));
})(Bucket || (Bucket = {}));
exports.default = Bucket;
//# sourceMappingURL=Bucket.js.map