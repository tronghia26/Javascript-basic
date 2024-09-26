function Student(fullName, ID, birthYear, homeTown) {
  this.fullName = fullName;
  this.ID = ID;
  this.birthYear = birthYear;
  this.homeTown = homeTown;
  // phương thức
  this.showInfo = function () {
    return `${this.fullName} ${this.ID} ${this.homeTown}`;
  };
}

const sv1 = new Student(
  "Lê Quang Trọng Nghĩa",
  "22162029",
  2004,
  "Thừa Thiên Huế"
);
const sv2 = new Student("Phan Quốc Lập", "22162019", 2004, "Quảng Nam");
console.log(sv1.fullName);
console.log(sv2.showInfo());

//2 . khai báo ES6 classés
// 2.1 class expression (ít dùng hơn)
const SinhVienEx = class {
  // thuộc tính
  // phương thức
};

// 2.2 class decoration (thường dùng vì ngắn gọn)
class SinhVien {
  constructor(fullName, ID, birthYear, homeTown) {
    this.fullName = fullName;
    this.ID = ID;
    this.birthYear = birthYear;
    this.homeTown = homeTown;
  }
  // phương thức
  showInfo() {
    return `${this.fullName} ${this.ID} ${this.homeTown}`;
  }
}

const st3 = new SinhVien("Nguyễn Văn A", "222222222", 2000, "Tây Ninh");
console.log(st3);

console.log(st3.showInfo());
console.log(Object.getPrototypeOf(st3));

// thêm phương thức vào class
SinhVien.prototype.calcAge = function (currentYear) {
  return currentYear - this.birthYear;
};
console.log(st3.calcAge(2024));
console.log(st3);
