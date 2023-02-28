import { decodeToken } from "react-jwt";
import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2";
import carApi from "../apis/carApi";
import { clearErrorMesssage, onBuyerLogin, onChecking, onLogout, onSellerLogin } from "../store/slices/auth/authSlice";
import { onLogoutCar } from "../store/slices/car/carSlice";



export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const startLogin = async ( {email, password, userType} ) => {
        
        dispatch( onChecking() );

        try {
            let token;
            if ( userType === 'buyer' ){
                const { data } = await carApi.post('/auth/buyer', { email, password });
                token = data.token;
                dispatch( onBuyerLogin({ name: data.name, uid: data.uid }));
            }
            if ( userType === 'seller' ){
                const { data } = await carApi.post('/auth/seller', { email, password });
                token = data.token;
                dispatch( onSellerLogin({ name: data.name, uid: data.uid }));
            }
            localStorage.setItem('token', token);
            localStorage.setItem('token-init-date', new Date().getTime());

        } catch (error) {
            dispatch( onLogout('incorrect credentials') );
            setTimeout(() => {
                dispatch( clearErrorMesssage() );
            }, 10);
        }
    };

    const startSingUp = async ( {name, email, password, userType} ) => {

        dispatch( onChecking() );

        try {
            let token;
            if ( userType === 'buyer' ){
                const { data } = await carApi.post('/auth/buyer/new', {name, email, password});
                token = data.token;
                dispatch( onBuyerLogin({ name: data.name, uid: data.uid }));
            }
            if ( userType === 'seller' ){
                const { data } = await carApi.post('/auth/seller/new', {name, email, password});
                token = data.token;
                dispatch( onSellerLogin({ name: data.name, uid: data.uid }));
            }
            localStorage.setItem('token', token);
            localStorage.setItem('token-init-date', new Date().getTime());

        } catch ({ response }) {
            dispatch( onLogout( response.data?.msg || 'Enter the fields correctly'));
            setTimeout(() => {
                dispatch( clearErrorMesssage() );
            }, 10);
        }

    }

    const checkAuthToken = async () => {

        const token = localStorage.getItem('token');
        if ( !token ) return dispatch( onLogout() );
        const { userType } = decodeToken( token );

        try {
            let token;
            if ( userType === 'buyer' ){
                const { data } = await carApi.get('/auth/buyer/renew');
                token = data.token;
                dispatch( onBuyerLogin({ name: data.name, uid: data.uid }));
            }
            if ( userType === 'seller' ){
                const { data } = await carApi.get('/auth/seller/renew');
                token = data.token;
                dispatch( onSellerLogin({ name: data.name, uid: data.uid }));
            }
            localStorage.setItem('token', token);
            localStorage.setItem('token-init-date', new Date().getTime());
        } catch (error) {
            localStorage.clear();
            dispatch( onLogout() );
        }

    }

    const startLogout = () => {
        localStorage.clear();
        dispatch( onLogoutCar() );
        dispatch( onLogout() );
        Swal.fire( 'You just logged out', '', 'info' );

    }

    return {
        // Properties
        errorMessage,
        status,
        user,
        // Methods
        startLogin,
        startSingUp,
        checkAuthToken,
        startLogout
    }


}