// Need to generate random hex color
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const hexValue = document.querySelector("#hex-color"),
      hexButton = document.querySelector("#hex-btn"),
      hexMain = document.querySelector("#hex-main")


hexButton.addEventListener("click", () => {
  // That is hexValue
  let hexNewValue = "#"
  // Picks 6 random values
  for(let i = 0; i < 6; i++) {
    hexNewValue += hex[Math.floor(Math.random() * hex.length)]
  }
  hexValue.innerText = hexNewValue
  hexMain.style.backgroundColor = hexNewValue
})
