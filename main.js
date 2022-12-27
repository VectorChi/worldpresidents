// Making reference
const searchInput = document.querySelector("#search");
const listItem = document.querySelectorAll(".list_wrapper .row");

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
