// Making reference
const searchInput = document.querySelector("#search");
const listItem = document.querySelectorAll(".list_wrapper .row");
const toggleIcon = document.querySelector("#theme_icon");

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

//load more funtion
let Row = document.querySelectorAll(".row"),
  Load = document.querySelector(".load"),
  currentList = 0;

Load.addEventListener("click", () => {
  for (let i = currentList; i < currentList + 20; i++) {
    if (Row[i]) {
      Row[i].style.display = "grid";
    }
  }
  currentList += 20;
  if (currentList >= Row.length) {
    e.target.style.display = "none";
  }
});
