const form = document.querySelector("#login");
const name = document.querySelector("#name");
const listUser = document.querySelector("#list");
form.addEventListener("submit", function (e) {
  e.preventDefault(); // ngăn chặn hành vi mặc định của sk
  console.log(name.value);
  const newLi = document.createElement("li");
  newLi.innerText = name.value;
  listUser.appendChild(newLi);
  //   console.log(listUser);
  //reset name
  name.value = "";
});

// ngăn không cho thẻ a chuyển hướng
const link = document.querySelector("a");
link.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Link đã đc click");
});
