let addbtn = document.getElementById("addbtn");
let screen = document.getElementById("screen");
let minusbtn = document.getElementById("minusbtn");
let resetbtn = document.getElementById("resetbtn");

let set =  0

addbtn.addEventListener('click',() => {
  set++
  screen.textContent = set
})

minusbtn.addEventListener('click',() => {
  set--
  screen.textContent = set
})

resetbtn.addEventListener('click',() => {
  set = 0
  screen.textContent = set
})

