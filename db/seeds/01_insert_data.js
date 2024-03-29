exports.seed = async function(knex) {
  await knex('phone_users').del();

  await knex('phone_users').insert([
    { id: 1, name: 'Aarav Patel', email: 'aarav@example.com', phone_number: '1234567890', is_active: true },
    { id: 2, name: 'Aadhya Sharma', email: 'aadhya@example.com', phone_number: '0987654321', is_active: true },
    { id: 3, name: 'Aaradhya Singh', email: 'aaradhya@example.com', phone_number: '9876543210', is_active: true },
    { id: 4, name: 'Advik Gupta', email: 'advik@example.com', phone_number: '1230984567', is_active: true },
    { id: 5, name: 'Ananya Kumar', email: 'ananya@example.com', phone_number: '4567890123', is_active: true },
    { id: 6, name: 'Aryan Mishra', email: 'aryan@example.com', phone_number: '8901234567', is_active: true },
    { id: 7, name: 'Diya Singh', email: 'diya@example.com', phone_number: '2345678901', is_active: true },
    { id: 8, name: 'Ishaan Sharma', email: 'ishaan@example.com', phone_number: '3456789012', is_active: true },
    { id: 9, name: 'Jiya Gupta', email: 'jiya@example.com', phone_number: '6789012345', is_active: true },
    { id: 10, name: 'Kabir Kumar', email: 'kabir@example.com', phone_number: '9012345678', is_active: true },
    { id: 11, name: ' Kumar', email: 'kumar@example.com', phone_number: '9015585678', is_active: false }
  ]);
};