import { useCarStore } from "../../../hooks/useCarStore";
import { NoCars } from "./NoCars";
import { SalesCarCard } from "./SalesCarCard"


export const SalesCarList = () => {

    const { cars } = useCarStore();

    if ( cars.length === 0 ) {
        return <NoCars />
    }

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                cars.map( car => (
                    <SalesCarCard 
                        key={ car.id } 
                        { ...car }
                    />
                ))
            }
        </div>
    )
}