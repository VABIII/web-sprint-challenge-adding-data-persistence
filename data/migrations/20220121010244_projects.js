
exports.up = async function(knex) {
    await knex.schema
        .createTable('projects', tbl => {
            tbl.increments('project_id')
            tbl.string('project_name').notNullable()
            tbl.string('project_description')
            tbl.boolean('project_completed').defaultTo(false)
        })
        .createTable('resources', tbl => {
            tbl.increments('resource_id')
            tbl.string('resource_name').unique().notNullable()
            tbl.string('resource_description')
        })
        .createTable('tasks', tbl => {
            tbl.increments('task_id')
            tbl.string('task_description').notNullable()
            tbl.string('task_notes')
            tbl.boolean('task_completed').defaultTo(false)
            tbl.integer('project_id').notNullable()
                .references('project_id')
                .inTable('projects')
                .unsigned()
                .notNullable()
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
        })
        .createTable('project_resource', tbl => {
            tbl.increments()
            tbl.integer('resource_id')
                .references('resource_id')
                .inTable('resource')
                .unsigned()
                .notNullable()
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
            tbl.integer('project_id')
                .references('project_id')
                .inTable('projects')
                .unsigned()
                .notNullable()
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
        })
};

exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
        .dropTableIfExists('projects_resource')

};