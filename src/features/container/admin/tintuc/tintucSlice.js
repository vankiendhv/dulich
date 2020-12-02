import tintucApi from "../../../../api/tintucApi";

const { createSlice } = require("@reduxjs/toolkit");


var datatintuc = [];
const Tintuc = createSlice({
    name: "tintucs",
    initialState: {
        datatintuc: [],
        status: 'idle',
        error: null
    },
    reducers: {
        TintucSuccess: (state, action) => {
            state.tintuc = action.payload;
            state.isLoading = false;
        },
        addTintuc: (state, action) => {
            state.push(action.payload)
        },
        removeTintuc: (state, action) => {
            const removeTintucId = action.payload;
            state = state.filter(tintuc => tintuc.id !== removeTintucId);
            return state;
        },
        updateTintuc: (state, action) => { }
    }
});
const { reducer, actions } = Tintuc;
export const { addTintuc, removeTintuc, TintucSuccess } = actions;

export default reducer;
