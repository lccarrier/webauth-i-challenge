const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'Mike', password: bcrypt.hashSync('pass', 1) },
        { username: 'Jonas', password: bcrypt.hashSync('pass', 1) },
        { username: 'Jane', password: bcrypt.hashSync('pass', 1) },
        { username: 'John', password: bcrypt.hashSync('pass', 1) },
      ]);
    });
};