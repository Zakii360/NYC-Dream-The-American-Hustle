function gameLoop() {
  // passive systems
  if (G.energy <= 0) {
    console.log("You are exhausted");
  }

  requestAnimationFrame(gameLoop);
}

gameLoop();
