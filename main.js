import PRESIDENTS_DATA from "./data.json" assert { type: 'json' };

// Making reference
const searchInput = document.querySelector("#search");
const toggleIcon = document.querySelector("#theme_icon");
const goUp = document.querySelector(".arrow-con");
const WRAPPER = document.querySelector(".wrapper");

// 
const INCREMENT_COUNT = 10;
let MAX_LENGTH = PRESIDENTS_DATA.length;
let INITIAL_COUNT = INCREMENT_COUNT;
let CURRENT_DATA = [...PRESIDENTS_DATA];
render(INITIAL_COUNT);

// search funtion
searchInput.addEventListener("keyup", (e) => {
  // initializing input value
  const searchChar = e.target.value.toLowerCase();
  INITIAL_COUNT = INCREMENT_COUNT;
  if (searchChar) {
    const SEARCH_RESULTS = PRESIDENTS_DATA.filter((rowItem, index) => {
      // specify filter by country and capital
      let countryCapital = rowItem.countryCapital;
      let president = rowItem.name;
      if (countryCapital.toLowerCase().includes(searchChar) || president.toLowerCase().includes(searchChar)) {
        return rowItem;
      }
    });
    if (SEARCH_RESULTS && SEARCH_RESULTS.length > 0) {
      CURRENT_DATA = SEARCH_RESULTS.map((data, index) => {
        data["id"] = String(index + 1);
        data["num"] = String(index + 1);
        return data;
      });
      MAX_LENGTH = CURRENT_DATA.length;
      INITIAL_COUNT = INITIAL_COUNT > MAX_LENGTH ? MAX_LENGTH : INITIAL_COUNT;
      render(INITIAL_COUNT);
    } else {
      // no results ui render;
      renderNoDataFound();
    }
  } else {
    // if search field gets empty;
    CURRENT_DATA = [...PRESIDENTS_DATA];
    render(INITIAL_COUNT);
  }
});

//theme toggle
toggleIcon.addEventListener("click", (e) => {
  document.body.classList.toggle("dark_theme");

  // change icon when toggling class
  if (document.body.classList.contains("dark_theme")) {
    toggleIcon.src = "./assets/sun.svg";
  } else toggleIcon.src = "./assets/moon.svg";
});

//load more funtion
let Load = document.querySelector(".load");

Load.addEventListener("click", () => {
  INITIAL_COUNT = INITIAL_COUNT + INCREMENT_COUNT > MAX_LENGTH ? MAX_LENGTH : INITIAL_COUNT + INCREMENT_COUNT;
  render(INITIAL_COUNT);
});

goUp.addEventListener("click", () => {
  document.querySelector("nav").scrollIntoView({ behavior: 'smooth' });
})

function render(INITIAL_COUNT) {
  let tableHtml = "";

  for (let index = 0; index < INITIAL_COUNT; index++) {
    tableHtml += createRow(CURRENT_DATA[index]);
  }
  WRAPPER.innerHTML = tableHtml;
}

function createRow({num, flag, countryCapital, bioUrl, name, age}) {
  return `
    <div class="row">
      <div class="num">${num}</div>
      <div class="flag">${flag}</div>
      <div class="country_Capital">${countryCapital}</div>
      <div class="name">
        <a
          href="${bioUrl}"
          target="_blank"
          alt="Not Found"
          >${name}</a
        >
      </div>
      <div class="age">${age}</div>
    </div>
  `
}

function renderNoDataFound() {
  let tableHtml = `
    <h2 id="no-data-found">
      No data found!
    </h2>
  `;

  WRAPPER.innerHTML = tableHtml;
}