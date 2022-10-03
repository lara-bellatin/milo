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
const nanoid_1 = require("nanoid");
const log_services_1 = __importDefault(require("../../logs/services/log_services"));
const Sequence_1 = __importDefault(require("../models/Sequence"));
function getSequenceById({ sequenceId }) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Sequence_1.default.query().findById(sequenceId)
            .withGraphFetched('[owner, bucket, logs]');
    });
}
function getAllForUser({ userId }) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Sequence_1.default.query().where("userId", userId)
            .withGraphFetched('[owner, bucket, logs]');
    });
}
function createSequence({ userId, title, ordered, bucketId, logInput, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const sequence = yield Sequence_1.default.query().insert({
            id: "seq_" + (0, nanoid_1.nanoid)(),
            userId: userId,
            title: title,
            ordered: ordered,
            status: Sequence_1.default.Status.ACTIVE,
            bucketId: bucketId,
        });
        yield Promise.all(logInput.map((logInput, index) => __awaiter(this, void 0, void 0, function* () {
            return log_services_1.default.createLog({
                userId,
                title: logInput.title,
                description: logInput.description,
                type: logInput.type,
                preNotes: logInput.preNotes,
                dueDate: logInput.dueDate,
                bucketId: bucketId,
                sequenceId: sequence.id,
                sequenceOrder: index,
            });
        })));
        return sequence;
    });
}
function updateSequence({ sequenceId, title, ordered, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const sequence = yield getSequenceById({ sequenceId });
        if (!sequence) {
            throw new Error("Sequence not found");
        }
        return yield Sequence_1.default.query().patchAndFetchById(sequenceId, {
            title: title || sequence.title,
            ordered: ordered,
        });
    });
}
function cancelSequence({ sequenceId }) {
    return __awaiter(this, void 0, void 0, function* () {
        const sequence = yield getSequenceById({ sequenceId });
        if (!sequence) {
            throw new Error("Sequence not found");
        }
        return yield Sequence_1.default.query().patchAndFetchById(sequenceId, {
            status: Sequence_1.default.Status.CANCELED,
        });
    });
}
function completeSequence({ sequenceId }) {
    return __awaiter(this, void 0, void 0, function* () {
        const sequence = yield getSequenceById({ sequenceId });
        if (!sequence) {
            throw new Error("Sequence not found");
        }
        return yield Sequence_1.default.query().patchAndFetchById(sequenceId, {
            status: Sequence_1.default.Status.COMPLETED,
        });
    });
}
exports.default = {
    getSequenceById,
    getAllForUser,
    createSequence,
    updateSequence,
    cancelSequence,
    completeSequence,
};
//# sourceMappingURL=sequence_service.js.map