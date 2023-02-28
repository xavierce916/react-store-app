import { useMemo } from "react";
import { useParams } from "react-router";
import { useCarStore } from "../../../hooks/useCarStore";
import { CarPageLayout } from "../../layout/CarPageLayout"
import { DeleteCarButton } from "../components/DeleteCarButton";
import { EditCarButton } from "../components/EditCarButton";

export const SalesCarPage = () => {
    
    const { cars } = useCarStore();

    const { id } = useParams();

    const car = useMemo(() => cars.find( car => car.id == id), [cars]);
    
    return (
        <CarPageLayout
            { ...car }
        >
            <EditCarButton 
                { ...car }
                style={ 'mt-3 mx-2' }
            />

            <DeleteCarButton 
                { ...car }
                style={ 'mt-3' }
            />
        </CarPageLayout>
    )
}
//btn btn-outline-dark mt-3 mx-2