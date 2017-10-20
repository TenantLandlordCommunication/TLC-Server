
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tenant', (table) => {
    table.increments();
    table.text('name').notNullable();
    table.text('email').notNullable().unique();
    table.text('number');
    table.integer('rentdue');
    table.integer('property_id').references('property.id').unsigned().onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tenant')
};
