import { FabHome } from "../components/FabHome";
import '../styles/styles.css';


export const AuthLayout = ({ children, title = '' }) => {


    return (
        <section className="vh-100">
            <FabHome />
            <div className="container py-5 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <img src="/assets/auth.png" className="img-fluid animate__animated animate__fadeIn" alt="Phone image" />
                    </div>
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <h1 className="mb-4">{title}</h1>
                        {children}

                    </div>
                </div>
            </div>
        </section>
    )
}
