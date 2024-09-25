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

// 1. object.key  ---- 2. object.value ----- 3. object.entries ----- object.assign(target,source): sao chép các thuộc tính từ source vào target
var keys = Object.keys(student);
console.log(keys);
var values = Object.values(student);
console.log(values);
var entries = Object.entries(student);
console.log(entries);
// 4. object.assign
var target = { c: 100 };
var source1 = { a: 1 };
var source2 = { b: 2 };
Object.assign(target, source1, source2);
console.log(target);
// 5. Object.hasOwnProperty(prop)
var persion = {
  name: "nghĩa",
  age: 20,
};
console.log(persion.hasOwnProperty("name")); // true
// 6. Object.freeze : đóng băng đối tương, làm đối tượng không thể thêm xóa sửa
Object.freeze(persion);
persion.email = "lqtnghia2602@gmail.com";
console.log(persion.email);
delete persion.name;
console.log(persion.name);
// 7. Object.seal : ngắn 0 cho thêm xóa, chỉ cho sửa
