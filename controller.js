// Temperature
function updateTemperature(tempInput) {
    tempToConvert = tempInput;
    convertedTemp = convertTemperature();
    updateView();
}

function updateFromTemperature(value) {
    fromTemperature = value;
}

function updateToTemperature(value) {
    toTemperature = value;
}

function convertTemperature() {
    let temperatureUserInput = parseFloat(tempToConvert);

    if (isNaN(temperatureUserInput)) {
        return '';
    }

    if (fromTemperature == 'celsius' && toTemperature == 'fahrenheit') {
        tempDesignFrom = '°C'
        tempDesignTo = '°F'
        errorMessage = '';
        return (temperatureUserInput * 1.8 + 32).toFixed(2);
    } else if (fromTemperature == 'fahrenheit' && toTemperature == 'celsius') {
        tempDesignFrom = '°F';
        tempDesignTo = '°C';
        errorMessage = '';
        return ((temperatureUserInput - 32) * 5 / 9).toFixed(2);
    } else if (fromTemperature == 'celsius' && toTemperature == 'kelvin') {
        tempDesignFrom = '°C';
        tempDesignTo = '°K';
        errorMessage = '';
        return (temperatureUserInput + 273.15).toFixed(2);
    } else if (fromTemperature == 'kelvin' && toTemperature == 'celsius') {
        tempDesignFrom = '°K';
        tempDesignTo = '°C';
        errorMessage = '';
        return (temperatureUserInput - 273.15).toFixed(2);
    } else if (fromTemperature == 'fahrenheit' && toTemperature == 'kelvin') {
        tempDesignFrom = '°F';
        tempDesignTo = '°K';
        errorMessage = '';
        return ((temperatureUserInput + 459.67) * 5 / 9).toFixed(2);
    } else if (fromTemperature == 'kelvin' && toTemperature == 'fahrenheit') {
        tempDesignFrom = '°K';
        tempDesignTo = '°F';
        errorMessage = '';
        return (1.8 * (temperatureUserInput - 273.15) + 32).toFixed(2);
    } else if (fromTemperature == 'celsius' && toTemperature == 'celsius') {
        tempDesignFrom = '°C';
        tempDesignTo = '°C';
        return (convertedTemp = temperatureUserInput);
    } else if (fromTemperature == 'fahrenheit' && toTemperature == 'fahrenheit') {
        tempDesignFrom = '°F';
        tempDesignTo = '°F';
        return (convertedTemp = temperatureUserInput);
    } else if (fromTemperature == 'kelvin' && toTemperature == 'kelvin') {
        tempDesignFrom = '°K';
        tempDesignTo = '°K';
        return (convertedTemp = temperatureUserInput);
    } else {
        errorMessage = 'You must choose units first!';
    }

}

// Weight 
function updateWeight(weightInput) {
    weightToConvert = weightInput;
    convertedWeight = convertWeight();
    weightView();
}

function updateFromWeight(value) {
    fromWeight = value;
}

function updateToWeight(value) {
    toWeight = value;
}

function convertWeight() { // helps 
    displayFromWeightAbbr();
    displayToWeightAbbr();

    if (isNaN(weightToConvert)) {
        return '';
    }

    // Check if conversion is supported
    if (!conversionFactorsWeight[fromWeight] || !conversionFactorsWeight[fromWeight][toWeight]) {
        errorMessage = 'You must choose units first!';
    }

    // Calculating the numbers
    convertedWeight = weightToConvert * conversionFactorsWeight[fromWeight][toWeight];
    return parseFloat(convertedWeight.toFixed(2));
}

function displayFromWeightAbbr() {
    if (fromWeight == 'kilogram') weightDesignFrom = 'kg';
    else if (fromWeight == 'gram') weightDesignFrom = 'g';
    else if (fromWeight == 'milligram') weightDesignFrom = 'mg';
    else if (fromWeight == 'ton') weightDesignFrom = 't';
    else if (fromWeight == 'pound') weightDesignFrom = 'lb';
    else weightDesignFrom = 'oz';
}

function displayToWeightAbbr() {
    if (toWeight == 'kilogram') weightDesignTo = 'kg';
    else if (toWeight == 'gram') weightDesignTo = 'g';
    else if (toWeight == 'milligram') weightDesignTo = 'mg';
    else if (toWeight == 'ton') weightDesignTo = 't';
    else if (toWeight == 'pound') weightDesignTo = 'lb';
    else weightDesignTo = 'oz';
}

// Length
function updateLength(lengthInput) {
    lengthToConvert = lengthInput;
    convertedLength = convertLength();
    lengthView();
}

function updateFromLength(value) {
    fromLength = value;
}

function updateToLength(value) {
    toLength = value;
}

function convertLength() {
    displayFromLengthAbbr();
    displayToLengthAbbr();

    if (isNaN(lengthToConvert)) {
        return '';
    }

    if (!conversionFactorsLength[fromLength] || !conversionFactorsLength[fromLength][toLength]) {
        errorMessage = 'You must choose units first!';
    }

    convertedLength = lengthToConvert * conversionFactorsLength[fromLength][toLength];
    return parseFloat(convertedLength.toFixed(2));
}

function displayFromLengthAbbr() {
    if (fromLength == 'meter') lengthDesignFrom = 'm';
    else if (fromLength == 'kilometer') lengthDesignFrom = 'km';
    else if (fromLength == 'centimeter') lengthDesignFrom = 'cm';
    else if (fromLength == 'millimeter') lengthDesignFrom = 'mm';
    else if (fromLength == 'micrometer') lengthDesignFrom = 'μm';
    else if (fromLength == 'nanometer') lengthDesignFrom = 'nm';
    else if (fromLength == 'mile') lengthDesignFrom = 'mi';
    else if (fromLength == 'yard') lengthDesignFrom = 'yd';
    else if (fromLength == 'foot') lengthDesignFrom = 'ft';
    else if (fromLength == 'inch') lengthDesignFrom = 'in';
    else lengthDesignFrom = 'ly';
}

function displayToLengthAbbr() {
    if (toLength == 'meter') lengthDesignTo = 'm';
    else if (toLength == 'kilometer') lengthDesignTo = 'km';
    else if (toLength == 'centimeter') lengthDesignTo = 'cm';
    else if (toLength == 'millimeter') lengthDesignTo = 'mm';
    else if (toLength == 'micrometer') lengthDesignTo = 'μm';
    else if (toLength == 'nanometer') lengthDesignTo = 'nm';
    else if (toLength == 'mile') lengthDesignTo = 'mi';
    else if (toLength == 'yard') lengthDesignTo = 'yd';
    else if (toLength == 'foot') lengthDesignTo = 'ft';
    else if (toLength == 'inch') lengthDesignTo = 'in';
    else lengthDesignTo = 'ly';
}

// Time
function updateTime(timeInput) {
    timeToConvert = timeInput;
    convertedTime = convertTime();
    timeView();
}

function updateFromTime(value) {
    fromTime = value;
}

function updateToTime(value) {
    toTime = value;
}

function convertTime() {
    displayFromTimeAbbr();
    displayToTimeAbbr();

    if (isNaN(timeToConvert)) {
        return '';
    }

    if (!conversionFactorsTime[fromTime] || !conversionFactorsTime[fromTime][toTime]) {
        errorMessage = 'You must choose units first!';
    }

    convertedTime = timeToConvert * conversionFactorsTime[fromTime][toTime];
    return parseFloat(convertedTime.toFixed(2));
}

function displayFromTimeAbbr() {
    if (fromTime == 'second') timeDesignFrom = 's';
    else if (fromTime == 'millisecond') timeDesignFrom = 'ms';
    else if (fromTime == 'microsecond') timeDesignFrom = 'μs';
    else if (fromTime == 'nanosecond') timeDesignFrom = 'ns';
    else if (fromTime == 'picosecond') timeDesignFrom = 'ps';
    else if (fromTime == 'minute') timeDesignFrom = 'min';
    else if (fromTime == 'hour') timeDesignFrom = 'hr';
    else if (fromTime == 'day') timeDesignFrom = 'd';
    else if (fromTime == 'week') timeDesignFrom = 'wk';
    else if (fromTime == 'month') timeDesignFrom = 'mo';
    else timeDesignFrom = 'yr';
}

function displayToTimeAbbr() {
    if (toTime == 'second') timeDesignTo = 's';
    else if (toTime == 'millisecond') timeDesignTo = 'ms';
    else if (toTime == 'microsecond') timeDesignTo = 'μs';
    else if (toTime == 'nanosecond') timeDesignTo = 'ns';
    else if (toTime == 'picosecond') timeDesignTo = 'ps';
    else if (toTime == 'minute') timeDesignTo = 'min';
    else if (toTime == 'hour') timeDesignTo = 'hr';
    else if (toTime == 'day') timeDesignTo = 'd';
    else if (toTime == 'week') timeDesignTo = 'wk';
    else if (toTime == 'month') timeDesignTo = 'mo';
    else timeDesignTo = 'yr';
}