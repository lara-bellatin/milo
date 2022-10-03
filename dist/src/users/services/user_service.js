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
exports.findUserByEmail = exports.findUserById = void 0;
const nanoid_1 = require("nanoid");
const bcrypt_1 = __importDefault(require("bcrypt"));
const User_1 = __importDefault(require("../models/User"));
function findUserById(id, trx) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield User_1.default.query(trx)
            .findById(id)
            .withGraphFetched('[logs, buckets, sequences]');
    });
}
exports.findUserById = findUserById;
function findUserByEmail(email, trx) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield User_1.default.query(trx)
            .findOne({
            email: email.trim().toLowerCase(),
        })
            .withGraphFetched("logs");
        return user;
    });
}
exports.findUserByEmail = findUserByEmail;
function createUser({ displayName, email, password, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const userWithEmailExists = yield findUserByEmail(email);
        if (userWithEmailExists) {
            throw new Error("User with email already exists");
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const user = yield User_1.default.query().insert({
            id: "user_" + (0, nanoid_1.nanoid)(),
            displayName,
            email,
            password: hashedPassword,
            status: User_1.default.Status.ACTIVE,
        });
        return user;
    });
}
function deleteUser(id, trx) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield User_1.default.query(trx).patchAndFetchById(id, {
            status: User_1.default.Status.DELETED,
        });
    });
}
function updateUser({ userId, username, displayName, birthday, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield findUserById(userId);
        if (!user) {
            throw new Error("User could not be found");
        }
        let updatedFields = {
            username: user.username,
            displayName: user.displayName,
            birthday: user.birthday,
        };
        if (username) {
            updatedFields.username = username;
        }
        if (displayName) {
            updatedFields.displayName = displayName;
        }
        if (birthday) {
            updatedFields.birthday = birthday;
        }
        return yield User_1.default.query().patchAndFetchById(userId, updatedFields);
    });
}
exports.default = {
    createUser,
    deleteUser,
    updateUser,
};
//# sourceMappingURL=user_service.js.map