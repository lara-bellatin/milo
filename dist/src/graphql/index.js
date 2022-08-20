"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("@graphql-tools/merge");
const users_1 = __importDefault(require("./resolvers/users"));
const logs_1 = __importDefault(require("./resolvers/logs"));
const others_1 = __importDefault(require("./resolvers/others"));
exports.default = (0, merge_1.mergeResolvers)([users_1.default, logs_1.default, others_1.default]);
//# sourceMappingURL=index.js.map