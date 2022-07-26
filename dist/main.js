/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLG9FQUFvRSxPQUFPLFNBQVMsUUFBUTs7QUFFNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2REFBNkQsa0JBQWtCO0FBQy9FLE1BQU07QUFDTjtBQUNBOztBQUVBLHdEQUF3RCxrQkFBa0I7QUFDMUUsc0RBQXNELHlCQUF5QjtBQUMvRTtBQUNBO0FBQ0EsZ0RBQWdELGtCQUFrQjs7QUFFbEU7QUFDQTtBQUNBLHVCQUF1QixpQkFBaUIsSUFBSSxpQkFBaUI7O0FBRTdELHFEQUFxRCxhQUFhO0FBQ2xFO0FBQ0Esa0VBQWtFLGFBQWE7QUFDL0UsbUVBQW1FLFdBQVc7QUFDOUUsbUVBQW1FLFlBQVk7QUFDL0U7QUFDQTs7QUFFQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBydW5BcHAgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBBUElfS0VZID0gXCI5ZTc1ZTVhMWE2ZTVhNzhkZmVmOTg1MmMxZWIxMWY3MVwiO1xuICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uW3R5cGU9J3N1Ym1pdCddXCIpO1xuICBjb25zdCBwbGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlPSd0ZXh0J11cIik7XG5cbiAgc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGxldCB0YXJnZXQgPSBwbGFjZS52YWx1ZTtcbiAgICBpZiAodGFyZ2V0Lmxlbmd0aCA8IDEpIHtcbiAgICAgIGFsZXJ0KFwiUGxlYXNlIGVudGVyIGEgdmFsdWVcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGdldERhdGEodGFyZ2V0KTtcbiAgfSk7XG5cbiAgY29uc3QgZ2V0RGF0YSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBjb25zdCB1cmwgPSBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7dGFyZ2V0fSZBUFBJRD0ke0FQSV9LRVl9YDtcblxuICAgIGZldGNoKHVybClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgLy8gbWFrZSB0aGUgcHJvbWlzZSBiZSByZWplY3RlZCBpZiB3ZSBkaWRuJ3QgZ2V0IGEgMnh4IHJlc3BvbnNlXG4gICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgIGVyci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiBwb3B1bGF0ZShyZWZpbmVEYXRhKGRhdGEpKSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGFsZXJ0KFwiTG9jYXRpb24gbm90IGZvdW5kXCIpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVmaW5lRGF0YSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgbGV0IGZlZWxzID0gTWF0aC5yb3VuZChkYXRhLm1haW4uZmVlbHNfbGlrZSAtIDI3My4xNSk7XG4gICAgbGV0IG1haW4gPSBNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wIC0gMjczLjE1KTtcblxuICAgIHJldHVybiB7XG4gICAgICBsb2NhdGlvbjogW2RhdGEubmFtZSwgZGF0YS5zeXMuY291bnRyeV0sXG4gICAgICBkdDogW2RhdGEuZHQsIGRhdGEudGltZXpvbmVdLFxuICAgICAgY29vcmRpbmF0ZXM6IGRhdGEuY29vcmQsXG4gICAgICBzdW46IFtkYXRhLnN5cy5zdW5yaXNlLCBkYXRhLnN5cy5zdW5zZXRdLFxuICAgICAgdGVtcDogW2ZlZWxzLCBtYWluXSxcbiAgICAgIGhQOiBbZGF0YS5tYWluLmh1bWlkaXR5LCBkYXRhLm1haW4ucHJlc3N1cmVdLFxuICAgICAgd2VhdGhlcjogZGF0YS53ZWF0aGVyWzBdLFxuICAgIH07XG4gIH07XG5cbiAgY29uc3QgcG9wdWxhdGUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGNvbnN0IHdlYXRoZXJMaXN0ID0gW1xuICAgICAgXCJDbGVhclwiLFxuICAgICAgXCJDbG91ZHNcIixcbiAgICAgIFwiRHJpenpsZVwiLFxuICAgICAgXCJSYWluXCIsXG4gICAgICBcIlNub3dcIixcbiAgICAgIFwiVGh1bmRlcnN0b3JtXCIsXG4gICAgXTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgIGlmICh3ZWF0aGVyTGlzdC5pbmNsdWRlcyhkYXRhLndlYXRoZXIubWFpbikpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIi4vaW1hZ2VzLyR7ZGF0YS53ZWF0aGVyLm1haW59LmpwZ1wiKWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIi4vaW1hZ2VzL0RlZmF1bHQuanBnXCIpYDtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXJcIikudGV4dENvbnRlbnQgPSBgJHtkYXRhLndlYXRoZXIubWFpbn1gO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud0Rlc2NcIikudGV4dENvbnRlbnQgPSBgJHtkYXRhLndlYXRoZXIuZGVzY3JpcHRpb259YDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIjaW1hZ2VcIlxuICAgICkuc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGF0YS53ZWF0aGVyLmljb259LnBuZ2A7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIubG9jYXRpb25cIlxuICAgICkudGV4dENvbnRlbnQgPSBgJHtkYXRhLmxvY2F0aW9uWzBdfSwgJHtkYXRhLmxvY2F0aW9uWzFdfWA7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBcIikudGV4dENvbnRlbnQgPSBgJHtkYXRhLnRlbXBbMV19YDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBcIikuc2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJywgJ8KwQycpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmVlbHNcIikudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZTogJHtkYXRhLnRlbXBbMF194oSDYDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmh1bWlkaXR5XCIpLnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke2RhdGEuaFBbMF19JWA7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVzc3VyZVwiKS50ZXh0Q29udGVudCA9IGBQcmVzc3VyZTogJHtkYXRhLmhQWzFdfSBoUGFgO1xuICAgIFxuICB9O1xuXG4gIGdldERhdGEoXCJMb25kb25cIik7XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9