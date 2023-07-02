import "./reset.css";
import "./index.css";
import { getWeatherForIP } from "./weatherIP";
import { updateCurrent } from "./updateWeather";

export const API_KEY = "65274eea2bfa4ddfbcd133645230207";

let weatherResponse = await getWeatherForIP(7);
console.log(weatherResponse);
updateCurrent(weatherResponse[0]);
