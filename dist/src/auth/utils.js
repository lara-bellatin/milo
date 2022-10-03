"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildAuthenticatedContext = void 0;
const user_api_1 = require("../api/user_api");
const buckets_api_1 = require("../api/buckets_api");
const sequences_api_1 = require("../api/sequences_api");
const logs_api_1 = require("../api/logs_api");
function buildAuthenticatedContext({ user }) {
    return {
        user,
        apis: {
            userAPI: (0, user_api_1.userAPI)({ user }),
            bucketsAPI: (0, buckets_api_1.bucketsAPI)({ user }),
            sequencesAPI: (0, sequences_api_1.sequencesAPI)({ user }),
            logsAPI: (0, logs_api_1.logsAPI)({ user }),
        },
    };
}
exports.buildAuthenticatedContext = buildAuthenticatedContext;
//# sourceMappingURL=utils.js.map