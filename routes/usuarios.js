const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { usuariosPost, usuariosLogin} = require('../controllers/usuarios');           

const router = Router();

router.post('/registro',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe ser más de 6 digitos').isLength({ min: 6 }),
    check('correo', 'El correo no es valido').isEmail(),
    check('role', 'No es un rol valido').isIn(['DOCTOR_ROLE', 'ENF_ROLE', 'PAC_ROLE']),
    validarCampos
], usuariosPost );

//router.post('/login', usuariosLogin );

module.exports = router;
