const runApp = (function () {
  const API_KEY = "9e75e5a1a6e5a78dfef9852c1eb11f71";
  const search = document.querySelector("button[type='submit']");
  const place = document.querySelector("input[type='text']");

  search.addEventListener("click", (e) => {
    let target = place.value;
    if (target.length < 1) {
      alert("Please enter a value");
      return;
    }
    getData(target);
  });

  const getData = function (target) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${target}&APPID=${API_KEY}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          // make the promise be rejected if we didn't get a 2xx response
          const err = new Error(response.message);
          err.response = response;
          throw err;
        }
        return response.json();
      })
      .then((data) => populate(refineData(data)))
      .catch((err) => {
        alert("Location not found");
      });
  };

  const refineData = function (data) {
    let feels = Math.round(data.main.feels_like - 273.15);
    let main = Math.round(data.main.temp - 273.15);

    return {
      location: [data.name, data.sys.country],
      dt: [data.dt, data.timezone],
      coordinates: data.coord,
      sun: [data.sys.sunrise, data.sys.sunset],
      temp: [feels, main],
      hP: [data.main.humidity, data.main.pressure],
      weather: data.weather[0],
    };
  };

  const populate = function (data) {
    const weatherList = [
      "Clear",
      "Clouds",
      "Drizzle",
      "Rain",
      "Snow",
      "Thunderstorm",
    ];
    console.log(data);

    if (weatherList.includes(data.weather.main)) {
      document.body.style.backgroundImage = `url("./images/${data.weather.main}.jpg")`;
    } else {
      document.body.style.backgroundImage = `url("./images/Default.jpg")`;
    }

    document.querySelector(".weather").textContent = `${data.weather.main}`;
    document.querySelector(".wDesc").textContent = `${data.weather.description}`;
    document.querySelector(
      "#image"
    ).src = `http://openweathermap.org/img/wn/${data.weather.icon}.png`;

    document.querySelector(
      ".location"
    ).textContent = `${data.location[0]}, ${data.location[1]}`;

    document.querySelector(".temp").textContent = `${data.temp[1]}`;
    document.querySelector(".temp").setAttribute('data-value', '°C');
    document.querySelector(".feels").textContent = `Feels like: ${data.temp[0]}℃`;
    document.querySelector(".humidity").textContent = `Humidity: ${data.hP[0]}%`;
    document.querySelector(".pressure").textContent = `Pressure: ${data.hP[1]} hPa`;
    
  };

  getData("London");
})();
