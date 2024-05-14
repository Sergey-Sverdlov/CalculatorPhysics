const Router = require('express')
const router = new Router()
const tempController = require('../controller/temperatureController')
const temperatureMiddleWare = require('../middlewaree/temperatureMiddleware')

router.post('/temperature/kelvin', temperatureMiddleWare, tempController.tempKelvin)
router.post('/temperature/celsius', temperatureMiddleWare, tempController.tempCelsius)
router.post('/temperature/fahrenheit', temperatureMiddleWare, tempController.tempFah)

module.exports = router