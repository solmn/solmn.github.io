"use strict";



class Savingsaccount extends Account {
  constructor(accountNumber, interest) {
     super(accountNumber);
     this._interest = interest;
  }

  setInterest(interest) {
    this._interest = interest;
  }

  getInterest() {
    return this._interest;
  }

  addInterest() {
    let b = this.getBalance() * (this._interest / 100);
    this.deposit(b);
  }

  toString() {
      return super.toString() + " :interest " + this._interest;
  }

  endOfMonth() {
    this.addInterest();
    return "Interest added SavingAccount 2: balance:" + this.getBalance() + " interest: " + this.getInterest();
  }
}
