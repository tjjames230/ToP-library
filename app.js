console.log("hi");

const library = [];
const addBtn = document.querySelector("#add-btn");
const completedBtn = Array.from(document.querySelectorAll(".completed"));
const deleteBtn = Array.from(document.querySelectorAll(".book-delete"));

function Book(title, author, pages, completed) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.completed = completed;
}

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
