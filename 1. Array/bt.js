var numbers = [];
var n;
while (true) {
  n = prompt(`
            Nhập vào số phần tử của mảng
            Lưu ý: n phải là số nguyên > 0
            `);
  n = Number(n); // Chuyển đổi chuỗi nhập vào thành số
  if (Number.isInteger(n) && n > 0) {
    break; // Thoát khỏi vòng lặp khi điều kiện thỏa mãn
  }
}
console.log(` Số phần tử của mảng là ${n}`);
for (let i = 0; i < n; i++) {
  var input = Number(prompt(` Nhập vào phần tử thứ ${i + 1}: `));
  numbers.push(input);
}
console.log(numbers);
