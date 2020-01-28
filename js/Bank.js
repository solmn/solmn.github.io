"use strict";

class Bank {
  static nextNumber 0;
   constructor() {
     this._accounts = [];
   }

   addAccount() {
    addSavingAccount(40);
    addCheckingAccount(200);
   }

   addSavingAccount(interest) {
     let a = new Savingsaccount(345, interest);
     this._accounts.push(a);
   }

   addCheckingAccount(overdraft){
    let b = new CheckingAccount(324);
    b.setOverdraft(overdraft);
    this._accounts.push(b);
   }

   addCloseAccount(number) {
     for (let i = 0; i < this._accounts; i++) {
       if (this._accounts[i].getNumber() === number) {
         this._accounts.splice(i, 1);
       }
     }
   }
   accountReport() {
    String r = "";
    for (let i = 0; i < this._accounts; i++) {
      r+= this._accounts[i].toString();
    }
    return r;
   }
}
