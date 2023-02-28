import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../hooks/useAuthStore";
import { useCarStore } from "../../../hooks/useCarStore";
import { useUiStore } from "../../../hooks/useUiStore"

export const ShoppingCart = () => {
    
    const navigate = useNavigate();
    const { user } = useAuthStore();
    const { openModal } = useUiStore();
    const { shoppingSummary } = useCarStore();

    const handleOpen = () => {
        if ( !user.uid ) {
            return navigate('/auth');   
        }
        openModal();
    }

    return (
        <button
            className="nav-item nav-link btn"
            onClick={ handleOpen }
        >
            <i className="fa-solid fa-cart-shopping"></i>
            <span 
                className="translate-middle badge rounded-pill text-bg-primary" 
            >
                { shoppingSummary.length } 
            </span>
        </button>
    )
}
