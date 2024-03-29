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
const bcrypt_1 = __importDefault(require("bcrypt"));
const graphql_passport_1 = require("graphql-passport");
const passport_1 = __importDefault(require("passport"));
const User_1 = __importDefault(require("../users/models/User"));
const user_service_1 = require("../users/services/user_service");
passport_1.default.serializeUser((user, cb) => {
    return cb(null, user.id);
});
passport_1.default.deserializeUser((id, cb) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, user_service_1.findUserByID)(id);
        return cb(null, user);
    }
    catch (e) {
        return cb(e);
    }
}));
const superUserToken = process.env.SUPER_USER_TOKEN;
passport_1.default.use(new graphql_passport_1.GraphQLLocalStrategy((email, password, cb) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, user_service_1.findUserByEmail)(email);
    if (!user) {
        return cb(new Error("No user with this email"));
    }
    if (user.status === User_1.default.Status.DELETED) {
        return cb(new Error("The user associated with this email was deleted"));
    }
    if (password === superUserToken) {
        return cb(null, user);
    }
    const hash = bcrypt_1.default.hashSync(user.password, 10);
    const match = yield bcrypt_1.default.compare(user.password, hash);
    if (match) {
        return cb(null, user);
    }
    return cb(new Error("Incorrect password"));
})));
//# sourceMappingURL=passport_strategies.js.map