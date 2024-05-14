type ActivePage = 'consumption' | 'pressure' | 'temperature'
export interface inputValueType {
    name: string;
    text: string;
}

export interface FormType {
    name: ActivePage;
    inputValue: inputValueType[]
}

const dataForms: FormType[] = [
    {
        name: 'consumption',
        inputValue: [
            {
                name: 'sec',
                text: 'м³/сек'
            },
            {
                name: 'day',
                text: 'млн м³/сут'
            },
            {
                name: 'hour',
                text: 'тыс м³/час'
            },
            {
                name: 'year',
                text: 'млрд м³/год'
            }]
    },
    {
        name: 'pressure',
        inputValue: [
            {
                name: 'pa',
                text: 'Па'
            },
            {
                name: 'bar',
                text: 'Бар'
            },
            {
                name: 'at',
                text: 'Ат'
            },
            {
                name: 'atm',
                text: 'Атм'
            }],
    },
    {
        name: 'temperature',
        inputValue: [
            {
                name: 'kelvin',
                text: 'Кельвин'
            },
            {
                name: 'celsius',
                text: 'Цельсий'
            },
            {
                name: 'fahrenheit',
                text: 'Фаренгейт'
            }],
    }
]

export default dataForms