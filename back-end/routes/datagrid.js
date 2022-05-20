const router = require("express").Router();
const pool = require("../mariadb");

router.post("/",(req,res)=>{
    const { nome, sobrenome, idade, preco} = req.body;
    res.send(nome, sobrenome, idade, preco)
});

router.get("/",(req,res)=>{
    pool.getConnection()
        .then((conn) => {
          conn
            .query(`SELECT * FROM datagrid`)
            .then((rows) => {
              res.send(rows)
              console.log(rows);
              conn.end();
            })
            .catch((err) => {
              console.log(err);
              res.status(500).send("Erro na Conexão");
              conn.end();
            });
        }).catch((err) => {
          res.status(500).send("Erro na Conexão");
        });
  });


module.exports = router;