import loginApi from "../../../api/loginApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const Login = createSlice({
    name: "logins",
    initialState: {
        login: [],
        loading: true,
        error: ''
    },
    reducers: {
        checklogin: (state, action) => {
            console.log(action.payload);
            loginApi.login(action.payload);
        }
    },
});
const { reducer, actions } = Login;
export const { checklogin } = actions;

export default reducer;
