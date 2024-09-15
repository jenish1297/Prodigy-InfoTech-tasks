
const weatherApiKey = '0d73b56dfd34d8895281a7aa85c30c3b'; 
const geocoderApiKey = 'YOUR_OPENCAGE_API_KEY'; 
const weatherInfoDiv = document.getElementById('weather-info');
const locationInput = document.getElementById('location-input');
const fetchWeatherBtn = document.getElementById('fetch-weather-btn');
const currentLocationBtn = document.getElementById('current-location-btn');

function getWeatherByCoordinates(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayWeatherData(data))
        .catch(error => console.error('Error fetching weather data:', error));
}

function displayWeatherData(data) {
    if (data.cod === 200) {
        weatherInfoDiv.innerHTML = `
            <h2>Weather in ${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
    } else {
        weatherInfoDiv.innerHTML = `<p>Location not found</p>`;
    }
}

function getLocationCoordinates(location) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${geocoderApiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.results.length > 0) {
                const { lat, lng } = data.results[0].geometry;
                getWeatherByCoordinates(lat, lng);
            } else {
                weatherInfoDiv.innerHTML = `<p>Location not found</p>`;
            }
        })
        .catch(error => console.error('Error fetching location data:', error));
}

fetchWeatherBtn.addEventListener('click', () => {
    const location = locationInput.value.trim();
    if (location) {
        getLocationCoordinates(location);  
    }
});

currentLocationBtn.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            getWeatherByCoordinates(lat, lon);  // Fetch weather for current location
        }, () => {
            weatherInfoDiv.innerHTML = `<p>Unable to retrieve your location</p>`;
        });
    } else {
        weatherInfoDiv.innerHTML = `<p>Geolocation is not supported by your browser</p>`;
    }
});
 