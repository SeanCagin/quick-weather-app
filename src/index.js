import "./style.css";

const API_EXTENSION = "?key=CB3NQGGL8MVM3PVU28QFKUZPD";
const FIRST_HALF =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

const search = document.querySelector("button#search");
const input = document.querySelector("input#search-query");
const displayF = document.querySelector("div#tempF");
const displayC = document.querySelector("div#tempC");

search.addEventListener("click", async () => {
  try {
    let data = await fetch(FIRST_HALF + input.value + API_EXTENSION);
    data = await data.json();
    console.log(data);
    let tempF = data.currentConditions.temp;
    let tempC = (((tempF - 32) / 9) * 5).toFixed(1);
    displayF.textContent = `Temp in F: ${tempF}`;
    displayC.textContent = `Temp in C: ${tempC}`;
  } catch (e) {
    alert(`Either the weather API is down or you entered an invalid 
      search query`);
    console.log(e);
  }
});
