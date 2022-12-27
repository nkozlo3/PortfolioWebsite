function changeTheme() {
  // Get the link element with id "STYLE_"
  var link = document.getElementById("STYLE_");

  // Get the href value of the link
  var href = link.getAttribute("href");

  // If the link has the orange.css stylesheet, set the new href to blue.css
  if (href == "orange.css") {
    var newHref = "blue.css";
  } else {
    // Otherwise, set the new href to orange.css
    var newHref = "orange.css";
  }

  // Set the href value of the link to the new href value
  link.setAttribute("href", newHref);
}