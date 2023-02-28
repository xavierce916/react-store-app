import { useEffect, useState } from "react";
import { getFirstImage } from "../../apis/imgApi";

export const CarCardLayout = ({
    children,
    brand,
    model,
    year,
    price,
    carImg
}) => {

    // const [img, setImg] = useState( null );

    // useEffect(() => {
       
    //     const getImg = async () => {
    //         const img = await getFirstImage( `${brand} ${model}` );
    //         setImg( img );    
    //     }

    //     getImg();

    // }, [])
    

    return (
        <div className="animate__animated animate__fadeIn">
            <div className="card" >
                <div className="">
                    <img className="card-img-top animate__animated animate__fadeIn" src={`${carImg}`} alt={ model} />
                    <div className="card-body">
                        <h5 className="card-title">{brand} {model}</h5>
                        <p className="card-text">
                            Year: {year}
                            <br />
                            Price: ${price}
                        </p>
                        { children }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
