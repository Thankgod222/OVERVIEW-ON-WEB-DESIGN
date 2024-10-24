//DOM Manipulation

//Styling Elements

// const title = document.querySelector("#main-heading");

// title.style.color = "blue";

// const listItems = document.querySelectorAll(".list-items");

// for (i = 0; i < listItems.length; i++) {
//   listItems[i].style.fontSize = "2rem";
// }

// console.log(listItems);

// Creating Elements
// const ul = document.querySelector("ul");
// const li = document.createElement("li");

//Adding Elements
// ul.append(li);

// Modifying the text

// li.innerText = "X-men";

// Modifying Attribute & classes
// li.classList.add("list-items");

// console.log(li.classList.contains("list-items"));

//Ramove Elements

// li.remove();

//Traverse the Dom

//Parent node Traversal

//Event Listeners

//element.addEventListener("click", function);
// const buttonTwo = document.querySelector(".btn-2");

// function alertBtn() {
//   alert("a also love javascript");
// }
// buttonTwo.addEventListener("click", alertBtn);

//Mouseover

// const newBackgroundColor = document.querySelector(".box-3");

// function changeBgColor() {
//   newBackgroundColor.style.backgroundColor = "blue";
// }

// newBackgroundColor.addEventListener("mouseover", changeBgColor);

// Reveal Event

const revealBtn = document.querySelector(".reveal-btn");

const hiddenContent = document.querySelector(".hidden-content");

function revealContent() {
  if (hiddenContent.classList.contains("reveal-btn")) {
    hiddenContent.classList.remove("reveal-btn");
  } else {
    hiddenContent.classList.add("reveal-btn");
  }
}

revealBtn.addEventListener("click", revealContent);
