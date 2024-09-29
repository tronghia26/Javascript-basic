const child = document.querySelector("#child");
const parent = document.querySelector("#parent");
const grandparend = document.querySelector("#grandparent");

// child.addEventListener("click", function () {
//   console.log("child checked");
// });
// parent.addEventListener("click", function () {
//   console.log("parent checked");
// });
// grandparent.addEventListener("click", function () {
//   console.log("grandparent checked");
// });

// child.addEventListener("click", function (e) {
//   e.stopPropagation(); // tránh lan đè khi click
//   console.log("child checked");
// });
// parent.addEventListener("click", function (e) {
//   e.stopPropagation();
//   console.log("parent checked");
// });
// grandparent.addEventListener("click", function () {
//   console.log("grandparent checked");
// });

// child.addEventListener(
//   "click",
//   function () {
//     console.log("child checked");
//   },
//   {
//     capture: true,
//   }
// );
// parent.addEventListener(
//   "click",
//   function () {
//     console.log("parent checked");
//   },
//   {
//     capture: true,
//   }
// );
// grandparent.addEventListener(
//   "click",
//   function () {
//     console.log("grandparent checked");
//   },
//   {
//     capture: true,
//   }
// );
//mặc đinh hoặc capture: false thì mặc định là bubbling từ trong ra ngoài còn ngược lại thì từ ngoài vào trong

// stopPropagation
// child.addEventListener("click", function (e) {
//   e.stopPropagation();
//   console.log("child checked");
// });
// parent.addEventListener("click", function (e) {
//   e.stopPropagation();
//   console.log("parent checked");
// });
// grandparent.addEventListener("click", function () {
//   console.log("grandparent checked");
// });

// stopImmediatePropagation
child.addEventListener("click", function (e) {
  e.stopImmediatePropagation();
  console.log("child checked");
});
child.addEventListener("click", function (e) {
  console.log("child checked2");
});
parent.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("parent checked");
});
grandparent.addEventListener("click", function () {
  console.log("grandparent checked");
});
