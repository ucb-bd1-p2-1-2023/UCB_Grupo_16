const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());

app.use(cors({
  origin: '*'
}));

const port = 3000;

app.post('/Pasajero',(req, res) => {
  const body = req.body;
  const query = `INSERT INTO Pasajero(CI, Nombres, Apellidos, Email, Ciudad) VALUES 
                                  ('${body.CI}', '${body.Nombres}','${body.Apellidos}','${body.Email}','${body.Ciudad}');`;
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  res.send('1 record inserted');
})

app.post('/Conductor',(req, res) => {
  const body = req.body;
  const query = `INSERT INTO Conductor(Numero_Licencia, Numero_Chasis, Nombres, Apellidos, Edad) VALUES 
                                  ('${body.Numero_Licencia}', '${body.Numero_Chasis}','${body.Nombres}','${body.Apellidos}','${body.Edad}');`;
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  res.send('1 record inserted');
})

app.post('/Ubicacion',(req, res) => {
  const body = req.body;
  const query = `INSERT INTO Ubicacion(Origen, Destino, Oferta) VALUES 
                                  ('${body.Origen}', '${body.Destino}','${body.Oferta}');`;
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  res.send('1 record inserted');
})

app.post('/Vehiculo',(req, res) => {
  const body = req.body;
  const query = `INSERT INTO Vehiculo(Numero_Chasis, Placa, Modelo, Fabricante, Color) VALUES 
                                  ('${body.Numero_Chasis}', '${body.Placa}','${body.Modelo}','${body.Fabricante}','${body.Color}');`;
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  res.send('1 record inserted');
})

app.listen(port, () => {
  console.log(`The Project Is Running On: ${port}`)
})

const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'password',
  database: 'InDrive'
})

connection.connect(()  => console.log('Conected To DataBase ...'));