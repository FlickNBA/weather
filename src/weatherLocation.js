import { API_KEY } from ".";

export const getWeatherForLocation = async (location, days) => {
  let current = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=yes`);
  let future = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=${days + 1}&aqi=yes`);
  return [await current.json(), await future.json()];
};
