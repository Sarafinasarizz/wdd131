document.addEventListener("DOMContentLoaded", () => {
  const temp = 10;
  const windSpeed = 5;

  // Display wind speeds
  document.getElementById("windSpeedKmh").textContent = `${windSpeed} km/h`;
  document.getElementById("windSpeedDesktop").textContent = `${windSpeed} km/h`;

  // Calculate wind chill
  const windChill = calculateWindChill(temp, windSpeed);
  document.getElementById("windChill").textContent = windChill;
  document.getElementById("windChillDesktop").textContent = windChill;

  // Footer year and modified date
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  
  document.getElementById("lastmodified").textContent ="Last modification: " + document.lastModified;
});

// Celsius wind chill formula
function calculateWindChill(temp, windSpeed) {
  if (temp <= 10 && windSpeed > 4.8) {
    const chill =
      13.12 +
      0.6215 * temp -
      11.37 * Math.pow(windSpeed, 0.16) +
      0.3965 * temp * Math.pow(windSpeed, 0.16);
    return chill.toFixed(1);
  }
  return temp.toFixed(1);
}
