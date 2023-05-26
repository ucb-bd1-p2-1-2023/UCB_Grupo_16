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