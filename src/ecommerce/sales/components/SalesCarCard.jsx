import { Link } from 'react-router-dom';
import { useCarStore } from '../../../hooks/useCarStore';
import { CarCardLayout } from '../../layout/CarCardLayout';
import { DeleteCarButton } from './DeleteCarButton';
import { EditCarButton } from './EditCarButton';


export const SalesCarCard = ( car ) => {

    return (
        <CarCardLayout
            { ...car }
        >
            <EditCarButton 
                { ...car }
            />

            <DeleteCarButton 
                { ...car }
            />
            
            <div className="mt-2">

                <Link className="text-decoration-none" to={`/sales/car/${car.id}`}>
                    More...
                </Link>
            </div>
        </CarCardLayout>
    )
}