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
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("logs");
};
