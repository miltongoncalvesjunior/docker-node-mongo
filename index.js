const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

require('./controllers/authController')(app)
// Adicionando arquivo de rota no endpoint /carros
//const carros = require('./routes/Carros');

//app.use('/api/carros', carros);

/*mongoose
  .connect('mongodb://db:27017/crud-db', {
    useNewUrlParser: true
  })
  .then(result => {
    console.log('MongoDB Conectado');
  })
  .catch(error => {
    console.log(error);
  });


app.listen(3000, () => console.log('Server ativo na porta 9000')
);*/

app.listen(3000);