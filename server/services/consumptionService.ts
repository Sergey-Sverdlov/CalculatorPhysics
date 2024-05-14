import {consumptionDTO} from '../dtoModels/consumptionDto'

class ConsumptionService {
    calculateSec(consumptionSec: number) {
        const resultConsumption: consumptionDTO = {
            data: {
                sec: Number(consumptionSec),
                hour: Number((consumptionSec * 3.6).toFixed(7)),
                day: Number((consumptionSec * 0.0864).toFixed(7)),
                year: Number((consumptionSec * 0.031536).toFixed(7))
            },
        }
        return resultConsumption
    }

    calculateHour(consumptionHour: number) {
        const resultConsumption: consumptionDTO = {
            data: {
                sec: Number((consumptionHour / 3.6).toFixed(7)),
                hour: Number(consumptionHour),
                day: Number((consumptionHour * 24 / 1_000).toFixed(7)),
                year: Number((consumptionHour * 8760 / 1_000_000).toFixed(7))
            },
        }
        return resultConsumption
    }

    calculateDay(consumptionDay: number) {
        const resultConsumption: consumptionDTO = {
            data: {
                sec: Number((consumptionDay * 1_000_000 / 86_400).toFixed(7)),
                hour: Number((consumptionDay * 1_000_000 / 24_000).toFixed(7)),
                day: Number(consumptionDay),
                year: Number((consumptionDay * 365 / 1000).toFixed(7))
            },
        }
        return resultConsumption
    }

    calculateYear(consumptionYear: number) {
        const resultConsumption: consumptionDTO = {
            data: {
                sec: Number(consumptionYear * 1000 / 31.536),
                hour: Number((consumptionYear * 1000 / 8.76).toFixed(7)),
                day: Number((consumptionYear * 1000 / 365).toFixed(7)),
                year: Number(consumptionYear)
            },
        }
        return resultConsumption
    }
}

module.exports = new ConsumptionService()