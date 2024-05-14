import {temperatureDTO} from "../dtoModels/temperatureDto";

class TemperatureService {
    public calculateKelvin(tempKelvin: number) {
        const resultTemperature: temperatureDTO = {
            data: {
                kelvin: Number(tempKelvin),
                celsius: Number((tempKelvin - 273.15).toFixed(3)),
                fahrenheit: Number((tempKelvin * 1.8 - 459.67).toFixed(3))
            },
        }
        return resultTemperature
    }

    public calculateCelsius(tempCelsius: number) {
        const resultTemperature: temperatureDTO = {
            data: {
                kelvin: Number((tempCelsius + 273.15).toFixed(3)),
                celsius: Number(tempCelsius),
                fahrenheit: Number((9 * tempCelsius / 5 + 32).toFixed(3))
            },
        }
        return resultTemperature
    }

    public calculateFahrenheit(tempFahrenheit: number) {
        const resultTemperature = {
            data: {
                kelvin: Number((5 * (tempFahrenheit - 32) / 9 + 273.15).toFixed(3)),
                celsius: Number((5 * (tempFahrenheit - 32) / 9).toFixed(3)),
                fahrenheit: Number(tempFahrenheit)
            },
        }
        return resultTemperature
    }
}

module.exports = new TemperatureService()