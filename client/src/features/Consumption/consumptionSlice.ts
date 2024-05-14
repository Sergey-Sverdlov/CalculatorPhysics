import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {ConsumptionType, ConsumptionDataType, PayloadChangeType} from "./model";

const initialState: ConsumptionType = {
    data: {
        sec: '',
        day: '',
        hour: '',
        year: '',
    },
    error: null
}

export const calculateConsumption = createAsyncThunk(
    'consumption/calculate',
    async (consObj, {_, dispatch}) => {
        if (consObj.value === '') {
            dispatch(resetConsumption())
            return
        }
        //Валидация
        const url = `http://localhost:3030/consumption/${consObj.name}`
        try {
            console.log(Number(consObj.value))
            const response = await axios.post<ConsumptionType>(url,
                {
                    consumption: Number(consObj.value)
                })

            dispatch(saveConsumption(response.data))
            return
        } catch (e) {

            dispatch(setError(e.response.data.message.toString()))
            dispatch(resetConsumption())
            return
        }
    },
)

export const consumptionSlice = createSlice({
        name: 'consumption',
        initialState,
        reducers: {
            changeConsumption: (state, action: PayloadAction<PayloadChangeType>) => {
                state.error = null
                const data: ConsumptionDataType = state.data
                data[action.payload.name] = action.payload.value
            },
            saveConsumption: (state, action: PayloadAction<ConsumptionType>) => {
                const data: ConsumptionDataType = state.data
                data.sec = action.payload.data.sec
                data.hour = action.payload.data.hour
                data.day = action.payload.data.day
                data.year = action.payload.data.year
            },
            resetConsumption: (state) => {
                const data: ConsumptionDataType = state.data
                data.sec = ''
                data.hour = ''
                data.day = ''
                data.year = ''
            },
            setError: (state, action: PayloadAction<string>) => {
                state.error = action.payload
            },
            deleteError: (state) => {
                state.error = null
            }
        }
    }
)

export const {changeConsumption, saveConsumption, resetConsumption, setError} = consumptionSlice.actions
export default consumptionSlice.reducer