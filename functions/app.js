import weather from "./weather.js";
import iconSelector from "./iconSelector.js";

const weatherInfo = document.querySelector(".weather-icon");
const windDirection = document.querySelector(".wind-direction");

const bostonWeather = await weather.getCurrentWeather("boston");
console.log(bostonWeather);

weatherInfo.innerHTML = iconSelector.getWeatherIcon(bostonWeather.weather);
windDirection.innerHTML = iconSelector.getWindDirectionIcon(
  bostonWeather.wind.direction
);
