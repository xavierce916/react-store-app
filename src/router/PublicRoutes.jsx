import { Navigate } from 'react-router-dom';
import { BuyingRoutes } from '../ecommerce/buying/routes/BuyingRoutes';
import { useAuthStore } from '../hooks/useAuthStore';



export const PublicRoutes = ({ children }) => {

    const { status } = useAuthStore();
    // const authStatus = null;

    if ( status === 'buyerAuthenticated' ) {
        return <BuyingRoutes />
    }

    return ( status === 'not-authenticated' )
        ? children
        : <Navigate to="sales/" />
}