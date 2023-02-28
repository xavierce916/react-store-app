import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router"
import { useCarStore } from "../../../hooks/useCarStore";
import { SalesNavbar } from "../../../ui/components/SalesNavbar"
import { PostPage, SalesCarPage, MyCarsPage } from "../pages"

export const SalesRoutes = () => {

    const { startLoadingCarsByUser } = useCarStore();

    useEffect(() => {

        startLoadingCarsByUser();
    
    }, [])
    

    return (
        <>
            <SalesNavbar />

            <div className="container">
                <Routes>
                    <Route path="cars" element={<MyCarsPage />} />
                    <Route path="post" element={<PostPage />} />
                    <Route path="car/:id" element={<SalesCarPage />} />


                    <Route path="/*" element={<Navigate to="cars" />} />

                </Routes>
            </div>

        </>
    )
}
