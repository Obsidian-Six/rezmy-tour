const { createSlice } = require("@reduxjs/toolkit");


const initialState = {
    isOpen:false,
}
const modelSlice = createSlice({
    name:'modal',
    initialState,
    reducers: {
        openModal: (state) => {
            state.isOpen = true;
        },
        closeModel: (state) => {
            state.isOpen = false;
        }
    }
})

export const { openModal , closeModel } = modelSlice.actions;
export default modelSlice.reducer