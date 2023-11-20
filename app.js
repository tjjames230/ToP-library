const library = [];
const addBtn = document.querySelector("#add-btn");
const completedBtn = Array.from(document.querySelectorAll(".completed"));
const deleteBtn = Array.from(document.querySelectorAll(".book-delete"));
const submitBtn = document.querySelector("#submit");

function Book(title, author, pages, completed) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.completed = completed;
}

// CLICK ADD TO OPEN NEW BOOK FORM
addBtn.addEventListener("click", () => {
  let background = document.querySelector("#popup-bg");
  background.style.display = "flex";
  background.addEventListener("click", (e) => {
    if (e.target === background) {
      background.style.display = "none";
    }
  });
});

// FUNCTION TO LOOP THROUGH LIBRARY AND CREATE DIV FOR EACH BOOK
function displayLibrary(arr) {
  let booksCtn = document.querySelector("#books-ctn");
  let div = document.createElement("div");
  let header = document.createElement("h3");
  let btn = document.createElement("button");
  booksCtn.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    booksCtn.appendChild(div);
    div.appendChild(header);
    header.innerText = "TEST";
  }
}

// CLICK SUBMIT TO CREATE A NEW OBJ AND PUSH TO LIBRARY ARR
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let bookTitle = document.querySelector("#title").value;
  let bookAuthor = document.querySelector("#author").value;
  let bookLength = document.querySelector("#pages").value;
  let bookCompleted = document.querySelector("#yes").checked ? true : false;

  if (bookTitle != "" && bookAuthor != "" && bookLength != "") {
    let newBook = new Book(bookTitle, bookAuthor, bookLength, bookCompleted);
    library.push(newBook);
  }

  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#pages").value = "";
  document.querySelector("#popup-bg").style.display = "none";

  displayLibrary(library);
});

// CLICK REMOVE BTN TO DELETE THAT OBJECT FROM LIBRARY ARR

// CLICK THE COMPLETED BTN TO SHOW COMPLETED OR NOT
completedBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerText === "Completed") {
      e.target.innerText = "Not Completed";
      e.target.classList.remove("completed");
      e.target.classList.add("not-completed");
    } else {
      e.target.innerText = "Completed";
      e.target.classList.remove("not-completed");
      e.target.classList.add("completed");
    }
  });
});
