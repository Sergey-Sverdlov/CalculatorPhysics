type temperatureDataType = {
    kelvin: number | '';
    celsius: number | '';
    fahrenheit: number | '';
}

export type temperatureDTO = {
    data: temperatureDataType;
}