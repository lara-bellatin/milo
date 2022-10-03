"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = __importDefault(require("./resolvers/auth"));
const users_1 = __importDefault(require("./resolvers/users"));
const buckets_1 = __importDefault(require("./resolvers/buckets"));
const sequences_1 = __importDefault(require("./resolvers/sequences"));
const logs_1 = __importDefault(require("./resolvers/logs"));
exports.default = [
    auth_1.default,
    users_1.default,
    buckets_1.default,
    sequences_1.default,
    logs_1.default,
];
//# sourceMappingURL=index.js.map