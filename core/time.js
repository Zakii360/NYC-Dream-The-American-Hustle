function advanceTime(hours = 1) {
  G.hour += hours;

  if (G.hour >= 24) {
    G.hour = 0;
    G.day++;
    dailyTick();
  }
}

function sleep(hours) {
  advanceTime(hours);
  G.energy = 100;
}

function dailyTick() {
  updateStocks();
  collectBusinessIncome();
}
