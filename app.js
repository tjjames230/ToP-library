let library = [
  {
    title: "The Way of Kings",
    author: "Brandon Sanderson",
    pages: 1007,
    completed: true,
  },
  {
    title: "Words of Radiance",
    author: "Brandon Sanderson",
    pages: 1087,
    completed: false,
  },
  {
    title: "Red Rising",
    author: "Pierce Brown",
    pages: 382,
    completed: true,
  },
];
const addBtn = document.querySelector("#add-btn");
const submitBtn = document.querySelector("#submit");
const headerClassNames = ["title-header", "title-author", "title-pages"];
displayLibrary(library);

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
  booksCtn.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    let div = document.createElement("div");
    div.classList.add("book");
    booksCtn.appendChild(div);

    for (let j = 0; j < 3; j++) {
      let header = document.createElement("h3");
      header.classList.add(headerClassNames[j]);
      div.appendChild(header);
    }

    div.querySelector(
      ".title-header"
    ).textContent = `Title: ${library[i].title}`;
    div.querySelector(
      ".title-author"
    ).textContent = `Author: ${library[i].author}`;
    div.querySelector(
      ".title-pages"
    ).textContent = `Pages: ${library[i].pages}`;

    let firstBtn = document.createElement("button");
    let secondBtn = document.createElement("button");

    if (library[i].completed === true) {
      firstBtn.classList.add("completed");
      firstBtn.textContent = "Completed";
    } else {
      firstBtn.classList.add("not-completed");
      firstBtn.textContent = "Not Completed";
    }

    div.appendChild(firstBtn);

    secondBtn.classList.add("book-delete");
    secondBtn.textContent = "Remove Book";
    div.appendChild(secondBtn);
  }

  markComplete();
  deleteBook();
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
function deleteBook() {
  const deleteBtn = Array.from(document.querySelectorAll(".book-delete"));
}

// CLICK THE COMPLETED BTN TO SHOW COMPLETED OR NOT
function markComplete() {
  const completedBtn = Array.from(
    document.querySelectorAll(".completed, .not-completed")
  );

  completedBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let cardTitle = e.target.parentNode.firstChild.innerText.slice(7);

      if (e.target.innerText === "Completed") {
        e.target.innerText = "Not Completed";
        e.target.classList.remove("completed");
        e.target.classList.add("not-completed");
        for (let i = 0; i < library.length; i++) {
          if (cardTitle === library[i].title) {
            library[i].completed = false;
          }
        }
      } else {
        e.target.innerText = "Completed";
        e.target.classList.remove("not-completed");
        e.target.classList.add("completed");
        for (let i = 0; i < library.length; i++) {
          if (cardTitle === library[i].title) {
            library[i].completed = true;
          }
        }
      }
    });
  });
}
