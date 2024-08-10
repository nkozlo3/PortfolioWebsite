// function called on page load
window.onload = function () {
  // Elements from the header "Experience" to the project/cyber button
  var expHeader = document.getElementById("experienceHeader");
  expHeader.className = "headers projectHeader";

  var cyberButton = document.getElementById("cyberButton");
  cyberButton.className = "cButton contactButton projectButtons";

  var projectButton = document.getElementById("projectButton");
  projectButton.className =
    "cButton contactButton projectButtons projectButton-project";

  var pCButtons = document.getElementById("expButtons");
  pCButtons.className = "pCButtons";

  var contactHeader = document.getElementById("contactHeader");
  contactHeader.className = "headers contactHeader";

  var contactParagraph = document.getElementById("contactParagraph");
  contactParagraph.className = "paragraphs contactParagraph";

  var contactName = document.getElementById("contactName");
  contactName.className = "inputBox contactInputNameBox";

  var contactEmail = document.getElementById("contactEmail");
  contactEmail.className = "inputBox contactInputEmailBox";

  var contactMessage = document.getElementById("contactMessage");
  contactMessage.className = "inputBox contactInputMessageBox";

  var contactSubmitButton = document.getElementById("contactSubmitButton");
  contactSubmitButton.className = "cButton contactButton contactSubmitButton";

  // The contact elements i.e. email, call, location

  var contactButtons = document.getElementById("contactButtons");
  contactButtons.className = "contactButtons";

  var emailMeButton = document.getElementById("emailMeButton");
  emailMeButton.className = "cButton contactButton mailMeButton";

  var callMeButton = document.getElementById("callMeButton");
  callMeButton.className = "cButton contactButton callMeButton";

  var locateMeButton = document.getElementById("locateMeButton");
  locateMeButton.className = "cButton contactButton locateMeButton";

  var contactMePlaceholder = document.getElementById("contactMePlaceholder");
  contactMePlaceholder.className = "paragraphs placeHolderButton";

  var project = document.getElementById("projectDiv");
  var cyber = document.getElementById("cyberDiv");
  project.style.display = "block";
  cyber.style.display = "none";
};

function projectsToggle() {
  // Elements from the header "Experience" to the project/cyber button
  var expHeader = document.getElementById("experienceHeader");
  expHeader.className = "headers projectHeader";

  var cyberButton = document.getElementById("cyberButton");
  cyberButton.className = "cButton contactButton projectButtons";

  var projectButton = document.getElementById("projectButton");
  projectButton.className =
    "cButton contactButton projectButtons projectButton-project";

  var pCButtons = document.getElementById("expButtons");
  pCButtons.className = "pCButtons";

  var contactHeader = document.getElementById("contactHeader");
  contactHeader.className = "headers contactHeader";

  var contactParagraph = document.getElementById("contactParagraph");
  contactParagraph.className = "paragraphs contactParagraph";

  var contactName = document.getElementById("contactName");
  contactName.className = "inputBox contactInputNameBox";

  var contactEmail = document.getElementById("contactEmail");
  contactEmail.className = "inputBox contactInputEmailBox";

  var contactMessage = document.getElementById("contactMessage");
  contactMessage.className = "inputBox contactInputMessageBox";

  var contactSubmitButton = document.getElementById("contactSubmitButton");
  contactSubmitButton.className = "cButton contactButton contactSubmitButton";

  // The contact elements i.e. email, call, location

  var contactButtons = document.getElementById("contactButtons");
  contactButtons.className = "contactButtons";

  var emailMeButton = document.getElementById("emailMeButton");
  emailMeButton.className = "cButton contactButton mailMeButton";

  var callMeButton = document.getElementById("callMeButton");
  callMeButton.className = "cButton contactButton callMeButton";

  var locateMeButton = document.getElementById("locateMeButton");
  locateMeButton.className = "cButton contactButton locateMeButton";

  var contactMePlaceholder = document.getElementById("contactMePlaceholder");
  contactMePlaceholder.className = "paragraphs placeHolderButton";

  var project = document.getElementById("projectDiv");
  var cyber = document.getElementById("cyberDiv");
  project.style.display = "block";
  cyber.style.display = "none";
}
function cyberToggle() {
  // Elements from the header "Experience" to the project/cyber button
  var expHeader = document.getElementById("experienceHeader");
  expHeader.className = "headers projectHeader-afterCyberToggle";

  var cyberButton = document.getElementById("cyberButton");
  cyberButton.className =
    "cButton contactButton projectButtons-afterCyberToggle projectButton-cyber";

  var projectButton = document.getElementById("projectButton");
  projectButton.className =
    "cButton contactButton projectButtons-afterCyberToggle";

  var pCButtons = document.getElementById("expButtons");
  pCButtons.className = "pCButtons-afterCyberToggle";

  var contactHeader = document.getElementById("contactHeader");
  contactHeader.className = "headers contactHeader-afterCyberToggle";

  var contactParagraph = document.getElementById("contactParagraph");
  contactParagraph.className = "paragraphs contactParagraph-afterCyberToggle";

  var contactName = document.getElementById("contactName");
  contactName.className = "inputBox contactInputNameBox-afterCyberToggle";

  var contactEmail = document.getElementById("contactEmail");
  contactEmail.className = "inputBox contactInputEmailBox-afterCyberToggle";

  var contactMessage = document.getElementById("contactMessage");
  contactMessage.className = "inputBox contactInputMessageBox-afterCyberToggle";

  var contactSubmitButton = document.getElementById("contactSubmitButton");

  contactSubmitButton.className =
    "cButton contactButton contactSubmitButton-afterCyberToggle";

  // The contact elements i.e. email, call, location

  var contactButtons = document.getElementById("contactButtons");
  contactButtons.className = "contactButtons-afterCyberToggle";

  var emailMeButton = document.getElementById("emailMeButton");
  emailMeButton.className =
    "cButton contactButton mailMeButton-afterCyberToggle";

  var callMeButton = document.getElementById("callMeButton");
  callMeButton.className =
    "cButton contactButton callMeButton-afterCyberToggle";

  var locateMeButton = document.getElementById("locateMeButton");
  locateMeButton.className =
    "cButton contactButton locateMeButton-afterCyberToggle";

  var contactMePlaceholder = document.getElementById("contactMePlaceholder");
  contactMePlaceholder.className =
    "paragraphs placeHolderButton-afterCyberToggle";

  var project = document.getElementById("projectDiv");
  var cyber = document.getElementById("cyberDiv");
  cyber.style.display = "block";
  project.style.display = "none";
}
