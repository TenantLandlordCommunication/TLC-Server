
exports.up = function(knex, Promise) {
  return knex.schema.createTable('property', (table) => {
    table.increments();
    table.text('address').notNullable();
    table.text('unit');
    table.integer('zipcode').notNullable();
    table.integer('rent');
    table.text('img');
    table.integer('landlord_id').references('landlord.id').unsigned().onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('property')
};
