import { API_KEY } from ".";

export const getWeatherForIP = async (days) => {
  let current = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=auto:ip&aqi=yes`);
  let future = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=auto:ip&days=${days}&aqi=yes`);
  return [await current.json(), await future.json()];
};
