class Wallet {
  constructor(backName, pin) {
    this.backName = backName;
    this.pin = pin;
    this.balance = 0; // tài khoản bằng 0
  }
  // method
  deposit(value) {
    this.balance += value;
  }
  withDraw(value) {
    if (value > this.balance) {
      console.log("Số tiền trong tk không đủ");
    } else {
      this.balance -= value;
      console.log("Rút tiền thành công");
    }
  }
}

const wallet = new Wallet("MB Bank", "1234");
console.log(wallet.balance);
wallet.deposit(1000);
console.log(wallet.balance);
wallet.withDraw(25000);
console.log(wallet.balance);
wallet.withDraw(250);
console.log(wallet.balance);
