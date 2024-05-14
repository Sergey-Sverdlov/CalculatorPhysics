import * as React from 'react'
import {useRef} from 'react';
import styles from './MainCalculator.module.scss'
import dataForms from "../../data/dataForms";
import {useSelector, useDispatch} from "react-redux";
import {ConsumptionDataType} from '../../features/Consumption/model'

import {
    changeConsumption,
    changePressure,
    changeTemperature,
    calculateTemperature,
    calculatePressure,
    calculateConsumption,
    setErrorTemperature,
    setErrorConsumption,
    setErrorPressure,
    resetTemperature,
    resetConsumption,
    resetPressure
} from '../../features/index'

type InputValuesType = ConsumptionDataType

interface SendData {
    name: string;
    value: number
}


type ActivePageType = 'consumption' | 'pressure' | 'temperature'

const MainCalculator = () => {
    const dispatch = useDispatch()
    const changeTimerRef = useRef<number>(0)

    const activePage: ActivePageType = useSelector(state => state.activePage.isActivePage)
    const error: string | null = useSelector(state => state[activePage]).error
    const values: InputValuesType = useSelector(state => state[activePage]).data
    const inputForms = dataForms.find(form => form.name === activePage)


    const validateParams = (params: SendData) => {
        if (Math.abs(Number(params.value)) > 1_000_000) { // Проверка на стороне клиента
            switch (activePage) {
                case 'consumption':
                    dispatch(setErrorConsumption('Ошибка на стороне клиента при подсчете расхода'))
                    dispatch(resetConsumption())
                    break
                case 'pressure':
                    dispatch(setErrorPressure('Ошибка на стороне клиента при подсчете давления'))
                    dispatch(resetPressure())
                    break
                case 'temperature':
                    dispatch(setErrorTemperature('Ошибка на стороне клиента при подсчете температуры'))
                    dispatch(resetTemperature())
                    break
            }
            return false
        }
        return true
    }

    const handleChange = (e: React.ChangeEvent) => {
        e.preventDefault()
        const {name, value}: SendData = e.target
        const params = {name, value}

        const calculate = () => {
            if (changeTimerRef.current !== 0) {
                clearTimeout(changeTimerRef.current)
            }
            changeTimerRef.current = setTimeout(() => {
                if (activePage === 'consumption') {
                    if (validateParams(params)) {
                        dispatch(calculateConsumption(params))
                    }
                }
                if (activePage === 'pressure') {
                    if (validateParams(params)) {
                        dispatch(calculatePressure(params))
                    }
                }
                if (activePage === 'temperature') {
                    if (validateParams(params)) {
                        dispatch(calculateTemperature(params))
                    }
                }
            }, 2000)
        }

        switch (activePage) {
            case 'consumption':
                calculate()
                dispatch(changeConsumption(params))
                break
            case 'pressure':
                calculate()
                dispatch(changePressure(params))
                break
            case 'temperature':
                calculate()
                dispatch(changeTemperature(params))
                break
        }
    }

    return (
        <div>
            <div className={styles.consumption}>
                <div className={styles.consumption__container}>
                    <div className={styles.consumption__block}>
                        <div className={styles.consumption__text}>
                            {inputForms.inputValue[0].text}
                        </div>
                        <input
                            value={Object.values(values)[0]}
                            name={inputForms.inputValue[0].name}
                            type="number"
                            className={styles.consumption__input}
                            placeholder="Введите значение"
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className={styles.consumption__block}>
                        <div className={styles.consumption__text}>
                            {inputForms.inputValue[1].text}
                        </div>
                        <div>
                            <input
                                value={Object.values(values)[1]}
                                name={inputForms.inputValue[1].name}
                                type={"number"}
                                className={styles.consumption__input}
                                placeholder="Введите значение"
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                    </div>
                </div>


                <div className={styles.consumption__container}>
                    {inputForms.inputValue[2].text && <div className={styles.consumption__block}>
                        <div className={styles.consumption__text}>
                            {inputForms.inputValue[2].text}
                        </div>
                        <div>
                            <input
                                value={Object.values(values)[2]}
                                name={inputForms.inputValue[2].name}
                                type="number"
                                className={styles.consumption__input}
                                placeholder="Введите значение"
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                    </div>}
                    {inputForms?.inputValue[3] && (
                        <div className={styles.consumption__block}>
                            <div className={styles.consumption__text}>
                                {inputForms.inputValue[3].text}
                            </div>
                            <div>
                                <input
                                    value={Object.values(values)[3]}
                                    name={inputForms.inputValue[3].name}
                                    type="number"
                                    className={styles.consumption__input}
                                    placeholder="Введите значение"
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                        </div>)}
                </div>

            </div>
            {error &&
            <div>
                <h1>
                    {error}
                </h1>
                <p>Попробуйте еще раз</p>
            </div>}

        </div>
    );
};

export default MainCalculator;
