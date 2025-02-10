let toggleSwitch = document.querySelector(".toggle-switch");
let secEl = document.querySelector("section");

toggleSwitch.onclick = function (e) {
  this.classList.toggle("mon");
  secEl.classList.toggle("month");
};
