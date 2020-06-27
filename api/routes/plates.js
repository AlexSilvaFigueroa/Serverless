const express = require('express')

const router = express.Router()


router.get('/', (req, res) => {
    res.send('Hola, soy la ruta plates')
})

module.exports = router