// View
function updateView() {
    app.innerHTML = /*HTML*/ `
    
    <div>${temperatureView()}</div>
    `;
}

updateView();

function temperatureView() {
    app.innerHTML = /*HTML*/ `    
    
    <h1>UNIT CONVERTER</h1>
    
    <img src="tempicon.png" alt="A thermometer" id="thermometer">

    <div class="number-container">
        From <input type="number" id="temperatureInput" value="${tempToConvert}" onchange="updateTemperature(this.value)">
        <div class="showNum">${tempDesignFrom}</div>
        To <input disabled value="${convertedTemp ?? ''}" id="converted-temperature"/>
        <div class="showNum">${tempDesignTo}</div> 
        <div class="button-container">
            <button onclick="weightView()">Weight</button>
            <button onclick="lengthView()">Length</button>
            <button onclick="timeView()">Time</button>
        </div>
    </div>
    
    <div class="dropdown-container">
        <select id="fromTemperature" name="fromTemperature" value="${fromTemperature}" size="3" onchange="updateFromTemperature(this.value)">
            <option value="celsius">Celsius</option>
            <option value="fahrenheit">Fahrenheit</option>
            <option value="kelvin">Kelvin</option>
        </select>

        <select id="toTemperature" name="toTemperature" value="${toTemperature}" size="3" onchange="updateToTemperature(this.value)">
            <option value="celsius">Celsius</option>
            <option value="fahrenheit">Fahrenheit</option>
            <option value="kelvin">Kelvin</option>
        </select>
    </div>

    <div class="error-message">${errorMessage}</div>

    `;
    return app.innerHTML;
}

function weightView() {
    app.innerHTML = /*HTML*/ `

    <h1>UNIT CONVERTER</h1>

    <img src="weighticon.png" alt="A weighting scale" id="weight">

    <div class="number-container">
        From <input type="number" id="weightInput" value ="${weightToConvert}" onchange="updateWeight(this.value)">
        <div class="showNum">${weightDesignFrom}</div>
        To <input disabled value ="${convertedWeight ?? ''}" id="converted-weight">
        <div class="showNum">${weightDesignTo}</div>
    
        <div class="button-container">
            <button onclick="temperatureView()">Temperature</button>
            <button onclick="lengthView()">Length</button>
            <button onclick="timeView()">Time</button>
        </div>
    </div>

    <div class="dropdown-container">
        <select id="fromWeight" name="fromWeight" value="${fromWeight}" size="6" onchange="updateFromWeight(this.value)">
            <option value="kilogram">Kilogram</option>
            <option value="gram">Gram</option>
            <option value="milligram">Milligram</option>
            <option value="ton">Ton</option>
            <option value="pound">Pound</option>
            <option value="ounce">Ounce</option>    
        </select>

        <select id="toWeight" name="toWeight" value="${toWeight}" size="6" onchange="updateToWeight(this.value)">
            <option value="kilogram">Kilogram</option>
            <option value="gram">Gram</option>
            <option value="milligram">Milligram</option>
            <option value="ton">Ton</option>
            <option value="pound">Pound</option>
            <option value="ounce">Ounce</option>    
        </select>
    </div>

    <div class="error-message">${errorMessage}</div>
    `;
}

function lengthView() {
    app.innerHTML = /*HTML*/ `

    <h1>UNIT CONVERTER</h1>

    <img src="rulericon.png" alt="A ruler" id="ruler"> 

    <div class="number-container">
        From <input type="number" id="lengthInput" value="${lengthToConvert}" onchange="updateLength(this.value)">
        <div class="showNum">${lengthDesignFrom}</div>
        To <input disabled value="${convertedLength ?? ''}" id="converted-length">
        <div class="showNum">${lengthDesignTo}</div>
    
        <div class="button-container">
            <button onclick="temperatureView()">Temperature</button>
            <button onclick="weightView()">Weight</button>
            <button onclick="timeView()">Time</button>
        </div>
    </div>

    <div class="dropdown-container">
        <select id="fromLength" name="fromLength" value="${fromLength}" size="11" onchange="updateFromLength(this.value)">
            <option value="meter">Meter</option>
            <option value="kilometer">Kilometer</option>
            <option value="centimeter">Centimeter</option>
            <option value="millimeter">Millimeter</option>
            <option value="micrometer">Micrometer</option>
            <option value="nanometer">Nanometer</option>    
            <option value="mile">Mile</option>    
            <option value="yard">Yard</option>    
            <option value="foot">Foot</option>    
            <option value="inch">Inch</option>    
            <option value="lightYear">Light Year</option>    
        </select>

        <select id="toLength" name="toLength" value="${toLength}" size="11" onchange="updateToLength(this.value)">
            <option value="meter">Meter</option>
            <option value="kilometer">Kilometer</option>
            <option value="centimeter">Centimeter</option>
            <option value="millimeter">Millimeter</option>
            <option value="micrometer">Micrometer</option>
            <option value="nanometer">Nanometer</option>    
            <option value="mile">Mile</option>    
            <option value="yard">Yard</option>    
            <option value="foot">Foot</option>    
            <option value="inch">Inch</option>    
            <option value="lightYear">Light Year</option>    
        </select>
    </div>

    <div class="error-message">${errorMessage}</div>
    `;
}

function timeView() {
    app.innerHTML = /*HTML*/ `

    <h1>UNIT CONVERTER</h1>

    <img src="clockicon.png" alt="A clock" id="clock">

    <div class="number-container">
        From <input type="number" id="timeInput" value="${timeToConvert}" onchange="updateTime(this.value)">
        <div class="showNum">${timeDesignFrom}</div>
        To <input disabled value="${convertedTime ?? ''}" id="converted-time">
        <div class="showNum">${timeDesignTo}</div>

        <div class="button-container">
            <button onclick="temperatureView()">Temperature</button>
            <button onclick="weightView()">Weight</button>
            <button onclick="lengthView()">Length</button>
        </div>
    </div>

    <div class="dropdown-container">
        <select id="fromTime" name="fromTime" value ="${fromTime}" size="11" onchange="updateFromTime(this.value)">
            <option value="second">Second</option>
            <option value="millisecond">Millisecond</option>
            <option value="microsecond">Microsecond</option>
            <option value="nanosecond">nanosecond</option>
            <option value="picosecond">Picosecond</option>
            <option value="minute">Minute</option>
            <option value="hour">Hour</option>
            <option value="day">Day</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
            <option value="year">Year</option>    
        </select>
    
        <select id="toTime" name="toTime" value ="${toTime}" size="11" onchange="updateToTime(this.value)">
            <option value="second">Second</option>
            <option value="millisecond">Millisecond</option>
            <option value="microsecond">Microsecond</option>
            <option value="nanosecond">nanosecond</option>
            <option value="picosecond">Picosecond</option>
            <option value="minute">Minute</option>
            <option value="hour">Hour</option>
            <option value="day">Day</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
            <option value="year">Year</option>      
        </select>
    </div>

    <div class="error-message">${errorMessage}</div>
`;
}
// function drawLengthOptions() {
//     let html = '';

//     for (let i = 0; i < lengthOptions.length; i++) {
//         html += `<option value="${lengthOptions[i]}">${lengthOptions[i]}</option>`
//     }
//     return html;
// }