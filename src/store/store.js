import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './slices/auth/authSlice';
import { carSlice } from './slices/car/carSlice';
import { uiSlice } from './slices/ui/uiSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        car: carSlice.reducer,
        ui: uiSlice.reducer
    },
});