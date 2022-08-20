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
exports.patchUserById = exports.findUserByID = exports.findUserByEmail = void 0;
const objection_1 = require("objection");
const apollo_server_express_1 = require("apollo-server-express");
const nanoid_1 = require("nanoid");
const argon2_1 = __importDefault(require("argon2"));
const User_1 = __importDefault(require("../models/User"));
function findUserByEmail(email, trx) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield User_1.default.query(trx)
            .findOne({
            email: email.trim().toLowerCase(),
        })
            .withGraphFetched("[buckets, sequences, logs]");
        return user;
    });
}
exports.findUserByEmail = findUserByEmail;
function findUserByID(id, trx) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield User_1.default.query(trx)
            .findById(id)
            .withGraphFetched("[buckets, sequences, logs]");
    });
}
exports.findUserByID = findUserByID;
function patchUserById({ userId, data }) {
    return __awaiter(this, void 0, void 0, function* () {
        return User_1.default.query().patchAndFetchById(userId, data).withGraphFetched("defaultOrganization");
    });
}
exports.patchUserById = patchUserById;
function createUser({ input, trx }) {
    return __awaiter(this, void 0, void 0, function* () {
        const { displayName, email, password } = input;
        if (!email) {
            throw new apollo_server_express_1.ApolloError("An email is required to create a new user");
        }
        const existingUser = yield findUserByEmail(email, trx);
        if (existingUser) {
            throw new apollo_server_express_1.ApolloError("A user with this email already exists");
        }
        const hashedPassword = yield argon2_1.default.hash(password);
        const userId = "user_" + (0, nanoid_1.nanoid)();
        const user = yield objection_1.Model.transaction((trx) => __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.default.query(trx).insert({
                id: userId,
                displayName,
                email,
                status: User_1.default.Status.ACTIVE,
                password: hashedPassword,
            });
            return user;
        }));
        return user;
    });
}
;
function updateUser({ input, trx }) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id, displayName, username, birthday } = input;
        const user = yield findUserByID(id, trx);
        if (!user)
            throw new apollo_server_express_1.ApolloError("User doesn't exist");
        let updateDisplayName = user.displayName;
        let updateUsername = user.username;
        let updateBirthday = user.birthday;
        if (displayName) {
            updateDisplayName = displayName;
        }
        if (username) {
            updateUsername = username;
        }
        if (birthday) {
            updateBirthday = birthday;
        }
        return yield patchUserById({
            userId: user.id,
            data: {
                displayName: updateDisplayName,
                username: updateUsername,
                birthday: updateBirthday,
            }
        });
    });
}
exports.default = {
    createUser,
    updateUser,
};
//# sourceMappingURL=user_service.js.map