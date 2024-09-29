// 1. Xác định phần tử có id là btn
const buntton1 = document.getElementById("btn");

// 1.2 gán sự kiện click cho btn, sử dựng function expression
// buntton1.onclick = function () {
//   alert("bạn đã click vào button");
// };

// 1.3 dùng function declaration khai báo hàm
//  sau đó gán hàm đó cho sự kiện click
// function clickHandler() {
//   alert("Bạn đã click vào button");
// }
// buntton1.onclick = clickHandler;

// 1.4 dùng arrow function
buntton1.onclick = () => {
  alert("Bạn đã click vào button");
};

// 1.5 Ví dụ 2
function mouseOver() {
  document.getElementById("message").textContent =
    "MouseOver is over the button";
}
function mouseOut() {
  document.getElementById("message").textContent =
    "MouseOut is over the button";
}

function setup() {
  let button = document.getElementById("btn2");
  button.onmouseover = mouseOver;
  button.onmouseout = mouseOut;
}

window.onload = setup;
