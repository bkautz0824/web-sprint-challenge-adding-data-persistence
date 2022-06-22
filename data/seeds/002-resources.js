/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('resources').insert([
    {resource_id: 1, resource_name: 'rowValue1', resource_description: 'blah this is a descirption'},
    {resource_id: 2, resource_name: 'rowValue2', resource_description: 'yah this not a good desciription'},
  ]);
};
