import { useNavigate } from "react-router"

export const FabHome = () => {

    const navigate = useNavigate();

    const onReturn = () => {

        navigate('/');

    }

    return (

        <button
            className="btn btn-primary fab"
            onClick={ onReturn }
        >
            <i className="fa-solid fa-house"></i>
        </button>
    )
}
