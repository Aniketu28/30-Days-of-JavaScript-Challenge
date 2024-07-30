class BankAccount {
    // Private field for storing balance
    #balance;

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        } else {
            throw new Error("Deposit amount must be positive");
        }
    }

    withdraw(amount) {
        if (amount > 0) {
            if (amount <= this.#balance) {
                this.#balance -= amount;
            } else {
                throw new Error("Insufficient funds");
            }
        } else {
            throw new Error("Withdrawal amount must be positive");
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(100);  
console.log("Initial Balance:", account.getBalance());

account.deposit(50);
console.log("Balance after deposit:", account.getBalance());

account.withdraw(30); 
console.log("Balance after withdrawal:", account.getBalance());


