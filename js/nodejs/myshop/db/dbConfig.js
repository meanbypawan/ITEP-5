import mysql from "mysql2";

export default mysql.createPool({
    user: 'root',
    password: '',
    database: 'myshop',
    host: 'localhost',
    connectionLimit: 100
});