"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const BaseModel_1 = __importDefault(require("../../utils/BaseModel"));
const Sequence_1 = __importDefault(require("../../sequences/models/Sequence"));
const Bucket_1 = __importDefault(require("../../buckets/models/Bucket"));
const User_1 = __importDefault(require("../../users/models/User"));
class Log extends BaseModel_1.default {
    static get tableName() {
        return "logs";
    }
    static get relationMappings() {
        return {
            sequence: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: Sequence_1.default,
                join: {
                    from: "logs.sequenceId",
                    to: "sequences.id",
                },
            },
            bucket: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: Bucket_1.default,
                join: {
                    from: "logs.bucketId",
                    to: "buckets.id",
                },
            },
            creator: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: User_1.default,
                join: {
                    from: "logs.userId",
                    to: "users.id",
                },
            }
        };
    }
}
(function (Log) {
    let Type;
    (function (Type) {
        Type["PLAN"] = "PLAN";
        Type["DECISION"] = "DECISION";
        Type["TASK"] = "TASK";
        Type["WAIT"] = "WAIT";
        Type["EVENT"] = "EVENT";
    })(Type = Log.Type || (Log.Type = {}));
    let Status;
    (function (Status) {
        Status["UNRESOLVED"] = "UNRESOLVED";
        Status["RESOLVED"] = "RESOLVED";
        Status["DELETED"] = "DELETED";
    })(Status = Log.Status || (Log.Status = {}));
})(Log || (Log = {}));
exports.default = Log;
//# sourceMappingURL=Log.js.map