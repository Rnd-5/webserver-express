//====================REQUIRES_Y_CONST====================//
require('./server/config/config');
require('./server/hbs/helpers');

const express = require('express');
const app = express();
const hbs = require('hbs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const noticiaForm = (require, './routes/noticiaForm');

const port = process.env.PORT || 3000;
//------------------------------------------------//
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())

app.use(express.static(__dirname + '/server/static'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');

app.use(require('./routes/rutas_noticia'));

//app.use('/noticiaForm', noticiaForm);


//=============================================================//

mongoose.connect('mongodb://localhost:27017/BD_Noticias_com', (err, res) => {
    if (err) throw err;

    console.log('Base de datos ONLINE');
});

//========================PETICIONES_GET======================//

noticias = [{ 'titular': 'Titular_1', 'imagen': '', 'autor': 'Autor_1 publicó *==*' },
    { 'titular': 'Titular_2', 'imagen': '', 'autor': 'Autor_2 publicó *==*' },
    { 'titular': 'Titular_3', 'imagen': '', 'autor': 'Autor_3 publicó *==*' }
]




app.listen(port, () => {
    console.log('Escuchando petisiones en el puerto:', port);
});