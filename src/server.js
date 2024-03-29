const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
require("dotenv").config();

const app = express();

mongoose.connect(
  `mongodb+srv://${process.env.DB_name}:${process.env.DB_password}@cluster0-kkdmq.mongodb.net/omnistack9?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

//GET, POST, PUT, DELETE

//req.query = Acessar query params (para filtros)

//req.params = Acessar route params (para edição, delete)

//req.bory = Acessar corpo da requisição (para criação, edição)

app.use(express.json());
app.use(routes);

app.listen(3333);
