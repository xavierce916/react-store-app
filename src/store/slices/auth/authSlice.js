import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // 'buyerAuthenticated' 'sellerAuthenticated'
        user: {},
        errorMessage: undefined
    },
    reducers: {
        onChecking: ( state ) => {
            state.status = 'checking';
            state.user = {};
            state.errorMessage = undefined;
        },
        onBuyerLogin: ( state, { payload } ) => {
            state.status = 'buyerAuthenticated';
            state.user = payload;
            state.errorMessage = undefined;
        },
        onSellerLogin: ( state, { payload } ) => {
            state.status = 'sellerAuthenticated';
            state.user = payload;
            state.errorMessage = undefined;
        },
        onLogout: ( state, { payload } ) => {
            state.status = 'not-authenticated';
            state.user = {};
            state.errorMessage = payload;
        },
        clearErrorMesssage: ( state ) => {
            state.errorMessage = undefined;
        }
    }
});


// Action creators are generated for each case reducer function
export const { onChecking, onBuyerLogin, onSellerLogin, onLogout, clearErrorMesssage } = authSlice.actions;