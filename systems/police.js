function triggerCrime() {
  G.heat += 10;
  if (Math.random() > 0.5) startChase();
}

function startChase() {
  console.log("POLICE CHASE");
}
