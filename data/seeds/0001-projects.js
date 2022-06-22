/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {

  await knex('projects').insert([
    {project_id: 1, project_name: 'Web API', project_description: 'making web stuff with an API', project_completed: false},
    {project_id: 2, project_name: 'React', project_description: 'Using React', project_completed: true},
    {project_id: 3, project_name: 'CSS', project_description: 'Using web design', project_completed: true}
  ]);
};
