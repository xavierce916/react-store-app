import { Link, NavLink } from 'react-router-dom';
import { useAuthStore } from '../../hooks/useAuthStore';


export const SalesNavbar = () => {

    const { user, startLogout } = useAuthStore();

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/sales"
            >
                PatioTuerca
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/sales/cars"
                    >
                        MyCars
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/sales/post"
                    >
                        Post
                    </NavLink>
                    
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                   
                    <span className="nav-item nav-link text-primary">
                        {user.name}
                    </span>

                    <button
                        className="nav-item nav-link btn"
                        onClick={ startLogout }
                    >
                        <i className="fa-solid fa-right-from-bracket"></i>
                    </button>
                
                </ul>
            </div>
        </nav>
    )
}