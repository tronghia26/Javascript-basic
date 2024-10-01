//https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/6.png
// chọn phần tử cha
let container = document.querySelector("#container");

// img.src =
//   "https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/6.png";
// let baseUrl =
//   "https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/6.png";
// img.src = baseUrl;
// container.appendChild(img);

// thêm 150 hình ảnh pokemon

// for (let i = 0; i < 150; i++) {
//   const img = document.createElement("img");
//   let baseUrl = `https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/${
//     i + 1
//   }.png`;
//   img.src = baseUrl;
//   container.appendChild(img);
// }

//Bài toán 3 : thêm 1 thẻ div có 2 phần là img và span chứa số thứ tự

// for (let i = 0; i < 150; i++) {
//   let div = document.createElement("div");
//   div.classList.add("info");
//   container.appendChild(div);
//   let img = document.createElement("img");
//   let baseUrl = `https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/${
//     i + 1
//   }.png`;
//   img.src = baseUrl;
//   let span = document.createElement("Span");
//   span.innerText = `${i + 1}.png`;
//   div.append(img, span);
// }

for (let i = 0; i < 150; i++) {
  let div = document.createElement("div");
  div.classList.add("info");
  let img = document.createElement("img");
  let span = document.createElement("span");
  span.innerText = `${i + 1}.png`;
  let baseUrl = `https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/${
    i + 1
  }.png`;
  img.src = baseUrl;
  div.append(img, span);
  container.append(div);
}

// bắt sự kiện khi lick vào thì đổi màu
let listDiv = document.querySelectorAll(".info");
listDiv.forEach((div) => {
  div.addEventListener("click", () => {
    div.classList.toggle("change-bg");
    div.classList.toggle("pop");
  });
});
