var pg = require('pg');

module.exports = function () {

    return new pg.Client({
        host: 'localhost',
        user: 'postgres',
        password: '1010',
        database: 'portaldenoticias'
    });

}