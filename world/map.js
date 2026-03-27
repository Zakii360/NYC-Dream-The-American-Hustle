const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawMap() {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  LOCATIONS.forEach(l => {
    ctx.fillStyle = "yellow";
    ctx.fillRect(l.x, l.y, 5, 5);
  });

  requestAnimationFrame(drawMap);
}

function initMiniMap() {
  const mini = document.getElementById("mini-map");
  const ctx = mini.getContext("2d");

  mini.width = 200;
  mini.height = 200;

  mini.onclick = () => alert("Entering Open World");

  function draw() {
    ctx.clearRect(0,0,200,200);
    LOCATIONS.forEach(l => {
      ctx.fillRect(l.x * 0.2, l.y * 0.2, 3, 3);
    });
    requestAnimationFrame(draw);
  }

  draw();
}

drawMap();
initMiniMap();
