const runApp = (function () {
  const API_KEY = "9e75e5a1a6e5a78dfef9852c1eb11f71";
  const search = document.querySelector("button[type='submit']");
  const place = document.querySelector("input[type='text']");
  let data;

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
      .then((d) => {
        refineData(d);
        populate();
      })
      .catch((err) => {
        console.log(err);
        alert("Location not found");
      });
  };

  const refineData = function (d) {
    let feels = Math.round(d.main.feels_like - 273.15);
    let main = Math.round(d.main.temp - 273.15);

    data = {
      location: [d.name, d.sys.country],
      dt: [d.dt, d.timezone],
      coordinates: d.coord,
      sun: [d.sys.sunrise, d.sys.sunset],
      temp: [feels, main, "°C"],
      hP: [d.main.humidity, d.main.pressure],
      weather: d.weather[0],
    };
  };

  const populate = function () {
    if (document.querySelector(".fahrenheit")) {
      document
        .querySelector(".fahrenheit")
        .classList.replace("fahrenheit", "celsius");
    }

    const switchC = document.querySelector(".switch-c");
    const switchF = document.querySelector(".switch-f");

    const setTemp = function () {
      document.querySelector(".temp").textContent = `${data.temp[1]}`;
      document.querySelector(".temp").setAttribute("data-value", data.temp[2]);
      document.querySelector(
        ".feels"
      ).textContent = `Feels like: ${data.temp[0]}${data.temp[2]}`;
    };

    const weatherList = [
      "Clear",
      "Clouds",
      "Drizzle",
      "Rain",
      "Snow",
      "Thunderstorm",
    ];

    if (weatherList.includes(data.weather.main)) {
      document.body.style.backgroundImage = `url("./images/${data.weather.main}.jpg")`;
    } else {
      document.body.style.backgroundImage = `url("./images/Default.jpg")`;
    }

    document.querySelector(".weather").textContent = `${data.weather.main}`;
    document.querySelector(
      ".wDesc"
    ).textContent = `${data.weather.description}`;
    document.querySelector(
      "#image"
    ).src = `http://openweathermap.org/img/wn/${data.weather.icon}.png`;

    document.querySelector(
      ".location"
    ).textContent = `${data.location[0]}, ${data.location[1]}`;

    setTemp();
    document.querySelector(
      ".humidity"
    ).textContent = `Humidity: ${data.hP[0]}%`;
    document.querySelector(
      ".pressure"
    ).textContent = `Pressure: ${data.hP[1]} hPa`;

    switchC.addEventListener("click", (e) => {
      if (document.querySelector(".celsius")) return;
      convertTemp();
      document
        .querySelector(".fahrenheit")
        .classList.replace("fahrenheit", "celsius");
    });

    switchF.addEventListener("click", (e) => {
      if (document.querySelector(".fahrenheit")) return;
      convertTemp();
      document
        .querySelector(".celsius")
        .classList.replace("celsius", "fahrenheit");
    });

    const convertTemp = function () {
      let temp = [];
      if (data.temp[2] === "°C") {
        temp.push(toFahrenheit(data.temp[0]), toFahrenheit(data.temp[1]), "°F");
      } else {
        temp.push(toCelsius(data.temp[0]), toCelsius(data.temp[1]), "°C");
      }
      data.temp = temp;
      setTemp();
    };

    const toFahrenheit = function (temp) {
      return Math.round(temp * (9 / 5) + 32);
    };

    const toCelsius = function (temp) {
      return Math.round((temp - 32) * (5 / 9));
    };
  };

  getData("London");
})();
