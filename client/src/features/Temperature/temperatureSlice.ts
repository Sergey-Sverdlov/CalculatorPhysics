import {createSlice, PayloadAction, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {TemperatureDataType, TemperatureType, PayloadChangeType} from './models'

const initialState: TemperatureType = {
    data: {
        kelvin: '',
        celsius: '',
        fahrenheit: '',
    },
    error: null
}

export const calculateTemperature = createAsyncThunk(
    'temperature/calculate',
    async (tempObj, {_, dispatch}) => {
        if (tempObj.value === '') {
            dispatch(resetTemperature())
            return
        }
        const url = `http://localhost:3030/temperature/${tempObj.name}`
        try {
            const response = await axios.post<TemperatureType>(url,
                {
                    temp: Number(tempObj.value)
                })
            dispatch(saveTemperature(response.data))
            return
        } catch (e) {
            dispatch(setError(e.response.data.message.toString()))
            dispatch(resetTemperature())
            return
        }

    },
)

export const temperatureSlice = createSlice({
    name: 'temperature',
    initialState,
    reducers: {
        changeTemperature: (state, action: PayloadAction<PayloadChangeType>) => {
            const data: TemperatureDataType = state.data
            data[action.payload.name] = action.payload.value
            state.error = null
        },
        saveTemperature: (state, action: PayloadAction<TemperatureType>) => {
            const data: TemperatureDataType = state.data
            data.kelvin = action.payload.data.kelvin
            data.celsius = action.payload.data.celsius
            data.fahrenheit = action.payload.data.fahrenheit
        },
        resetTemperature: (state) => {
            const data: TemperatureDataType = state.data
            data.celsius = ''
            data.kelvin = ''
            data.fahrenheit = ''
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
        deleteError: (state) => {
            state.error = null
        }
    }
})

export const {changeTemperature, saveTemperature, resetTemperature, setError} = temperatureSlice.actions
export default temperatureSlice.reducer