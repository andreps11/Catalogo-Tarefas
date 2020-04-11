const express = require("express");
const server = express();

const db = require('./db');

server.use(express.static("public"));
server.use(express.urlencoded({ extended: true}))

const nunjucks = require("nunjucks");
nunjucks.configure("views", {
    express: server,
    noCache: true,
})

server.post("/", function(req, res){
    const query = `
        INSERT INTO atividades(
            image, title, category, description
        ) VALUES (?,?,?,?);
    `
    const values = [
        req.body.image,
        req.body.title,
        req.body.category,
        req.body.description,
    ] 

    db.run(query, values, function(err){
        if (err){
            console.log(err)
            return res.send("Erro no banco de dados!")
        }

        return res.redirect("/activities")
    })
})

server.get("/", function(req,res) {
    db.all(`SELECT * FROM atividades`, function(err, rows) {
        if (err){
            console.log(err)
            return res.send("Erro no banco de dados!")
        }

        const reversedAtividades = [...rows].reverse();
        let lastAtividades =  []; 
        for (let atividade of reversedAtividades){
            if(lastAtividades.length < 3){
                lastAtividades.push(atividade)
            }
        }
    
        return res.render('index.html', { atividades: lastAtividades});
    })
})

server.get("/activities", function(req,res) {
    db.all(`SELECT * FROM atividades`, function(err, rows) {
        if (err){
            console.log(err)
            return res.send("Erro no banco de dados!")
        }
         
        const reversedAtividades = [...rows].reverse();
        return res.render("activities.html", { atividades: reversedAtividades});
    })
})

server.listen(3000);