function setProjectButtonStyle() {
  var projectButtons = document.getElementsByClassName("projectButtons");
  for (var i = 0; i < projectButtons.length; i++) {
    projectButtons[i].className = "cButton contactButton projectButtons";
  }

  var projectButton = document.getElementById("projectButton");
  projectButton.className =
    "cButton contactButton projectButtons projectButton-project";
}

// function called on page load
function setExperienceStyle() {
  var projectButton = document.getElementById("projectButton");
  projectButton.className =
    "cButton contactButton projectButtons projectButton-project";

  var expHeader = document.getElementById("experienceHeader");
  expHeader.className = "headers projectHeader";

  var cyberButton = document.getElementById("cyberButton");
  cyberButton.className = "cButton contactButton projectButtons";
}

function setContactHeaderStyle() {
  var contactHeader = document.getElementById("contactHeader");
  contactHeader.className = "headers contactHeader";
}

function setContactParagraphStyle() {
  var contactParagraph = document.getElementById("contactParagraph");
  contactParagraph.className = "paragraphs contactParagraph";
}

function setContactInputBoxesStyle() {
  var contactName = document.getElementById("contactName");
  contactName.className = "inputBox contactInputNameBox";

  var contactEmail = document.getElementById("contactEmail");
  contactEmail.className = "inputBox contactInputEmailBox";

  var contactMessage = document.getElementById("contactMessage");
  contactMessage.className = "inputBox contactInputMessageBox";
}

function setContactButtonStyle() {
  var contactSubmitButton = document.getElementById("contactSubmitButton");
  contactSubmitButton.className = "cButton contactButton contactSubmitButton";

  var emailMeButton = document.getElementById("emailMeButton");
  emailMeButton.className = "cButton contactButton mailMeButton";

  var callMeButton = document.getElementById("callMeButton");
  callMeButton.className = "cButton contactButton callMeButton";

  var locateMeButton = document.getElementById("locateMeButton");
  locateMeButton.className = "cButton contactButton locateMeButton";
}

function setContactPlaceHolderStyle() {
  var contactMePlaceholder = document.getElementById("contactMePlaceholder");
  contactMePlaceholder.className = "paragraphs placeHolderButton";
}

function implementStyle() {
  var project = document.getElementById("projectDiv");
  var cyber = document.getElementById("cyberDiv");
  project.style.display = "block";
  cyber.style.display = "none";
}

function setContactStyle() {
  setContactHeaderStyle();
  setContactParagraphStyle();
  setContactInputBoxesStyle();
  setContactButtonStyle();
  setContactPlaceHolderStyle();
}

window.onload = function () {
  setExperienceStyle();
  setContactStyle();
  implementStyle();
};

function projectsToggle() {
  setExperienceStyle();
  setContactStyle();
  implementStyle();
}

function setContactButtonStyleAfterCyberToggle() {
  var contactSubmitButton = document.getElementById("contactSubmitButton");
  contactSubmitButton.className =
    "cButton contactButton contactSubmitButton-afterCyberToggle";

  var emailMeButton = document.getElementById("emailMeButton");
  emailMeButton.className =
    "cButton contactButton mailMeButton-afterCyberToggle";

  var callMeButton = document.getElementById("callMeButton");
  callMeButton.className =
    "cButton contactButton callMeButton-afterCyberToggle";

  var locateMeButton = document.getElementById("locateMeButton");
  locateMeButton.className =
    "cButton contactButton locateMeButton-afterCyberToggle";
}

function setContactHeaderStyleAfterCyberToggle() {
  var contactHeader = document.getElementById("contactHeader");
  contactHeader.className = "headers contactHeader-afterCyberToggle";
}

function setContactParagraphStyleAfterCyberToggle() {
  var contactParagraph = document.getElementById("contactParagraph");
  contactParagraph.className = "paragraphs contactParagraph-afterCyberToggle";
}

function setContactInputBoxesStyleAfterCyberToggle() {
  var contactName = document.getElementById("contactName");
  contactName.className = "inputBox contactInputNameBox-afterCyberToggle";

  var contactEmail = document.getElementById("contactEmail");
  contactEmail.className = "inputBox contactInputEmailBox-afterCyberToggle";

  var contactMessage = document.getElementById("contactMessage");
  contactMessage.className = "inputBox contactInputMessageBox-afterCyberToggle";
}

function setContactPlaceHolderStyleAfterCyberToggle() {
  var contactMePlaceholder = document.getElementById("contactMePlaceholder");
  contactMePlaceholder.className =
    "paragraphs placeHolderButton-afterCyberToggle";
}

function setExperienceStyleAfterCyberToggle() {
  var expHeader = document.getElementById("experienceHeader");
  expHeader.className = "headers projectHeader-afterCyberToggle";

  var cyberButton = document.getElementById("cyberButton");
  cyberButton.className =
    "cButton contactButton projectButtons-afterCyberToggle projectButton-cyber";

  var projectButton = document.getElementById("projectButton");
  projectButton.className =
    "cButton contactButton projectButtons-afterCyberToggle";
}

function implementStyleAfterCyberToggle() {
  var project = document.getElementById("projectDiv");
  var cyber = document.getElementById("cyberDiv");
  cyber.style.display = "block";
  project.style.display = "none";
}

function setContactStyleAfterCyberToggle() {
  setContactButtonStyleAfterCyberToggle();
  setContactHeaderStyleAfterCyberToggle();
  setContactParagraphStyleAfterCyberToggle();
  setContactInputBoxesStyleAfterCyberToggle();
  setContactPlaceHolderStyleAfterCyberToggle();
}

function cyberToggle() {
  setExperienceStyleAfterCyberToggle();
  setContactStyleAfterCyberToggle();
  implementStyleAfterCyberToggle();
}