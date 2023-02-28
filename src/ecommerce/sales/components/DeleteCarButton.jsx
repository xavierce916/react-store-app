import { useCarStore } from "../../../hooks/useCarStore";

export const DeleteCarButton = ( car ) => {

    const { startDeletingCar } = useCarStore();

    const handleDelete = (car) => {
        startDeletingCar(car);
    }

    return (
        <button
            className={`btn btn-outline-danger mx-2 ${car.style}`}
            onClick={() => handleDelete(car)}
        >
            <span className="mx-1">Delete </span>
            <i className="fa-solid fa-trash"></i>
        </button>
    )
}



