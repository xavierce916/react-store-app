import { useEffect } from "react"
import { Route, Routes } from "react-router"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { BuyingRoutes } from "../ecommerce/buying/routes/BuyingRoutes"
import { SalesRoutes } from "../ecommerce/sales/routes/SalesRoutes"
import { useAuthStore } from "../hooks/useAuthStore"
import { Loading } from "../ui/components/Loading"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoutes } from "./PublicRoutes"

export const AppRouter = () => {

    const { status, checkAuthToken } = useAuthStore();

    useEffect(() => {
        checkAuthToken();

    }, []);


    if (status === 'checking') {
        return (
            <Loading />
        )
    }

    return (

        <>

            <Routes>

                <Route path="/*" element={
                    <PublicRoutes>
                        <Routes>
                            <Route path="/*" element={<BuyingRoutes />} />
                            <Route path="auth/*" element={<AuthRoutes />} />
                        </Routes>
                    </PublicRoutes>
                }
                />


                <Route path="sales/*" element={
                    <PrivateRoute>
                        <SalesRoutes />
                    </PrivateRoute>
                } />

            </Routes>

        </>
        // <>

        //     <Routes>

        //         <Route path="auth/*" element={<AuthRoutes />} />


        //         <Route path="/*" element={ <BuyingRoutes />} />


        //         <Route path="sales/*" element={ <SalesRoutes />} />

        //     </Routes>

        // </>
    )
}
