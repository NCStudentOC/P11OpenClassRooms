import { configureStore } from '@reduxjs/toolkit';
import { userLogin } from './UserLogin';
import { userProfile } from './UserProfile';



export const store = configureStore({
    reducer: {
        user: userLogin.reducer,
        userProfile: userProfile.reducer,

    },
});
