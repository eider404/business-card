const express = require("express");
const routes = express.Router();

//Leer
routes.get("/obtener", (req, res) => {
  //res.send('testeando Api')
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("SELECT * FROM credenciales", (err, rows) => {
      //if (err) return res.send(err);
      res.json(rows);
    });
  });
});




//Insertar
routes.post("/nuevo", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    //console.log(req.body)
    conn.query("INSERT INTO credenciales set ?", [req.body], (err, rows) => {
      if (err) return res.send(err);

      res.json(req.body);
      //res.status(200).json({});
    });
  });
});

//Actualizar
routes.put("/actualizar/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "UPDATE credenciales set ? WHERE id = ?",
      [req.body, req.params.id],
      (err, rows) => {
        if (err) return res.send(err);

        res.json(req.body);
      }
    );
  });
});

//Eliminar
routes.delete("/eliminar/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "DELETE FROM credenciales WHERE id = ?",
      [req.params.id],
      (err, rows) => {
        if (err) return res.send(err);

        //res.json(rows)
        res.json({ rows });
      }
    );
  });
});

//Buscar id por url
//http://localhost:3000/api/id-buscar?id=1
routes.get("/", (req, res) => {
  const requestquery = req.query;
  //console.log(query);

  req.getConnection((err, conn) => {
    /*if (err) {
      return res.send(err);
    }*/
    //res.json(requestquery);
    conn.query(
      "SELECT * FROM credenciales WHERE id = ?",
      [requestquery.id],
      (err, rows) => {
        try {
          if(rows.length == 0){ throw new Error()}
          //res.json(rows);
          return res.status(200).json({status: 200, mensaje: "La id si existe",rows: rows})
      } catch (error) {
          return res.status(401).json({status: 401, mensaje: "La id no existe"})
      }

      /*
        if (err) {
          return res.send(err);
        }
        res.json(rows);
        //res.json(requestquery);
      */
      });
  });
});




module.exports = routes;