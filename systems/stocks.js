let STOCKS = [
  { name: "TechCo", price: 100 },
  { name: "FinanceCorp", price: 200 }
];

function updateStocks() {
  STOCKS.forEach(s => {
    s.price *= (0.95 + Math.random() * 0.1);
  });
}

function buyStock(stock, amt) {
  let cost = stock.price * amt;
  if (spendCash(cost)) {
    G.portfolio.push({ stock, amount: amt });
  }
}
