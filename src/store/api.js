import { database } from "firebase";

const formatDateTime = (date, format) => {
  if (!date) {
    return ''
  }
  format = format.replace(/yyyy/g, date.getFullYear());
  format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
  format = format.replace(/dd/g, ('0' + date.getDate()).slice(-2));
  format = format.replace(/HH/g, ('0' + date.getHours()).slice(-2));
  format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
  format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
  format = format.replace(/SSS/g, ('00' + date.getMilliseconds()).slice(-3));
  return format;
}

const formatDateTimeFromTimeStamp = (timeStamp, format) => {
  if (!timeStamp) {
    return ''
  }
  return formatDateTime(new Date(timeStamp.seconds * 1000), format)
}

const addMinutesFromTimeStamp = (timeStamp, minutes) => {
  if (!timeStamp) {
    return null
  }
  var date = new Date(timeStamp.seconds * 1000)
  date.setMinutes(date.getMinutes() + minutes)
  return date
}

export default {
  formatDateTime,
  formatDateTimeFromTimeStamp,
  addMinutesFromTimeStamp
}
