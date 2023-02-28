
export const EditCarButton = ( car ) => {

    const handleEdit = () => {
        //TODO
    }

    return (
        <button
            className={`btn btn-outline-dark ${ car.style }`}
            onClick={() => handleEdit()}
        >
            <span className="mx-1">Edit </span>
            <i className="fa-solid fa-pen"></i>
        </button>
    )
}
