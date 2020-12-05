import taikhoanApi from "../../../../api/taikhoanApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const userData = createAsyncThunk('users/userData', async () => {
    const user = await taikhoanApi.getAll();
    return user;
})
const User = createSlice({
    name: "users",
    initialState: {
        user: [],
        loading: true,
        error: ''
    },
    reducers: {
        adduser: (state, action) => {
            state.push(action.payload)
        },
        removeuser: (state, action) => {
            const removeuserId = action.payload;
            state = state.filter(user => user.id !== removeuserId);
            return state;
        },
        updateuser: (state, action) => { }
    },
    extraReducers: {
        [userData.pending]: (state) => {
            state.loading = true;
        },
        [userData.rejected]: (state, action) => {
            state.loading = true;
            state.error = action.error;
        },
        [userData.fulfilled]: (state, action) => {
            state.loading = false;
            state.user = action.payload;
        }
    }
});
const { reducer, actions } = User;
export const { adduser, removeuser } = actions;

export default reducer;
