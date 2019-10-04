const express = require('express');
const router = express.Router();

const UsuCtrl = require('../controllers/usuario.controller');

router.get('/', UsuCtrl.getUsuarios);
router.post('/', UsuCtrl.createUsuario);
router.get('/:id', UsuCtrl.getUsuario);
router.put('/:id', UsuCtrl.editUsuario);
router.post('/login', UsuCtrl.login);
router.delete('/:id', UsuCtrl.deleteUsuario);




module.exports = router;
