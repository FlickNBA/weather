import { createDom } from "./createDom";
import { updateDom } from "./updateDom";
import { formatDate } from "./formatDate";
import { getDay } from "./getDay";

export const updateCurrent = (data) => {
  let feelsLike = data.current.temp_c == data.current.feelslike_c ? "it" : `${data.current.feelslike_c} °C`;

  updateDom("#condition", `${data.current.condition.text} - ${data.current.temp_c} °C, (feels like ${feelsLike})`);

  updateDom("#location", `${data.location.name}, <strong>${data.location.country}</strong>`);

  updateDom("#time", `${formatDate(data.location.localtime_epoch, true)}`);

  updateDom("#latlon", `ϕ ${data.location.lat}, λ ${data.location.lon}`);

  updateDom("#humidity", `Humidity: ${data.current.humidity}%`);

  updateDom("#clouds", `Clouds: ${data.current.cloud}%`);

  updateDom("#wind", `Wind: ${data.current.wind_kph} km/h`);

  updateDom("#uv", `UV index: ${data.current.uv}/11`);
};

export const updateFuture = (data) => {
  data.forecast.forecastday.forEach((day, index) => {
    if (index > 0) {
      let div = createDom(index);
      document.querySelector("#future").appendChild(div);

      document.querySelector(`#day-${index} .day`).innerHTML = `${getDay(day.date_epoch)}`;

      document.querySelector(`#day-${index} .dayDate`).innerHTML = `${formatDate(day.date_epoch, false).split(" ")[0]}`;

      document.querySelector(`#day-${index} .average`).innerHTML = `${day.day.avgtemp_c} °C`;

      document.querySelector(`#day-${index} .condition`).innerHTML = day.day.condition.text;

      document.querySelector(`#day-${index} img`).src = `./${day.day.condition.icon.split("64x64")[1]}`;

      document.querySelector(`#day-${index} .minMax`).innerHTML = `${day.day.mintemp_c} °C/${day.day.maxtemp_c} °C`;
    }
  });
};
