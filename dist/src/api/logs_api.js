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
const log_service_1 = __importDefault(require("../logs/services/log_service"));
const logsAPI = ({ user }) => ({
    getLog: ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
        return yield log_service_1.default.getLogById({ logId: id });
    }),
    getLogs: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield log_service_1.default.getAllForUser({ userId: user.id });
    }),
});
exports.logsAPI = logsAPI;
//# sourceMappingURL=logs_api.js.map