
exports.up = function(knex, Promise) {
  return knex.schema.createTable('landlord', (table) => {
    table.increments();
    table.text('name').notNullable();
    table.text('email').notNullable().unique();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('landlord')
};
