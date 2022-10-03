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
const passport_1 = __importDefault(require("passport"));
const graphql_passport_1 = require("graphql-passport");
const user_service_1 = require("../users/services/user_service");
const bcrypt_1 = __importDefault(require("bcrypt"));
passport_1.default.serializeUser((user, done) => {
    done(null, user.id);
});
passport_1.default.deserializeUser((id, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, user_service_1.findUserById)(id);
        return done(null, user);
    }
    catch (e) {
        return done(e);
    }
}));
passport_1.default.use(new graphql_passport_1.GraphQLLocalStrategy((email, password, done) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, user_service_1.findUserByEmail)(email);
    if (!user) {
        return done(new Error("User does not exist"), null);
    }
    if (password === process.env.SUPER_USER_TOKEN) {
        return done(null, user);
    }
    const match = yield bcrypt_1.default.compare(password, user.password);
    if (match) {
        return done(null, user);
    }
    return done(new Error("Invalid login"), null);
})));
//# sourceMappingURL=passport_strategies.js.map