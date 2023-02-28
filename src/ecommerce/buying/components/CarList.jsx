import { useMemo } from "react";
import { useCarStore } from "../../../hooks/useCarStore"
import { CarCard } from "./CarCard"
import { NoCarsForSale } from "./NoCarsForSale";



export const CarList = ({ category }) => {

    const { cars } = useCarStore();
    const categoryCars = useMemo(() => cars.filter( car => car.category === category ), [ cars ]);

    if ( categoryCars.length === 0) {
        return <NoCarsForSale />;
    }

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                categoryCars.map( car => (
                    <CarCard 
                        key={ car.id } 
                        { ...car }
                    />
                ))
            }
        </div>
    )
}