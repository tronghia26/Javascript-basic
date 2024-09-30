// chọn tất cả các phần tử có class panel
const panels = document.querySelectorAll(".panel");
console.log(panels);
// duyệt từng phần tử trong ds
panels.forEach((item) => {
  //lắng nghe sự kiện
  item.addEventListener("click", () => {
    //xóa active đang hoạt động
    removeActive();
    //thêm class active cho panel được click
    item.classList.add("active");
  });
});
function removeActive() {
  panels.forEach((item) => {
    item.classList.remove("active");
  });
}
