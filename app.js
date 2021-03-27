// This is the simple color picker
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const simpleValue = document.querySelector("#simple-color"),
      simpleButton = document.querySelector("#simple-btn"),
      simpleMain = document.querySelector("#simple-main")

simpleButton.addEventListener("click", () => {
  // Make random num with colors array length
  const random = Math.floor(Math.random() * colors.length)
  // Change the span text
  simpleValue.innerText = colors[random]
  // And change the background color
  simpleMain.style.backgroundColor = colors[random]
})
