class BankAccount {
  constructor(accountNumber, ownerName, balance) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited $${amount} into account ${this.accountNumber}`);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds");
    } else {
      this.balance -= amount;
      console.log(`Withdrawn $${amount} from account ${this.accountNumber}`);
    }
  }

  getBalance() {
    return this.balance;
  }

  displayAccountInfo() {
    console.log(
      `\nAccount Details: \nAccount Number: ${this.accountNumber}\nOwner Name: ${this.ownerName}\nBalance: $${this.balance}\n`
    );
  }
}

// Creating two instances of BankAccount
const account1 = new BankAccount(1001, "John Doe", 500);
const account2 = new BankAccount(1002, "Jane Smith", 1000);

// Demonstrating functionality
account1.deposit(200);
account1.withdraw(100);
account1.displayAccountInfo();

account2.deposit(500);
account2.withdraw(2000); // Should display "Insufficient funds"
account2.displayAccountInfo();