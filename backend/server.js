const express = require("express");
const app = express();
const Port = 5001;
// 3000 - 5000
// Porta 8080 = Internet 

app.get("/teste",(req,res)=>{
    res.send("Olá servidor Teste ok")
});

app.get("/sistema", (req,res)=>{
    res.send("Seja Bem-vindo ao sistema")
});

app.get("/sobre", (req,res)=>{
    res.send("Página sobre")
});


app.listen(Port, ()=>{
    console.log(`Servidor rodadno na porta http://localhost:${Port}`)
})
