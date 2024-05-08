document.addEventListener("DOMContentLoaded", function() {

    const dataInfo = {
        Area: '1,221,037 sq km',
        Population: '58,775,022',
        Capital: 'Pretoria, Cape Town, Bloemfontein',
        Languages: 'English, Zulu, Xhosa, Afrikaans',
        Currency: 'South African Rand (ZAR)',
        TimeZone: 'UTC+2',
        CallingCode: '+27',
        InternetTLD: '.za'
    };

    const weatherInfo = {
        Temperature: '5°C',
        Conditions: 'Sunny',
        Wind: '10 km/h',
    };

    function createDataEntry(key, value) {
        return `<p><strong>${key}:</strong> ${value}</p>`;
    }


    function calculateWindChill(temperature, windSpeed) {
        if (temperature <= 10 && windSpeed > 4.8) {
            var windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
            return (Math.round(windChill  * 10) / 10) +  '°C';
        } else {
            return "N/A";
        }
    }
    const temp = parseFloat(weatherInfo.Temperature);
    const wind = parseFloat(weatherInfo.Wind);

    weatherInfo.WindChill = calculateWindChill(temp, wind);

    const dataContainer = document.getElementById('data-content');
    Object.entries(dataInfo).forEach(([key, value]) => {
        dataContainer.innerHTML += createDataEntry(key, value);
    });

    const weatherContainer = document.getElementById('weather-content');
    Object.entries(weatherInfo).forEach(([key, value]) => {
        weatherContainer.innerHTML += createDataEntry(key, value);
    });
});


document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;