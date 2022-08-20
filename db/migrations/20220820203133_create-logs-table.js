exports.up = function (knex) {
  return knex.schema.createTable("logs", (table) => {
    table.text("id").primary();
    table.text("user_id").references("users.id");
    table.text("title");
    table.text("description");
    table.text("pre_notes");
    table.text("post_notes");
    table.text("type");
    table.text("status");
    table.text("due_date");
    table.text("resolved_at");
    table.text("deleted_at");
    table.text("sequence_id").references("sequences.id");
    table.integer("sequence_order");
    table.text("bucket_id").references("buckets.id");
    table.text("created_at");
    table.text("updated_at");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("logs");
};
