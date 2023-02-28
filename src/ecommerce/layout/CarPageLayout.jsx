import { useEffect, useMemo, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getFirstImage } from '../../apis/imgApi';
import { useAuthStore } from '../../hooks/useAuthStore';


export const CarPageLayout = ({children, year, price, mileage, carOwnerUser, model, brand, carImg }) => {

    const navigate = useNavigate();
    // const [img, setImg] = useState( null );
    const { user } = useAuthStore(); 

    const onNavigateBack = () => {
        navigate(-1);
    }

    if (!model) {
        return <Navigate to="/" />
    }


    const isMyCar = useMemo(() => user.uid === carOwnerUser._id , []);

    // useEffect(() => {
       
    //     const getImg = async () => {
    //         const img = await getFirstImage( `${brand} ${model}` );
    //         setImg( img );    
    //     }

    //     getImg();

    // }, [])
    


    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6" >
                    <img src={`${carImg}`} alt={`${brand} ${model}`} className="img-fluid animate__animated animate__fadeIn" />
                </div>
                <div className="col-md-6">
                    <h1>{brand} {model}</h1>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"> <b>Year</b> {year} </li>
                        <li className="list-group-item"> <b>Price</b> ${price} </li>
                        <li className="list-group-item"> <b>Mileage</b> {mileage} </li>
                        {
                            isMyCar ?
                                null
                                    :
                                <li className="list-group-item"> <b>Owner</b> {carOwnerUser.name} </li>
                                
                        }
                    </ul>
                    { children }
                    <button
                        className="btn btn-outline-primary mt-3"
                        onClick={onNavigateBack}
                    >
                        Regresar
                    </button> 
                </div>
            </div>
        </div>
    )
}