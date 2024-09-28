function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0"); // trường hợp chuỗi không đủ 2 kí tự thì chèn số 0 phía trước
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const timeString = `${hours}: ${minutes}: ${seconds}`;

  document.getElementById("clock").innerHTML = timeString;
}
setInterval(updateClock, 1000);
