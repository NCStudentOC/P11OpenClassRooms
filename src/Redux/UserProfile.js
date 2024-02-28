
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserProfile, updateUserName } from "../service/UserProfileService";

export const getUserProfileThunk = createAsyncThunk('user/getUserProfile', async (token) => {
    const response = await getUserProfile(token);
    return response;
})

export const updateUserNameThunk = createAsyncThunk('user/updateUserName', async (params) => {
    const response = await updateUserName(params);
    return response;
})

export const userProfile = createSlice({
    name: 'userProfile',
    initialState: {

        email: '',
        password: '',
        firstName: '',
        lastName: '',
        userName: '',
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


            .addCase(getUserProfileThunk.fulfilled, (state, { payload }) => {
                console.log(payload)

                if (payload) {
                    state.firstName = payload.firstName;
                    state.lastName = payload.lastName;
                    state.userName = payload.userName;
                    state.token = payload.token; // Set token

                    state.isFetching = false;
                    state.isSuccess = true;
                } else {
                    console.error('Payload is undefined');
                }
            })
            .addCase(getUserProfileThunk.rejected, (state, { payload }) => {

                if (payload) {
                    console.log('payload', payload);
                    state.isFetching = false;
                    state.isError = true;
                } else {
                    console.error('Payload is undefined');
                }
            })
            .addCase(getUserProfileThunk.pending, (state) => {
                state.isFetching = true;
            })

            .addCase(updateUserNameThunk.fulfilled, (state, { payload }) => {
                console.log(payload)

                if (payload) {
                    state.userName = payload.userName;
                    state.token = payload.token; // Set token

                    state.isFetching = false;
                    state.isSuccess = true;
                } else {
                    console.error('Payload is undefined');
                }
            })
            .addCase(updateUserNameThunk.rejected, (state, { payload }) => {

                if (payload) {
                    console.log('payload', payload);
                    state.isFetching = false;
                    state.isError = true;
                } else {
                    console.error('Payload is undefined');
                }
            })
            .addCase(updateUserNameThunk.pending, (state) => {
                state.isFetching = true;
            })
    }




})

export const { clearState } = userProfile.actions;
export default userProfile.reducer;

