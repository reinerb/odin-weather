import weather from "./weather.js";
import render from "./render.js";
import * as DOMElement from "./DOMElements.js";
import pubsub from "./pubsub.js";

window.addEventListener("load", () => {
  pubsub.subscribe("changeCity", render);
  weather.getCurrentWeather("boston");
});

DOMElement.searchBar.submit.addEventListener("click", () => {
  weather.getCurrentWeather(DOMElement.searchBar.input.value);
  DOMElement.searchBar.input.value = "";
});
