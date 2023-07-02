export const formatDate = (epoch) => {
  let D = new Date(epoch * 1000);
  console.log(D);
  return `${String(D.getDate()).padStart(2, "0")}/${String(D.getMonth() + 1).padStart(2, "0")}/${D.getFullYear()} ${String(D.getHours()).padStart(2, "0")}:${String(D.getMinutes()).padStart(2, "0")}`;
};
