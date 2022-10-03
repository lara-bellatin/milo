"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("@graphql-tools/merge");
const users_1 = __importDefault(require("./schema/users"));
const logs_1 = __importDefault(require("./schema/logs"));
const buckets_1 = __importDefault(require("./schema/buckets"));
const sequences_1 = __importDefault(require("./schema/sequences"));
exports.default = (0, merge_1.mergeTypeDefs)([users_1.default, logs_1.default, buckets_1.default, sequences_1.default]);
//# sourceMappingURL=schema.js.map