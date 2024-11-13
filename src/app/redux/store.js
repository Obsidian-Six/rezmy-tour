const { configureStore } = require("@reduxjs/toolkit");
import modelSlice from "./modelSlice/modelSlice"

export const store = configureStore({
    reducer: {
        modal:modelSlice
    }
})