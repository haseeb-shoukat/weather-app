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
      .then((response) => console.log(response))
      .catch(err => {
        alert("Location not found");
      });
  });
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRSxPQUFPLFNBQVMsUUFBUTs7QUFFNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJ1bkFwcCA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IEFQSV9LRVkgPSBcIjllNzVlNWExYTZlNWE3OGRmZWY5ODUyYzFlYjExZjcxXCI7XG4gIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25bdHlwZT0nc3VibWl0J11cIik7XG4gIGNvbnN0IHBsYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGU9J3RleHQnXVwiKTtcblxuICBzZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgbGV0IHRhcmdldCA9IHBsYWNlLnZhbHVlO1xuICAgIGlmICh0YXJnZXQubGVuZ3RoIDwgMSkge1xuICAgICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgYSB2YWx1ZVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdXJsID0gYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke3RhcmdldH0mQVBQSUQ9JHtBUElfS0VZfWA7XG5cbiAgICBmZXRjaCh1cmwpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgLy8gbWFrZSB0aGUgcHJvbWlzZSBiZSByZWplY3RlZCBpZiB3ZSBkaWRuJ3QgZ2V0IGEgMnh4IHJlc3BvbnNlXG4gICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IocmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICBlcnIucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gY29uc29sZS5sb2cocmVzcG9uc2UpKVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGFsZXJ0KFwiTG9jYXRpb24gbm90IGZvdW5kXCIpO1xuICAgICAgfSk7XG4gIH0pO1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==