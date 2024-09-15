import "./style.css";

const API_EXTENSION = "?key=CB3NQGGL8MVM3PVU28QFKUZPD";
const FIRST_HALF =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

const search = document.querySelector("button#search");
const input = document.querySelector("input#search-query");
const display = document.querySelector("div#temp");

search.addEventListener("click", async () => {
  try {
    let data = await fetch(FIRST_HALF + input.value + API_EXTENSION);
    data = await data.json();
    display.textContent = data.currentConditions.temp;
  } catch (e) {
    alert(`Either the weather API is down or you entered an invalid 
      search query`);
    console.log(e);
  }
});
