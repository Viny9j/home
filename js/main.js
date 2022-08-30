const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");

readMoreBtn.addEventListener("click", (e) => {
  text.classList.toggle("show-more");
  if (readMoreBtn.innerText === "Ler menos") {
    readMoreBtn.innerText = "Ler mais...";
  } else {
    readMoreBtn.innerText = "Ler menos";
  }
});

// *********************
// This Code is for only the floating card in right bottom corner
// **********************

const touchButton = document.querySelector(".float-text");
const card = document.querySelector(".float-card-info");
const close = document.querySelector(".gg-close-r");

touchButton.addEventListener("click", moveCard);
close.addEventListener("click", moveCard);

function moveCard() {
  card.classList.toggle("active");
}

// ------------------------------

const readMoreBtn1 = document.querySelector(".read-more-btn1");
const text1 = document.querySelector(".text1");

readMoreBtn1.addEventListener("click", (e) => {
  text1.classList.toggle("show-more1");
  if (readMoreBtn1.innerText === "Ler menos") {
    readMoreBtn1.innerText = "Ler mais...";
  } else {
    readMoreBtn1.innerText = "Ler menos";
  }
});

// *********************
// This Code is for only the floating card in right bottom corner
// **********************

const touchButton1 = document.querySelector(".float-text1");
const card1 = document.querySelector(".float-card-info1");
const close1 = document.querySelector(".gg-close-r");

touchButton1.addEventListener("click", moveCard);
close.addEventListener("click", moveCard);

function moveCard() {
  card.classList.toggle("active");
}

// ------------------------------
