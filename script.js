// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Create a new list item when clicking on the "Add" button
function addTask() {
  var li = document.createElement("li");

  var inputValue = document.getElementById("input").value.trim();
  var categoryValue = document.getElementById("category").value;

  if (inputValue === '' || categoryValue === '') {
    alert("Task and category both are required!");
    return;
  }

  // Check button
  var checkBtn = document.createElement("SPAN");
  checkBtn.className = "check-btn";
  checkBtn.innerHTML = "☑️";

  checkBtn.onclick = function () {
    li.classList.toggle("checked");
  };

  li.appendChild(checkBtn);

  var t = document.createTextNode(inputValue);
  li.appendChild(t);


  // Category
  var categorySpan = document.createElement("SPAN");
  categorySpan.className = "category";
  categorySpan.appendChild(
    document.createTextNode(" [" + categoryValue + "] ")
  );
  li.appendChild(categorySpan);

  // Close button
  var closeBtn = document.createElement("SPAN");
  closeBtn.className = "close";
  closeBtn.innerHTML = "✖";

  closeBtn.onclick = function () {
    li.remove(); 
  };

  li.appendChild(closeBtn);

  document.getElementById("task-list").appendChild(li);

  document.getElementById("input").value = "";
  document.getElementById("category").value = "";
}

// toggle theme 
const lightBtn = document.querySelector(".light-theme");
const darkBtn = document.querySelector(".dark-theme");
const body = document.body;

// Light theme
lightBtn.addEventListener("click", () => {
  body.classList.remove("dark");
  body.classList.add("light");
  localStorage.setItem("theme", "light");
});

// Dark theme
darkBtn.addEventListener("click", () => {
  body.classList.remove("light");
  body.classList.add("dark");
  localStorage.setItem("theme", "dark");
});

// Load saved theme
window.onload = () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    body.classList.add(savedTheme);
  } else {
    body.classList.add("dark");
  }
};
