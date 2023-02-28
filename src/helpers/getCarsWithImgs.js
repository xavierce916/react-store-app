import { getFirstImage } from "../apis/imgApi";

export const getCarsWithImgs = ( data ) => {
    const promises = [];
    data.cars.forEach( ( car ) => {
        const promise = new Promise ( async ( resolve ) => {
            const img = await getFirstImage( `${car.brand} ${car.model}` );
            resolve({
                ...car,
                carImg: img
            });
        });
        promises.push(promise);
    });
    return promises;
}