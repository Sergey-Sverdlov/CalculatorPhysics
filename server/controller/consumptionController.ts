import {Request, Response} from "express";

const consumptionService = require('../services/consumptionService')
export type reqParams = {
    consumption: number
}

class ConsumptionController {
    async consumptionSec(req: Request<{}, {}, reqParams>, res: Response) {
        try {
            const consumption: number = req?.body.consumption;
            const resultDtoConsumption = consumptionService.calculateSec(consumption)
            res.send(resultDtoConsumption)
        } catch (e) {
            res.send(500).json({message: 'Произошла ошибка на сервере'})
        }
    }

    async consumptionHour(req: Request<{}, {}, reqParams>, res: Response) {
        try {
            const consumption: number = req?.body.consumption;
            const resultDtoConsumption = consumptionService.calculateHour(consumption)
            res.send(resultDtoConsumption)
        } catch (e) {
            res.send(500).json({message: 'Произошла ошибка на сервере'})
        }

    }

    async consumptionDay(req: Request<{}, {}, reqParams>, res: Response) {
        try {
            const consumption: number = req?.body.consumption;
            const resultDtoConsumption = consumptionService.calculateDay(consumption)
            res.send(resultDtoConsumption)
        } catch (e) {
            res.send(500).json({message: 'Произошла ошибка на сервере'})
        }

    }

    async consumptionYear(req: Request<{}, {}, reqParams>, res: Response) {
        try {
            const consumption: number = req?.body.consumption;
            const resultDtoConsumption = consumptionService.calculateYear(consumption)
            res.send(resultDtoConsumption)
        } catch (e) {
            res.send(500).json({message: 'Произошла ошибка на сервере'})
        }
    }
}


module.exports = new ConsumptionController()