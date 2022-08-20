const { knexSnakeCaseMappers } = require("objection");
import "dotenv/config";

interface KnexConfig {
  [key: string]: object;
};

const knexConfig: KnexConfig = {
  test: {
    client: "postgres",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: __dirname + "/db/migrations",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds",
    },
    ...knexSnakeCaseMappers(),
  },
  development: {
    client: "postgres",
    connection: {
      host: "localhost",
      port: 5432,
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: __dirname + "/db/migrations",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds",
    },
    ...knexSnakeCaseMappers(),
  },
  // staging: {
  //   client: "pg",
  //   connection: (process.env.DATABASE_CONNECTION_POOL_URL || process.env.DATABASE_URL) + `?ssl=no-verify`,
  //   pool: {
  //     min: 2,
  //     max: 20, // pgbouncer max limit is 10k
  //   },
  //   migrations: {
  //     directory: __dirname + "/db/migrations",
  //     tableName: "knex_migrations",
  //   },
  //   seeds: {
  //     directory: __dirname + "/dist/db/seeds",
  //   },
  //   ...knexSnakeCaseMappers(),
  // },
    // ...knexSnakeCaseMappers(),
  // },
  // production: {
  //   client: "pg",
  //   connection: process.env.DATABASE_CONNECTION_POOL_URL + `?ssl=no-verify`,
  //   pool: {
  //     min: 2,
  //     max: 20, // pgbouncer max limit is 10k
  //   },
  //   migrations: {
  //     directory: __dirname + "/db/migrations",
  //     tableName: "knex_migrations",
  //   },
  //   ...knexSnakeCaseMappers(),
  // },
};

export default knexConfig;