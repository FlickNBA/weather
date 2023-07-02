export const getDay = (day) => {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let D = new Date(day * 1000);
  return days[D.getDay()];
};
