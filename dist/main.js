/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0Esb0VBQW9FLE9BQU8sU0FBUyxRQUFROztBQUU1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx1REFBdUQsYUFBYTtBQUNwRTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsYUFBYSxFQUFFLGFBQWE7QUFDakU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZEQUE2RCxrQkFBa0I7QUFDL0UsTUFBTTtBQUNOO0FBQ0E7O0FBRUEsd0RBQXdELGtCQUFrQjtBQUMxRTtBQUNBO0FBQ0EsdUJBQXVCLHlCQUF5QjtBQUNoRDtBQUNBO0FBQ0EsZ0RBQWdELGtCQUFrQjs7QUFFbEU7QUFDQTtBQUNBLHVCQUF1QixpQkFBaUIsSUFBSSxpQkFBaUI7O0FBRTdEO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxXQUFXO0FBQzVDO0FBQ0E7QUFDQSxpQ0FBaUMsWUFBWTs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJ1bkFwcCA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IEFQSV9LRVkgPSBcIjllNzVlNWExYTZlNWE3OGRmZWY5ODUyYzFlYjExZjcxXCI7XG4gIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25bdHlwZT0nc3VibWl0J11cIik7XG4gIGNvbnN0IHBsYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGU9J3RleHQnXVwiKTtcbiAgbGV0IGRhdGE7XG5cbiAgc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGxldCB0YXJnZXQgPSBwbGFjZS52YWx1ZTtcbiAgICBpZiAodGFyZ2V0Lmxlbmd0aCA8IDEpIHtcbiAgICAgIGFsZXJ0KFwiUGxlYXNlIGVudGVyIGEgdmFsdWVcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGdldERhdGEodGFyZ2V0KTtcbiAgfSk7XG5cbiAgY29uc3QgZ2V0RGF0YSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBjb25zdCB1cmwgPSBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7dGFyZ2V0fSZBUFBJRD0ke0FQSV9LRVl9YDtcblxuICAgIGZldGNoKHVybClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgLy8gbWFrZSB0aGUgcHJvbWlzZSBiZSByZWplY3RlZCBpZiB3ZSBkaWRuJ3QgZ2V0IGEgMnh4IHJlc3BvbnNlXG4gICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgIGVyci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChkKSA9PiB7XG4gICAgICAgIHJlZmluZURhdGEoZCk7XG4gICAgICAgIHBvcHVsYXRlKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgYWxlcnQoXCJMb2NhdGlvbiBub3QgZm91bmRcIik7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCByZWZpbmVEYXRhID0gZnVuY3Rpb24gKGQpIHtcbiAgICBsZXQgZmVlbHMgPSBNYXRoLnJvdW5kKGQubWFpbi5mZWVsc19saWtlIC0gMjczLjE1KTtcbiAgICBsZXQgbWFpbiA9IE1hdGgucm91bmQoZC5tYWluLnRlbXAgLSAyNzMuMTUpO1xuXG4gICAgZGF0YSA9IHtcbiAgICAgIGxvY2F0aW9uOiBbZC5uYW1lLCBkLnN5cy5jb3VudHJ5XSxcbiAgICAgIGR0OiBbZC5kdCwgZC50aW1lem9uZV0sXG4gICAgICBjb29yZGluYXRlczogZC5jb29yZCxcbiAgICAgIHN1bjogW2Quc3lzLnN1bnJpc2UsIGQuc3lzLnN1bnNldF0sXG4gICAgICB0ZW1wOiBbZmVlbHMsIG1haW4sIFwiwrBDXCJdLFxuICAgICAgaFA6IFtkLm1haW4uaHVtaWRpdHksIGQubWFpbi5wcmVzc3VyZV0sXG4gICAgICB3ZWF0aGVyOiBkLndlYXRoZXJbMF0sXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBwb3B1bGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYWhyZW5oZWl0XCIpKSB7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5mYWhyZW5oZWl0XCIpXG4gICAgICAgIC5jbGFzc0xpc3QucmVwbGFjZShcImZhaHJlbmhlaXRcIiwgXCJjZWxzaXVzXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHN3aXRjaEMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN3aXRjaC1jXCIpO1xuICAgIGNvbnN0IHN3aXRjaEYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN3aXRjaC1mXCIpO1xuXG4gICAgY29uc3Qgc2V0VGVtcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcFwiKS50ZXh0Q29udGVudCA9IGAke2RhdGEudGVtcFsxXX1gO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wXCIpLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgZGF0YS50ZW1wWzJdKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiLmZlZWxzXCJcbiAgICAgICkudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZTogJHtkYXRhLnRlbXBbMF19JHtkYXRhLnRlbXBbMl19YDtcbiAgICB9O1xuXG4gICAgY29uc3Qgd2VhdGhlckxpc3QgPSBbXG4gICAgICBcIkNsZWFyXCIsXG4gICAgICBcIkNsb3Vkc1wiLFxuICAgICAgXCJEcml6emxlXCIsXG4gICAgICBcIlJhaW5cIixcbiAgICAgIFwiU25vd1wiLFxuICAgICAgXCJUaHVuZGVyc3Rvcm1cIixcbiAgICBdO1xuXG4gICAgaWYgKHdlYXRoZXJMaXN0LmluY2x1ZGVzKGRhdGEud2VhdGhlci5tYWluKSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiLi9pbWFnZXMvJHtkYXRhLndlYXRoZXIubWFpbn0uanBnXCIpYDtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiLi9pbWFnZXMvRGVmYXVsdC5qcGdcIilgO1xuICAgIH1cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlclwiKS50ZXh0Q29udGVudCA9IGAke2RhdGEud2VhdGhlci5tYWlufWA7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLndEZXNjXCJcbiAgICApLnRleHRDb250ZW50ID0gYCR7ZGF0YS53ZWF0aGVyLmRlc2NyaXB0aW9ufWA7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiI2ltYWdlXCJcbiAgICApLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2RhdGEud2VhdGhlci5pY29ufS5wbmdgO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLmxvY2F0aW9uXCJcbiAgICApLnRleHRDb250ZW50ID0gYCR7ZGF0YS5sb2NhdGlvblswXX0sICR7ZGF0YS5sb2NhdGlvblsxXX1gO1xuXG4gICAgc2V0VGVtcCgpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5odW1pZGl0eVwiXG4gICAgKS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHtkYXRhLmhQWzBdfSVgO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5wcmVzc3VyZVwiXG4gICAgKS50ZXh0Q29udGVudCA9IGBQcmVzc3VyZTogJHtkYXRhLmhQWzFdfSBoUGFgO1xuXG4gICAgc3dpdGNoQy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNlbHNpdXNcIikpIHJldHVybjtcbiAgICAgIGNvbnZlcnRUZW1wKCk7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5mYWhyZW5oZWl0XCIpXG4gICAgICAgIC5jbGFzc0xpc3QucmVwbGFjZShcImZhaHJlbmhlaXRcIiwgXCJjZWxzaXVzXCIpO1xuICAgIH0pO1xuXG4gICAgc3dpdGNoRi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhaHJlbmhlaXRcIikpIHJldHVybjtcbiAgICAgIGNvbnZlcnRUZW1wKCk7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5jZWxzaXVzXCIpXG4gICAgICAgIC5jbGFzc0xpc3QucmVwbGFjZShcImNlbHNpdXNcIiwgXCJmYWhyZW5oZWl0XCIpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY29udmVydFRlbXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgdGVtcCA9IFtdO1xuICAgICAgaWYgKGRhdGEudGVtcFsyXSA9PT0gXCLCsENcIikge1xuICAgICAgICB0ZW1wLnB1c2godG9GYWhyZW5oZWl0KGRhdGEudGVtcFswXSksIHRvRmFocmVuaGVpdChkYXRhLnRlbXBbMV0pLCBcIsKwRlwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRlbXAucHVzaCh0b0NlbHNpdXMoZGF0YS50ZW1wWzBdKSwgdG9DZWxzaXVzKGRhdGEudGVtcFsxXSksIFwiwrBDXCIpO1xuICAgICAgfVxuICAgICAgZGF0YS50ZW1wID0gdGVtcDtcbiAgICAgIHNldFRlbXAoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdG9GYWhyZW5oZWl0ID0gZnVuY3Rpb24gKHRlbXApIHtcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRlbXAgKiAoOSAvIDUpICsgMzIpO1xuICAgIH07XG5cbiAgICBjb25zdCB0b0NlbHNpdXMgPSBmdW5jdGlvbiAodGVtcCkge1xuICAgICAgcmV0dXJuIE1hdGgucm91bmQoKHRlbXAgLSAzMikgKiAoNSAvIDkpKTtcbiAgICB9O1xuICB9O1xuXG4gIGdldERhdGEoXCJMb25kb25cIik7XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9