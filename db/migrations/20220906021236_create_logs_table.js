exports.up = function (knex) {
  return knex.schema.createTable("logs", (table) => {
    table.text("id").primary();
    table.text("user_id").references("users.id");
    table.text("bucket_id").references("buckets.id");
    table.text("sequence_id").references("sequences.id");
    table.text("title");
    table.text("description");
    table.text("preNotes");
    table.text("postNotes");
    table.text("type");
    table.text("status");
    table.timestamp("due_date");
    table.timestamp("resolved_at");
    table.timestamp("deleted_at");
    table.integer("sequence_order");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("logs");
};