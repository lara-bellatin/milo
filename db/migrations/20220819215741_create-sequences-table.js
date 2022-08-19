exports.up = function (knex) {
  return knex.schema.createTable("sequences", (table) => {
    table.text("id").primary();
    table.text("user_id").references("users.id");
    table.text("bucket_id").references("buckets.id");
    table.text("title");
    table.text("status");
    table.text("completed_at");
    table.text("canceled_at");
    table.text("created_at");
    table.text("updated_at");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("sequences");
};
