import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {PressureType, PressureDataType, PayloadChangeType} from './models'

const initialState: PressureType = {
    data: {
        pa: '',
        bar: '',
        at: '',
        atm: ''
    },
    error: null
}

export const calculatePressure = createAsyncThunk(
    'pressure/calculate',
    async (pressureObj, {_, dispatch}) => {
        if (pressureObj.value === '') {
            dispatch(resetPressure())
            return
        }
        const url = `http://localhost:3030/pressure/${pressureObj.name}`

        try {
            const response = await axios.post<PressureType>(url,
                {
                    pressure: Number(pressureObj.value)
                })
            dispatch(savePressure(response.data))
            return
        } catch (e) {
            dispatch(setError(e.response.data.message.toString()))
            dispatch(resetPressure())
            return
        }
    },
)

export const pressureSlice = createSlice({
        name: 'pressure',
        initialState,
        reducers: {
            changePressure: (state, action: PayloadAction<PayloadChangeType>) => {
                const data: PressureDataType = state.data
                data[action.payload.name] = action.payload.value
                state.error = null
            },
            savePressure: (state, action: PayloadAction<PressureType>) => {
                const data: PressureDataType = state.data
                data.pa = action.payload.data.pa
                data.bar = action.payload.data.bar
                data.at = action.payload.data.at
                data.atm = action.payload.data.atm
            },
            resetPressure: (state) => {
                const data: PressureDataType = state.data
                data.pa = ''
                data.bar = ''
                data.at = ''
                data.atm = ''
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

export const {changePressure, savePressure, resetPressure, setError} = pressureSlice.actions
export default pressureSlice.reducer