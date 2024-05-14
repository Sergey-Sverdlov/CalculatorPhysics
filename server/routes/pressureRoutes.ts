const Router = require('express')
const router = new Router()
const pressureController = require('../controller/pressureController')
const pressureMiddleWare = require('../middlewaree/pressureMiddleware')

router.post('/pressure/pa', pressureMiddleWare, pressureController.pressurePa)
router.post('/pressure/bar', pressureMiddleWare, pressureController.pressureBar)
router.post('/pressure/at', pressureMiddleWare, pressureController.pressureAt)
router.post('/pressure/atm', pressureMiddleWare, pressureController.pressureAtm)

module.exports = router