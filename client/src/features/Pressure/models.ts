export interface PressureDataType {
    pa: number | '';
    bar: number | '';
    at: number | '';
    atm: number | ''
}

export interface PressureType {
    data: PressureDataType;
    error: null | undefined
}

export interface PayloadChangeType {
    name: string;
    value: number
}