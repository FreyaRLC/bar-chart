"use strict";

const arr = [];
let counter = 0;
let barDest;
let maxBars = 20;

document.addEventListener("DOMContentLoaded", init);

function init() {
  counter = arr.length;
  loop();
}

function loop() {
  if (arr.length >= maxBars) {
    const element = document.querySelector(`.bar`);
    // console.log(`element is:`);
    // console.log(element);
    if (element) {
      element.remove();
      arr.shift();
    }
  }

  const queueSize = getNumberOfCustomers();
  arr.push(queueSize);
  createBarDiv(queueSize, counter);

  counter++;
  setTimeout(loop, 700);
  // console.log(arr);
}

function getNumberOfCustomers() {
  return Math.floor(Math.random() * 100);
}

function createBarDiv(queueSize, currentCounter) {
  let barHeight;
  if (queueSize < 20) {
    barHeight = "short";
  } else if (queueSize < 50) {
    barHeight = "med";
  } else {
    barHeight = "tall";
  }
  barDest = document.querySelector("main");
  barDest.innerHTML += `<div class="bar bar${currentCounter} ${barHeight}" style="height: ${queueSize}vh"></div>`;
}
