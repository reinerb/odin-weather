import pubsub from "./pubsub.js";

const weather = (() => {
  const _apiKey = "bdecf9b86e53f1f1ab5da9ef4c076621";

  // Get current weather data from the API
  // We care about the city name, temperatures, wind speeds and weather status
  // (clear, cloudy, rain, snow...)
  function formatCurrentWeatherData(data) {
    let formatted = {
      city: data.name,
      temperature: {
        actual: Math.round(data.main.temp),
        humidity: data.main.humidity,
        feelsLike: Math.round(data.main.feels_like),
      },
      conditions: data.weather[0].main,
      wind: {
        speed: data.wind.speed,
        direction: getWindDirection(data.wind.deg),
      },
    };

    return formatted;
  }

  function getWindDirection(deg) {
    switch (true) {
      case deg > 22.5 && deg <= 67.5:
        return "NE";
      case deg > 67.5 && deg <= 112.5:
        return "E";
      case deg > 112.5 && deg <= 157.5:
        return "SE";
      case deg > 157.5 && deg <= 202.5:
        return "S";
      case deg > 202.5 && deg <= 247.5:
        return "SW";
      case deg > 247.5 && deg <= 292.5:
        return "W";
      case deg > 292.5 && deg <= 337.5:
        return "NW";
      default:
        return "N";
    }
  }

  async function getCurrentWeather(city) {
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${_apiKey}`;
    try {
      const response = await fetch(endpoint, { mode: "cors" });
      if (!response.ok) throw new Error(`City ${city} not found`);
      const formattedData = formatCurrentWeatherData(await response.json());
      pubsub.publish("changeCity", formattedData);
      console.log(`Publishing data for ${formattedData.city}`);
    } catch (error) {
      alert(error);
      return null;
    }
  }

  return { getCurrentWeather };
})();

export default weather;
