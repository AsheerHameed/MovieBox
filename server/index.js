require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser');
const db = require("./src/config/dbconfig");

const router = require("./src/routes");


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);

app.get('/',(req,res)=>{
  res.send("working");
})

app.listen(5000);
