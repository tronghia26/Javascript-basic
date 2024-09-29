// 1. Lấy phần tử
const btn = document.getElementById("btn3");
// 2. THêm sự kiện
// 2.1 sử dụng với function expression
btn.addEventListener("click", function () {
  alert("Bạn đã click vào button");
});
// 2.2 sử dụng với function declaration
function handlerClick() {
  alert("Bạn đã click vào button !!! ");
}
btn.addEventListener("click", handlerClick);
//2.3 sử dụng với arrow function
btn.addEventListener("click", () => {
  alert("Bạn đã click vào button !!!!! ");
});

// 3. Lợi ích của addEvenListener
// 3.1 Có thể thêm nhiều sự kiện cho cùng 1 phần tử
// lấy phần tử
const btn4 = document.getElementById("btn4");
//Hàm sử lý sk 1
function handlerClick1() {
  alert("Đây là sk 1");
}
//Hàm sử lý sk 2
function handlerClick2() {
  alert("Đây là sk 2");
}

// Thêm sự kiện
btn4.addEventListener("click", handlerClick1);
btn4.addEventListener("click", handlerClick2);

// với DOM level 0 sẽ bị ghi đè
// btn4.onclick = handlerClick1;
// btn4.onclick = handlerClick2;

// 3.2 có thể xóa sự kiện
btn4.removeEventListener("click", handlerClick1);
// 3.3 có thể use skien với option
btn4.addEventListener("click", handlerClick1, { once: true }); // hàm sk 1 chỉ đc gọi tối đa 1 lần
