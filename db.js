const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./ws.db')

db.serialize(function(){

    db.run(`CREATE TABLE IF NOT EXISTS atividades(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT
        );
    `)

    // db.run(`DELETE FROM atividades WHERE id = ?`, [1], function(err) {
    //     if(err) return console.log(err)
    // })
    
})


module.exports = db