const PORT = 3000
const express = require("express")
const bodyParser = require("body-parser")

const app = express()

let posts = [
    {id: "qualquer",
    title: "Teste do mural",
    description: "Descrição teste"
    },
]

app.get("/all", (req, res) => {
    res.json(JSON.stringify(posts))
})

app.post("/new", bodyParser.json(), (req, res) => {
    let id = generateID()
    let title = req.body.title
    let description = req.body.description

    posts.push({id, title, description})
    
    res.send("Post adicionado")
})

app.listen( PORT, () => {
    console.log("Servidor rodando corretamente", PORT);
})

function generateID(){
    return Math.random().toString(36).substring(2, 9)
}