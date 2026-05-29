const zh = {
  intro: "\u532f\u5165\u8a18\u5e33\u8cc7\u6599\u3001\u8abf\u6574\u964d\u7d1a\u6d88\u8cbb\u6bd4\u4f8b\uff0c\u7acb\u523b\u770b\u898b\u85aa\u8cc7\u5206\u914d\u3001\u8907\u5229\u66f2\u7dda\u8207\u5922\u60f3 BOM \u8cfc\u8cb7\u529b\u3002",
  heroLabel: "\u6bcf\u6708\u65b0\u589e\u53ef\u5132\u84c4",
  baseData: "\u57fa\u6e96\u8ca1\u52d9\u6578\u64da",
  salary: "\u76ee\u524d\u6708\u85aa\uff08NT$\uff09",
  essentialExpense: "\u5fc5\u8981\u652f\u51fa\u91d1\u984d",
  essentialPercent: "\u6216\u4f54\u6708\u85aa %",
  hiddenItems: "\u96b1\u5f62\u958b\u92b7\u9805\u76ee",
  drinkCost: "\u6bcf\u676f\u624b\u6416\u98f2 / \u5496\u5561\u55ae\u50f9",
  drinkFrequency: "\u6bcf\u9031\u8cfc\u8cb7\u6b21\u6578",
  subscription: "\u5c11\u7528\u4e32\u6d41 / App \u8a02\u95b1\u6708\u8cbb",
  otherHidden: "\u5176\u4ed6\u6bcf\u6708\u96b1\u5f62\u958b\u92b7",
  csvUpload: "\u532f\u5165\u65e5\u5e38\u8a18\u5e33 CSV\uff08\u9078\u586b\uff09",
  csvHelp: "CSV \u6b04\u4f4d\u53ef\u4f7f\u7528 date, description, amount\u3002\u7cfb\u7d71\u6703\u7528\u95dc\u9375\u5b57\u4f30\u7b97\u5fc5\u8981\u652f\u51fa\u8207\u96b1\u5f62\u958b\u92b7\u6708\u5e73\u5747\u3002",
  scenario: "\u52d5\u614b\u60c5\u5883\u63a7\u5236",
  cutRatio: "\u964d\u7d1a\u6d88\u8cbb\u6bd4\u4f8b",
  annualReturn: "\u6295\u8cc7\u5e74\u5316\u5831\u916c\u7387",
  years: "\u9810\u8a08\u89c0\u5bdf\u5e74\u9650",
  hiddenMonthly: "\u539f\u59cb\u6bcf\u6708\u96b1\u5f62\u958b\u92b7",
  monthlySaved: "\u6bcf\u6708\u65b0\u589e\u53ef\u5132\u84c4",
  futureValue: "\u671f\u6eff\u8907\u5229\u7d2f\u7a4d",
  allocation: "\u6708\u85aa\u5168\u666f\u5206\u914d",
  projection: "\u52d5\u614b\u8cc7\u7522\u7d2f\u7a4d\u66f2\u7dda",
  bom: "\u5922\u60f3 BOM \u8868\u8cfc\u8cb7\u529b",
  necessary: "\u5fc5\u8981\u652f\u51fa",
  hidden: "\u96b1\u5f62\u958b\u92b7",
  surplus: "\u5269\u9918\u53ef\u5132\u84c4",
  currentPath: "\u7dad\u6301\u73fe\u72c0",
  optimizedPath: "\u6539\u8b8a\u7fd2\u6163",
  yearUnit: "\u5e74",
  groupUnit: "\u7d44",
  parseFail: "CSV \u7121\u6cd5\u89e3\u6790\uff0c\u8acb\u78ba\u8a8d\u6b04\u4f4d\u5305\u542b description \u8207 amount\u3002",
  loaded: "\u5df2\u8b80\u53d6",
  rows: "\u7b46",
  months: "\u500b\u6708\u4efd",
  essentialAverage: "\u5fc5\u8981\u652f\u51fa\u6708\u5747",
  hiddenAverage: "\u96b1\u5f62\u958b\u92b7\u6708\u5747",
  otherAverage: "\u5176\u4ed6\u6708\u5747"
};

const money = new Intl.NumberFormat("zh-TW", {
  style: "currency",
  currency: "TWD",
  maximumFractionDigits: 0
});

const state = {
  csvMonthlyEssential: null,
  csvMonthlyHidden: null
};

const essentialKeywords = [
  "\u623f\u79df",
  "\u79df\u91d1",
  "\u6c34\u96fb",
  "\u74e6\u65af",
  "\u96fb\u8cbb",
  "\u5065\u4fdd",
  "\u4fdd\u96aa",
  "\u5b78\u8cb8",
  "\u4ea4\u901a",
  "\u6377\u904b",
  "\u516c\u8eca",
  "\u96dc\u8ca8",
  "grocery",
  "groceries",
  "rent",
  "utility",
  "insurance",
  "loan"
];

const hiddenKeywords = [
  "\u5496\u5561",
  "\u62ff\u9435",
  "\u624b\u6416",
  "\u98f2\u6599",
  "\u73cd\u5976",
  "\u8a02\u95b1",
  "\u5916\u9001",
  "\u9ede\u5fc3",
  "\u5bb5\u591c",
  "netflix",
  "spotify",
  "disney",
  "youtube",
  "uber eats"
];

const bomItems = [
  {
    id: "travel",
    title: "\u6d77\u5916\u65c5\u904a\u5c08\u6848",
    unit: 14500,
    note: "\u66fc\u8c37\u81ea\u7531\u884c\u5957\u7d44",
    parts: ["\u4f86\u56de\u6a5f\u7968 NT$9,000", "BTS 5 \u5929 NT$1,000", "\u4f4f\u5bbf\u8cbb NT$4,500"]
  },
  {
    id: "badminton",
    title: "\u5c08\u696d\u904b\u52d5\u8a2d\u5099",
    unit: 8200,
    note: "\u9ad8\u968e\u5c08\u696d\u7fbd\u7403\u62cd",
    parts: ["\u7403\u62cd NT$7,200", "\u7dda\u8207\u63e1\u628a\u5e03 NT$600", "\u4fdd\u8b77\u5957 NT$400"]
  },
  {
    id: "yarn4",
    title: "\u96ea\u5983\u723e 4 \u80a1\u7dda\u6750",
    unit: 95,
    note: "\u4ee5\u6bcf\u6372 NT$95 \u4f30\u7b97",
    parts: ["\u6bcf\u500b\u98f2\u6599\u63d0\u888b\u7d04 2 \u6372", "\u9069\u5408\u8f15\u91cf\u624b\u4f5c\u91cf\u7522"]
  },
  {
    id: "yarn5",
    title: "\u96ea\u5983\u723e 5 \u80a1\u7dda\u6750",
    unit: 115,
    note: "\u4ee5\u6bcf\u6372 NT$115 \u4f30\u7b97",
    parts: ["\u6bcf\u500b\u98f2\u6599\u63d0\u888b\u7d04 2 \u6372", "\u6210\u54c1\u8f03\u633a\u3001\u8010\u7528\u5ea6\u8f03\u9ad8"]
  }
];

const inputs = {};
const labels = {};
const outputs = {};

function currency(value) {
  return money.format(Math.max(0, Math.round(value)));
}

function readNumber(input) {
  return Number(input.value) || 0;
}

function monthlyPaymentFutureValue(monthlyPayment, annualRate, years) {
  const months = years * 12;
  const monthlyRate = annualRate / 100 / 12;
  if (monthlyRate === 0) return monthlyPayment * months;
  return monthlyPayment * (((1 + monthlyRate) ** months - 1) / monthlyRate);
}

function parseCsvLine(line) {
  const values = [];
  let current = "";
  let quoted = false;

  for (const char of line) {
    if (char === '"') quoted = !quoted;
    else if (char === "," && !quoted) {
      values.push(current.trim());
      current = "";
    } else current += char;
  }

  values.push(current.trim());
  return values;
}

function includesAnyKeyword(text, keywords) {
  const normalized = text.toLowerCase();
  return keywords.some((keyword) => normalized.includes(keyword.toLowerCase()));
}

function parseExpenseCsv(text) {
  const lines = text.split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) return null;

  const headers = parseCsvLine(lines[0]).map((header) => header.toLowerCase());
  const descriptionIndex = headers.findIndex((header) => ["description", "item", "memo", "\u5099\u8a3b", "\u9805\u76ee"].includes(header));
  const amountIndex = headers.findIndex((header) => ["amount", "cost", "\u91d1\u984d"].includes(header));
  const dateIndex = headers.findIndex((header) => ["date", "\u65e5\u671f"].includes(header));
  if (descriptionIndex === -1 || amountIndex === -1) return null;

  let essentialTotal = 0;
  let hiddenTotal = 0;
  let otherTotal = 0;
  const months = new Set();

  lines.slice(1).forEach((line) => {
    const row = parseCsvLine(line);
    const description = row[descriptionIndex] || "";
    const amount = Math.abs(Number((row[amountIndex] || "0").replace(/[^\d.-]/g, ""))) || 0;
    const dateText = dateIndex >= 0 ? row[dateIndex] || "" : "";
    const monthMatch = dateText.match(/^(\d{4})[-/](\d{1,2})/);

    if (monthMatch) months.add(`${monthMatch[1]}-${monthMatch[2].padStart(2, "0")}`);

    if (includesAnyKeyword(description, hiddenKeywords)) hiddenTotal += amount;
    else if (includesAnyKeyword(description, essentialKeywords)) essentialTotal += amount;
    else otherTotal += amount;
  });

  const monthCount = Math.max(1, months.size);
  return {
    essentialTotal: essentialTotal / monthCount,
    hiddenTotal: hiddenTotal / monthCount,
    otherTotal: otherTotal / monthCount,
    count: lines.length - 1,
    monthCount
  };
}

function getModel() {
  const salary = readNumber(inputs.salary);
  const cutRatio = readNumber(inputs.cutRatio) / 100;
  const annualReturn = readNumber(inputs.annualReturn);
  const years = readNumber(inputs.years);
  const manualEssential = readNumber(inputs.essentialExpense);
  const percentEssential = salary * (readNumber(inputs.essentialPercent) / 100);
  const essential = state.csvMonthlyEssential ?? (manualEssential || percentEssential);
  const weeklyDrink = readNumber(inputs.dailyDrinkCost) * readNumber(inputs.drinkFrequency);
  const manualHidden = weeklyDrink * 4.33 + readNumber(inputs.subscriptionCost) + readNumber(inputs.otherHiddenCost);
  const hidden = state.csvMonthlyHidden ?? manualHidden;
  const monthlySaved = hidden * cutRatio;
  const remainingHidden = hidden - monthlySaved;
  const freeCash = Math.max(0, salary - essential - remainingHidden);
  const futureValue = monthlyPaymentFutureValue(monthlySaved, annualReturn, years);
  return { salary, essential, hidden, remainingHidden, monthlySaved, freeCash, annualReturn, years, futureValue };
}

function renderAllocationChart(model) {
  const total = Math.max(1, model.essential + model.remainingHidden + model.freeCash);
  const segments = [
    { label: zh.necessary, value: model.essential, color: "#255f9a" },
    { label: zh.hidden, value: model.remainingHidden, color: "#b14f61" },
    { label: zh.surplus, value: model.freeCash, color: "#24785f" }
  ];
  let start = 0;
  const gradient = segments.map((segment) => {
    const end = start + (segment.value / total) * 100;
    const part = `${segment.color} ${start.toFixed(2)}% ${end.toFixed(2)}%`;
    start = end;
    return part;
  }).join(", ");

  outputs.allocationChart.innerHTML = `
    <div class="pie" style="background: conic-gradient(${gradient});"></div>
    <div class="legend">
      ${segments.map((segment) => {
        const percent = ((segment.value / total) * 100).toFixed(1);
        return `<div><span style="background:${segment.color}"></span>${segment.label}: ${currency(segment.value)} (${percent}%)</div>`;
      }).join("")}
    </div>
  `;
}

function buildProjection(monthlySaved, annualRate, years) {
  const points = [];
  for (let year = 1; year <= years; year += 1) {
    points.push(monthlyPaymentFutureValue(monthlySaved, annualRate, year));
  }
  return points;
}

function renderProjectionChart(model) {
  const values = buildProjection(model.monthlySaved, model.annualReturn, model.years);
  const width = 720;
  const height = 320;
  const pad = 42;
  const maxValue = Math.max(...values, 1);
  const xStep = values.length > 1 ? (width - pad * 2) / (values.length - 1) : 0;
  const points = values.map((value, index) => {
    const x = pad + index * xStep;
    const y = height - pad - (value / maxValue) * (height - pad * 2);
    return { x, y, value, year: index + 1 };
  });
  const path = points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");
  const zeroY = height - pad;

  outputs.projectionChart.innerHTML = `
    <line x1="${pad}" y1="${zeroY}" x2="${width - pad}" y2="${zeroY}" class="axis"></line>
    <line x1="${pad}" y1="${pad}" x2="${pad}" y2="${zeroY}" class="axis"></line>
    <line x1="${pad}" y1="${zeroY}" x2="${width - pad}" y2="${zeroY}" class="current-line"></line>
    <path d="${path}" class="growth-line"></path>
    ${points.map((point) => `
      <g>
        <circle cx="${point.x}" cy="${point.y}" r="5" class="point"></circle>
        <text x="${point.x}" y="${zeroY + 25}" text-anchor="middle">${point.year}${zh.yearUnit}</text>
      </g>
    `).join("")}
    <text x="${pad}" y="${pad - 12}" class="chart-label">${currency(maxValue)}</text>
    <text x="${width - pad}" y="${zeroY - 12}" text-anchor="end" class="chart-label">${zh.currentPath}: ${currency(0)}</text>
    <text x="${width - pad}" y="${pad + 12}" text-anchor="end" class="chart-label">${zh.optimizedPath}</text>
  `;
}

function renderBom(model) {
  const yarn4Count = Math.floor(model.futureValue / 95);
  const yarn5Count = Math.floor(model.futureValue / 115);
  outputs.bomGrid.innerHTML = bomItems.map((item) => {
    const count = Math.floor(model.futureValue / item.unit);
    const extra = item.id === "yarn4"
      ? `\u7d04\u53ef\u505a ${Math.floor(yarn4Count / 2)} \u500b\u98f2\u6599\u63d0\u888b`
      : item.id === "yarn5"
        ? `\u7d04\u53ef\u505a ${Math.floor(yarn5Count / 2)} \u500b\u98f2\u6599\u63d0\u888b`
        : `\u5269\u9918\u9810\u7b97 ${currency(model.futureValue - count * item.unit)}`;
    return `
      <article class="bom-card">
        <h3>${item.title}</h3>
        <strong>${count.toLocaleString("zh-TW")} ${zh.groupUnit}</strong>
        <p>${item.note}\uff0c${extra}\u3002</p>
        <ul>${item.parts.map((part) => `<li>${part}</li>`).join("")}</ul>
      </article>
    `;
  }).join("");
}

function updateLabels(model) {
  labels.cut.textContent = `${readNumber(inputs.cutRatio)}%`;
  labels.annualReturn.textContent = `${readNumber(inputs.annualReturn)}%`;
  labels.years.textContent = `${model.years} ${zh.yearUnit}`;
}

function calculate() {
  const model = getModel();
  outputs.heroSavings.textContent = currency(model.monthlySaved);
  outputs.hiddenMonthly.textContent = currency(model.hidden);
  outputs.monthlySaved.textContent = currency(model.monthlySaved);
  outputs.futureValue.textContent = currency(model.futureValue);
  updateLabels(model);
  renderAllocationChart(model);
  renderProjectionChart(model);
  renderBom(model);
}

function bindElements() {
  Object.assign(inputs, {
    salary: document.querySelector("#salary"),
    essentialExpense: document.querySelector("#essentialExpense"),
    essentialPercent: document.querySelector("#essentialPercent"),
    dailyDrinkCost: document.querySelector("#dailyDrinkCost"),
    drinkFrequency: document.querySelector("#drinkFrequency"),
    subscriptionCost: document.querySelector("#subscriptionCost"),
    otherHiddenCost: document.querySelector("#otherHiddenCost"),
    csvUpload: document.querySelector("#csvUpload"),
    cutRatio: document.querySelector("#cutRatio"),
    annualReturn: document.querySelector("#annualReturn"),
    years: document.querySelector("#years")
  });
  Object.assign(labels, {
    cut: document.querySelector("#cutLabel"),
    annualReturn: document.querySelector("#returnLabel"),
    years: document.querySelector("#yearsLabel"),
    csvSummary: document.querySelector("#csvSummary")
  });
  Object.assign(outputs, {
    heroSavings: document.querySelector("#heroSavings"),
    hiddenMonthly: document.querySelector("#hiddenMonthly"),
    monthlySaved: document.querySelector("#monthlySaved"),
    futureValue: document.querySelector("#futureValue"),
    bomGrid: document.querySelector("#bomGrid"),
    allocationChart: document.querySelector("#allocationChart"),
    projectionChart: document.querySelector("#projectionChart")
  });
}

function localize() {
  document.querySelector("#page-title").textContent = "\u65e5\u5e38\u7fd2\u6163\u300c\u96b1\u5f62\u958b\u92b7\u300d\u8207\u5fae\u578b\u7406\u8ca1\u5100\u8868\u677f";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = zh[node.dataset.i18n] || "";
  });
}

function bindEvents() {
  inputs.essentialExpense.addEventListener("input", () => {
    const salary = readNumber(inputs.salary);
    if (salary > 0) inputs.essentialPercent.value = Math.round((readNumber(inputs.essentialExpense) / salary) * 100);
    state.csvMonthlyEssential = null;
    calculate();
  });

  inputs.essentialPercent.addEventListener("input", () => {
    inputs.essentialExpense.value = Math.round(readNumber(inputs.salary) * (readNumber(inputs.essentialPercent) / 100));
    state.csvMonthlyEssential = null;
    calculate();
  });

  inputs.csvUpload.addEventListener("change", async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const parsed = parseExpenseCsv(await file.text());
    if (!parsed) {
      labels.csvSummary.textContent = zh.parseFail;
      return;
    }
    state.csvMonthlyEssential = parsed.essentialTotal;
    state.csvMonthlyHidden = parsed.hiddenTotal;
    inputs.essentialExpense.value = Math.round(parsed.essentialTotal);
    inputs.otherHiddenCost.value = Math.round(parsed.hiddenTotal);
    labels.csvSummary.textContent = `${zh.loaded} ${parsed.count} ${zh.rows}\u3001\u6a6b\u8de8 ${parsed.monthCount} ${zh.months}: ${zh.essentialAverage} ${currency(parsed.essentialTotal)}\u3001${zh.hiddenAverage} ${currency(parsed.hiddenTotal)}\u3001${zh.otherAverage} ${currency(parsed.otherTotal)}\u3002`;
    calculate();
  });

  Object.entries(inputs).forEach(([key, input]) => {
    if (["csvUpload", "essentialExpense", "essentialPercent"].includes(key)) return;
    input.addEventListener("input", calculate);
    input.addEventListener("change", calculate);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  bindElements();
  localize();
  bindEvents();
  calculate();
});
