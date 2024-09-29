//1. ngăn submit mặc định của form
const form = document.querySelector("#form");
const listUser = document.querySelector("#list_item");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Đã submit");
  const username = document.querySelector("#username");
  const password = document.querySelector("#message");
  //   Tại li để thêm vào ul
  const newLi = document.createElement("li");
  newLi.innerText = username.value + ": " + password.value;
  listUser.append(newLi);
  form.reset();
});

//2. xóa phần tử li khi click vào, không dùng delegation ( thì nó chỉ xóa 2 thẻ li cũ ban đầu còn những thẻ thêm vào thì không xóa)
//chọn all thẻ li
const listLi = document.querySelectorAll("li");
console.log(listLi);
for (let li of listLi) {
  li.addEventListener("click", function () {
    li.remove();
  });
}

// dùng delegation
listUser.addEventListener("click", function (e) {
  const a = e.target;
  //   a.remove();
  // kiểm tra xem biến đo có phải là thẻ li không
  console.log(a.tagName);

  if (a.tagName === "LI") {
    a.remove();
  }
});
