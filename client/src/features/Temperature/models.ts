export interface TemperatureDataType {
    kelvin: number | '';
    celsius: number | '';
    fahrenheit: number | '';
}

export interface TemperatureType {
    data: TemperatureDataType;
    error: null | undefined
}

export interface PayloadChangeType {
    name: string;
    value: number
}