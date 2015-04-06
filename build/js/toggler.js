// to open main-navigation (change "click" to "tap" in production):

(function() {
  var toggler = document.querySelector(".page-header__trigger");
  var navigation = document.querySelector(".main-nav");
  var topLine = document.querySelector(".page-header__row");

  toggler.addEventListener("click", function(event) {
      event.preventDefault();
      topLine.classList.toggle("page-header__row--opened");
      navigation.classList.toggle("main-nav--opened");
      toggler.classList.toggle("page-header__trigger--opened");
  });
})();
