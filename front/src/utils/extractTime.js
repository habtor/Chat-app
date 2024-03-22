export function extractTime(dateString) {
  const date = new Date(dateString);
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  return `${hours}:${minutes}`;
}

export function extractDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDay();
  const dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return `${dayName[day]}`;
}

// Helper function to pad single-digit numbers with a leading zero
function padZero(number) {
  return number.toString().padStart(2, "0");
}
