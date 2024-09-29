// Lấy phần tử cần tương tác
let element = document.getElementById("myElement");
// 1. Thêm 1 class vào phần tử
element.classList.add("newClass");
// 2. Kiểm tra xem phần tử có chứa lớp cụ thể không
console.log(element.classList.contains("myClass"));
// 3. xóa 1 lớp khỏi phàn tử
element.classList.remove("newClass");
console.log(element.classList.contains("newClass"));
// 4. Thay thế lớp cũ bằng lớp mới
element.classList.replace("myClass", "abc");
// 5. Nếu lớp đã tồn tại, loại bỏ nó, nếu không, thêm lớp vào phần tử
element.classList.toggle("toggleClass");
// element.classList.toggle("toggleClass");
// 6. Xem các class ở trong phần tử
console.log(element.classList);
