const express = require("express");
const app = express();
const mongodb = require("mongodb");
let MongoClient = mongodb.MongoClient;

const ObjectID = mongodb.ObjectID;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let db;

MongoClient.connect("mongodb://localhost:27017", function (err, client) {
  if (err !== null) {
    console.log(err);
  } else {
    db = client.db("resenyasdb");
    console.log("MongoDB se ha conectado correctamente");
  }
});

//Rutas GET - Integradas

app.get("/resenyas/", function (req, res) {
  db.collection("resenyas")
    .find()
    .toArray(function (err, datos) {
      if (err !== null) {
        res.send(err);
      } else {
        res.send(datos);
      }
    });
});

app.get("/resenyas/buscarID/:_id", function (req, res) {
  const idBuscar = req.params._id;

  db.collection("resenyas")
    .find({ _id: ObjectID(idBuscar) })
    .toArray(function (err, datos) {
      if (err !== null) {
        res.send(err);
      } else {
        res.send(datos);
      }
    });
});

app.get("/resenyas/buscarvaloracion/:valoracion", function (req, res) {
  const valoracion = req.params.valoracion;

  db.collection("resenyas")
    .find({ valoracion: valoracion })
    .toArray(function (err, datos) {
      if (err !== null) {
        res.send(err);
      } else {
        res.send(datos);
      }
    });
});

app.get("/resenyas/buscardato/:dato", function (req, res) {
  const tipo = req.params.dato;

  db.collection("resenyas")
    .find({ tipo: tipo })
    .toArray(function (err, datos) {
      if (err !== null) {
        res.send(err);
      } else {
        res.send(datos);
      }
    });
});

app.get("/resenyas/buscarpalabra/:nombre", function (req, res) {
  const item = req.params.nombre;

  db.collection("resenyas")
    .find({ item: { $regex: item } })
    .toArray(function (err, datos) {
      if (err !== null) {
        res.send(err);
      } else {
        res.send(datos);
      }
    });
});

//Ruta POST - Integrada

app.post("/resenyas/nuevaresenya", function (req, res) {
  const resenya = {
    titulo_resenya: req.body.titulo_resenya,
    item: req.body.item,
    texto_resenya: req.body.texto_resenya,
    valoracion: req.body.valoracion,
    tipo: req.body.tipo,
    usuario: req.body.usuario,
  };

  db.collection("resenyas").insertOne(resenya, function (err, datos) {
    if (err !== null) {
      res.send(err);
    } else {
      res.send(datos);
    }
  });
});

// Rutas PUT y DELETE - No integradas

app.put("/resenyas/editarresenya/", function (req, res) {
  let resenya = {
    idBuscar: req.body.id,
    titulo_resenya: req.body.titulo_resenya,
    item: req.body.item,
    texto_resenya: req.body.texto_resenya,
    valoracion: req.body.valoracion,
    tipo: req.body.tipo,
    usuario: req.body.usuario,
  };

  db.collection("resenyas").updateOne(
    { _id: ObjectID(resenya.idBuscar) },
    {
      $set: {
        titulo_resenya: resenya.titulo_resenya,
        item: resenya.item,
        texto_resenya: resenya.texto_resenya,
        valoracion: resenya.valoracion,
        tipo: resenya.tipo,
      },
    },
    function (err, datos) {
      if (err !== null) {
        res.send(err);
      } else {
        res.send(datos);
      }
    }
  );
});

app.delete("/resenyas/borrarresenya/:id", function (req, res) {
  const resenyaBorrar = req.params.id;

  db.collection("resenyas").deleteOne(
    { _id: ObjectID(resenyaBorrar) },
    function (err, datos) {
      if (err !== null) {
        res.send(err);
      } else {
        res.send(datos);
      }
    }
  );
});

app.listen(3000);
