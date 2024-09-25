// 1. concat() : nối mảng
var arr1 = [1, 2, 3, 4];
var arr2 = [5, 6, 7, 8];
var newArr = arr1.concat(arr2);
console.log(newArr);

// 2. push() : thêm 1 hoặc nhiều phần tử vào cuối mảng gốc
var arr3 = [1, 2, 3];
arr3.push(6, 7, 8);
console.log(arr3);

// 3. unshift(): thêm 1 hoặc nhiều phẩn tử vào đầu mảng gốc
var arr4 = [1, 2, 3];
arr4.unshift(0, 5, 6);
console.log(arr4);

// 4. pop() : loại bỏ phần tử cuối cùng của mảng (làm  thay đổi mảng gốc) và trả về phần tử đã bị loại bỏ
var arr5 = [1, 5, 6, 7, 8, 4];
var arrPop = arr5.pop();
console.log(arr5);
console.log(arrPop);

// 5. shift() : loại bỏ phần tử đầu tiên của mảng (làm  thay đổi mảng gốc) và trả về phần tử đã bị loại bỏ
var arr6 = [1, 2, 3];
var arrShift = arr6.shift();
console.log(arr6);
console.log(arrShift);

// 6. slice(startIndex, endIndex) : tạo 1 bản sao của mảng từ vị trí start đến sát vị trị end -> lưu sang 1 vùng nhớ mới, nếu bỏ trống endIndex thì sẽ lấy đến hết chuỗi
var arr7 = [1, 2, 3, 4, 5];
var arrSlice = arr7.slice(2, 5);
console.log(arrSlice);

// 7. includes() : kiểm tra xem mảng có chứa 1 kí tự cụ thể nào hay không
var arr8 = [1, 2, 3, 4, 5];
var check1 = arr8.includes(1);
var check2 = arr8.includes(0);
console.log(check1);
console.log(check2);

// 8. indexOf() : trả về vị trí đầu tiên của phần từ xuất hiện trong mảng nếu tìm thấy, trả về -1 nếu không tìm thấy
// 9. lastIndexOf() : trả về vị trí index của phần từ xuất hiện cuối cùng trong mảng nếu tìm thấy, trả về -1 nếu không tìm thấy
// 10. reverse(): đảo ngược thứ tự của các phần từ trong mảng gốc||| nếu giữ lại mảng gốc thì dùng thêm newArr.slice().reverse()
// 11. join(separator): nếu các phần tử trong mảng theo ký tự separator

// 12. splice(start,deleteCount,item1,item2,...)
/*  start: chỉ định vị trí bắt đầu thay đổi mảng. Nếu mảng là 1 số âm nó sẽ tính từ cuối mảng.
    deleteCount: số nguyên chỉ định số lượng  phần tử bị loại bỏ từ mảng, bắt đầu từ vị trí start.
    item1, item2, .... : các phần tử mới đc thêm vào từ vị trí start
*/

// 13. Toán tử spread (...) - ES6
// 13.1 tạo clone của mảng:
var M1 = [1, 2, 3];
var M2 = [...M1]; // có thẻ thêm phần tử bằng cách var M2 = [...M1,5] --> thêm 5 vào cuối mảng clone
console.log(`13. Toán tử spread`);
console.log(M1);
console.log(M2);
// Thay đổi M2 thì không liên quan đến M1
M2[0] = 99;
console.log(M1);
console.log(M2);
// 13.2 truyền đối số vào hàm
function sum(a, b, c) {
  return a + b + c;
}
var numbers = [1, 2, 3];
var result = sum(...numbers);
console.log(result);
// 13.3 kết hợp mảng
var a1 = [2, 6, 0];
var a2 = [2, 0, 4];
var connectA = [...a1, ...a2];
console.log(connectA);
// 13.4 chuyển đổi iterable thành mảng:
var stringName = "jason";
var chars = [...stringName];
console.log(chars);

// 14. sort(...)  nếu không truyền hàm tham số sẽ sort theo unicode |||khi function trả về < 0 a trc b, = 0 thì giữ nguyên > 0 thì b trước a
var a3 = [5, 6, 1, 8, 9, 2];
// sort tăng dần
var sortedA3 = a3.sort((a, b) => a - b);

// 15. reduce(fucntion, [initialValue]) tính toán rồi trả về một giá trị duy nhất sau tính toán
/*accumulator: giá trị tích lũy, được cập nhật sau mỗi lần gọi hàm
  currentValue: giá trị hiện tại đang xử lý trong mảng.
  currentIndex: (tùy chọn) chỉ số của phần tử đang xử lý.
  array: (tùy chọn) mảng đang được reduce*/
var N1 = [3, 2, 3];
var sumN1 = N1.reduce(
  // Tham số thứ nhất: function
  (accumulator, currentValue, currentIndex, array) => {
    return accumulator + currentValue;
  },
  // Tham số thứ 2: initalValue
  0
);

// 16. filter()

var newNumbers = [1, 2, 3, 4, 5, 6, 7];
var evenNumbers = newNumbers.filter((value) => value % 2 == 0);
console.log(evenNumbers);
