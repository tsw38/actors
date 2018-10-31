const monthArr = [
  'Jan', 'Feb', 'Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'
];

export const datetimeToReadable = (dateStr) => {

  const date = new Date(dateStr);

  return `${date.getDate()} ${monthArr[date.getMonth()]} ${date.getFullYear()} at ${date.getHours()%12}:${date.getMinutes()}${date.getHours() > 12 ? 'pm' : 'am'}`;
}

const twoDigits = (d) => {
    if(0 <= d && d < 10) return "0" + d.toString();
    if(-10 < d && d < 0) return "-0" + (-1*d).toString();
    return d.toString();
}

export const toDateTime = (date) => {
    return date.getUTCFullYear() + "-" + twoDigits(1 + date.getUTCMonth()) + "-" + twoDigits(date.getUTCDate()) + " " + twoDigits(date.getUTCHours()) + ":" + twoDigits(date.getUTCMinutes()) + ":" + twoDigits(date.getUTCSeconds());
};
