exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.text("id").primary();
    table.text("display_name");
    table.text("username");
    table.text("status");
    table.text("birthday");
    table.text("password");
    table.text("email").unique();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};