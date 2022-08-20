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
exports.setupExpressApp = exports.apollo = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const schema_1 = require("@graphql-tools/schema");
const connect_redis_1 = __importDefault(require("connect-redis"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const ioredis_1 = __importDefault(require("ioredis"));
const express_1 = __importDefault(require("express"));
const graphql_passport_1 = require("graphql-passport");
const passport_1 = __importDefault(require("passport"));
const express_session_1 = __importDefault(require("express-session"));
const knex_1 = __importDefault(require("knex"));
const objection_1 = require("objection");
const knexfile_1 = __importDefault(require("./knexfile"));
require("dotenv/config");
const graphql_1 = __importDefault(require("./src/graphql"));
const schema_2 = __importDefault(require("./src/graphql/schema"));
const constants_1 = require("./src/utils/constants");
const utils_1 = require("./src/auth/utils");
const users_api_1 = require("./src/api/users_api");
require("./src/auth/passport_strategies");
const schema = (0, schema_1.makeExecutableSchema)({
    typeDefs: schema_2.default,
    resolvers: graphql_1.default,
});
exports.apollo = new apollo_server_express_1.ApolloServer({
    schema,
    context: ({ req, res }) => __awaiter(void 0, void 0, void 0, function* () {
        const baseCtx = {
            unauthenticatedAPIs: {
                userAPI: users_api_1.unauthenticatedUserAPI,
                passport: (0, graphql_passport_1.buildContext)({ req, res }),
            },
            origin: req.headers.origin,
            ipAddress: req.ip,
        };
        let user = req.user;
        if (!user) {
            return baseCtx;
        }
        const loginUser = req.user;
        const authenticatedCtx = (0, utils_1.buildAuthenticatedContex)({ user, loginUser });
        return Object.assign(Object.assign({}, baseCtx), authenticatedCtx);
    }),
});
function setupExpressApp(env) {
    const app = (0, express_1.default)();
    const knex = (0, knex_1.default)(knexfile_1.default[env]);
    objection_1.Model.knex(knex);
    const session = {
        name: "milo-sid",
        resave: false,
        saveUninitialized: false,
        cookie: {},
    };
    if (process.env.NODE_ENV === constants_1.PRODUCTION) {
        const RedisStore = (0, connect_redis_1.default)(express_session_1.default);
        const redisClient = new ioredis_1.default({ host: process.env.REDIS_HOST, port: parseInt(process.env.REDIS_PORT || '') });
        session.cookie.secure = true;
        app.set("trust proxy", 1);
        session.store = new RedisStore({ client: redisClient });
        session.secret = process.env.SESSION_SECRET;
    }
    else {
        const RedisStore = (0, connect_redis_1.default)(express_session_1.default);
        const redisClient = new ioredis_1.default({ host: process.env.REDIS_HOST, port: parseInt(process.env.REDIS_PORT || '') });
        session.store = new RedisStore({ client: redisClient });
        session.secret = "milo-secret";
    }
    app.use((0, cookie_parser_1.default)());
    app.use((0, express_session_1.default)(session));
    app.use(passport_1.default.initialize());
    app.use(passport_1.default.session());
    return { app, knex };
}
exports.setupExpressApp = setupExpressApp;
//# sourceMappingURL=app.js.map