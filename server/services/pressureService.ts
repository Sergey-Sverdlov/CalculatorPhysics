import {pressureDTO} from '../dtoModels/pressureDto'

class PressureService {
    calculatePa(pressurePa: number) {
        const resultPressure: pressureDTO = {
            data: {
                pa: Number(pressurePa),
                bar: Number((pressurePa * 10**(-5)).toFixed(7)),
                at: Number((pressurePa / 98_066.5).toFixed(7)),
                atm: Number((pressurePa / 101_325).toFixed(7))
            },
        }
        return resultPressure
    }

    calculateBar(pressureBar: number) {
        const resultPressure: pressureDTO = {
            data: {
                pa: Number((pressureBar * 100_000).toFixed(7)),
                bar: Number(pressureBar),
                at: Number((pressureBar * 1.0197).toFixed(7)),
                atm: Number((pressureBar * 0.9869).toFixed(7))
            },
        }
        return resultPressure
    }

    calculateAt(pressureAt: number) {
        const resultPressure: pressureDTO = {
            data: {
                pa: Number((pressureAt * 98_066.5).toFixed(7)),
                bar: Number((pressureAt * 0.980665).toFixed(7)),
                at: Number(pressureAt),
                atm: Number((pressureAt * 0.96784).toFixed(7))
            },
        }
        return resultPressure
    }

    calculateAtm(pressureAtm: number) {
        const resultPressure: pressureDTO = {
            data: {
                pa: Number((pressureAtm * 101_325).toFixed(7)),
                bar: Number((pressureAtm * 1.01325).toFixed(7)),
                at: Number((pressureAtm * 1.0332).toFixed(7)),
                atm: Number((pressureAtm).toFixed(7))
            },

        }
        return resultPressure
    }
}

module.exports = new PressureService()