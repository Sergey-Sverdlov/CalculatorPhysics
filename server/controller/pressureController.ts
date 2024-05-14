import {Request, Response} from "express";

const pressureService = require('../services/pressureService')
export type reqParams = {
    pressure: number
}

class PressureController {
    async pressurePa(req: Request<{}, {}, reqParams>, res: Response) {
        try {
            const pressure: number = req.body.pressure;
            const resultDtoPressure = pressureService.calculatePa(pressure)
            res.send(resultDtoPressure)
        } catch (e) {
            res.send(500).json({message: 'Произошла ошибка на сервере'})
        }

    }

    async pressureBar(req: Request<{}, {}, reqParams>, res: Response) {
        try {
            const pressure: number = req.body.pressure;
            const resultDtoPressure = pressureService.calculateBar(pressure)
            res.send(resultDtoPressure)
        } catch (e) {
            res.send(500).json({message: 'Произошла ошибка на сервере'})
        }
    }

    async pressureAt(req: Request<{}, {}, reqParams>, res: Response) {
        try {
            const pressure: number = req.body.pressure;
            const resultDtoPressure = pressureService.calculateAt(pressure)
            res.send(resultDtoPressure)
        } catch (e) {
            res.send(500).json({message: 'Произошла ошибка на сервере'})
        }

    }

    async pressureAtm(req: Request<{}, {}, reqParams>, res: Response) {
        try {
            const pressure: number = req.body.pressure;
            const resultDtoPressure = pressureService.calculateAtm(pressure)
            res.send(resultDtoPressure)
        } catch (e) {
            res.send(500).json({message: 'Произошла ошибка на сервере'})
        }

    }
}

module.exports = new PressureController()