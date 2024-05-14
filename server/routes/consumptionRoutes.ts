const Router = require('express')
const router = new Router()
const consController = require('../controller/consumptionController')
const consumptionMiddleWare = require('../middlewaree/consMiddleware')

router.post('/consumption/sec', consumptionMiddleWare, consController.consumptionSec)
router.post('/consumption/hour', consumptionMiddleWare, consController.consumptionHour)
router.post('/consumption/day', consumptionMiddleWare, consController.consumptionDay)
router.post('/consumption/year', consumptionMiddleWare, consController.consumptionYear)

module.exports = router