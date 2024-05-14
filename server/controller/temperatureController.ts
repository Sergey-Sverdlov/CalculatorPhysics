import {Request, Response} from "express";

const temperatureService = require('../services/TemperatureService')
export type reqParams = {
    temp: number
}

class TempController {
    async tempKelvin(req: Request<{}, {}, reqParams>, res: Response) {
        try {
            const temp: number = req.body.temp
            const resultDtoTemperature = temperatureService.calculateKelvin(temp)
            res.send(resultDtoTemperature)
        } catch (e) {
            res.send(500).json({message: 'Произошла ошибка на сервере'})
        }

    }

    async tempCelsius(req: Request<{}, {}, reqParams>, res: Response) {
        try {
            const temp: number = req.body.temp
            const resultDtoTemperature = temperatureService.calculateCelsius(temp)
            res.send(resultDtoTemperature)
        } catch (e) {
            res.send(500).json({message: 'Произошла ошибка на сервере'})
        }

    }

    async tempFah(req: Request<{}, {}, reqParams>, res: Response) {
        try {
            const temp: number = req.body.temp
            const resultDtoTemperature = temperatureService.calculateFahrenheit(temp)
            res.send(resultDtoTemperature)
        } catch (e) {
            res.send(500).json({message: 'Произошла ошибка на сервере'})
        }

    }
}

module.exports = new TempController()