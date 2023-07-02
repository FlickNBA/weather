import { getWeatherForLocation } from "./weatherLocation";
import { updateCurrent, updateFuture } from "./updateWeather";

export const searchButton = async () => {
  let location = document.querySelector("input");
  if (location.value == "") {
    alert("Type in search location.");
    return false;
  } else {
    let weatherResponse = await getWeatherForLocation(location.value, 7);
    try {
      updateCurrent(weatherResponse[0]);
      updateFuture(weatherResponse[1]);
      location.value = "";
    } catch (e) {
      alert(`ERROR: Can't find ${location.value} location!`);
    }
  }
};
