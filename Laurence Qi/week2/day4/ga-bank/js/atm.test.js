const Account = require('./atm');

const accountInstance = new Account('checking');


test('check whether the initialised bank constructor can deposit', () => {
    accountInstance.deposit(100);
    expect(accountInstance.balance).toBe(100);
});

test('check whether Account withdrawal works when balance > withdrawal amount', () => {
    accountInstance.withdraw(100);
    expect(accountInstance.balance).toBe(0);
});

test('check whether Account does not withdraw when balance < withdrawal amount', () => {
    accountInstance.withdraw(100);
    expect(accountInstance.balance).toBe(0);
});
//TODO: figure out a better way of checking capability of overdrafting.