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
