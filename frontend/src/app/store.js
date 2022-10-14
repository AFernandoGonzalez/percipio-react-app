import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../features/users/userSlice';

export const store = configureStore({
    reducer: {
        users: taskReducer
    },
})