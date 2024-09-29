// Chọn phần tử cần xóa
let childE = document.querySelector("#item2");
// Chọn phần tử cha
let ul = document.querySelector("#list");

ul.removeChild(childE);

// cách 2
let childE2 = document.querySelector("#item3");
childE2.parentElement.removeChild(childE2);

// cách 3
let childE3 = document.querySelector("#item4");
childE3.remove();
