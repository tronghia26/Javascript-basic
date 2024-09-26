class Wallet {
  constructor(backName, _pin) {
    this.backName = backName;
    this._pin = _pin;
    this._balance = 0; // tài khoản bằng 0
  }
  // method
  deposit(value) {
    this._balance += value;
  }
  withDraw(value) {
    if (value > this._balance) {
      console.log("Số tiền trong tk không đủ");
    } else {
      this._balance -= value;
      console.log("Rút tiền thành công");
    }
  }
}

const wallet = new Wallet("MB Bank", "1234");
console.log(wallet._balance);
wallet.deposit(1000);
console.log(wallet._balance);
wallet.withDraw(25000);
console.log(wallet._balance);
wallet.withDraw(250);
console.log(wallet._balance);
