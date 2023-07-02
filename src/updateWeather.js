import { updateDom } from "./updateDom";
import { formatDate } from "./formatDate";

export const updateCurrent = (data) => {
  let feelsLike = data.current.temp_c == data.current.feelslike_c ? "it" : `${data.current.feelslike_c} °C`;

  updateDom("#condition", `${data.current.condition.text}, (feels like ${feelsLike})`);

  updateDom("#location", `${data.location.name}, <strong>${data.location.country}</strong>`);

  updateDom("#time", formatDate(data.location.localtime_epoch));

  updateDom("#latlon", `ϕ ${data.location.lat}, λ ${data.location.lon}`);

  updateDom("#humidity", `Humidity: ${data.current.humidity}%`);

  updateDom("#clouds", `Clouds: ${data.current.cloud}%`);

  updateDom("#wind", `Wind: ${data.current.wind_kph} km/h`);

  updateDom("#uv", `UV index: ${data.current.uv}/11`);
};

export const updateFuture = (data) => {
  console.log(data);
};
