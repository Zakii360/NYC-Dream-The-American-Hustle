const CARS = [
  { name: "Civic", price: 8000, speed: 1.2 }
];

function buyCar(car) {
  if (spendCash(car.price)) {
    G.cars.push(car);
  }
}
