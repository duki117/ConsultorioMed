const { Schema, model } = require('mongoose');

const FormularioSchema = Schema ({
    motivo:{
        type: String,
        required: true,
        trim: true,
    },
    peso: {
        type: String,
        required: true,
        trim: true
    },
    talla: {
        type: String,
        required: true,
        trim: true
    },
    temperatura: {
        type: String,
        required: true,
        trim: true
    },
    preArterial: {
        type: String,
        required: true,
        trim: true
    }, 
    pulso: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = model('Formularios', FormularioSchema);