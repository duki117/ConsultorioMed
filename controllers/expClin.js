const { response, request } = require('express');
const ExpClin = require('../models/expClin');

const expClinGet = (req = request, res = response) => {

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

let hstNombre = 'Aun no hay información';

const expClinPost = async (req, res = response) => {

    const {name, genero, ocupa, lNac, nac, alim, habitos, 
    alergias, antMed, antPad, diagAnt, medAnt} = req.body;

    const expClin = new ExpClin ({name, genero, ocupa, lNac, nac, alim, habitos, 
        alergias, antMed, antPad, diagAnt, medAnt});

    const hstNombre = name;    

    await expClin.save();

    res.json({
        msg: 'post API - formularioPost',
        expClin: expClin,
        nombre: hstNombre
    });
}


const expClinPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - usuariosPut',
        id
    });
}

module.exports = {
    expClinGet,
    expClinPost,
    expClinPut,
    hstNombre
}