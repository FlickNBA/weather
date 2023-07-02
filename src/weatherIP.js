import { API_KEY } from ".";

export const getWeatherForIP = async () => {
  return (await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=auto:ip&aqi=yes`)).json();
};
