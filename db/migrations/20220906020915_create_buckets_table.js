exports.up = function (knex) {
  return knex.schema.createTable("buckets", (table) => {
    table.text("id").primary();
    table.text("user_id").references("users.id");
    table.text("title");
    table.text("description");
    table.text("type");
    table.text("status");
    table.text("due_date");
    table.text("completed_at");
    table.text("canceled_at");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("buckets");
};