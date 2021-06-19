const { response, request } = require('express');
const Historial = require('../models/historial');
const { hstNombre } = require('./expClin');
const { hstMotivo } = require('./formulario');

const historialGet = (req = request, res = response) => {

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

const historialPost = async (req, res = response) => {

    const {fecha } = req.body;
    const historial = new Historial (hstNombre, hstMotivo, fecha );

    await historial.save();

    res.json({
        msg: 'post API - HistorialPost',
        historial: historial
    });
}

module.exports = {
    historialGet,
    historialPost
}
