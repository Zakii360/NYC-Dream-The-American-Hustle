const HOUSING = [
  { id: "hostel", rent: 150 },
  { id: "apartment", rent: 600 },
  { id: "luxury", price: 200000, owned: false }
];

function rentPlace(h) {
  G.housing = h;
}

function buyHouse(h) {
  if (G.cash >= h.price) {
    G.cash -= h.price;
    h.owned = true;
    G.housing = h;
  }
}
