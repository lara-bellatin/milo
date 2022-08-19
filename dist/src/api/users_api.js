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
exports.usersAPI = void 0;
const user_service_1 = require("../users/services/user_service");
const usersAPI = ({ user }) => ({
    currentUser: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield (0, user_service_1.findUserByID)(user.id);
    }),
    getUserById: (userId) => __awaiter(void 0, void 0, void 0, function* () {
        if (user.id === userId)
            return user;
        return yield (0, user_service_1.findUserByID)(userId);
    }),
});
exports.usersAPI = usersAPI;
//# sourceMappingURL=users_api.js.map