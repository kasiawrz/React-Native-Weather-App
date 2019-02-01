export const fetchWeather = async city => {
  
  const response = await fetch(
    `https://www.metaweather.com/api/location/search/?query=${city}`,
  );
  const location = await response.json();
  const locationId = location.length ? location[0].woeid : '';

  const detailedResponse = await fetch(
    `https://www.metaweather.com/api/location/${locationId}/`,
  );
  const { title, consolidated_weather } = await detailedResponse.json();
  const { weather_state_name, the_temp } = consolidated_weather[0];

  return {
    location: title,
    weather: weather_state_name,
    temperature: the_temp,
  };
};
