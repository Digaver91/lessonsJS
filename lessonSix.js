// Task 2: 
const div = document.getElementById("myDiv");
const list = document.getElementById("myList");
const header = document.querySelector("h1");
const span = document.querySelector("span");

header.style.fontFamily = "Arial, sans-serif";
header.style.fontSize = "3em";
header.style.color = "red";

div.style.backgroundColor = "lightgray";
div.style.padding = "20px";

const paragraphs = div.querySelectorAll("p");
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.fontFamily = "Arial, sans-serif";
  paragraphs[i].style.color = "blue";
  paragraphs[i].style.fontSize = "1.2em";
  paragraphs[i].style.margin = "0";
}

list.style.listStyleType = "none";
list.style.display = "flex";
list.style.justifyContent = "space-between";
list.style.width = "200px";
list.style.padding = "0";
list.style.margin = "0";

const items = list.querySelectorAll("li");
for (let i = 0; i < items.length; i++) {
  items[i].style.fontFamily = "Arial, sans-serif";
  items[i].style.fontSize = "1.5em";
  items[i].style.color = "green";
}

span.style.display = "none";

// Task 3:

const main = document.createElement("main");
main.setAttribute("class", "mainClass check item");

const div = document.createElement("div");
div.setAttribute("id", "myDiv");

const paragraph = document.createElement("p");
paragraph.textContent = "First paragraph";

div.appendChild(paragraph);
main.appendChild(div);
document.body.appendChild(main);

// Taks 4:

const inputs = document.querySelectorAll('[data-form]');

const btn = document.querySelector('.btn');
const out = document.querySelector('.out');

function onSubmit(event) {
  event.preventDefault();
  
  let data = {};

  inputs.forEach(function(input) {
    data[input.dataset.form] = input.value;
  });

  out.textContent = JSON.stringify(data);
}

btn.addEventListener('click', onSubmit);


// Task 5:

const circleElements = document.querySelectorAll('.circle');

circleElements.forEach((element) => {
  const animationClass = element.getAttribute('data-anim');
  element.classList.add(animationClass);
});

setTimeout(() => {
  circleElements.forEach((element) => {
    console.log(element.classList.contains(element.getAttribute('data-anim')));
  });
}, 1000);

// Task 6: 

const colors = document.querySelectorAll('.color');
const priceOutput = document.getElementById('outprice');


function onColorClick(event) {
  let price = event.target.dataset.price;

  priceOutput.textContent = price;

  colors.forEach(function(color) {
    color.classList.remove('active');
  });
  event.target.classList.add('active');
}

colors.forEach(function(color) {
  color.addEventListener('click', onColorClick);
});
