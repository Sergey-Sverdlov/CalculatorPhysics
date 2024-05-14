export interface ConsumptionDataType {
    sec: number | '';
    day: number | '';
    hour: number | '';
    year: number | ''
}

export interface ConsumptionType {
    data: ConsumptionDataType;
    error: null | string
}


export interface PayloadChangeType {
    name: string;
    value: number
}