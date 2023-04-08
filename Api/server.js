const express = require("express");
const mysql = require("mysql");
var cors = require("cors");
const myconn = require("express-myconnection");

//express.static(root, [options]);
//Para poder subir los cambios en fly.io es necesario poner fly deploy
const routes = require("./rutas");
const app = express();

/*app.set("port", process.env.Port || 3000);*/
const PORT = process.env.PORT || 3000;

const dbOptions = {
  host: "localhost",
  port: 3307,
  user: "root",
  password: "",
  database: "Usuarios",
  //ssl: {},
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