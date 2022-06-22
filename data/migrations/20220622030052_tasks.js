/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable('tasks', tbl => {
    tbl.increments('task_id')
    tbl.string('task_description').notNullable().unique()
    tbl.string('task_notes')
    tbl.boolean('task_completed')
    tbl.integer('project_id')
    .notNullable()
    .unsigned()
    .references('project_id')
    .inTable('projects')
    .onUpdate("CASCADE")
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tasks')
};
