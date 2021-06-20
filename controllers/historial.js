const { response, request } = require('express');
const Historial = require('../models/historial');
const expClin = require('../models/expClin');


const historialGet = async (req = request, res = response) => {
    
    const historial = await Historial.find();

    res.json({historial});
}

const historialPost = async (req, res = response) => {

    expClin.findOne({ estado: true }, async (err, expClin) => {
        let nombre = expClin.name;
        let diag = expClin.diagAnt;
        let medic = expClin.medAnt;
        
        if (err) return res.status(500).send('Server error!');
        
        const {fecha} = req.body;
        const historial = new Historial ({nombre, diag, medic, fecha });
        await historial.save();


        res.json({historial});
    });
}

module.exports = {
    historialGet,
    historialPost
}
