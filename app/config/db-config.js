var mysql = require('mysql2');

var conn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'store_db'
});
conn.connect(err => {
    if(err){
        console.error('Database is disconnect!')
        console.error(err)
    }else {
        console.log("Database is connected")
    }
});
module.exports = conn;