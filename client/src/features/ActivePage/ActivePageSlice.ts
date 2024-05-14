import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface ActivePageType {
    isActivePage: 'consumption' | 'pressure' | 'temperature'
}

const initialState: ActivePageType = {
    isActivePage: 'consumption'
}

export const pageSlice = createSlice({
    name: 'isActivePage',
    initialState,
    reducers: {
        changeActivePage: (state, action: PayloadAction<ActivePageType>) => {
            state.isActivePage = action.payload
        }
    }
})

export const {changeActivePage} = pageSlice.actions
export default pageSlice.reducer