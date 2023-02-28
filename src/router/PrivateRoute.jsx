import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../hooks/useAuthStore';



export const PrivateRoute = ({ children }) => {

    const { status } = useAuthStore();
    // const authStatus = null;

    return (status === 'sellerAuthenticated')
        ? children
        : <Navigate to="/auth" />
}