const router = require("express").Router();
const pool = require("../mariadb");

router.post("/",(req,res)=>{
    const { Nome,SobreNome,Idade,Saldo } = req.body;
    pool.getConnection()
      .then((conn) => {
        conn
          .query(`INSERT INTO datagrid (Nome,SobreNome,Idade,Saldo) VALUES 
          ("${Nome}","${SobreNome}","${Idade}","${Saldo}")`)
          .then((rows) => {
            res.status(200).send('OK');
            conn.end();
          })
          .catch((err) => {
            console.log(err);
            conn.end();
            res.status(500).send('deu merda Aqui');
          });
      })
      .catch((err) => {
        res.status(500).send('deu merda Aqui');
      });
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

router.delete("/:id",(req,res)=>{
  let id = req.params.id;
    pool.getConnection()
        .then((conn) => {
          conn
            .query(`DELETE FROM datagrid WHERE ${id};`)
            .then((rows) => {
              res.send(`${rows.affectedRows}`) 
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