function createBusiness(name) {
  G.businesses.push({
    name,
    income: () => Math.random() * 200
  });
}

function collectBusinessIncome() {
  G.businesses.forEach(b => {
    addCash(b.income());
  });
}
