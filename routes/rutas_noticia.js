const express = require('express');
const app = express();
const hbs = require('hbs');
const mongoose = require('mongoose');
const Noticia = require('../server/models/modelo_noticia');


//========================PETICIONES_GET======================//
app.get('/', (req, res) => {

    Noticia.find(function(err, noticia) {
        res.render('parciales/noticias_inicio', {
            title: 'Node Project',
            noticias: noticia
        });
    });

    /* res.send('Hello World');
    let salida = {
        nombre: 'Fernando',
        edad: 32,
        url: req.url};*/
    /*
    let id = req.params.id;
    let body = req.body;
    let datos = {
        dato1: 'Ulala',
        listNoticias: [,
            { 'id': 'ab13', 'titular': 'Titular_1', 'imagen': '', 'autor': 'Autor_1 publicó *==*' },
            { 'id': 'ac23', 'titular': 'Titular_2', 'imagen': '', 'autor': 'Autor_2 publicó *==*' },
            { 'id': 'ad33', 'titular': 'Titular_3', 'imagen': '', 'autor': 'Autor_3 publicó *==*' },
            { 'id': 'ae43', 'titular': 'Titular_4', 'imagen': '', 'autor': 'Autor_4 publicó *==*' },
            { 'id': 'af53', 'titular': 'Titular_5', 'imagen': '', 'autor': 'Autor_5 publicó *==*' },
            { 'id': 'ag63', 'titular': 'Titular_6', 'imagen': '', 'autor': 'Autor_6 publicó *==*' },
            { 'id': 'ah73', 'titular': 'Titular_7', 'imagen': '', 'autor': 'Autor_7 publicó *==*' },
            { 'id': '5b6a68df1a1ad98e90a5403f', 'titular': 'Titular_8', 'imagen': '', 'autor': 'Autor_8 publicó *==*' }
        ]
    };
    res.render('parciales/noticias_inicio', datos);
    */
    /*res.render('parciales/noticias_inicio', {
        //name: 'fernando'
        titular: ' Titular de la noticia +__+',
        imagen: '',
        autor: 'Este tipo publicó *==*'
    });*/
});


app.get('/vista_noticia/:id', (req, res) => {
    /*
        mongoose.model('Noticia').find(function(err, Noticia) {
            let id = req.params.id;
            Noticia.forEach(element => {
                if (element.id == id) {
                    console.log(element);
                    res.render('parciales/vista_noticia', {
                        titular: Noticia.titular,
                        cuerpoNoticia: Noticia.cuerpoNoticia,
                        autor: Noticia.autor
                    });
                }
            });

        });*/

    let id = req.params.id;
    let body = req.body;

    Noticia.findById(id, body, (err, noticiaDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err: err
            });
        }

        result = {
            titular: noticiaDB.titular, //' Titular de la noticia +__+',
            cuerpoNoticia: noticiaDB.cuerpoNoticia, //'Se supone que este es el cuerpo de la noticia que quieres ver pero, soy solo un ejemplo para que el espacio no esté vacio.\nSe supone que este es el cuerpo de la noticia que quieres ver pero, soy solo un ejemplo para que el espacio no esté vacio.\nSe supone que este es el cuerpo de la noticia que quieres ver pero, soy solo un ejemplo para que el espacio no esté vacio.\nSe supone que este es el cuerpo de la noticia que quieres ver pero, soy solo un ejemplo para que el espacio no esté vacio.\nSe supone que este es el cuerpo de la noticia que quieres ver pero, soy solo un ejemplo para que el espacio no esté vacio.\nSe supone que este es el cuerpo de la noticia que quieres ver pero, soy solo un ejemplo para que el espacio no esté vacio.\nSe supone que este es el cuerpo de la noticia que quieres ver pero, soy solo un ejemplo para que el espacio no esté vacio.',
            imagen: '',
            autor: noticiaDB.autor //'Este tipo publicó *==*'
        };

        res.render('parciales/vista_noticia', result)

    });

    /*res.render('parciales/vista_noticia', {
        titular: ' Titular de la noticia +__+',
        cuerpoNoticia: 'Se supone que este es el cuerpo de la noticia que quieres ver pero, soy solo un ejemplo para que el espacio no esté vacio.\nSe supone que este es el cuerpo de la noticia que quieres ver pero, soy solo un ejemplo para que el espacio no esté vacio.\nSe supone que este es el cuerpo de la noticia que quieres ver pero, soy solo un ejemplo para que el espacio no esté vacio.\nSe supone que este es el cuerpo de la noticia que quieres ver pero, soy solo un ejemplo para que el espacio no esté vacio.\nSe supone que este es el cuerpo de la noticia que quieres ver pero, soy solo un ejemplo para que el espacio no esté vacio.\nSe supone que este es el cuerpo de la noticia que quieres ver pero, soy solo un ejemplo para que el espacio no esté vacio.\nSe supone que este es el cuerpo de la noticia que quieres ver pero, soy solo un ejemplo para que el espacio no esté vacio.',
        imagen: '',
        autor: 'Este tipo publicó *==*'
    });*/

    /*
        let id = req.params.id;
        let body = req.body;
        
        Noticia.findById(id, body, (err, noticiaDB) => {
        
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err: err
                });
            }

        /*res.json({
            ok: true,
            noticia: noticiaDB
        });

        
        res.render('parciales/vista_noticia', {
            titular: noticiaDB.titular, //' Titular de la noticia +__+',
            cuerpoNoticia: noticiaDB.cuerpoNoticia, //'Se supone que este es el cuerpo de la noticia que quieres ver pero, soy solo un ejemplo para que el espacio no esté vacio.\nSe supone que este es el cuerpo de la noticia que quieres ver pero, soy solo un ejemplo para que el espacio no esté vacio.\nSe supone que este es el cuerpo de la noticia que quieres ver pero, soy solo un ejemplo para que el espacio no esté vacio.\nSe supone que este es el cuerpo de la noticia que quieres ver pero, soy solo un ejemplo para que el espacio no esté vacio.\nSe supone que este es el cuerpo de la noticia que quieres ver pero, soy solo un ejemplo para que el espacio no esté vacio.\nSe supone que este es el cuerpo de la noticia que quieres ver pero, soy solo un ejemplo para que el espacio no esté vacio.\nSe supone que este es el cuerpo de la noticia que quieres ver pero, soy solo un ejemplo para que el espacio no esté vacio.',
            imagen: '',
            autor: noticiaDB.autor //'Este tipo publicó *==*'
        });
    */

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

app.put('/editar_noticia/:id', function(req, res) {
    let id = req.params.id;
    let body = req.body;

    Usuario.findByIdAndUpdate(id, body, { new: true }, (err, noticiaDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err: err
            });
        }

        res.json({
            ok: true,
            usuario: noticiaDB
        });

    });
});


//=============================================================//


//========================PETICIONES_DELETE====================//


//=============================================================//

module.exports = app;