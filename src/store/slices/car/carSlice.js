import { createSlice } from '@reduxjs/toolkit';


export const carSlice = createSlice({
    name: 'car',
    initialState: {
        isLoadingCars: true,
        cars: [],
        shoppingSummary: []
    },
    reducers: {
        onSetShoppingSummary: ( state, { payload } ) => {
            state.shoppingSummary.push( payload );
        },
        onAddNewCar: ( state, { payload } ) => {
            state.cars.push( payload );
        },
        onUpdateCar: ( state, { payload } ) => {
            const index = state.cars.findIndex( car => car.id === payload.id );
            state.cars[ index ] = payload;
        },
        onDeleteSummaryCars: ( state ) => {
            state.cars = state.cars.filter( car => 
                !state.shoppingSummary.find( summaryCar => summaryCar.id === car.id )
            );
            state.shoppingSummary = [];
        },
        onDeleteSummaryCar: ( state, { payload } ) => {
            state.shoppingSummary = state.shoppingSummary.filter( car => car.id !== payload.id );    
        }, 
        onDeleteCar: ( state, { payload } ) => {
            state.cars = state.cars.filter( car => car.id !== payload.id );
        },
        onLoadCars: ( state, { payload } ) => {
            state.cars = payload;  
            state.isLoadingCars = false;
        },
        onLogoutCar: ( state ) => {
            state.isLoadingCars = true;
            state.cars = [];
            state.shoppingSummary = [];
        }
    }
});


// Action creators are generated for each case reducer function
export const { 
    onSetShoppingSummary, 
    onAddNewCar, 
    onUpdateCar, 
    onDeleteSummaryCars, 
    onDeleteCar, 
    onDeleteSummaryCar, 
    onLoadCars, 
    onLogoutCar 
} = carSlice.actions;