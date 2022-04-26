// Body
export const body = document.body;

// Weather card elements
export const weatherCard = document.querySelector(".weather-card");
export const weatherCardElements = {
  city: document.querySelector(".city"),
  conditions: {
    text: document.querySelector(".conditions-text"),
    icon: document.querySelector(".conditions-icon"),
  },
  temperature: {
    actual: document.querySelector("temperature-actual"),
    feelsLike: document.querySelector("temperature-feels-like"),
  },
  wind: {
    icon: document.querySelector(".wind-icon"),
    text: document.querySelector(".wind-text"),
  },
};
