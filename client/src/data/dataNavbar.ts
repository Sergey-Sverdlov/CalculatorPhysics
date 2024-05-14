import {Consumption, Pressure, Temperature} from '../assets/index'
import {SVGProps} from 'react'

export interface Link {
    title: string;
    image: SVGProps<SVGSVGElement> | string
}

const dataNavBar: Link[] = [
    {
        title: 'Расход',
        image: Consumption
    },
    {
        title: 'Давление',
        image: Pressure
    },

    {
        title: 'Температура',
        image: Temperature
    }
]

export default dataNavBar