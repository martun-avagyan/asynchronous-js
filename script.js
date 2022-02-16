"use strict";

// Selectors

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// End Selectors

// 248. Our First AJAX Call: XMLHttpRequest

const renderCountry = function (data, className = "") {
  const html = `<article class="country ${className}">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} mln people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
</article>`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

// const getCountryAndNeighbor = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("get", `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderCountry(data);

//     // Get neighbor country
//     const [neighbor] = data.borders;
//     console.log(neighbor, secondNeighbor);

//     if (!neighbor) return;

//     const request2 = new XMLHttpRequest();
//     request2.open("get", `https://restcountries.com/v2/alpha/${neighbor}`);
//     request2.send();

//     request2.addEventListener("load", function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2, "neighbor");
//     });
//   });
// };

// getCountryAndNeighbor("usa");

const request = fetch(`https://restcountries.com/v2/name/usa`);

console.log(request);

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then((response) => response.json())
    .then((data) => renderCountry(data[0]));
};

getCountryData("usa");
