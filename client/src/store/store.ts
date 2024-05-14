import {configureStore} from "@reduxjs/toolkit";
import ActivePageSlice from "../features/ActivePage/ActivePageSlice";
import consumptionSlice from "../features/Consumption/consumptionSlice";
import pressureSlice from "../features/Pressure/pressureSlice";
import temperatureSlice from "../features/Temperature/temperatureSlice";
export const store = configureStore({
    reducer: {
        activePage: ActivePageSlice,
        consumption: consumptionSlice,
        pressure: pressureSlice,
        temperature: temperatureSlice,
    }
})
