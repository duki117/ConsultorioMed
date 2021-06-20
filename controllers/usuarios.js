const { response, request } = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'secretkey123456';
const Usuario = require('../models/usuario');

const usuariosPost = async (req, res = response) => {
    /*
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors);
    }

    const {nombre, correo, passsword, role} = req.body;
    const usuario = new Usuario({nombre, correo, passsword, role});

    //Veificar si el correo existe
    const existeEmail = await Usuario.findOne({ correo });
    if(existeEmail){
        return res.status(400).json({
            msg: 'Ese correo ya esta registrado'
        })
    }
    //Encriptar la contraseña
    const salt = bcryptjs.genSaltSync(10);
    usuario.passsword = bcryptjs.hashSync(passsword, salt);
    
    await usuario.save();

    res.json({
        msg: 'post API - usuariosPost',
        usuario: usuario
    });
    */



    const nombre = req.body.nombre;
    const correo = req.body.correo;
    const password = bcryptjs.hashSync(req.body.password);
    const role = req.body.role;
    
    const usuario = new Usuario({nombre, correo, password, role});

    //Veificar si el correo existe
    const existeEmail = await Usuario.findOne({ correo });
    if(existeEmail){
        return res.status(400).json({
            msg: 'Ese correo ya esta registrado'
        })
    }
    await usuario.save();

    res.json({
        usuario
    });
    
}

module.exports = {
    usuariosPost
}