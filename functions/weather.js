const weather = (() => {
  const _apiKey = "bdecf9b86e53f1f1ab5da9ef4c076621";

  // Get current weather data from the API
  // We care about the city name, temperatures, wind speeds and weather status
  // (clear, cloudy, rain, snow...)
  function formatCurrentWeatherData(data) {
    let formatted = {
      cityName: data.name,
      temperature: {
        current: data.main.temp,
        humidity: data.main.humidity,
        feelsLike: data.main.feels_like,
      },
      weather: data.weather[0].main,
      wind: {
        speed: data.wind.speed,
        direction: data.wind.code,
      },
    };

    return formatted;
  }

  async function getCurrentWeather(city) {
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${_apiKey}`;
    try {
      const response = await fetch(endpoint, { mode: "cors" });
      if (!response.ok) throw new Error(`City ${city} not found`);
      const formattedData = formatCurrentWeatherData(await response.json());
      return formattedData;
    } catch (error) {
      alert(error);
      return null;
    }
  }

  // Get the 7-day forecast for the given city.

  return { getCurrentWeather };
})();

export default weather;
