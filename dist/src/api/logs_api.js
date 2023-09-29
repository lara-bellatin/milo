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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logsAPI = void 0;
const log_services_1 = __importDefault(require("../logs/services/log_services"));
const logsAPI = ({ user }) => ({
    getLog: (logId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield log_services_1.default.getLogById({ logId });
    }),
    getLogs: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield log_services_1.default.getAllForUser({ userId: user.id });
    }),
    getTodayLogs: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield log_services_1.default.getTodayLogs({ userId: user.id });
    }),
    createLog: (input) => __awaiter(void 0, void 0, void 0, function* () {
        return yield log_services_1.default.createLog(Object.assign({ userId: user.id }, input));
    }),
    updateLog: (input) => __awaiter(void 0, void 0, void 0, function* () {
        return yield log_services_1.default.updateLog(input);
    }),
    resolveLog: (logId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield log_services_1.default.resolveLog({ logId });
    }),
    unresolveLog: (logId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield log_services_1.default.unresolveLog({ logId });
    }),
    deleteLog: (logId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield log_services_1.default.deleteLog({ logId });
    }),
    addLogToBucket: (logId, bucketId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield log_services_1.default.addLogToBucket({ logId, bucketId });
    }),
    addLogToSequence: (logId, sequenceId, sequenceOrder) => __awaiter(void 0, void 0, void 0, function* () {
        return yield log_services_1.default.addLogToSequence({ logId, sequenceId, sequenceOrder });
    })
});
exports.logsAPI = logsAPI;
//# sourceMappingURL=logs_api.js.map