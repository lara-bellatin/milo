"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const BaseModel_1 = __importDefault(require("../../utils/BaseModel"));
const Bucket_1 = __importDefault(require("../../buckets/models/Bucket"));
const Log_1 = __importDefault(require("../../logs/models/Log"));
const User_1 = __importDefault(require("../../users/models/User"));
class Sequence extends BaseModel_1.default {
    static get tableName() {
        return "sequences";
    }
    static get relationMappings() {
        return {
            bucket: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: Bucket_1.default,
                join: {
                    from: "sequences.bucketId",
                    to: "buckets.id",
                },
            },
            logs: {
                relation: objection_1.Model.HasManyRelation,
                modelClass: Log_1.default,
                join: {
                    from: "sequences.id",
                    to: "logs.sequenceId",
                },
            },
            owner: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: User_1.default,
                join: {
                    from: "sequences.userId",
                    to: "users.id",
                }
            }
        };
    }
}
(function (Sequence) {
    let Status;
    (function (Status) {
        Status["ACTIVE"] = "ACTIVE";
        Status["COMPLETED"] = "COMPLETED";
        Status["CANCELED"] = "CANCELED";
    })(Status = Sequence.Status || (Sequence.Status = {}));
})(Sequence || (Sequence = {}));
exports.default = Sequence;
//# sourceMappingURL=Sequence.js.map