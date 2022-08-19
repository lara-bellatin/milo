"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { knexSnakeCaseMappers } = require("objection");
exports.default = {
    test: Object.assign({ client: "pg", connection: process.env.DATABASE_URL, pool: {
            min: 2,
            max: 10,
        }, migrations: {
            directory: __dirname + "/db/migrations",
            tableName: "knex_migrations",
        }, seeds: {
            directory: __dirname + "/db/seeds",
        } }, knexSnakeCaseMappers()),
    development: Object.assign({ client: "pg", connection: {
            host: "127.0.0.1",
            database: process.env.POSTGRES_DB,
            user: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
        }, pool: {
            min: 2,
            max: 10,
        }, migrations: {
            directory: __dirname + "/db/migrations",
            tableName: "knex_migrations",
        }, seeds: {
            directory: __dirname + "/db/seeds",
        } }, knexSnakeCaseMappers()),
    production: Object.assign({ client: "pg", connection: {
            host: "ec2-44-205-64-253.compute-1.amazonaws.com",
            port: "5432",
            database: "dfp00gdacni51s",
            user: "ghfkmpnrxatihr",
            password: "a7efbf65e826dfef51bfcee7b8d544dc38d48141bd31433a2ee25f39d75d73dd",
        }, pool: {
            min: 2,
            max: 20,
        }, migrations: {
            directory: __dirname + "/db/migrations",
            tableName: "knex_migrations",
        } }, knexSnakeCaseMappers()),
};
//# sourceMappingURL=knexfile.js.map