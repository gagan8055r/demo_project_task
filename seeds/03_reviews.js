/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('reviews').del();

  // Inserts seed entries
  await knex('reviews').insert([
    { id: '1', rating: 9, content: 'lorem ipsum', author_id: '1', game_id: '2' },
    { id: '2', rating: 10, content: 'lorem ipsum', author_id: '2', game_id: '1' },
    { id: '3', rating: 7, content: 'lorem ipsum', author_id: '3', game_id: '3' },
    { id: '4', rating: 5, content: 'lorem ipsum', author_id: '2', game_id: '4' },
    { id: '5', rating: 8, content: 'lorem ipsum', author_id: '2', game_id: '5' },
    { id: '6', rating: 7, content: 'lorem ipsum', author_id: '1', game_id: '2' },
    { id: '7', rating: 10, content: 'lorem ipsum', author_id: '3', game_id: '1' }
  ]);
};