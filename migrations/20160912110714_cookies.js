exports.up = function (knex, Promise) {
  return knex.schema.createTable('cookies', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.string('type')
    table.integer('amount')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('cookies')
};
