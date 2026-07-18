const BUDGET_BENCHMARK = 40;
const BLOATED_BENCHMARK = 300;

function addRow(name = "", price = "") {
  const rows = document.getElementById("rows");
  const row = document.createElement("div");
  row.className = "row";
  row.innerHTML = `
    <input class="name" type="text" placeholder="e.g. Vitamin D3" value="${name}">
    <input class="price" type="number" placeholder="$/month" min="0" step="0.01" value="${price}">
  `;
  rows.appendChild(row);
}

function calculate() {
  const rows = document.querySelectorAll(".row");
  let monthly = 0;

  rows.forEach((row) => {
    const price = parseFloat(row.querySelector(".price").value);
    if (!isNaN(price)) monthly += price;
  });

  const yearly = monthly * 12;

  document.getElementById("monthlyTotal").textContent = `$${monthly.toFixed(2)}`;
  document.getElementById("yearlyTotal").textContent = `$${yearly.toFixed(2)}`;

  let verdict;
  if (monthly <= BUDGET_BENCHMARK) {
    verdict = `You're at or under the $${BUDGET_BENCHMARK} realistic budget stack. No bloat here.`;
  } else if (monthly < BLOATED_BENCHMARK) {
    verdict = `You're between the $${BUDGET_BENCHMARK} budget stack and the $${BLOATED_BENCHMARK} bloated stack. Worth auditing which items are actually pulling weight versus just habit.`;
  } else {
    verdict = `You're at or above the $${BLOATED_BENCHMARK}/month bloated stack benchmark. That's $${(monthly * 12).toFixed(0)}/year, worth a hard look at what's marketing versus what's actually doing something.`;
  }
  document.getElementById("benchmark").textContent = verdict;

  document.getElementById("output").classList.remove("hidden");
}

document.getElementById("addRow").addEventListener("click", () => addRow());
document.getElementById("calcBtn").addEventListener("click", calculate);

// seed with a couple of empty rows to start
addRow();
addRow();
addRow();
