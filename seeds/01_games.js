/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('games').del();

  // Inserts seed entries
  await knex('games').insert([
    { id: '1', title: 'Zelda, Tears of the Kingdom', platform: JSON.stringify(['Switch']) },
    { id: '2', title: 'Final Fantasy 7 Remake', platform: JSON.stringify(['PS5', 'Xbox']) },
    { id: '3', title: 'Elden Ring', platform: JSON.stringify(['PS5', 'Xbox', 'PC']) },
    { id: '4', title: 'Mario Kart', platform: JSON.stringify(['Switch']) },
    { id: '5', title: 'Pokemon Scarlet', platform: JSON.stringify(['PS5', 'Xbox', 'PC']) }
  ]);
};