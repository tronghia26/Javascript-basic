// 8. getAttribute
const firstLink = document.querySelector("a");

console.log(firstLink);

if (firstLink) {
  const hrefLink = firstLink.getAttribute("href");
  console.log(hrefLink);
} else {
  console.log("không tìm thấy thẻ a");
}
// 9. setAttribute

firstLink.setAttribute("target", "_blank"); // click vào sẽ mở tag mới
// sử dụng querySelectorAll
const links = document.querySelectorAll("ul a");
links.forEach((singleLink) => {
  singleLink.setAttribute("target", "_blank");
});

const changeColor = document.querySelector("h1");
console.log(changeColor);

changeColor.setAttribute("style", "color: blue");
