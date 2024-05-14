type pressureDataType = {
    bar: number | '';
    at: number | '';
    atm: number | '';
    pa: number | ''
}

export type pressureDTO = {
    data: pressureDataType;
}