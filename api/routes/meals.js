const express = require('express')
const Meals = require('../models/meals')
const router = express.Router()

router.get('/', (req, res) => {                             //200 = Peticion correcta
    Meals.find()
    .exec()
    .then(x => res.status(200).send(x))
})

//Buscar elemento particular
router.get('/:id', (req, res) => {                          //200 = Peticion correcta
    Meals.findById(req.params.id)
    .exec()
    .then(x => res.status(200).send(x))
})
//Crear
router.post('/', (req, res) => {               
    Meals.create(req.body)
                                                            //201 = Creado
    .then(x => res.status(201).send(x))
})
// *Poner*
router.put('/:id', (req, res) => {
    Meals.findByIdAndUpdate(req.params.id, req.body)
                                                            //204 = Sin contenido
    .then(() => res.sendStatus(204))
})
                                                            /*--------------------------*/ 
                                                            //Si necesitaramos tener un metodo de reemplazar implementariamos patch
                                                            //router.patch
                                                            /*--------------------------*/
                                                            //Borrar
router.delete('/:id', (req, res) => {
    Meals.findOneAndDelete(req.params.id).exec().then(() => res.sendStatus(204))
})

module.exports = router