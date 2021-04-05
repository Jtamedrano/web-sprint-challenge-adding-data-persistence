exports.up = function (knex) {
  knex.schema
    .createTable("projects", (table) => {
      table.increments("project_id");
      table.string("project_name").notNullable();
      table.string("project_description").nullable();
      table.boolean("project_completed").defaultTo(false);
    })
    .createTable("resources", (table) => {
      //resource table
      table.increments("resource_id");
      table.string("resource_name").unique();
      table.string("resource_description");
    })
    .createTable("tasks", (table) => {
      table.increments("task_id");
      table.string("task_description");
      table.string("task_notes");
      table.boolean("task_completed").defaultTo(false);
      //create foreign key for this table
      table
        .integer("project_id")
        .references("project_id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources");
};
