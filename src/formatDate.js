import { getDay } from "./getDay";

export const formatDate = (epoch, withDay) => {
  let D = new Date(epoch * 1000);
  return withDay ? `${String(D.getDate()).padStart(2, "0")}/${String(D.getMonth() + 1).padStart(2, "0")}/${D.getFullYear()} (${getDay(epoch)}) ${String(D.getHours()).padStart(2, "0")}:${String(D.getMinutes()).padStart(2, "0")}` : `${String(D.getDate()).padStart(2, "0")}/${String(D.getMonth() + 1).padStart(2, "0")}/${D.getFullYear()} ${String(D.getHours()).padStart(2, "0")}:${String(D.getMinutes()).padStart(2, "0")}`;
};
