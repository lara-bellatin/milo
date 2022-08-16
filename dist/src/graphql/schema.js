"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("@graphql-tools/merge");
const logs_1 = __importDefault(require("./schema/logs"));
exports.default = (0, merge_1.mergeTypeDefs)([logs_1.default]);
