

var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile.js')[environment];

if (environment === 'test') {
    config = require('../knexfile.js')['test'];
}

module.exports = require('knex')(config);
