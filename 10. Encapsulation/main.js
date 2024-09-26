class Wallet {
  #pin;
  #balance;
  #isPinEntered = false;
  constructor(backName, pin) {
    this.backName = backName;
    this.#pin = pin;
    this.#balance = 0; // tài khoản bằng 0
  }
  // method
  deposit(value) {
    if (!this.#isPinEntered) {
      console.log("Kiểm tra lại mã pin");
      return;
    }
    this.#balance += value;
  }

  //private medthod
  #validatePin(pin) {
    return this.#pin == pin;
  }
  //public method
  enterPin(pin) {
    if (this.#validatePin(pin) == true) {
      this.#isPinEntered = true;
    } else {
      console.log("Invalid Pin");
    }
  }

  withDraw(value) {
    if (!this.#isPinEntered) {
      console.log("Kiểm tra lại mã pin");
      return;
    }
    if (value > this.#balance) {
      console.log("Số tiền trong tk không đủ");
    } else {
      this.#balance -= value;
      console.log("Rút tiền thành công");
    }
  }
  // getter
  get balance() {
    if (!this.#isPinEntered) {
      console.log("kiểm tra lại mã Pin");
      return;
    }
    return this.#balance;
  }
}

const wallet = new Wallet("MB Bank", "1234");
wallet.enterPin("1234");
// console.log(wallet.#balance);
wallet.deposit(1000);
// console.log(wallet.#balance);
wallet.withDraw(25000);
// console.log(wallet.#balance);
wallet.withDraw(250);
// console.log(wallet.#balance);
console.log(wallet.balance);
