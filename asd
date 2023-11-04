const NewUserbtn = document.getElementById("addnewuser");
const backdrop = document.getElementById("backdrop");
const model = document.getElementById("model");
const addnewuser = document.getElementById("btn-addnewdiv");
const form = document.querySelector("form");
const forNew = document.getElementById("for-new");
const dateandtime = document.getElementById("dateAndTime");
const time = new Date().toLocaleString();

let editMode = false;
let editSection = null;

function NewUser() {
  backdrop.classList.toggle("visible");
  model.classList.toggle("visible");
  editMode = false;
}

document.addEventListener("DOMContentLoaded", function () {
  const parentCategories = document.querySelectorAll(".parent-category");

  parentCategories.forEach(function (category) {
    category.addEventListener("click", function () {
      const subCategory = this.querySelector(".sub-category");
      subCategory.style.display =
        subCategory.style.display === "none" ? "block" : "none";
    });
  });
});

function visible() {
  backdrop.classList.add("visible");
  model.classList.add("visible");
  model.classList.add("visible2");
  empty();
}
function empty() {
  let userName = (document.getElementById("first-name").value = "");
  let DisplayName = (document.getElementById("last-name").value = "");
  let UserEmail = (document.getElementById("Email").value = "");
  let UserMessage = (document.getElementById("textarea").value = "");
}
function addNewUserSection(event) {
  event.preventDefault();

  let userName = document.getElementById("first-name").value;
  let DisplayName = document.getElementById("last-name").value;
  let UserEmail = document.getElementById("Email").value;
  let UserMessage = document.getElementById("textarea").value;
  empty();

  if (
    userName.trim() === "" ||
    DisplayName.trim() === "" ||
    UserEmail.trim() === "" ||
    UserMessage.trim() === ""
  ) {
    empty();
    return;
  }

  if (editMode) {
    // Update the existing section in edit mode
    editSection.querySelector(
      "h2:nth-child(1)"
    ).textContent = `User Name: ${DisplayName}`;
    editSection.querySelector(
      "h2:nth-child(2)"
    ).textContent = `Message: ${UserMessage}`;
    editSection.querySelector(
      "h2:nth-child(3)"
    ).textContent = `Email: ${UserEmail}`;
  } else {
    // Create a new section

    const newSection = document.createElement("section");
    newSection.className = "div-2";

    newSection.innerHTML = `<div class="sec2-div-1">
      <h2>User Name: ${DisplayName}</h2>
      <h2>Message: ${UserMessage}</h2>
      <h2>Email: ${UserEmail}</h2>
      <div style="padding-top: 15px; padding-left: 20px">
        <button id="delete" class="button delete">delete</button>
        <button style="margin-left: 10px" class="button2">Preview</button>
        <button id="edit-btn" style="margin-left: 10px" class="button3">Edit</button>
        <span style=" display:block; margin-top: 20px;">${new Date().toLocaleString()}</span>
      </div>
    </div> `;

    forNew.appendChild(newSection);
  }
  model.classList.add("scale-animation");

  form.reset();
  NewUser();
}

document.addEventListener("click", function (naka) {
  if (naka.target.classList.contains("delete")) {
    const sectionTodelete = naka.target.closest("section");
    sectionTodelete.remove();
  }
});
function bodyback() {
  const bodycl = document.getElementById("body");
  bodycl.classList.toggle("body");
}
model.addEventListener("animationend", function () {
  model.classList.remove("scale-animation");
});

function handleEditClick(event) {
  editMode = true;
  editSection = event.target.closest("section.div-2");

  const displayName = editSection
    .querySelector("h2:nth-child(1)")
    .textContent.split(": ")[1];
  const userMessage = editSection
    .querySelector("h2:nth-child(2)")
    .textContent.split(": ")[1];
  const userEmail = editSection
    .querySelector("h2:nth-child(3)")
    .textContent.split(": ")[1];

  document.getElementById("first-name").value = displayName;
  document.getElementById("last-name").value = userMessage;
  document.getElementById("Email").value = userEmail;
  document.getElementById("textarea").value = userMessage;

  backdrop.classList.remove("visible");
  model.classList.remove("visible");
  model.classList.remove("visible2");
  window.scrollTo(0, 0);
}

NewUserbtn.addEventListener("click", NewUser);
addnewuser.addEventListener("click", addNewUserSection);
backdrop.addEventListener("click", visible);
forNew.addEventListener("click", function (event) {
  if (event.target && event.target.id === "edit-btn") {
    handleEditClick(event);
  }
});
function scale() {
  model.classList.add("scale");
}
