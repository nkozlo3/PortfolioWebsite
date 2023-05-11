function changeTheme() {
  console.log("changeTheme() called");
  var oldLink = document.getElementById("STYLE_");

  // get oldLink's href value
  var oldHref = oldLink.getAttribute("href");

  if (oldHref == "orange.css") {
    var newHref = "blue.css";
  } else {
    var newHref = "orange.css";
  }

  // set oldLink's href value
  oldLink.setAttribute("href", newHref);
}