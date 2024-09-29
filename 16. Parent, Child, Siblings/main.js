let parentElm = document.querySelector("#container");
// thêm 100 nút bấm
for (let i = 0; i < 100; i++) {
  let btn = document.createElement("button");
  btn.innerText = "Button" + (i + 1);
  parentElm.appendChild(btn);
  if (i % 2 != 0) {
    btn.style.backgroundColor = "yellow";
  }
}
