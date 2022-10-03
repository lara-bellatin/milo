exports.up = function (knex) {
  return knex.schema.createTable("sequences", (table) => {
    table.text("id").primary();
    table.text("user_id").references("users.id");
    table.text("bucket_id").references("buckets.id");
    table.text("title");
    table.text("status");
    table.boolean("ordered");
    table.text("completed_at");
    table.text("canceled_at");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("sequences");
};