const { response, request } = require('express');
//const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');
//const { validationResult } = require('express-validator');

const usuariosGet = (req = request, res = response) => {

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
    
    const body = req.body;
    const usuario = new Usuario(body);

    await usuario.save();

    res.json({
        msg: 'post API - formularioPost',
        usuario: usuario,
    });
    
}

const usuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - usuariosPut',
        id
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - usuariosDelete'
    });
}




module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}