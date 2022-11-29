let emoji1 = document.querySelector("#emoji1");
let emoji2 = document.querySelector("#emoji2");
let emoji3 = document.querySelector("#emoji3");
let emoji4 = document.querySelector("#emoji4");
let emoji5 = document.querySelector("#emoji5");

emoji1.addEventListener("click", () => {
  emoji1.style.background = "green";
  emoji2.style.background = "none";
  emoji3.style.background = "none";
  emoji4.style.background = "none";
  emoji5.style.background = "none";
});

emoji2.addEventListener("click", () => {
  emoji2.style.background = "green";
  emoji1.style.background = "none";
  emoji3.style.background = "none";
  emoji4.style.background = "none";
  emoji5.style.background = "none";
});

emoji3.addEventListener("click", () => {
  emoji3.style.background = "green";
  emoji1.style.background = "none";
  emoji2.style.background = "none";
  emoji4.style.background = "none";
  emoji5.style.background = "none";
});
emoji4.addEventListener("click", () => {
  emoji4.style.background = "green";
  emoji1.style.background = "none";
  emoji2.style.background = "none";
  emoji3.style.background = "none";
  emoji5.style.background = "none";
});
emoji5.addEventListener("click", () => {
  emoji5.style.background = "green";
  emoji1.style.background = "none";
  emoji2.style.background = "none";
  emoji3.style.background = "none";
  emoji4.style.background = "none";
});

