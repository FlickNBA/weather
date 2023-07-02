import "./reset.css";
import "./index.css";
import { getWeatherForIP } from "./weatherIP";
import { formatDate } from "./formatDate";

export const API_KEY = "65274eea2bfa4ddfbcd133645230207";

let weatherResponse = await getWeatherForIP();

console.log(weatherResponse);

console.log(formatDate(weatherResponse.location.localtime_epoch));
