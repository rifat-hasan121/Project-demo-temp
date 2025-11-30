// active color btn
const listItems = document.querySelectorAll("#template-list li");
const itemsArray = Array.from(listItems);
console.log(itemsArray);

itemsArray.forEach((item) => {
  item.addEventListener("click", () => {
    itemsArray.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
  });
});



// handle mobile menu
const toggleMenu = document.getElementById("toggle-menu"); // the input
const dropDown = document.getElementById("drop-down");
const label = document.querySelector('label[for="toggle-menu"]');

// Handle open/close
toggleMenu.addEventListener("change", () => {
  if (toggleMenu.checked) {
    dropDown.classList.remove("hidden");
  } else {
    dropDown.classList.add("hidden");
  }
});

// Prevent SVG click from closing menu
label.addEventListener("click", (e) => {
  e.stopPropagation(); // stop bubbling so window click won't trigger
});

// Close when clicking outside
window.addEventListener("click", (e) => {
  if (!label.contains(e.target) && !dropDown.contains(e.target)) {
    dropDown.classList.add("hidden");
    toggleMenu.checked = false; // reset checkbox
  }
});
