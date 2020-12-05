import tintucApi from "../../../../api/tintucApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const tintucData = createAsyncThunk('tintucs/tintucData', async () => {
    const tintuc = await tintucApi.getAll();
    return tintuc;
})
var datatintuc = [];
const Tintuc = createSlice({
    name: "tintucs",
    initialState: {
        tintuc: [],
        Loading: true,
        error: ''
    },
    reducers: {

        addTintuc: (state, action) => {
            state.push(action.payload)
        },
        removeTintuc: (state, action) => {
            const removeTintucId = action.payload;
            state = state.filter(tintuc => tintuc.id !== removeTintucId);
            return state;
        },
        updateTintuc: (state, action) => { }
    },
    extraReducers: {
        [tintucData.pending]: (state) => {
            state.Loading = true;
        },
        [tintucData.rejected]: (state, action) => {
            state.Loading = true;
            state.error = action.error;
        },
        [tintucData.fulfilled]: (state, action) => {
            state.Loading = false;
            state.tintuc = action.payload;
        }
    }
});
const { reducer, actions } = Tintuc;
export const { addTintuc, removeTintuc } = actions;

export default reducer;
