const express = require('express');
const server = express();
const PORT = 8080;

server.get('/',(req,res)=>{
    return res.json({mensagem:'Nossa Api'})
});

server.listen(3000, ()=>{
    console.log('funfando');
})