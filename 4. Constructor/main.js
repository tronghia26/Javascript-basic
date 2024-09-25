// const student = {
//   fullName: "Lê Quang Trọng Nghĩa",
//   birthYear: 2004,
//   address: {
//     city: "Huế",
//     country: "Việt Name",
//   },
//   scores: [8, 9, 10],

//   getAge: function () {
//     return 2024 - this.birthYear;
//   },
//   averageScores: function () {
//     sumScores = this.scores.reduce((a, b) => a + b, 0);
//     return sumScores / 3;
//   },
// };

// const student2 = {
//   fullName: "Lê Quang Trọng Nghĩa",
//   birthYear: 2004,
//   address: {
//     city: "Huế",
//     country: "Việt Name",
//   },
//   scores: [8, 9, 10],

//   getAge: function () {
//     return 2024 - this.birthYear;
//   },
//   averageScores: function () {
//     sumScores = this.scores.reduce((a, b) => a + b, 0);
//     return sumScores / 3;
//   },
// };
// Cách 1: function expression (ít dùng)
// const Student = function (fullName, ID, birthYear, homeTown) {
//   this.fullName = fullName;
//   this.ID = ID;
//   this.birthYear = birthYear;
//   this.homeTown = homeTown;
//   // phương thức
//   this.showInfo = function () {
//     return `${this.fullName} ${this.ID} ${this.homeTown}`;
//   };
// };
// Cách 2: function declaration (thường dùng hơn)
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
