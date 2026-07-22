const temperature = 30; // Static input in °C
const windSpeed = 15;   // Static input in km/h

// Calculates Metric Wind Chill in a single line
const calculateWindChill = (temp, speed) => 
    (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);

const windChillElement = document.getElementById("windchill");

// Check Metric conditions: Temp <= 10°C and Wind Speed > 4.8 km/h
if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
    windChillElement.textContent = "N/A";
}

// Dynamic Footer Dates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;