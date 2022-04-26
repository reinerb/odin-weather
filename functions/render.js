import iconSelector from "./iconSelector.js";
import * as DOMElement from "./DOMElements.js";

const render = (data) => {
  DOMElement.weatherCardElements.city.textContent = data.city;
  DOMElement.weatherCardElements.conditions.text.textContent = data.conditions;
  DOMElement.weatherCardElements.conditions.icon.innerHTML =
    iconSelector.getWeatherIcon(data.conditions);
  DOMElement.weatherCardElements.temperature.actual.textContent =
    data.temperature.actual;
  DOMElement.weatherCardElements.temperature.feelsLike.textContent =
    "Feels like " + data.temperature.feelsLike;
  DOMElement.weatherCardElements.wind.icon.innerHTML =
    iconSelector.getWindDirectionIcon(data.wind.direction);
  DOMElement.weatherCardElements.wind.text.textContent = `${data.wind.speed}mph ${data.wind.direction}`;
};

export default render;
