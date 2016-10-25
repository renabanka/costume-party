//./models/db.js

'use strict';


//loads environment variables from .env
require('dotenv').config();

var db = require('knex')({
    client: process.env.DB_TYPE,
    connection: {
        host: process.env.DB_SERVER,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
});




module.exports = db;
