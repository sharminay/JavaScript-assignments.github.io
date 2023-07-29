let list = document.querySelector("ul");
let cart1 = document.querySelector("#cart1");
let cart2 = document.querySelector("#cart2");
let cart3 = document.querySelector("#cart3");
let cart4 = document.querySelector("#cart4");
let cart5 = document.querySelector("#cart5");

cart1.addEventListener("click", (e) => {
  let f1 = e.target.parentNode;
  if (f1.id == "image1") {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode("GrapeFruit" + " "));
    let link = document.createElement("a");
    link.setAttribute("href", "#");
    link.innerHTML = "x";
    li.appendChild(link);
    list.appendChild(li);
    storeInLocalStorage("GreapFruit");
  }
});
cart2.addEventListener("click", (e) => {
  let f1 = e.target.parentNode;
  if (f1.id == "image2") {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode("Orange" + " "));
    let link = document.createElement("a");
    link.setAttribute("href", "#");
    link.innerHTML = "x";
    li.appendChild(link);
    list.appendChild(li);
    storeInLocalStorage("Orange");
  }
});
cart3.addEventListener("click", (e) => {
  let f1 = e.target.parentNode;
  if (f1.id == "image3") {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode("Mandarin" + " "));
    let link = document.createElement("a");
    link.setAttribute("href", "#");
    link.innerHTML = "x";
    li.appendChild(link);
    list.appendChild(li);
    storeInLocalStorage("Mandarin");
  }
});
cart4.addEventListener("click", (e) => {
  let f1 = e.target.parentNode;
  if (f1.id == "image4") {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode("Oroblanco" + " "));
    let link = document.createElement("a");
    link.setAttribute("href", "#");
    link.innerHTML = "x";
    li.appendChild(link);
    list.appendChild(li);
    storeInLocalStorage("Oroblanco");
  }
});
cart5.addEventListener("click", (e) => {
  let f1 = e.target.parentNode;
  if (f1.id == "image5") {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode("Lemon" + " "));
    let link = document.createElement("a");
    link.setAttribute("href", "#");
    link.innerHTML = "x";
    li.appendChild(link);
    list.appendChild(li);
    storeInLocalStorage("Lemon");
  }
});

function storeInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

list.addEventListener("click", removeTask);

function removeTask(e) {
  if (e.target.hasAttribute("href")) {
    if (confirm("Are you sure?")) {
      let rmv = e.target.parentElement;
      rmv.remove();

      removeFromLS(rmv);
    }
  }
}

function removeFromLS(taskItem) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  let li = taskItem;
  li.removeChild(li.lastChild); //<a>x</a>

  tasks.forEach((task, index) => {
    if (li.textContent.trim() === task) {
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

document.addEventListener("DOMContentLoaded", getTasks);

function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach((task) => {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(task + " "));
    let link = document.createElement("a");
    link.setAttribute("href", "#");
    link.innerHTML = "x";
    li.appendChild(link);
    list.appendChild(li);
  });
}
