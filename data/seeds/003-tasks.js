/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tasks').insert([
    {task_id:1, 
    task_description:"baz",
    task_notes: null, 
    task_completed:false, 
    project_id:1,
    }
  ]);
};
