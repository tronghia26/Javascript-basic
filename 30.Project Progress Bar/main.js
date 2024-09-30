// lấy các phần tử cần thao tác từ DOM
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const steps = document.querySelectorAll(".step");

let currentActive = 1;

prev.addEventListener("click", () => {
  changeStep(-1);
});
next.addEventListener("click", () => {
  changeStep(1);
});

function changeStep(step) {
  currentActive += step; // thay đổi giá trị currentACtive
  // cập nhật  lại  cho step
  update();
  // cập nhật nút prev và nex
  prev.disabled = currentActive === 1;
  next.disabled = currentActive === steps.length;
  // Cập nhật lại chiều dài thanh tiến trình
  progress.style.width = ((currentActive - 1) / (steps.length - 1)) * 100 + "%";
}

function update() {
  //Duyệt qua từng phần tử và xử lý
  steps.forEach((step, idx) => {
    if (idx < currentActive) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });
}
