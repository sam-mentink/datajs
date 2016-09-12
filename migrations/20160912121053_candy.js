exports.up = function (knex, Promise) {
  return knex.schema.createTable('candy', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.string('deliciousness')
    table.string('size')
    table.integer('amount')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('candy')
};
