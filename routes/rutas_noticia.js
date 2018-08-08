const express = require('express');
const app = express();
const hbs = require('hbs');
const mongoose = require('mongoose');
const Noticia = require('../server/models/modelo_noticia');


app.get('/', (req, res) => {
    /* res.send('Hello World');
    let salida = {
        nombre: 'Fernando',
        edad: 32,
        url: req.url};*/

    res.render('parciales/noticias_inicio', {
        //name: 'fernando'
        titular: ' Titular de la noticia +__+',
        imagen: '',
        autor: 'Este tipo publicó *==*'
    });
});
/*
app.get('/about', (req, res) => {

    res.render('parciales/about');

});
*/
app.get('/vista_noticia', (req, res) => {

    res.render('parciales/vista_noticia', {
        titular: ' Titular de la noticia +__+',
        cuerpoNoticia: 'Se supone que este es el cuerpo de la noticia que quieres ver pero, soy solo un ejemplo para que el espacio no esté vacio.\nSe supone que este es el cuerpo de la noticia que quieres ver pero, soy solo un ejemplo para que el espacio no esté vacio.\nSe supone que este es el cuerpo de la noticia que quieres ver pero, soy solo un ejemplo para que el espacio no esté vacio.\nSe supone que este es el cuerpo de la noticia que quieres ver pero, soy solo un ejemplo para que el espacio no esté vacio.\nSe supone que este es el cuerpo de la noticia que quieres ver pero, soy solo un ejemplo para que el espacio no esté vacio.\nSe supone que este es el cuerpo de la noticia que quieres ver pero, soy solo un ejemplo para que el espacio no esté vacio.\nSe supone que este es el cuerpo de la noticia que quieres ver pero, soy solo un ejemplo para que el espacio no esté vacio.',
        imagen: '',
        autor: 'Este tipo publicó *==*'
    });

});



/*
app.get('/data', (req, res) => {

    res.send('Hello Data');

});
*/
//=============================================================//

//========================PETICIONES_POST======================//

app.get('/publicar_noticia', function(req, res) {

    res.render('parciales/formulario_noticia');

});


app.post('/publicar_noticia', function(req, res) {

    let body = req.body;

    let noticia = new Noticia({
        titular: body.titular,
        cuerpoNoticia: body.cuerpoNoticia,
        autor: body.autor
    });


    noticia.save((err, noticiaDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err: err
            });
        }

        //usuarioDB.password = null;

        res.json({
            ok: true,
            noticia: noticiaDB
        });


    });

});


//=============================================================//

//========================PETICIONES_PUT======================//

app.get('/editar_noticia', function(req, res) {

    res.render('parciales/editar_noticia');

});


//=============================================================//

module.exports = app;