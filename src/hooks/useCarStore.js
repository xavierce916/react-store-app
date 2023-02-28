import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import carApi from "../apis/carApi";
import { getFirstImage } from "../apis/imgApi";
import { getCarsWithImgs } from "../helpers/getCarsWithImgs";
import { onAddNewCar, onDeleteCar, onDeleteSummaryCar, onDeleteSummaryCars, onLoadCars, onSetShoppingSummary, onUpdateCar } from "../store/slices/car/carSlice";
import { useAuthStore } from "./useAuthStore";
import { useUiStore } from "./useUiStore";

export const useCarStore = () => {

    const { user } = useAuthStore();
    const { closeModal } = useUiStore();
    const dispatch = useDispatch();

    const { 
        cars,
        shoppingSummary
    } = useSelector( state => state.car );

    const setShoppingSummary = ( car ) => {
        dispatch( onSetShoppingSummary( car ) );
    }

    const deleteSummaryCar = ( car ) => {
        dispatch( onDeleteSummaryCar( car ) );
    }

    const startSavingCar = async ( car ) => {

        try {
            
            const { data } = await carApi.post('/cars', car );
            const img = await getFirstImage( `${car.brand} ${car.model}` );
            dispatch( onAddNewCar({ ...car, id: data.car.id, carImg: img, carOwnerUser: {
                _id: user.uid, name: user.name 
            }}));
            Swal.fire('Your car has been published', '', 'success');
            
        } catch ({response}) {
            
            console.log(response);
            Swal.fire('failed to save', 'enter the fields correctly', 'error' );

        }
    }

    const startUpdatingCar =  async ( car ) => {

        try {
            
            await carApi.put(`/cars/${ car.id }`, car);
            dispatch( onUpdateCar({  ...car, carOwnerUser: user }));

        } catch ({response}) {

            console.log(response);
            Swal.fire('failed to update', 'enter the fields correctly', 'error' );
            
        }
    }
        

    const startDeletingCar = async ( car ) => {

        try {

            await carApi.delete(`/cars/${ car.id }`);
            dispatch( onDeleteCar( car ) );
            Swal.fire( 'You have deleted a car', '', 'success' );
            
        } catch (error) {

            console.log('error deleting car');
            console.log(error);

        }
    }

    const startDeletingSummaryCars = async () => {

        const ids = shoppingSummary.map( car => car.id );
        const idsString = ids.reduce((accumulator, currentValue) => accumulator === '' ? currentValue :`${accumulator},${currentValue}`, '');
        
        try {
            await carApi.delete(`/cars/delete/${ idsString }`);
            dispatch( onDeleteSummaryCars() );
            closeModal();
            Swal.fire( 'Thanks for your purchase', '', 'success' );
        } catch (error) {
            
            console.log('error deleting cars');
            console.log(error);
        }
    }

    const startLoadingCars = async() => {
        try {
            const { data } = await carApi.get('/cars');
            const promises = getCarsWithImgs( data );
            Promise.all( promises ).then( (cars) => {
                dispatch( onLoadCars( cars ));
            });

        } catch (error) {
            console.log('error loading cars');
            console.log(error);
        }
    }
    
    const startLoadingCarsByUser = async () => {
        try {
            const { data } = await carApi('/cars/user');
            const promises = getCarsWithImgs( data );
            Promise.all( promises ).then( (cars) => {
                dispatch( onLoadCars( cars ));
            });
        } catch (error) {
            console.log('error loading cars');
            console.log(error);
        }
    }

    return {
        // Properties
        cars,
        shoppingSummary,
        // Methods
        setShoppingSummary,
        deleteSummaryCar,
        startSavingCar,
        startDeletingCar,
        startDeletingSummaryCars,
        startLoadingCars,
        startLoadingCarsByUser,
        startUpdatingCar
    }
}
