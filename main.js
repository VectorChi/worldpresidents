// Making reference
const searchInput = document.querySelector("#search");
const listItem = document.querySelectorAll(".list_wrapper .row");
const toggleIcon = document.querySelector("#theme_icon");
const goUp = document.querySelector(".arrow-con");
// search funtion
searchInput.addEventListener("keyup", (e) => {
  // initializing input value
  const searchChar = e.target.value.toLowerCase();
  listItem.forEach((rowItem) => {
    // specify filter by country and capital
    let searchTarget = rowItem.querySelector(".country_Capital").textContent;
    console.log(searchTarget);

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

//function to find ages and increment 1 after 365 days
function incrementPresidentAgesOnceAfterOneYear() {
  function incrementAges() {
    document.querySelectorAll(".age").forEach((ageDiv) => {
      let match = ageDiv.textContent.match(/^(\d+)\s*years$/);
      if (match) {
        let newAge = parseInt(match[1], 10) + 1;
        ageDiv.textContent = `${newAge} years`;
      }
    });
  }
  // Set a timer to increment ages after 1 year (in milliseconds)
  setTimeout(incrementAges, 365 * 24 * 60 * 60 * 1000);
}

// Call this function after the page loads
window.addEventListener(
  "DOMContentLoaded",
  incrementPresidentAgesOnceAfterOneYear
);
