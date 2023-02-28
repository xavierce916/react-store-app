import { useState } from 'react';
import Select from 'react-select'
import { useCarStore } from '../../../hooks/useCarStore';
import {
    categories,
    sportsBrands,
    convertibleBrands,
    SUVBrands,
    ferrariModels,
    lamborghiniModels,
    porscheModels,
    mercedesModels,
    audiModels,
    bmwModels,
    PeugeotModels,
    hyundaiModels,
    toyotaModels
} from '../data/cars';


const initFormValues = {
    year: 2010,
    price: 20000,
    mileage: 0
};

export const PostPage = () => {

    const { startSavingCar } = useCarStore();

    const [categoryValue, setCategoryValue] = useState(null);
    const [brandValue, setBrandValue] = useState(null);
    const [modelValue, setModelValue] = useState(null);
    const [formValues, setFormValues] = useState( initFormValues );



    const [isBrandDisabled, setIsBrandDisabled] = useState(true);
    const [isModelDisabled, setIsModelDisabled] = useState(true);

    const [brandsOptions, setBrandOptions] = useState([]);
    const [modelsOptions, setModelsOptions] = useState([]);


    const chooseOptions = (value, options) => {

        console.log(options);
        console.log(value);

        const option = options.find(option => option.value === value);

        return option?.reference;

    }

    const handleCategorySelect = (optionSelected) => {

        console.log(optionSelected);
        setCategoryValue(optionSelected);

        setBrandValue(null);
        setModelValue(null);

        setBrandOptions(chooseOptions(optionSelected.value, categories));
        setIsBrandDisabled(false);
        setIsModelDisabled(true);
        setModelsOptions([]);

    }

    const handleBrandSelect = (optionSelected) => {

        setBrandValue(optionSelected);
        setModelValue(null);
        setModelsOptions(chooseOptions(optionSelected.value, brandsOptions));
        setIsModelDisabled(false);
    }

    const handleModelSelect = (optionSelected) => {
        setModelValue(optionSelected);
    }

    const onInputChanged = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    const onSubmit = ( event ) => {

        event.preventDefault();
        startSavingCar({
            category: categoryValue?.value,
            brand: brandValue?.value,
            model: modelValue?.value,
            ...formValues
        });
        setCategoryValue( null );
        setBrandValue( null );
        setModelValue( null );
        setIsBrandDisabled( true );
        setIsModelDisabled( true );
        setBrandOptions([]);
        setModelsOptions([]);
        setFormValues( initFormValues );
    }

    return (
        <>
            <h1> Post a Car </h1>
            <hr />
            <form onSubmit={onSubmit} >
                <div className="form-row" >

                    <div className="form-group col-md-6" >
                        <label htmlFor="formCategory">Select a Category</label>
                        <Select
                            value={categoryValue}
                            options={categories}
                            onChange={handleCategorySelect}
                        />
                    </div>
                    <div className="form-group col-md-6 mt-3" >
                        <label htmlFor="formBrand">Select a Brand</label>
                        <Select
                            value={brandValue}
                            options={brandsOptions}
                            isDisabled={isBrandDisabled}
                            onChange={handleBrandSelect}
                        />

                    </div>
                    <div className="form-group col-md-6 mt-3" >
                        <label htmlFor="formModel">Select a Model</label>

                        <Select
                            value={modelValue}
                            options={modelsOptions}
                            isDisabled={isModelDisabled}
                            onChange={handleModelSelect}
                        />
                    </div>

                    <div className="form-group col-md-6 mt-3" >

                        <label htmlFor="formYear">Year</label>
                        <input
                            type="number"
                            className="form-control"
                            id="formYear"
                            name="year"
                            value={formValues.year}
                            onChange={onInputChanged}
                            required
                        />
                    </div>
                    <div className="form-group col-md-6 mt-3" >
                        <label htmlFor="formPrice">Price</label>
                        <input
                            type="number"
                            className="form-control"
                            id="formPrice"
                            name="price"
                            value={formValues.price}
                            onChange={onInputChanged}
                            required
                        />
                    </div>

                    <div className="form-group col-md-6 mt-3" >
                        <label htmlFor="formPrice">Mileage</label>
                        <input
                            type="number"
                            className="form-control"
                            id="formMileage"
                            name="mileage"
                            value={formValues.mileage}
                            onChange={onInputChanged}
                            required
                        />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary mt-4">
                    Post Car
                </button>

            </form>
        </>

    )

}