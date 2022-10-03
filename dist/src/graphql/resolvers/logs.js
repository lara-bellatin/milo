"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("./auth");
exports.default = {
    Query: {
        log: (0, auth_1.ensureAuthenticated)((_, { logId }, context) => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            return yield ((_a = context.apis) === null || _a === void 0 ? void 0 : _a.logsAPI.getLog(logId));
        })),
        logs: (0, auth_1.ensureAuthenticated)((_, { input }, context) => __awaiter(void 0, void 0, void 0, function* () {
            var _b;
            return yield ((_b = context.apis) === null || _b === void 0 ? void 0 : _b.logsAPI.getLogs(input));
        })),
    },
    Mutation: {
        createLog: (0, auth_1.ensureAuthenticated)((_, { input }, context) => __awaiter(void 0, void 0, void 0, function* () {
            var _c;
            return yield ((_c = context.apis) === null || _c === void 0 ? void 0 : _c.logsAPI.createLog(input));
        })),
        updateLog: (0, auth_1.ensureAuthenticated)((_, { input }, context) => __awaiter(void 0, void 0, void 0, function* () {
            var _d;
            return yield ((_d = context.apis) === null || _d === void 0 ? void 0 : _d.logsAPI.updateLog(input));
        })),
        deleteLog: (0, auth_1.ensureAuthenticated)((_, { logId }, context) => __awaiter(void 0, void 0, void 0, function* () {
            var _e;
            return yield ((_e = context.apis) === null || _e === void 0 ? void 0 : _e.logsAPI.deleteLog(logId));
        })),
        resolveLog: (0, auth_1.ensureAuthenticated)((_, { logId }, context) => __awaiter(void 0, void 0, void 0, function* () {
            var _f;
            return yield ((_f = context.apis) === null || _f === void 0 ? void 0 : _f.logsAPI.resolveLog(logId));
        })),
        unresolveLog: (0, auth_1.ensureAuthenticated)((_, { logId }, context) => __awaiter(void 0, void 0, void 0, function* () {
            var _g;
            return yield ((_g = context.apis) === null || _g === void 0 ? void 0 : _g.logsAPI.unresolveLog(logId));
        })),
        addLogToBucket: (0, auth_1.ensureAuthenticated)((_, { logId, bucketId }, context) => __awaiter(void 0, void 0, void 0, function* () {
            var _h;
            return yield ((_h = context.apis) === null || _h === void 0 ? void 0 : _h.logsAPI.addLogToBucket(logId, bucketId));
        })),
        addLogToSequence: (0, auth_1.ensureAuthenticated)((_, { logId, sequenceId, sequenceOrder }, context) => __awaiter(void 0, void 0, void 0, function* () {
            var _j;
            return yield ((_j = context.apis) === null || _j === void 0 ? void 0 : _j.logsAPI.addLogToSequence(logId, sequenceId, sequenceOrder));
        })),
    },
};
//# sourceMappingURL=logs.js.map