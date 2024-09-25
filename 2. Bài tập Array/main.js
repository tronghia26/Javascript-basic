function createRandomArr() {
  var arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }
  return arr;
}
function sortArr(arr) {
  return arr.sort((a, b) => a - b);
}
var n = Number(
  prompt(` Nhập số phẩn tử của mảng: 
        Lưu ý: phải là số nguyên và > 0`)
);
var randomArray = createRandomArr(n);
console.log(randomArray);

var reverseArray = randomArray.slice().reverse();
console.log(reverseArray);

console.log(sortArr(randomArray));
