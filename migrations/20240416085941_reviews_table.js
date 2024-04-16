/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
    await knex.schema.createTable('games', (table) => {
        table.string('id').primary();
        table.string('title').notNullable();
        table.json('platform').notNullable();
    });

    await knex.schema.createTable('authors', (table) => {
        table.string('id').primary();
        table.string('name').notNullable();
        table.boolean('verified').notNullable();
    });

    await knex.schema.createTable('reviews', (table) => {
        table.string('id').primary();
        table.integer('rating').notNullable();
        table.string('content').notNullable();
        table.string('author_id').notNullable();
        table.string('game_id').notNullable();
        table.foreign('author_id').references('authors.id');
        table.foreign('game_id').references('games.id');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('reviews');
    await knex.schema.dropTableIfExists('authors');
    await knex.schema.dropTableIfExists('games');
};