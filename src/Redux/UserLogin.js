import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from '../service/authService';

export const userLoginauth = createAsyncThunk('user/loginUser', async ({ credential, rememberMe }, thunkAPI) => {
    try {
        const token = await loginUser(credential);
        if (rememberMe) {
            localStorage.setItem('token', token);
        } else {
            sessionStorage.setItem('token', token);
        }
        return token;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});



export const userLogin = createSlice({
    name: 'userLogin',
    initialState: {

        email: '',
        password: '',
        token: '', // Add token
        isError: false,
        isSuccess: false,
        isFetching: false,



    },


    reducers: {
        clearState: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isFetching = false;

            return state;
        },
        logout: (state) => {
            // Reset state
            state.email = '';
            state.password = '';
            state.firstName = '';
            state.lastName = '';
            state.userName = '';
            state.token = '';
            state.isError = false;
            state.isSuccess = false;
            state.isFetching = false;
        },


    },
    extraReducers: (builder) => {
        builder
            .addCase(userLoginauth.fulfilled, (state, { payload }) => {
                if (payload) {
                    state.token = payload.token; // Set token

                    state.isFetching = false;
                    state.isSuccess = true;
                    state.isError = false;

                } else {
                    console.error('Payload is undefined');
                }
            })

            .addCase(userLoginauth.rejected, (state, { payload }) => {
                if (payload) {
                    console.log('payload', payload);
                    state.isFetching = false;
                    state.isError = true;
                    state.isSuccess = false;
                } else {
                    console.error('Payload is undefined');
                }
            })
            .addCase(userLoginauth.pending, (state) => {
                state.isFetching = true;
                state.isError = false;
                state.isSuccess = false;

            })


    }




})

export const { clearState } = userLogin.actions;
export default userLogin.reducer;

