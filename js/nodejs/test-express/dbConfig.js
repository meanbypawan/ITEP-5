import mysql from "mysql2";

const pool = mysql.createPool({
    user: 'root',
    password: '',
    host: 'localhost',
    database: 'testdb'
});

export default pool;