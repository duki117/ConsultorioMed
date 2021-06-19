const { Schema, model } = require('mongoose');

const HistorialSchema = Schema ({
    nombre:{
        type:String,
        required: true
    },
    motivo:{
        type:String,
        required: true
    },
    contacto:{
        type:String,
        required: true
    }
});

module.exports = model('Historial', HistorialSchema);