export const createDom = (id) => {
  let element = document.createElement("div");

  let day = document.createElement("h2");
  day.classList.add("day");
  element.appendChild(day);

  let dayDate = document.createElement("h3");
  dayDate.classList.add("dayDate");
  element.appendChild(dayDate);

  let averageTemp = document.createElement("h2");
  averageTemp.classList.add("average");
  element.appendChild(averageTemp);

  let minMax = document.createElement("h3");
  minMax.classList.add("minMax");
  element.appendChild(minMax);

  let conditionImage = document.createElement("img");
  element.appendChild(conditionImage);

  let conditionText = document.createElement("h4");
  conditionText.classList.add("condition");
  element.appendChild(conditionText);

  element.id = `day-${id}`;
  return element;
};
