const inp = document.querySelector("#inp");
inp.addEventListener("keydown", function () {
  console.log("KEYDOWN");
});
inp.addEventListener("keyup", function () {
  console.log("KEYUP");
});

// event object
inp.addEventListener("keydown", function (e) {
  console.log(e);
});

// ví dụ người dùng nhấn phím r thì thay đổi màu background
document.addEventListener("keydown", function (e) {
  if (e.key === "r") {
    document.body.style.backgroundColor = "cyan";
  }
});
