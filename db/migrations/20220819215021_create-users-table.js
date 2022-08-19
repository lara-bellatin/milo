exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.text("id").primary();
    table.text("display_name");
    table.text("username");
    table.text("status");
    table.text("birthday");
    table.text("password");
    table.text("email").unique();
    table.text("created_at");
    table.text("updated_at");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
