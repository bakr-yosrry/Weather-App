var input = document.querySelector(".input");
var btn = document.querySelector("#submit");

window.addEventListener("load", () => {
  getWeather("Cairo");
});

input.addEventListener("input", () => {
  if (input.value) getWeather(input.value);
});

btn.addEventListener("click", () => {
  if (input.value) getWeather(input.value);
});

async function getWeather(city) {
  var apiKey = "1927ce39528d4a19a8612214252710";
  var url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3&lang=en`;

  var res = await fetch(url);
  var data = await res.json();

  // ======= Day 1 =======
  var today = data.forecast.forecastday[0];
  document.querySelector(".day-1-foter div:first-child").textContent = new Date(
    today.date
  ).toLocaleDateString("en-US", { weekday: "long" });
  document.querySelector(".day-1-foter div:last-child").textContent = new Date(
    today.date
  ).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
  });
  document.querySelector(".day-1 .location").textContent = data.location.name;
  document.querySelector(".day-1 .degree").textContent =
    data.current.temp_c + "°C";
  document.querySelector(".day-1 .day-1-icon").innerHTML = `
      <img src="https:${data.current.condition.icon}" alt="">
    `;
  document.querySelector(".day-1 .weather-condition").textContent =
    data.current.condition.text;

  // ======= Day 2 =======
  var day2 = data.forecast.forecastday[1];
  document.querySelector(".day-2-foter div:first-child").textContent = new Date(
    day2.date
  ).toLocaleDateString("en-US", { weekday: "long" });
  document.querySelector(".day-2-foter div:last-child").textContent = new Date(
    day2.date
  ).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
  });
  document.querySelector(".day-2 .day-2-icon").innerHTML = `
      <img src="https:${day2.day.condition.icon}" alt="">
    `;
  document.querySelector(
    ".day-2 .degree"
  ).textContent = ` ${day2.day.maxtemp_c}°C |  ${day2.day.mintemp_c}°C`;
  document.querySelector(".day-2 .weather-condition").textContent =
    day2.day.condition.text;

  // ======= Day 3 =======
  var day3 = data.forecast.forecastday[2];
  document.querySelector(".day-3-foter div:first-child").textContent = new Date(
    day3.date
  ).toLocaleDateString("en-US", { weekday: "long" });
  document.querySelector(".day-3-foter div:last-child").textContent = new Date(
    day3.date
  ).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
  });
  document.querySelector(".day-3 .day-3-icon").innerHTML = `
      <img src="https:${day3.day.condition.icon}" alt="">
    `;
  document.querySelector(
    ".day-3 .degree"
  ).textContent = ` ${day3.day.maxtemp_c}°C |  ${day3.day.mintemp_c}°C`;
  document.querySelector(".day-3 .weather-condition").textContent =
    day3.day.condition.text;
}
