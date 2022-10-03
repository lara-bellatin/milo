"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupExpressApp = exports.apollo = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const schema_1 = require("@graphql-tools/schema");
const express_1 = __importDefault(require("express"));
const objection_1 = require("objection");
const express_session_1 = __importDefault(require("express-session"));
const ioredis_1 = __importDefault(require("ioredis"));
const connect_redis_1 = __importDefault(require("connect-redis"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const body_parser_1 = __importDefault(require("body-parser"));
const uuid_1 = require("uuid");
const knex_1 = __importDefault(require("knex"));
const knexfile_1 = __importDefault(require("./knexfile"));
const schema_2 = __importDefault(require("./src/graphql/schema"));
const graphql_1 = __importDefault(require("./src/graphql"));
const passport_1 = __importDefault(require("passport"));
const utils_1 = require("./src/auth/utils");
require("./src/auth/passport_strategies");
require("dotenv/config");
const graphql_passport_1 = require("graphql-passport");
const schema = (0, schema_1.makeExecutableSchema)({
    typeDefs: schema_2.default,
    resolvers: graphql_1.default,
});
exports.apollo = new apollo_server_express_1.ApolloServer({
    schema,
    introspection: true,
    context: ({ req, res }) => {
        const baseCtx = {
            auth: (0, graphql_passport_1.buildContext)({ req, res }),
        };
        const user = req.user;
        if (!user) {
            return baseCtx;
        }
        const authenticatedCtx = (0, utils_1.buildAuthenticatedContext)({ user });
        return Object.assign(Object.assign({}, baseCtx), authenticatedCtx);
    },
});
function setupExpressApp(env) {
    const app = (0, express_1.default)();
    const knex = (0, knex_1.default)(knexfile_1.default[env]);
    objection_1.Model.knex(knex);
    const session = {
        name: "milo-sid",
        genid: () => (0, uuid_1.v4)(),
        secret: process.env.SECRET || 'milo-secret',
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: false,
            maxAge: 1000 * 60 * 60 * 24 * 365 * 7,
        },
    };
    if (process.env.NODE_ENV === "production") {
        const RedisStore = (0, connect_redis_1.default)(express_session_1.default);
        const redisClient = new ioredis_1.default(process.env.REDIS_URL);
        session.cookie.sameSite = "none",
            session.cookie.secure = true;
        app.set("trust proxy", 1);
        session.store = new RedisStore({ client: redisClient });
        session.secret = process.env.SESSION_SECRET;
    }
    else {
        const RedisStore = (0, connect_redis_1.default)(express_session_1.default);
        const redisClient = new ioredis_1.default(process.env.REDIS_URL);
        session.store = new RedisStore({ client: redisClient });
        session.secret = "milo-secret";
    }
    app.use((0, cookie_parser_1.default)());
    app.use(body_parser_1.default.json());
    app.use((0, express_session_1.default)(session));
    app.use(passport_1.default.initialize());
    app.use(passport_1.default.session());
    return { app, knex };
}
exports.setupExpressApp = setupExpressApp;
//# sourceMappingURL=app.js.map