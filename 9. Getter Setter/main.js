class School {
  constructor(id, name, birthYear, score) {
    this.id = id;
    this.name = name;
    this.birthYear = birthYear;
    this._score = score; // thêm dấu _ để thể hiện trạng thái ở protected
    // không nên truy cập và sửa đổi từ bên ngoài
  }
  calcAge(currentYear) {
    return currentYear - this.birthYear;
  }
  // getter setter
  get score() {
    return this._score;
  }
  set score(value) {
    if (value >= 0 && value <= 100) {
      this._score = value;
    } else {
      console.log("Điểm số không hợp lệ");
    }
  }
}
const john = new School("123", "John", 2000, 95);
console.log(john.id);
console.log(john.name);
console.log(john.birthYear);
console.log(john._score); // không nên truy cập trực tiếp
console.log(john.calcAge(2024));
//dùng getter setter
console.log(john.score); // gọi get và set không cần ()
john.score = 250;
