class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  //instance method
  draw() {
    console.log("Phương thức draw được gọi");
  }

  //static method
  static calcArea(radius) {
    return Math.PI * radius * radius;
  }
}
//tạo đối tượng
const c1 = new Circle(10);
const c2 = new Circle(5);
console.log(c1.draw());
console.log(c2.draw());
c1.draw();
c2.draw();

// gọi phương thức static --> không cần tạo đối tượng cụ thể
console.log(Circle.calcArea(10));
console.log(Circle.calcArea(5));
