//https://api.openweathermap.org/data/2.5/weather?q=germany&appid=ffe09e0b0f43946dba9f3f08d47e8a88&&units=metric
const apikey="ffe09e0b0f43946dba9f3f08d47e8a88";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather&q=banglore";


async function checkWeather() {
  try {
    const response = await fetch(apiUrl + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

checkWeather();