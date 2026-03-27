function buyClothing(item) {
  if (spendCash(item.price)) {
    G.wardrobe.push(item);
    G.rating += item.bonus || 0;
  }
}
