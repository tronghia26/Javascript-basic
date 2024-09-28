// getElementsByTagName
console.log("getElementsByTagName: ");

let li_item = document.getElementsByTagName("li");
console.log(li_item);
li_item[1].innerHTML = "Phần tử li index 1 đã thay đổi";

//4.
console.log("getElementsByClassName: ");

let li_class_item = document.getElementsByClassName("list");
console.log(li_class_item);
li_class_item[2].innerHTML = "Phần tử li index 2 đã thay đổi";

//5.
let el = document.getElementById("list_about");
console.log(el);
el.innerHTML = "Something about me";
// ==========================================================================

let title = document.querySelector("#heading_title");
console.log(title);
title.innerHTML = "New Title";
// chọn phần tử đầu tiên có lớp là "list" thay đổi nội dung
let firstListItem = document.querySelector(".list");
// firstListItem.innerHTML = "Trang chủ";

let firstLinkInList = document.querySelector("ul a");
console.log(firstLinkInList);
