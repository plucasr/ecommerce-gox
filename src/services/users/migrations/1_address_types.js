exports.up = function(knex) {
    return knex.schema
        .createTable('address_types', (table) => {
            table.increments('id')
            table.string('name', 32).notNullable()
        })
};
  
exports.down = function(knex) {
    return knex.schema.dropTable('address_types')
};