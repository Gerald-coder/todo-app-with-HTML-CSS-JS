let input = document.querySelector(".enter-list");
let addBotton = document.querySelector(".add-list");
let task = document.querySelector(".task");

input.addEventListener("keyup", () => {
  if (input.value.trim() != 0) {
    addBotton.classList.add("active");
  } else {
    addBotton.classList.remove("active");
  }
});

addBotton.addEventListener("click", () => {
  if (input.value.trim() != 0) {
    let newEl = document.createElement("div");
    newEl.classList.add("item");
    newEl.innerHTML = `<p>${input.value}</p>
             <div class="item-btn">
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-xmark"></i>`;
    task.appendChild(newEl);
    input.value = "";
  } else {
    alert("insert a task");
  }
});

task.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-pen-to-square")) {
    e.target.parentElement.parentElement.classList.toggle("completed");
  }
  if (e.target.classList.contains("fa-xmark")) {
    e.target.parentElement.parentElement.remove();
  }
});
