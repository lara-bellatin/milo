"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildAuthenticatedContex = exports.clearActingUserIdCookie = exports.setActingUserIdCookie = exports.getActingUserIdCookie = void 0;
const users_api_1 = require("../api/users_api");
const logs_api_1 = require("../api/logs_api");
const sequences_api_1 = require("../api/sequences_api");
const buckets_api_1 = require("../api/buckets_api");
const actingUserIdCookieName = "stir-actingUserId";
function getActingUserIdCookie(request) {
    return request.cookies[actingUserIdCookieName];
}
exports.getActingUserIdCookie = getActingUserIdCookie;
function setActingUserIdCookie(response, userId) {
    response.cookie(actingUserIdCookieName, userId);
}
exports.setActingUserIdCookie = setActingUserIdCookie;
function clearActingUserIdCookie(response) {
    response.clearCookie(actingUserIdCookieName);
}
exports.clearActingUserIdCookie = clearActingUserIdCookie;
function buildAuthenticatedContex({ user, loginUser }) {
    return {
        loginUser,
        user,
        apis: {
            logsAPI: (0, logs_api_1.logsAPI)({ user, loginUser }),
            sequencesAPI: (0, sequences_api_1.sequencesAPI)({ user, loginUser }),
            bucketsAPI: (0, buckets_api_1.bucketsAPI)({ user, loginUser }),
            usersAPI: (0, users_api_1.usersAPI)({ user, loginUser }),
        },
    };
}
exports.buildAuthenticatedContex = buildAuthenticatedContex;
//# sourceMappingURL=utils.js.map