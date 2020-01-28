class CheckingAccount extends Account {
  constructor(accountNumber) {
     super(accountNumber);
     this._overdraft = 200;
  }

  setOverdraft(overdraft) {
    this._overdraft = overdraft;
  }

  getOverdraft() {
    return this._overdraft;
  }

  withdraw(amount) {
    if (amount < this.getBalance()) {
      super.withdraw(amount);
    }
    else{
      if (this._overdraft + this.getBalance() >= amount) {
         let p = amount - this.getBalance();
         if ((amount - p) > 0) {super.withdraw(amount - p);}
         this._overdraft-=p;
      }
      else {
        return "inssuficient balance";
      }
  }
  }
  toString() {
      return super.toString() + " :overdraft " + this._overdraft;
  }
}
