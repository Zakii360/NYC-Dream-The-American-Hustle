const JOBS = [
  { id: "dishwasher", pay: 80, min: 0 },
  { id: "broker", pay: 500, min: 60 }
];

function getAvailableJobs() {
  return JOBS.filter(j => G.rating >= j.min);
}

function work() {
  if (!G.job) return;

  let pay = Math.floor(G.job.pay * (1 + G.rating / 100));
  addCash(pay);

  G.rating += 1;
  G.energy -= 20;
}
