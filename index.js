//1. Crear un obtejo express

const express = require("express");

//2. Crear un objeto que represente nuestra aplicación

const app = express();

app.use(express.json());
app.use( function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', "POST"); 
  res.header('Access-Control-Allow-Headers', "Content-Type");
  next();
});

//Definir los entry point de la API
//Definir la ruta (la url) en donde va a responder nuestra API
// http://localhost:3000/ruta

app.post(
  "/sumar",
  //Se requiere dos obejetos: uno representado la petición
  //un objeto representando la respuesta
  (req, res) => {
    //To Do:A qui va el procesamiento de la petición a esta ruta
    const { numero_1, numero_2 } = req.body;
    const resultado = numero_1 + numero_2;

    res.json(resultado);

    res.json(req.body);
    //devuelve lo que esta pasando
  }
);

app.post("/restar", (req, res) => {
  const { numero_1, numero_2 } = req.body;

  /*
        const n1= req.body.numero_1; 
        const n2= req.body.numero_2;
        */

  const resultado = numero_1 - numero_2;
  res.json(resultado);
});

app.post("/dividir", (req, res) => {
  let resultado;

  try {
    const { numero_1, numero_2 } = req.body;
    resultado = numero_1 / numero_2;
  } catch (error) {
    //Gestionar el error
    resultado = error;
  }

  res.json(resultado);
});

app.post("/multiplicar", (req, res) => {
  let resultado;

  try {
    const { numero_1, numero_2 } = req.body;
    resultado = numero_1 * numero_2;
  } catch (error) {
    //Gestionar el error
    resultado = error;
  }

  res.json(resultado);
});

//3. Crear un servicio para escuchar peticiones

app.listen(3000, () => {
  console.log("servidor ejecutandose en el puerto 3000");
});
