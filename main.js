window.addEventListener('load', function () {

  var navbarHeight = document.querySelector('header').offsetHeight;
  document.documentElement.style.setProperty('--navbar-height', navbarHeight + 'px');

  var rect = document.querySelector('.slidingbar').getBoundingClientRect();
  var tabWidth = rect.width;

  document.documentElement.style.setProperty('--TabWidth', tabWidth + 'px');
  document.documentElement.style.setProperty('--NTabWidth', -tabWidth + 'px');

  document.querySelector(".icon").addEventListener("click", function () {
    var slidingbar = document.querySelector(".slidingbar");
    var slidingbarLeft = window.getComputedStyle(slidingbar).getPropertyValue("left");

    slidingbar.style.left = slidingbarLeft === "0px" ? "var(--NTabWidth)" : "0px";
  });

});

const user = document.querySelector(".user");
const trigger = document.querySelector(".user-trigger");

trigger.addEventListener("click", function (e) {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    e.stopPropagation();
    user.classList.toggle("active");
});

document.addEventListener("click", function () {
    user.classList.remove("active");
});