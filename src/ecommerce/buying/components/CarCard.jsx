import { Link } from 'react-router-dom';
import { CarCardLayout } from '../../layout/CarCardLayout';
import { AddToCartButton } from './AddToCartButton';


export const CarCard = (car) => {

    return (
        <CarCardLayout
            {...car}
        >
            <AddToCartButton {...car}/>

            <div className="mt-2">

                <Link className="text-decoration-none" to={`/car/${car.id}`}>
                    More...
                </Link>
            </div>



        </CarCardLayout>
    )
}