const cityInput = document.querySelector('.city-input');
const searchButton = document.querySelector('.search-btn');
const weatherCardsDiv = document.querySelector('.weather-cards');

const API_KEY = '863242cfb2b1d357e6093d9a4df19a4b'; // API key for OpenWeatherMap API (ben baskasini kullandım)
const createWeatherCard = (weatherItem) => {
    return `   <li class="card">
                <h3> (${weatherItem.dt_txt.split(" ")[0]})</h3>
                <img src="https://openweathermap.org/img/wn/${weatherItem.dt_txt.weather[0].icon}d@2x.png" alt="weather">
                <h4>Temp: ${(weatherItem.main.temp - 273.15).toFixed(2)}#176C</h4> 
                <h4>Wind: ${weatherItem.wind.speed} M/S</h4>
                <h4>Humidity: ${weatherItem.main.humudity}%</h4>
            </li> `;
}

const getWeatherDetails = (cityName, lat, lon) => {
    const WEATHER_API_URL =`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt={cnt}&appid=${API_KEY}`;

    fetch(WEATHER_API_URL).then(res => res.json()).then(data => {
        //Filter the forecast to get only one weather per day
        const uniqueForecastDays = [];
        const fiveDaysForecast = data.list.filter(forecast => {
            const forecastDate = new Date(forecast.dt_txt).getDate();
            if(!uniqueForecastDays.includes(forecastDate)) {
                return uniqueForecastDays.push(forecastDate);
            }
        });

        //Cleating previous weather data
        cityInput.value = "";
        weatherCardsDiv.innerHTML = "";

        
        console.log(fiveDaysForecast);
        fiveDaysForecast.forEach(weatherItem => {
          weatherCardsDiv.insertAdjacentHTML( 'beforeend',createWeatherCard(weatherItem)) ;  
         });
    }).catch(() => {
        alert("An error occurred while fetching the weather forecast!");
    });

}

const getCityCoordinates = () => {
    const cityName = cityInput.value.trim(); //get user entered city name and remove extra spaces
    if (!cityName) return; // return if no city name
    // console.log(cityName); for check it is a valid city name
    const GECODING_API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;

    //Get entered city coordinates (latitude, longitude and name) from the API response (konsoldan baktim)
    fetch(GECODING_API_URL).then((res) => res.json()).then((data) =>{
        //console.log(data) for data checking
        if (!data.length) return alert(`No coordinates found for ${cityName}`);
        const { name, lat, lon } = data[0];
        getWeatherDetails(name, lat, lon );
    }).catch(() => {
        alert("An error occurred while fetching the coordinates!");
    });

}

searchButton.addEventListener('click', getCityCoordinates);