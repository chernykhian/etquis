interface SideHustle {
  income: number;
}

class IncomeStream implements SideHustle {
  income: number;

  constructor(income: number) {
    this.income = income;
  }

  getIncome(): number {
    return this.income;
  }

  // Additional methods can be added here to handle other income-related operations
}

// Usage
const sideHustleIncome = new IncomeStream(250);
console.log(sideHustleIncome.getIncome()); // Outputs: 250
