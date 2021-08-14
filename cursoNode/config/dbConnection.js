var pg = require('pg');

module.exports = function () {
    return connPostgres;
}

var connPostgres = function () {

    var client  = new pg.Client({
        host: 'localhost',
        user: 'postgres',
        password: '1010',
        database: 'portaldenoticias'
    });

    client.connect();

    return client;

}

