import "./reset.css";
import "./index.css";
import { getWeatherForIP } from "./weatherIP";
import { updateCurrent, updateFuture } from "./updateWeather";
import { searchButton } from "./searchButton";

export const API_KEY = "65274eea2bfa4ddfbcd133645230207";

let weatherResponse = await getWeatherForIP(7);
updateCurrent(weatherResponse[0]);
updateFuture(weatherResponse[1]);

document.querySelector("button").addEventListener("click", searchButton);
