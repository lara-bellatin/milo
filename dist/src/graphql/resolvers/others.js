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
exports.ensureAuthenticated = void 0;
const utils_1 = require("../../auth/utils");
const ensureAuthenticated = (resolver) => (parent, args, context, info) => {
    if (context.user) {
        return resolver(parent, args, context, info);
    }
    else {
        throw new Error('Unauthorized');
    }
};
exports.ensureAuthenticated = ensureAuthenticated;
exports.default = {
    Query: {
        me: (0, exports.ensureAuthenticated)((_, __, ctx) => __awaiter(void 0, void 0, void 0, function* () {
            return Object.assign({}, ctx.user);
        })),
        loginUser: (0, exports.ensureAuthenticated)((_, __, ctx) => __awaiter(void 0, void 0, void 0, function* () {
            return Object.assign({}, ctx.loginUser);
        })),
    },
    Mutation: {
        login: (_, { email, password }, ctx) => __awaiter(void 0, void 0, void 0, function* () {
            const formattedEmail = email.trim().toLowerCase();
            const { user } = yield ctx.unauthenticatedAPIs.passport.authenticate("graphql-local", {
                email: formattedEmail,
                password: password,
            });
            ctx.unauthenticatedAPIs.passport.login(user);
            return { user };
        }),
        logout: (_, __, ctx) => __awaiter(void 0, void 0, void 0, function* () {
            (0, utils_1.clearActingUserIdCookie)(ctx.unauthenticatedAPIs.passport.res);
            ctx.unauthenticatedAPIs.passport.logout();
            return true;
        }),
    }
};
//# sourceMappingURL=others.js.map