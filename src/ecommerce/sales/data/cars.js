
const ferrariModels = [
    {
        label: 'California T',
        value: 'California T'
    },
    {
        label: 'Portofino',
        value: 'Portofino'
    },
    {
        label: 'F12 Berlinetta',
        value: 'F12 Berlinetta'
    }
];

const lamborghiniModels = [
    {
        label: 'Aventador',
        value: 'Aventador'
    },
    {
        label: 'Urus',
        value: 'Urus'
    },
    {
        label: 'Countach',
        value: 'Countach'
    }
];

const porscheModels = [
    {
        label: '718 Boxter',
        value: '718 Boxter'
    },
    {
        label: '718 Spyder',
        value: '718 Spyder'
    },
    {
        label: 'Cayman',
        value: 'Cayman'
    }
];

const mercedesModels = [
    {
        label: 'C-Class Cabriolet',
        value: 'C-Class Cabriolet'
    },
    {
        label: 'E-Class Cabriolet',
        value: 'E-Class Cabriolet'
    },
    {
        label: 'SL Roadster',
        value: 'SL Roadster'
    }
];

const audiModels = [
    {
        label: 'A3 Cabriolet',
        value: 'A3 Cabriolet'
    },
    {
        label: 'A5 Cabriolet',
        value: 'A5 Cabriolet'
    },
    {
        label: 'R8 Cabriolet',
        value: 'R8 Cabriolet'
    }
];

const bmwModels = [
    {
        label: '4 Series Convertible',
        value: '4 Series Convertible'
    },
    {
        label: '8 Series Convertible',
        value: '8 Series Convertible'
    },
    {
        label: 'Z4 Roadster',
        value: 'Z4 Roadster'
    }
];

const PeugeotModels = [
    {
        label: '2008',
        value: '2008'
    },
    {
        label: '3008',
        value: '3008'
    },
    {
        label: '5008',
        value: '5008'
    }
];

const hyundaiModels = [
    {
        label: 'Palisade',
        value: 'Palisade'
    },
    {
        label: 'Tuscon',
        value: 'Tuscon'
    },
    {
        label: 'Santa Fe',
        value: 'Santa Fe'
    }
];

const toyotaModels = [
    {
        label: 'Highlander',
        value: 'Highlander'
    },
    {
        label: 'Sequia',
        value: 'Sequia'
    },
    {
        label: '4Runner',
        value: '4Runner'
    }
];


const sportsBrands = [
    {
        label: 'Ferrari',
        value: 'Ferrari',
        reference: ferrariModels
    },
    {
        label: 'Lamborghini',
        value: 'Lamborghini',
        reference: lamborghiniModels
    },
    {
        label: 'Porsche',
        value: 'Porsche',
        reference: porscheModels
    }
];
const convertibleBrands = [
    {
        label: 'Mercedes-Benz',
        value: 'Mercedes-Benz',
        reference: mercedesModels
    },
    {
        label: 'Audi',
        value: 'Audi',
        reference: audiModels
    },
    {
        label: 'BMW',
        value: 'BMW',
        reference: bmwModels
    }
];

const SUVBrands = [
    {
        label: 'Peugeot',
        value: 'Peugeot',
        reference: PeugeotModels
    },
    {
        label: 'Hyundai',
        value: 'Hyundai',
        reference: hyundaiModels
    },
    {
        label: 'Toyota',
        value: 'Toyota',
        reference: toyotaModels
    }
];
const categories = [
    {
        label: 'Sports',
        value: 'Sports',
        reference: sportsBrands
    },
    {
        label: 'Convertible',
        value: 'Convertible',
        reference: convertibleBrands
    },
    {
        label: 'SUV',
        value: 'SUV',
        reference: SUVBrands
    }
];



export {
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
    
}