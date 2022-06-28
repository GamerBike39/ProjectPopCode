let popPaf = document.querySelectorAll(".opacity");

setTimeout(function () {
  popPaf.forEach(function (item) {
    item.classList.remove("opacity");
  }, 5000);
});
