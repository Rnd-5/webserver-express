const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let noticiaSchema = new Schema({
    titular: {
        type: String,
        required: [true, 'El titular es necesario.']
    },
    cuerpoNoticia: {
        type: String,
        required: [true, 'El cuerpo de la noticia es necesario.']
    },
    autor: {
        type: String,
        required: [true, 'El nombre de la persona que publica esta noticia es necesario.']
    },
    imagen: {
        type: String,
        required: false
    },
    estado: {
        type: Boolean,
        default: true
    },
    clave: {
        type: String,
        required: [true, 'La clave es necesaria']
    },
    fechaPublicacion: {
        type: Date,
        default: Date.now
    }

});


noticiaSchema.methods.ToJSON = function() {
    let news = this;
    let newsObject = news.toObject();

    return newsObject;
}

noticiaSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser unico.' });

module.exports = mongoose.model('Noticia', noticiaSchema);