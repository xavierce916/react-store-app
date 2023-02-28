import { useMemo } from "react";
import { useNavigate } from "react-router";
import { useAuthStore } from "../../../hooks/useAuthStore";
import { useCarStore } from "../../../hooks/useCarStore";

export const AddToCartButton = (car) => {

    const navigate = useNavigate();
    const { user } = useAuthStore();
    const { setShoppingSummary, shoppingSummary } = useCarStore();

    
    const handleAddCar = () => {
        if ( !user.uid ) {
            return navigate('/auth');   
        }
        setShoppingSummary(car);
    }

    const isDisabled = useMemo(() =>
        shoppingSummary.some(summaryCar => summaryCar.id === car.id),
        [shoppingSummary]);


    return (
        <button
            className={`btn btn-outline-dark ${car.style}`}
            onClick={handleAddCar}
            disabled={isDisabled}
        >
            <span>Add to Cart </span>
            <i className="fa-sharp fa-solid fa-cart-plus"></i>
        </button>
    )
}