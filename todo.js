const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container");

let tasks = [];

function ShowAllTasks() {
  tasks.forEach((value, index) => {
    const div = document.createElement("div");
    div.setAttribute("class", "task");

    const innerDiv = document.createElement("div");
    div.append(innerDiv);

    const p = document.createElement("p");
    p.innerText = value.title;
    innerDiv.append(p);

    const span = document.createElement("span");
    span.innerText = value.description;
    innerDiv.append(span);

    const btn = document.createElement("button");
    btn.setAttribute = ("class", "btnDelete");
    btn.innerText = "X";
    btn.addEventListener("click", () => {
      removeTasks();
      tasks.splice(index, 1);
      ShowAllTasks();
    });

    div.append(btn);
    container.append(div);
  });
}
function removeTasks() {
  const div = document.querySelector(".task");
  div.remove();
}
function clearForm() {
  title.value = "";
  description.value = "";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //removeTasks();
  if (title.value != "") {
    tasks.push({
      title: title.value,
      description: description.value,
    });
    ShowAllTasks();
    clearForm();
  }
});

//no validation
//add bug
//del bug
