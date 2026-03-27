function addCash(amount) {
  G.cash += amount;
}

function spendCash(amount) {
  if (G.cash >= amount) {
    G.cash -= amount;
    return true;
  }
  return false;
}

function netWorth() {
  let stocks = G.portfolio.reduce((t, s) => t + s.stock.price * s.amount, 0);
  return G.cash + G.bank + stocks;
}
