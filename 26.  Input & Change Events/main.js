// change event: sk xảy ra khi giá trị thay đỏi và mất focus
const inputFrm = document.querySelector("#name");
// inputFrm.addEventListener("change", function (e) {
//   console.log(e.target.value);
// });

//input event: Đây là sk mà trình duyệt kích hoạt khi người dùng thực hiện bất kỳ hành động nhập liệu nào trên 1 phần tử html
inputFrm.addEventListener("input", function (e) {
  console.log(e.target.value);
  // đưa input vào thẻ h2 có id là hi
  const hi = document.querySelector("#hi");
  hi.textContent = e.target.value;
});
