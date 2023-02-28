import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShoppingCart } from '../../ecommerce/buying/components/ShoppingCart';
import { useAuthStore } from '../../hooks/useAuthStore';


export const Navbar = () => {

    const navigate = useNavigate();
    const { user, startLogout } = useAuthStore();    

    const onLogin = () => {
        navigate('/auth');
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                PatioTuerca
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/sports"
                    >
                        Sports
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/sedan"
                    >
                        Sedan
                    </NavLink>
                    
                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/suv"
                    >
                        SUV
                    </NavLink>
                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/convertible"
                    >
                        Convertible
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                   
                    <span className="nav-item nav-link text-primary">
                        { user.name }
                    </span>

                    <ShoppingCart />

                    {
                        user.uid ?
                        (
                            <button
                                className="nav-item nav-link btn"
                                onClick={ startLogout }
                            >
                                <i className="fa-solid fa-right-from-bracket"></i>
                            </button>
                        ) :
                        (
                            <button
                                className="nav-item nav-link btn"
                                onClick={ onLogin }
                            >
                                <i className="fa-solid fa-user"></i>
                            </button>
                        )
                    }
                
                </ul>
            </div>
        </nav>
    )
}