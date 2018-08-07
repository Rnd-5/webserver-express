//====================REQUIRES_Y_CONST====================//
const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));


//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');

//=============================================================//

//========================PETICIONES_GET======================//
app.get('/', (req, res) => {
    /* res.send('Hello World');
    let salida = {
        nombre: 'Fernando',
        edad: 32,
        url: req.url};*/

    res.render('parciales/noticias_inicio', {
        //name: 'fernando'
        titular: ' ',
        imagen: ''
    });
});
/*
app.get('/about', (req, res) => {

    res.render('parciales/about');

});
*/
app.get('/vista_noticia', (req, res) => {

    res.render('parciales/vista_noticia');

});

app.get('/publicar_noticia', (req, res) => {

    res.render('parciales/publicar_noticia');

});

/*
app.get('/data', (req, res) => {

    res.send('Hello Data');

});
*/
//=============================================================//

//========================PETICIONES_POST======================//





//=============================================================//



app.listen(port, () => {
    console.log(`Escuchando petisiones en el puerto ${ port }.`);
});