exports.up = function (knex) {
  return knex.schema.createTable("logs", (table) => {
    table.text("id").primary();
    table.text("user_id").references("users.id");
    table.text("title");
    table.text("description");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("logs");
};