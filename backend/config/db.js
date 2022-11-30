import mysql from 'mysql2';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@Muhamad42',
    database: 'katalog_buku'
});

export default db;