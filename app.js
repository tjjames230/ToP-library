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
  for (let i = 0; i < arr.length; i++) {}
}

// CLICK SUBMIT TO CREATE A NEW OBJ AND PUSH TO LIBRARY ARR
submitBtn.addEventListener("click", (e) => {
  console.log(document.querySelector("#title").value);
  let bookTitle = document.querySelector("#title").value;
  let bookAuthor = document.querySelector("#author").value;
  let bookLength = document.querySelector("#pages").value;
  // NEED TO SOMEHOW EXTRACT VALUE FROM CHECKBOX

  let newBook = new Book();
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
