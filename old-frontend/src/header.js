function renderHeader() {
  const element = document.createElement("header");

  element.innerHTML = "Header from Old Frontend";

  document.getElementById("header-container").appendChild(element);
}

renderHeader();
