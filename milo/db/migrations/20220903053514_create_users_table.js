exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.text("id").primary();
    table.text("name");
    table.text("email").unique();
    table.text("password");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};