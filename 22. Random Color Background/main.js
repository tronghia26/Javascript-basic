const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  //   document.body.style.backgroundColor = "rgb(0, 0, 255)";
  document.body.style.backgroundColor = changeColor();
  let newTitle = document.getElementById("title");
  newTitle.textContent = changeColor();
});

function changeColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
