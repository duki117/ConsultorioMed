const { response, request } = require('express');
const Formulario = require('../models/formulario');

const formularioGet = (req = request, res = response) => {

    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page, 
        limit
    });
}

let hstMotivo = 'Aun no hay información';

const formularioPost = async (req, res = response) => {

    const {motivo, peso, talla, temperatura, preArterial, pulso} = req.body;
    const formulario = new Formulario({motivo, peso, talla, temperatura, preArterial, pulso});

    hstMotivo = motivo;
   

    await formulario.save();

    res.json({
        msg: 'post API - formularioPost',
        formulario: formulario,
        motivo: hstMotivo
    });
}



module.exports = {
    formularioGet,
    formularioPost,
    hstMotivo
}
