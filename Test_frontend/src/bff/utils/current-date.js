const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1; // Месяцы в JavaScript начинаются с 0, поэтому добавляем 1
const day = date.getDate();
const hours = date.getHours();
const minutes = String(date.getMinutes()).padStart(2, '0');
export const currentDate = `${day}.${month}.${year}, ${hours}:${minutes}`;
