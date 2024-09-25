var student = {
  fullName: "Lê Quang Trọng Nghĩa",
  birthYear: 2004,
  address: {
    city: "Huế",
    country: "Việt Name",
  },
  scores: [8, 9, 10],

  getAge: function () {
    return 2024 - this.birthYear;
  },
  //phương thức được viết lại, để trả về 1 thuộc tính
  getAge2: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },

  averageScores: function () {
    sumScores = this.scores.reduce((a, b) => a + b, 0);
    return sumScores / 3;
  },
};

var teacher = {
  "1 fullName": "Jacod",
  "@address": {
    city: "Huế",
    country: "Việt Nam",
  },
};

console.log(typeof student);
console.log(typeof teacher);

// . : dot notation
// [] : bracket notation --> truyền vào giá trị của key
console.log(student.address);
console.log(student.birthYear);
console.log(student.fullName);
console.log(teacher["1 fullName"]);
console.log(teacher["@address"]);

// var inputKey = prompt(` Mời nhập key: (address,scores)`);
var inputKey = "address";
console.log(`Truy xuất đến key dùng với tiên biến input key: `);
console.log(student[inputKey]);

// ------------------ Truy cập phương thức --------------------
console.log(` Truy cập phương thức `);
console.log(student.getAge());
console.log(student.averageScores());

// gọi phương thức getAge2
student.getAge2();
// xuất thử tuổi thông qua thuộc tính age mới đc thêm từ phương thức getAge2
console.log(student.age);

// THêm xóa thuộc tính
student.email = "lqtnghia2602@gmail.com";
student["website"] = "https://nghiahocjs.com";
console.log(student.email);
console.log(student.website);
delete student.email;
student["website"] = "https:/tuhocjs.com";
console.log(student.email);
console.log(student.website);
