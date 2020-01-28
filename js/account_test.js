(function() {
  "use strict";

  describe("Bank Account", function() {
    var account = new Account(123);
      context("Account number", function() {
          it("123 is account number", function() {
              assert.equal(123, account.getNumber());
          });
      });
      context("Deposit", function() {
          it("300 deposited", function() {
              account.deposit(300);
              assert.equal(300, account._balance);
          });
      });
      context("Balance", function() {
          it("400 is current balance", function() {
              account.deposit(100);
              assert.equal(400, account.getBalance());
          });
      });
      context("Withdraw", function() {
          it("300 is current balance", function() {
              account.withdraw(100);
              assert.equal(300, account.getBalance());
          });
      });
      context("String representation", function() {
          it("Account 123: balance 300", function() {
              assert.equal("Account 123: balance 300", account.toString());
          });
      });

  });

  describe("Saving Bank Account", function() {

      context("Get Interest", function() {
          let account = new Savingsaccount(222, 30);
          it("30% is the interest", function() {
              assert.equal(30, account.getInterest());
          });
      });
      context("Set Interest", function() {
          let account = new Savingsaccount(222, 0);
          account.setInterest(40);
          it("40% is new interest rate", function() {
              assert.equal(40, account._interest);
          });
      });
      context("Add interest to balance", function() {
          let account = new Savingsaccount(222, 20);
          it("120 is current balance including the interest 20%", function() {
              account.deposit(100);
              account.addInterest();
              assert.equal(120, account.getBalance());
          });
      });
      context("String representation of saving account", function() {
        let account = new Savingsaccount(222, 20);
        account.deposit(100);
        account.addInterest();
          it("Account 222: balance 120 :interest 20", function() {
              assert.equal("Account 222: balance 120 :interest 20", account.toString());
          });
      });
  });

  describe("Checking Bank Account", function() {
      context("Get overdraft balance", function() {
          let account = new CheckingAccount(432);
          it("200 is the default overdraft balance", function() {
              assert.equal(200, account.getOverdraft());
          });
      });
      context("Set overdraft balance", function() {
          let account = new CheckingAccount(222);
          account.setOverdraft(400);
          it("400 is the new overdraft balance", function() {
              assert.equal(400, account.getOverdraft());
          });
      });
      context("Widthdraw money from overdraft balance", function() {
          it("the overdraft balance left is 100", function() {
            let account = new CheckingAccount(222);
            account.withdraw(100);
            assert.equal(100, account.getOverdraft());
          });
      });
      context("String representation of saving account", function() {
        let account = new CheckingAccount(222);
        account.deposit(100);
        account.withdraw(50);
          it("Account 222: balance 50 :overdraft 200", function() {
              assert.equal("Account 222: balance 50 :overdraft 200", account.toString());
          });
      });
  });

})();
