export const unitConversionMap = {
    length: {
        picometer: 0.000000000001,
        nanometer: 0.000000001,
        micrometer: 0.000001,
        millimeter: 0.001,
        centimeter: 0.01,
        decimeter: 0.1,
        meter: 1,
        kilometer: 1000,
        mile: 1609.34,
        yard: 0.9144,
        foot: 0.3048,
        inch: 0.0254,
        nauticalMile: 1852,
    },

    mass: {
        nanogram: 0.000000001,
        milligram: 0.001,
        gram: 1,
        kilogram: 1000,
        pound: 453.592,
        ounce: 28.3495,
        ton: 907185,
        stone: 6350.29,
        carat: 0.2,
    },

    time: {
        picosecond: 0.000000000001,
        nanosecond: 0.000000001,
        millisecond: 0.001,
        second: 1,
        minute: 60,
        hour: 3600,
        day: 86400,
        week: 604800,
        month: 2628000,
        year: 31536000,
        decade: 315360000,
        century: 3153600000,
    },

    volume: {
        liter: 1,
        milliliter: 0.001,
        gallon: 3.78541,
        quart: 0.946353,
        pint: 0.473176,
        cup: 0.236588,
        tablespoon: 0.0147868,
        teaspoon: 0.00492892,
        cubicMeter: 1000,
        cubicFoot: 28.3168,
        cubicInch: 0.0163871,
        cubicCentimeter: 0.001,
        cubicMillimeter: 0.000001,
        cubicYard: 764.555
    },

    temperature: {
        celsius: 1,
        fahrenheit: 33.8,
        kelvin: 274.15
    }


};

export type LengthUnit = keyof typeof unitConversionMap.length;
export type MassUnit = keyof typeof unitConversionMap.mass;
export type TimeUnit = keyof typeof unitConversionMap.time;
export type VolumeUnit = keyof typeof unitConversionMap.volume;
export type TemperatureUnit = keyof typeof unitConversionMap.temperature;
export type Unit = LengthUnit | MassUnit | TimeUnit | VolumeUnit | TemperatureUnit;