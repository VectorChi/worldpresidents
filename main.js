// Making reference
const searchInput = document.querySelector("#search");
const listItem = document.querySelectorAll(".list_wrapper .row");
const toggleIcon = document.querySelector("#theme_icon");
const goUp = document.querySelector(".arrow-con");

// search funtion

searchInput.addEventListener("keyup", (e) => {
  const searchChar = e.target.value.toLowerCase();
  // Always select current rows after dynamic rendering
  const rows = document.querySelectorAll(".list_wrapper .row");
  rows.forEach((rowItem) => {
    let searchTarget = rowItem.querySelector(".country_Capital").textContent;
    if (searchTarget.toLowerCase().includes(searchChar)) {
      rowItem.style.display = "";
    } else {
      rowItem.style.display = "none";
    }
  });
});

//theme toggle
toggleIcon.addEventListener("click", (e) => {
  document.body.classList.toggle("dark_theme");

  // change icon when toggling class
  if (document.body.classList.contains("dark_theme")) {
    toggleIcon.src = "./assets/sun.svg";
  } else toggleIcon.src = "./assets/moon.svg";
});

// // load more funtion
// let Row = document.querySelectorAll(".row"),
//   Load = document.querySelector(".load"),
//   currentList = 0;

// Load.addEventListener("click", (e) => {
//   for (let i = currentList; i < currentList + 20; i++) {
//     if (Row[i]) {
//       Row[i].style.display = "grid";
//     }
//   }
//   currentList += 20;
//   if (currentList >= Row.length) {
//     e.target.style.display = "none";
//   }
// });

goUp.addEventListener("click", (e) => {
  document.querySelector("nav").scrollIntoView({ behavior: "smooth" });
});

let presidentsData = [];

// Fetch and render presidents
function renderPresidents(presidents) {
  const wrapper = document.querySelector('.wrapper');
  wrapper.innerHTML = '';
  presidents.forEach((obj, index) => {
    const row = document.createElement("div");
    row.className = "row";
    row.innerHTML = `
      <div class="num">${index + 1}</div>
      <div class="flag">${obj.flag}</div>
      <div class="country_Capital">${obj.country}, ${obj.capital}</div>
      <div class="name">
        <a href="${obj.leader.wiki}" target="_blank" alt="Not Found">${obj.leader.name}</a>
      </div>
      <div class="age">${obj.leader.age} years</div>
    `;
    wrapper.appendChild(row);
  });
}

// Fetch presidents.json and initialize
fetch('./data/presidents.json')
  .then((response) => response.json())
  .then(presidents => {
    presidentsData = presidents;
    renderPresidents(presidentsData);
    incrementPresidentAgesOnceAfterOneYear();
  });

// Improved yearly age increment
function incrementPresidentAgesOnceAfterOneYear() {
  function incrementAges() {
    presidentsData.forEach(obj => {
      obj.leader.age += 1;
    });
    renderPresidents(presidentsData);
  }
  // Set a timer to increment ages after 1 year (in milliseconds)
  setTimeout(incrementAges, 365 * 24 * 60 * 60 * 1000);
}
// Call this function after the page loads
window.addEventListener(
  "DOMContentLoaded",
  incrementPresidentAgesOnceAfterOneYear
);
