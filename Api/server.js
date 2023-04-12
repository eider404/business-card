const express = require("express");
const mysql = require("mysql");
var cors = require("cors");
const myconn = require("express-myconnection");

//flyctl launch para subir la app en fly.io
//Para poder subir los cambios en fly.io es necesario poner fly deploy o flyctl deploy
const routes = require("./rutas");
const app = express();


const PORT = process.env.PORT || 3000;

const dbOptions = {
  host: "bchntymcsbf3ttq32bzo-mysql.services.clever-cloud.com",
  port: 3306,
  user: "uwidlgbbkhzmiopd",
  password: "ezZuJ8AWSmN6Ue8AXMDt",
  database: "bchntymcsbf3ttq32bzo",
  //ssl: {}
};

app.use("/", express.static("public"));
app.use(cors());
app.use(myconn(mysql, dbOptions, "single"));

app.use(express.json());

//rutas-------
app.get("/", (req, res) => {
  res.send("Bienvenido");
});

app.use("/users", routes);

/*app.get('/api',(req,res)=>{
    res.send('testeando Api')
})*/

//Iniciar el servidor---
/*app.listen(app.get("port"), () => {
  console.log("Server encendido en el puerto", app.get("port"));
});*/

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});