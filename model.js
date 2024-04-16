// Model
let app = document.getElementById('app');
let errorMessage = '';

// Temperature
let fromTemperature = '';
let toTemperature = '';
let tempToConvert = null;
let convertedTemp = null;
let tempDesignFrom = '';
let tempDesignTo = '';

// Weight
let fromWeight = '';
let toWeight = '';
let weightToConvert = null;
let convertedWeight = null;
let weightDesignFrom = '';
let weightDesignTo = '';

const conversionFactorsWeight = {
    kilogram: {
        kilogram: 1,
        gram: 1000,
        milligram: 1000000,
        ton: 0.001,
        pound: 2.20462,
        ounce: 35.274
    },
    gram: {
        kilogram: 0.001,
        gram: 1,
        milligram: 1000,
        ton: 0.000001,
        pound: 0.00220462,
        ounce: 0.035274
    },
    milligram: {
        kilogram: 0.000001,
        gram: 0.001,
        milligram: 1,
        ton: 0.000000001,
        pound: 0.0000018015,
        ounce: 0.00003527
    },
    ton: {
        kilogram: 1000,
        gram: 1000000,
        milligram: 1000000000,
        ton: 1,
        pound: 2000,
        ounce: 32000
    },
    pound: {
        kilogram: 0.453592,
        gram: 453.592,
        milligram: 453592.37,
        ton: 0.000453592,
        pound: 1,
        ounce: 16
    },
    ounce: {
        kilogram: 0.0283495,
        gram: 28.3495,
        milligram: 28349.5231,
        ton: 0.00003125,
        pound: 0.0625,
        ounce: 1,
    }
};

// Length
let fromLength = '';
let toLength = '';
let lengthToConvert = null;
let convertedLength = null;
let lengthDesignFrom = '';
let lengthDesignTo = '';

const conversionFactorsLength = {
    meter: {
        meter: 1,
        kilometer: 0.001,
        centimeter: 100,
        millimeter: 1000,
        micrometer: 1000000,
        nanometer: 1000000000,
        mile: 0.00062137,
        yard: 1.0936,
        foot: 3.28,
        inch: 39.3701,
        lightYear: 0.00000000000000010570,
    },
    kilometer: {
        meter: 1000,
        kilometer: 1,
        centimeter: 100000,
        millimeter: 1000000,
        micrometer: 1000000000,
        nanometer: 1000000000000,
        mile: 0.621371,
        yard: 1093.6133,
        foot: 3280.8399,
        inch: 39370.1,
        lightYear: 0.00000000000010570,
    },
    centimeter: {
        meter: 0.01,
        kilometer: 0.00001,
        centimeter: 1,
        millimeter: 10,
        micrometer: 10000,
        nanometer: 10000000,
        mile: 160934.4,
        yard: 0.010936133,
        foot: 0.0328,
        inch: 0.3937,
        lightYear: 0.0000000000000000010570,
    },
    millimeter: {
        meter: 0.001,
        kilometer: 0.000001,
        centimeter: 0.1,
        millimeter: 1,
        micrometer: 1000,
        nanometer: 1000000,
        mile: 0.00000062,
        yard: 0.001094,
        foot: 0.00328084,
        inch: 0.0393701,
        lightYear: 0.00000000000000000010570,
    },
    micrometer: {
        meter: 0.000001,
        kilometer: 0.000000001,
        centimeter: 0.0001,
        millimeter: 0.001,
        micrometer: 1,
        nanometer: 1000,
        mile: 0.0000000006214,
        yard: 0.0000010936,
        foot: 0.0000032808,
        inch: 0.0000393701,
        lightYear: 0.00000000000000000000010570
    },
    nanometer: {
        meter: 0.000000001,
        kilometer: 0.000000000001,
        centimeter: 0.0000001,
        millimeter: 0.000001,
        micrometer: 0.001,
        nanometer: 1,
        mile: 0.000000000000621,
        yard: 0.0000000010936,
        foot: 0.000000003281,
        inch: 0.00000003937,
        lightYear: 0.00000000000000000000000010570,
    },
    mile: {
        meter: 1609.34,
        kilometer: 1.60934,
        centimeter: 160934.4,
        millimeter: 1609344,
        micrometer: 1609344000,
        nanometer: 1609344000000,
        mile: 1,
        yard: 1760,
        foot: 5280,
        inch: 63360,
        lightYear: 0.000000000000170107795,
    },
    yard: {
        meter: 0.9144,
        kilometer: 0.0009144,
        centimeter: 91.44,
        millimeter: 914.4,
        micrometer: 914400,
        nanometer: 914400000,
        mile: 0.0005681818,
        yard: 1,
        foot: 3,
        inch: 36,
        lightYear: 0.00000000000000009665215626,
    },
    foot: {
        meter: 0.3048,
        kilometer: 0.0003048,
        centimeter: 30.48,
        millimeter: 304.8,
        micrometer: 304800,
        nanometer: 304800000,
        mile: 0.0001893939,
        yard: 0.3333333333,
        foot: 1,
        inch: 12,
        lightYear: 0.00000000000000003221738542,
    },
    inch: {
        meter: 0.0254,
        kilometer: 0.0000254,
        centimeter: 2.54,
        millimeter: 25.4,
        micrometer: 25400,
        nanometer: 25400000,
        mile: 0.0000157828,
        yard: 0.0277777778,
        foot: 0.0833333333,
        inch: 1,
        lightYear: 0.000000000000000002684782118,
    },
    lightYear: {
        meter: 9460730472580044,
        kilometer: 9460730472580,
        centimeter: 946073047258004200,
        millimeter: 9460730472580043000,
        micrometer: 946073047258004300000,
        nanometer: 946073047258004300000000,
        mile: 5878625373183,
        yard: 10346380656802248,
        foot: 31039141970406748,
        inch: 372469703644879100,
        lightYear: 1,
    },
};

// Time
let fromTime = '';
let toTime = '';
let timeToConvert = null;
let convertedTime = null;
let timeDesignFrom = '';
let timeDesignTo = '';

const conversionFactorsTime = {
    second: {
        second: 1,
        millisecond: 1000,
        microsecond: 1000000,
        nanosecond: 1000000000,
        picosecond: 1000000000000,
        minute: 0.0166666667,
        hour: 0.000277777778,
        day: 0.000011574,
        week: 0.0000016534,
        month: 0.00000038026,
        year: 0.000000031689,
    },
    millisecond: {
        second: 0.001,
        millisecond: 1,
        microsecond: 1000,
        nanosecond: 1000000,
        picosecond: 1000000000,
        minute: 0.0000166667,
        hour: 0.00000027778,
        day: 0.000000011574,
        week: 0.0000000016534,
        month: 0.00000000038026,
        year: 0.000000000031689,
    },
    microsecond: {
        second: 0.000001,
        millisecond: 0.001,
        microsecond: 1,
        nanosecond: 1000,
        picosecond: 1000000,
        minute: 0.000000016667,
        hour: 0.00000000027778,
        day: 0.000000000011574,
        week: 0.0000000000016534,
        month: 0.00000000000038026,
        year: 0.000000000000031689,
    },
    nanosecond: {
        second: 0.000000001,
        millisecond: 0.000001,
        microsecond: 0.001,
        nanosecond: 1,
        picosecond: 1000,
        minute: 0.000000000016667,
        hour: 0.00000000000027778,
        day: 0.000000000000011574,
        week: 0.0000000000000016534,
        month: 0.00000000000000038026,
        year: 0.000000000000000031689,
    },
    picosecond: {
        second: 0.000000000001,
        millisecond: 0.000000001,
        microsecond: 0.000001,
        nanosecond: 0.001,
        picosecond: 1,
        minute: 0.00000000000001667,
        hour: 0.0000000000000002778,
        day: 0.00000000000000001157,
        week: 0.000000000000000001653,
        month: 0.0000000000000000003806,
        year: 0.00000000000000000003169,
    },
    minute: {
        second: 60,
        millisecond: 60000,
        microsecond: 60000000,
        nanosecond: 60000000000,
        picosecond: 60000000000000,
        minute: 1,
        hour: 0.0166666667,
        day: 0.0006944444,
        week: 0.0000992063,
        month: 0.0000228311,
        year: 0.0000019013,
    },
    hour: {
        second: 3600,
        millisecond: 3600000,
        microsecond: 3600000000,
        nanosecond: 3600000000000,
        picosecond: 3600000000000000,
        minute: 60,
        hour: 1,
        day: 0.0416666667,
        week: 0.005952381,
        month: 0.001369863,
        year: 0.0001140771,
    },
    day: {
        second: 86400,
        millisecond: 86400000,
        microsecond: 86400000000,
        nanosecond: 86400000000000,
        picosecond: 86400000000000000,
        minute: 1440,
        hour: 24,
        day: 1,
        week: 0.1428571429,
        month: 0.0328767123,
        year: 0.0027378508,
    },
    week: {
        second: 604800,
        millisecond: 604800000,
        microsecond: 604800000000,
        nanosecond: 604800000000002,
        picosecond: 604800000000001700,
        minute: 10080,
        hour: 168,
        day: 7,
        week: 1,
        month: 0.2301369863,
        year: 0.0191649555,

    },
    month: {
        second: 2628000,
        millisecond: 2628000000,
        microsecond: 2628000000000,
        nanosecond: 2628000000000000,
        picosecond: 2628000000000000000,
        minute: 43800,
        hour: 730,
        day: 30.416666667,
        week: 4.3452380952,
        month: 1,
        year: 0.0832762948,
    },
    year: {
        second: 31557600,
        millisecond: 31557600000,
        microsecond: 31557600000000,
        nanosecond: 31557599999999904,
        picosecond: 31557599999999900000,
        minute: 525960,
        hour: 8766,
        day: 365.25,
        week: 52.178571429,
        month: 12.008219178,
        year: 1,
    },
};

// to do: gjøre ferdig controller funk på time