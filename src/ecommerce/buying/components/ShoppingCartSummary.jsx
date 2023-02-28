import { useMemo } from 'react';
import Modal from 'react-modal';
import { useCarStore } from '../../../hooks/useCarStore';
import { useUiStore } from '../../../hooks/useUiStore';
import '../styles/modal.css';
import { NoCarsInSCS } from './NoCarsInSCS';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


Modal.setAppElement('#root');

export const ShoppingCartSummary = () => {

    const { isModalOpen, closeModal } = useUiStore();

    const { shoppingSummary, startDeletingSummaryCars, deleteSummaryCar } = useCarStore();

    const handleBuy = () => {
        startDeletingSummaryCars();
    }

    const handleDelete = (car) => {
        deleteSummaryCar(car);
    }

    const pricesSum = useMemo(() => {
        const prices = shoppingSummary.map(car => car.price);
        return prices.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    },
        [shoppingSummary]);

    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            style={customStyles}
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={200}
        >
            {
                shoppingSummary.length === 0
                    ?
                    <NoCarsInSCS />
                    :
                    <>
                        <div className="card bg-light mb-3">
                            <div className="card-header">Summary Cart</div>
                            <div className="card-body">

                                {shoppingSummary.map(car => (
                                    <>
                                        <div key={car.id}
                                            className="d-flex justify-content-between align-items-center mb-3"
                                        >
                                            <div>
                                                <h6> {car.brand} {car.model} </h6>
                                                <p className="text-muted">{car.year}</p>
                                            </div>
                                            <div>
                                                <p className="font-weight-bold">${car.price}</p>
                                            </div>
                                        </div>
                                        <button
                                            className="btn btn-outline-danger"
                                            onClick={() => handleDelete(car)}
                                        >
                                            <i className="fa-solid fa-trash"></i>
                                        </button>


                                        <hr />
                                    </>
                                ))}
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="font-weight-bold mb-0">Total:</p>
                                    <p className="font-weight-bold mb-0">${pricesSum}</p>
                                </div>
                            </div>
                        </div>
                        <button
                            className="btn btn-outline-primary w-100"
                            onClick={handleBuy}
                        >
                            Buy
                        </button>
                    </>
            }
        </Modal>
    )
}
