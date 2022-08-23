function renderFooter() {
  const element = document.createElement("footer");

  element.innerHTML = "Footer from Old Frontend";

  document.getElementById("footer-container").appendChild(element);
}

renderFooter();
