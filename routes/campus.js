const express = require('express');
const router = express.Router();

// Respuesta del server a las peticiones
router.get('/', (req, res) => {
    res.status(200).json({succes: true, msg: "Listado de todos los campus"});
});
router.get('/:id', (req, res) => {
    res.status(200).json({succes: true, msg: `Info del campus con id: ${req.params.id}`});
});


router.post('/', (req, res) => {
    res.status(201).json({succes: true, msg: "Nuevo campus creado"});
});

router.put('/:id', (req, res) => {
    res.status(200).json({success: true, msg: `Elemento modificado ${req.params.id}`});
});

router.delete('/:id', (req, res) => {
    res.status(200).json({success: true, msg: `Elemento eliminado ${req.params.id}`});
});

module.exports = router;