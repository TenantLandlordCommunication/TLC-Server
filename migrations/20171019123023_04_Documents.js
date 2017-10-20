
exports.up = function(knex, Promise) {
  return knex.schema.createTable('documents', (table) => {
    table.increments();
    table.text('url');
    table.integer('landlord_id').references('landlord.id').unsigned().onDelete('cascade');
    table.integer('tenant_id').references('tenant.id').unsigned().onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('documents')
};
