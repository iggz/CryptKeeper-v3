const pgp = require('pg-promise')({
    query: e => {
        console.log('QUERY', e.query);
    }
});

// igor
const options = {
    host: 'localhost',
    database: 'cryptonative_app',
    user: 'igorpopenov',
    password: 'admin'
};

// jack
// const options = {
//     host: 'localhost',
//     database: 'cryptonative_app',
//     user: 'postgres',
//     password: 'admin'
// };

const db = pgp(options);

module.exports = db;