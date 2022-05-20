const express = require('express')
const app = express()
var cors = require('cors')

app.use(cors())

app.use(express.json())

const routerGrid = require('./routes/datagrid')

app.use("/grid",routerGrid);

app.listen(8080);