import { useMemo } from "react";
import { useParams } from "react-router";
import { useCarStore } from "../../../hooks/useCarStore";
import { CarPageLayout } from "../../layout/CarPageLayout"
import { AddToCartButton } from "../components/AddToCartButton"

export const CarPage = () => {

    const { cars } = useCarStore();

    const { id } = useParams();

    const car = useMemo(() => cars.find( car => car.id == id ), []);

    return (
        <CarPageLayout {...car} >
            <AddToCartButton {...car} style={'mt-3 mx-3'} />
        </CarPageLayout>
    )
}
