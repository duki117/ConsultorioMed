const { response, request } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/generarJWT');
const passport = require("passport");

const usuariosPost = async (req, res = response) => {

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

const usuariosLogin = async (req, res, nex )=>{

    const { correo, password } = req.body;

    try {
    //Verficar si el email existe
        const usuario = await Usuario.findOne({correo})
        if(!usuario){
            return res.status(400).json({msg:'usuario / password son incorrectos'})
        }
    //Verificar la contraseña
        const validPassword = bcryptjs.compareSync( password, usuario.password );
        if(!validPassword){
            return res.status(400).json({msg:'usuario / password son incorrectos'})
        }
    /*Veficiar si es un correo valido
        if(!usuario.valido){
            return res.status(400).json({msg:'Aun no confirma su correo'})
        }*/
    //Generar el JWT
        const token = await generarJWT ( usuario.id );
        
        res.json({
            usuario,
            token
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    usuariosPost,
    usuariosLogin
}