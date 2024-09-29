// Xây dựng hàm random màu ngẫu nhiên
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
// chọn phần tử từ button
const btnList = document.querySelectorAll(".btn");
// for (let btn of btnList) {
//   btn.addEventListener("click", function () {
//     btn.style.backgroundColor = randomColor();
//     btn.style.color = randomColor();
//   });
// }

//chọn h1 để xử lý thay đổi color
const h1List = document.querySelectorAll(".title");
// for (let title of h1List) {
//   title.addEventListener("click", function () {
//     title.style.backgroundColor = randomColor();
//     title.style.color = randomColor();
//   });
// }

function changeColor() {
  this.style.backgroundColor = randomColor();
  this.style.color = randomColor();
}
for (let btn of btnList) {
  btn.addEventListener("click", changeColor);
}
for (let title of h1List) {
  title.addEventListener("click", changeColor);
}
