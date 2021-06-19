const { Router } = require('express');
//const { check } = require('express-validator');
//const { validarCampos } = require('../middlewares/validar-campos');

const { usuariosGet,
        usuariosPut,
        usuariosPost,
        usuariosDelete,
        usuariosPatch } = require('../controllers/usuarios');           

const router = Router();

router.get('/', usuariosGet );

router.put('/:id', usuariosPut );

router.post('/', usuariosPost );

router.delete('/', usuariosDelete );

router.patch('/', usuariosPatch );

module.exports = router;

/*, [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe ser más de 6 digitos').isLength({ min: 6 }),
    check('correo', 'El correo no es valido').isEmail(),
    check('role', 'No es un rol valido').isIn(['DOCTOR_ROLE', 'ENF_ROLE', 'ENF_PAC']),
    validarCampos
]*/