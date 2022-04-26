import weather from "./weather.js";
import iconSelector from "./iconSelector.js";

const weatherInfo = document.querySelector(".weather-icon");

const bostonWeather = await weather.getCurrentWeather("boston");
console.log(bostonWeather);

weatherInfo.innerHTML = iconSelector.getIcon(bostonWeather.weather);
