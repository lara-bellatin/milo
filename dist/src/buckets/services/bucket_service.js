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
const Bucket_1 = __importDefault(require("../models/Bucket"));
function getBucketById({ bucketId }) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Bucket_1.default.query().findById(bucketId)
            .withGraphFetched('[owner, sequences, logs]');
    });
}
function getAllForUser({ userId }) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Bucket_1.default.query().where("userId", userId)
            .withGraphFetched('[owner, sequences, logs]');
    });
}
function createBucket({ userId, title, description, type, dueDate, }) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Bucket_1.default.query().insert({
            id: "bucket_" + (0, nanoid_1.nanoid)(),
            userId,
            title,
            description,
            type,
            dueDate,
            status: Bucket_1.default.Status.NOT_STARTED,
        });
    });
}
function updateBucket({ id, title, description, type, dueDate }) {
    return __awaiter(this, void 0, void 0, function* () {
        const bucket = yield getBucketById({ bucketId: id });
        if (!bucket) {
            throw new Error("Bucket was not found");
        }
        let updateFields = {
            title: title || bucket.title,
            description: description || bucket.description,
            type: type || bucket.type,
            dueDate: dueDate || bucket.dueDate,
        };
        return yield Bucket_1.default.query().patchAndFetchById(id, updateFields);
    });
}
function cancelBucket({ bucketId }) {
    return __awaiter(this, void 0, void 0, function* () {
        const bucket = yield getBucketById({ bucketId });
        if (!bucket) {
            throw new Error("Bucket could not be found");
        }
        if ([Bucket_1.default.Status.CANCELED, Bucket_1.default.Status.COMPLETED].includes(bucket.status)) {
            throw new Error("Bucket cannot be canceled");
        }
        return yield Bucket_1.default.query().patchAndFetchById(bucketId, { status: Bucket_1.default.Status.CANCELED });
    });
}
function completeBucket({ bucketId }) {
    return __awaiter(this, void 0, void 0, function* () {
        const bucket = yield getBucketById({ bucketId });
        if (!bucket) {
            throw new Error("Bucket could not be found");
        }
        if ([Bucket_1.default.Status.CANCELED, Bucket_1.default.Status.COMPLETED].includes(bucket.status)) {
            throw new Error("Bucket cannot be completed");
        }
        return yield Bucket_1.default.query().patchAndFetchById(bucketId, { status: Bucket_1.default.Status.CANCELED });
    });
}
;
exports.default = {
    getBucketById,
    getAllForUser,
    createBucket,
    updateBucket,
    cancelBucket,
    completeBucket,
};
//# sourceMappingURL=bucket_service.js.map