const item1 = document.querySelector(".list");
// 10. hasAttribute
console.log(item1.hasAttribute("class"));

const item2 = document.querySelector("#heading_title");
console.log(item2.hasAttribute("style"));
item2.removeAttribute("style");
console.log(item2.hasAttribute("style"));
