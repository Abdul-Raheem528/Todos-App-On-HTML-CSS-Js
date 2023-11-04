///////////////////////////////////////////
// /////// new div
let editMode = false;
let editedTableRow;
// Get references to the select elements
const select = document.getElementById("select");
const subCategorySelect = document.getElementById("select2");
const Desigining = document.getElementById("Desigining");
const Development = document.getElementById("Developmentopt");
const sumbit = document.getElementById("sumbit");
const Testing = document.getElementById("Testing");
const subcategory = document.getElementById("subcategory");
Desigining.style.display = "none";
Development.style.display = "none";
Testing.style.display = "none";
subcategory.style.display = "none";

let editmode = false;
select.addEventListener("change", function () {
  if (select.value === "Development") {
    subcategory.style.display = "none";
    Development.style.display = "block";
    Desigining.style.display = "none";
    Testing.style.display = "none";
  } else if (select.value === "Desigining") {
    subcategory.style.display = "none";

    Desigining.style.display = "block";
    Development.style.display = "none";
    Testing.style.display = "none";
  } else if (select.value === "Testing") {
    subcategory.style.display = "none";

    Testing.style.display = "block";
    Development.style.display = "none";
    Desigining.style.display = "none";
  }
});

// const testing = () => {
//   console.log(document.getElementById("select").value);
// };
function populateFormForEditing(row) {
  window.scrollTo(0, 0);
  document.getElementById("title").value =
    row.querySelector("#title h3").textContent;
  document.getElementById("Discription").value =
    row.querySelector("#discription h3").textContent;
  document.getElementById("CreatedAt").value =
    row.querySelector("#createdat h3").textContent;
  document.getElementById("select").value =
    row.querySelector("#select h3").textContent;
  document.getElementById("select2").value =
    row.querySelector("#select span").textContent;
  document.getElementById("author").value =
    row.querySelector("#author h3").textContent;
}

// Add click event listener for "Edit" button
fornew.addEventListener("click", function (e) {
  if (e.target && e.target.id === "edit") {
    // Set edit mode and store the edited table row
    editMode = true;
    editedTableRow = e.target.closest(".table2");
    // Populate the form for editing
    populateFormForEditing(editedTableRow);
  }
});

// Modify the TableView function
function TableView(e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const select = document.getElementById("select").value;
  const discription = document.getElementById("Discription").value;
  const createdat = document.getElementById("CreatedAt").value;
  const author = document.getElementById("author").value;
  const subCategory = document.getElementById("select2").value;
  console.log({ subCategory });
  if (
    title.trim() === "" ||
    select.trim() === "" ||
    discription.trim() === "" ||
    createdat.trim() === "" ||
    author.trim() === ""
  ) {
    alert("Please fill the form correctly.");
    return;
  }
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const tablediv = document.createElement("section");
  tablediv.className = "table2";
  tablediv.innerHTML = `
  <div id="title" class="first-table2"><h3>${title}</h3></div>
  <div id="discription" class="first-table2"><h3>${discription}</h3></div>
  <div id="createdat" class="first-table2"><h3>${createdat} Time: ${hours} :${minutes}:${seconds}</h3></div>
  <div id="select" class="first-table2"><h3>${select}</h3>
  <span style="color: #000" >${subCategory}</span></div>
  <div id="author" class="first-table2"><h3>${author}</h3></div>
  <div class="first-table2">
    <h3>Options for This Row</h3>
    <button id="edit" class="buttonc2">Edit</button>
    <button class="buttonc1">Preview</button>
    <button class="buttonc2 delete">Delete</button>
  </div>`;

  if (editMode) {
    // Replace the edited row with the new data

    editedTableRow.replaceWith(tablediv);
    editMode = false; // Reset edit mode
  } else {
    fornew.appendChild(tablediv);
  }

  // Reset the form
  resetform();
}

function resetform() {
  document.getElementById("title").value = "";
  document.getElementById("select").value = "";
  document.getElementById("Discription").value = "";
  document.getElementById("CreatedAt").value = "";
  document.getElementById("author").value = "";
  document.getElementById("select2").value = "";
}
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    const sectiontodelete = event.target.closest("section");
    sectiontodelete.remove();
    resetform();
  }
});
sumbit.addEventListener("click", TableView);

const subcat = {
  Development: [
    {
      id: "sss",
      value: "html",
      label: "HTML",
    },
    {
      id: "sss",
      value: "css",
      label: "CSS",
    },
    {
      id: "sss",
      value: "js",
      label: "JS",
    },
  ],

  Desigining: [
    {
      id: "sss",
      value: "logo Desigining",
      label: "logo Desigining",
    },
    {
      id: "sss",
      value: "photoshop",
      label: "photoshop",
    },
  ],
};

document.getElementById("select").addEventListener("change", (e) => {
  if (subcat[e.target.value] !== undefined) {
    console.log({ c: e.target.value, c2: subcat[e.target.value] });
  }
});
