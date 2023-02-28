import { useEffect } from "react"
import { Navigate, Route, Routes } from "react-router"
import { useCarStore } from "../../../hooks/useCarStore"
import { Navbar } from "../../../ui/components/Navbar"
import { ShoppingCartSummary } from "../components/ShoppingCartSummary"
import { ConvertiblePage, SearchPage, SedanPage, SportsPage, SUVPage, CarPage } from "../pages"

export const BuyingRoutes = () => {

    const { startLoadingCars } = useCarStore();

    useEffect(() => {

        startLoadingCars();
    }, [])
    
    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="sports" element={<SportsPage />} />
                    <Route path="sedan" element={<SedanPage />} />
                    <Route path="suv" element={<SUVPage />} />
                    <Route path="convertible" element={<ConvertiblePage />} />

                    <Route path="search" element={<SearchPage />} />
                    <Route path="car/:id" element={<CarPage />} />


                    <Route path="/*" element={<Navigate to="/sports" />} />
                </Routes>
                    <ShoppingCartSummary />
            </div>

        </>
    )
}
