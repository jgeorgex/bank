describe("BankAccount", function() {
  beforeEach(function() {
    bankAccount = new BankAccount();
  });

  it("makes a depoit of 1000 in to bankAccount", function() {
    bankAccount.deposit(1000);
    expect(bankAccount.balance()).toEqual(1000);
  });
});
