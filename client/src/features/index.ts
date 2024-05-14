import {changeConsumption} from '../features/Consumption/consumptionSlice'
import {changePressure} from '../features/Pressure/pressureSlice'
import {changeTemperature} from '../features/Temperature/temperatureSlice'
import {calculateTemperature} from '../features/Temperature/temperatureSlice'
import {calculatePressure} from "../features/Pressure/pressureSlice";
import {calculateConsumption} from "../features/Consumption/consumptionSlice";
import {setError as setErrorConsumption} from "../features/Consumption/consumptionSlice"
import {setError as setErrorPressure} from "../features/Pressure/pressureSlice"
import {setError as setErrorTemperature} from "../features/Temperature/temperatureSlice"
import {resetConsumption} from "../features/Consumption/consumptionSlice"
import {resetPressure} from "../features/Pressure/pressureSlice"
import {resetTemperature} from "../features/Temperature/temperatureSlice"

export {
    changeConsumption,
    changePressure,
    changeTemperature,
    calculateTemperature,
    calculatePressure,
    calculateConsumption,
    setErrorTemperature,
    setErrorConsumption,
    setErrorPressure,
    resetPressure,
    resetTemperature,
    resetConsumption
}