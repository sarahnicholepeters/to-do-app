function onReady() {
  const addToDoForm = document.getElementById("addToDoForm");
  const toDoDelete = document.getElementById("deleteButton");
  const newToDoText = document.getElementById("newToDoText");
  const toDoList = document.getElementById("toDoList");

  const deleteButtons = document.querySelectorAll("li");
  addToDoForm.addEventListener("submit", event => {
    event.preventDefault();

    console.log("submit called!");
    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement("li");

    // create a new input
    let checkbox = document.createElement("input");

    // let deleteButton = document.createElement("button");

    // deleteButton.textContent = "Delete";
    //
    // deleteButton.classList.add("delete-button");

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // newLi.appendChild(deleteButton);
    // newLi.appendChild(deleteButton);

    // attach the checkbox to the li
    toDoList.appendChild(newLi);

    // empty the input
    newToDoText.value = "";
  });

  toDoDelete.addEventListener("click", event => {
    let items = document.querySelectorAll("li");

    for (let i = 0; i < items.length; i++) {
      if (items[i].children[0].checked) {
        toDoList.removeChild(items[i]);
      }
    }
  });
}

window.onload = function() {
  onReady();
};
