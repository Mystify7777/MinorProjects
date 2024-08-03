/**
 * API key obtained from openWeatherMap API.
 * 
 * This Api key is required to fetch the realtime weather. 
 */
 

const apiKey = 'bc7d1b26f281df06c255668b4332188f';

/* 
 * Event listener for the search button click event.
 *
 * Fetches the weather data for the city entered in the input field.
 */
document.getElementById('search').addEventListener('click', () => {
    const city = document.getElementById('city').value;
    if (city) {
        fetchWeather(city);
    }
});

/*
 * Event listener for the city input field keypress event.
 * 
 * Simulates a click on the search button when the Enter key is pressed.
 */
document.getElementById('city').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('search').click();
    }
});

/*
 * Fetches the current weather data for a given city from the OpenWeatherMap API.
 * 
 * parameter {string} city - The name of the city to fetch the weather data for.
 * 
 * example:
 * fetchWeather('London');
 * 
 * returns {Promise<void>} A promise that resolves when the weather data has been fetched and displayed.
 */
async function fetchWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (response.ok) {
            const data = await response.json();
            if (data.cod === '404') {
                alert('City not found!');
            } else {
                document.getElementById('weather-table').style.display = 'table';
                document.getElementById('city-name').textContent = data.name;
                document.getElementById('temperature').textContent = `${data.main.temp} °C`;
                document.getElementById('description').textContent = `${data.weather[0].description}`;
                document.getElementById('humidity').textContent = `${data.main.humidity}%`;
                document.getElementById('wind-speed').textContent = `${data.wind.speed} m/s`;
                document.getElementById('pressure').textContent = `${data.main.pressure} hPa`;

                const iconCode = data.weather[0].icon;
                const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
                const weatherIcon = document.getElementById('weather-icon');
                weatherIcon.src = iconUrl;
                weatherIcon.style.display = 'block';
            }
        } else {
            alert('Failed to fetch weather data.');
        }
    } catch (error) {
        alert('An error occurred. Please try again.');
    }
}
