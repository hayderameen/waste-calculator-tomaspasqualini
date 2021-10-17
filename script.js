// Fixed Value Variables
let avgCostKgFixedAverageArr = [10, 6, 1.2, 5, 3, 12, 4];
// Column b in spreadsheet
let userInputPercentages = [0.08, 0.05, 0.14, 0.1, 0.06, 0.01, 0.1];
let fixedKgAvg = [11, 11, 1.8, 23, 1.22, 8, 4];
// WASTE REDUCTION FIXED VALUES
let wasteReductionValArr = [0.5, 0.5, 0.24, 0.5, 0.09, 0.5, 0.5];
let wastePercentages = [0.1, 0.01, 0.14, 0.06, 0.15, 0.12, 0.05];

//   HTML elements
// Get Total Revenue
let totalRevenue = document.querySelector("#totalRevenue");
// Get numbers from sliders
// total revenue output
let totalAnnualRevenue = document.querySelector("#revenueOutput");
// packed meals and deli number
let packedMealsRevenue = document.getElementById("packedMealsOutput");
let packedMealWaste = document.querySelector("#packedMealsOutputWaste");
// frozen foods
let frozenFoodRevenue = document.querySelector("#frozenFoodOutput");
let frozenFoodWaste = document.querySelector("#frozenFoodOutputWaste");
// fruits & vegetables
let fruitsAndVegetableRevenue = document.querySelector(
  "#fruitAndVegetablesOutput"
);
let fruitsAndVegetableWaste = document.querySelector(
  "#fruitAndVegetablesWasteOutput"
);
// Meat & Poultry
let meatAndPoultryRevenue = document.querySelector("#meatAndPoultryOutput");
let meatAndPoultryWaste = document.querySelector("#meatAndPoultryWasteOutput");
let submitWarning = document.querySelector(".submitWarning");
// Bakery
let bakeryRevenue = document.querySelector("#bakeryOutput");
let bakeryWaste = document.querySelector("#bakeryWasteOutput");
// Seafood
let seafoodRevenue = document.querySelector("#seafoodOutput");
let seafoodWaste = document.querySelector("#seafoodWasteOutput");
// Dairy
let dairyRevenue = document.querySelector("#dairyOutput");
let dairyWaste = document.querySelector("#dairyWasteOutput");
// Dry foods
let dryFoodStore = document.querySelector("#dryFoodsOutput");
let dryFoodInputSlider = document.querySelector("#dryFoods");
// simulation button
let simulateBtn = document.querySelector("#simulateBtn");
// Revenue Error Message
let revenueError = document.querySelector(".revenueError");
// Get revenue number
var btn = document.querySelector(".submit");

//   RESULTS ELEMENTS
let totalEconomicValue = document.querySelector(".economicValue");
let totalRevenueUpsale = document.querySelector(".totalUpsale");
let co2eReduced = document.querySelector(".co2reduced");
let wasteReductionValue = document.querySelector(".wasteReductionValue");

// VALUE HOLDERS
let totalRevenueSliderArr = [8, 6, 5, 1, 14, 10, 10];
let totalWasteUserInputData = [10, 1, 14, 6, 15, 12, 5];
let calculatedCategoryRevenueArr = [];
let calculatedCategoryWasteArr = [];
let calculatedRevenueUpsale = [];
let resultsObj = {};
let resultsArr = [];
let monthlyRevenue;
let monthlyWaste;
let c02reducedTotal;
let totalEconomicValueInt;
let totalRevenueUpsaleInt;
let totalWasteReductionValueInt;
let oneYearChart;
let TenYearChart;

// Util
function OneYearGraph() {
  document.getElementById("myChart").style.display = "block";
  document.getElementById("myChartTenYear").style.display = "none";
  totalEconomicValue.innerHTML = parseInt(
    totalEconomicValueInt.toFixed(0)
  ).toLocaleString();
  co2eReduced.innerHTML = parseInt(c02reducedTotal.toFixed(0)).toLocaleString();
  totalRevenueUpsale.innerHTML = parseInt(
    totalRevenueUpsaleInt.toFixed(0)
  ).toLocaleString();
  wasteReductionValue.innerHTML = parseInt(
    totalWasteReductionValueInt.toFixed(0)
  ).toLocaleString();

  document.querySelector(".months").classList.add("active_period_btn");
  document.querySelector(".years").classList.remove("active_period_btn");
}
function TenYearGraph() {
  document.getElementById("myChart").style.display = "none";
  document.getElementById("myChartTenYear").style.display = "block";
  totalEconomicValue.innerHTML = parseInt(
    (totalEconomicValueInt * 10).toFixed(0)
  ).toLocaleString();
  co2eReduced.innerHTML = parseInt(
    (c02reducedTotal * 10).toFixed(0)
  ).toLocaleString();
  totalRevenueUpsale.innerHTML = parseInt(
    (totalRevenueUpsaleInt * 10).toFixed(0)
  ).toLocaleString();
  wasteReductionValue.innerHTML = parseInt(
    (totalWasteReductionValueInt * 10).toFixed(0)
  ).toLocaleString();

  document.querySelector(".months").classList.remove("active_period_btn");
  document.querySelector(".years").classList.add("active_period_btn");
}
function goToSimulation() {
  const results_container = document.querySelector(".results-container");
  results_container.style.display = "block";

  setTimeout(() => {
    window.scrollTo({
      top: results_container.getBoundingClientRect().top + window.scrollY - 20,
      left: 0,
      behavior: "smooth",
    });
  }, 10);
}

// LISTENING FUNCTIONS
function totalRevenueSliderListenerFunc(e) {
  totalRevenueSliderArr[0] = parseInt(
    document.getElementById("packedMealsOutput").innerHTML
  );
  totalRevenueSliderArr[4] = parseInt(
    document.getElementById("bakeryOutput").innerHTML
  );
  totalRevenueSliderArr[1] = parseInt(
    document.getElementById("frozenFoodOutput").innerHTML
  );
  totalRevenueSliderArr[5] = parseInt(
    document.getElementById("seafoodOutput").innerHTML
  );
  totalRevenueSliderArr[2] = parseInt(
    document.getElementById("fruitAndVegetablesOutput").innerHTML
  );
  totalRevenueSliderArr[6] = parseInt(
    document.getElementById("dairyOutput").innerHTML
  );
  totalRevenueSliderArr[3] = parseInt(
    document.getElementById("meatAndPoultryOutput").innerHTML
  );

  // Getting the Sum of the Array
  greyOutSimulation(totalRevenueSliderArr);
  return totalRevenueSliderArr;
}
function totalWasteUserInput(e) {
  totalWasteUserInputData[0] = parseInt(
    document.getElementById("packedMealsOutputWaste").innerHTML
  );
  totalWasteUserInputData[4] = parseInt(
    document.getElementById("bakeryWasteOutput").innerHTML
  );
  totalWasteUserInputData[1] = parseInt(
    document.getElementById("frozenFoodOutputWaste").innerHTML
  );
  totalWasteUserInputData[5] = parseInt(
    document.getElementById("seafoodWasteOutput").innerHTML
  );
  totalWasteUserInputData[2] = parseInt(
    document.getElementById("fruitAndVegetablesWasteOutput").innerHTML
  );
  totalWasteUserInputData[6] = parseInt(
    document.getElementById("dairyWasteOutput").innerHTML
  );
  totalWasteUserInputData[3] = parseInt(
    document.getElementById("meatAndPoultryWasteOutput").innerHTML
  );

  return totalWasteUserInputData;
}

function calc() {
  //   Empty Arr before recalculating
  calculatedCategoryRevenueArr = [];
  let totalRevenueNum = parseInt(totalRevenue.value);

  for (let i = 0; i < totalRevenueSliderArr.length; i++) {
    calculatedCategoryRevenueArr.push(
      totalRevenueNum * (totalRevenueSliderArr[i] / 100)
    );
  }

  calculateRevenueUpsale(calculatedCategoryRevenueArr);
  calculateWasteSavings(calculatedCategoryRevenueArr, totalWasteUserInputData);
  makeChart();
  OneYearGraph();
  goToSimulation();
  return calculatedCategoryRevenueArr;
}

// Checking that % of Total Revenue is less than 100
// If TR is > 100 Grey out sliders and disable Simulation button
function greyOutSimulation(arr) {
  let reducer = (x, y) => x + y;
  let reducedArr = arr.reduce(reducer);

  if (reducedArr > 100) {
    document.querySelector(".simulatebtn").style.display = "none";
    revenueError.style.display = "flex";
    var TextElements = document.querySelectorAll(".sliderRev");

    for (var i = 0, max = TextElements.length; i < max; i++) {
      TextElements[i].style.color = "red";
    }
  } else {
    document.querySelector(".simulatebtn").style.display = "flex";
    revenueError.style.display = "none";
    var TextEl = document.querySelectorAll(".sliderRev");
    for (var i = 0, max = TextEl.length; i < max; i++) {
      TextEl[i].style.color = "grey";
    }
  }
}

function calculateRevenueUpsale(arr) {
  calculatedRevenueUpsale = [];

  for (let i = 0; i < arr.length; i++) {
    calculatedRevenueUpsale.push(arr[i] * 0.18);
  }

  let reducer = (x, y) => x + y;
  let reducedArr = calculatedRevenueUpsale.reduce(reducer);
  resultsArr[0] = reducedArr;
  totalRevenueUpsaleInt = reducedArr;
  totalRevenueUpsale.innerHTML = reducedArr.toLocaleString();
  resultsObj.revenueUpsale = reducedArr.toLocaleString();
  return reducedArr;
}

// calculatedCategoryRevenueArr, totalWasteUserInputData
function calculateWasteSavings(array1, array2) {
  for (let j = 0; j < array2.length; j++) {
    array2[j] = array2[j] / 100;
  }

  const result = [];
  const result2 = [];
  let ctr = 0;
  let ctr2 = 0;
  let x = 0;
  let x2 = 0;

  if (array1.length === 0) return "array1 is empty";
  if (array2.length === 0) return "array2 is empty";

  while (ctr < array1.length && ctr < array2.length) {
    result2.push(array1[ctr] * array2[ctr]);
    ctr++;
  }

  if (ctr === array1.length) {
    for (x = ctr; x < array2.length; x++) {
      result2.push(array2[x]);
    }
  } else {
    for (x = ctr; x < array1.length; x++) {
      result2.push(array1[x]);
    }
  }

  if (result2.length === 0) return "array1 is empty";
  if (wasteReductionValArr.length === 0) return "array2 is empty";

  while (ctr2 < result2.length && ctr2 < wasteReductionValArr.length) {
    result.push(result2[ctr2] * wasteReductionValArr[ctr2]);
    ctr2++;
  }

  if (ctr2 === result2.length) {
    for (x2 = ctr2; x2 < wasteReductionValArr.length; x2++) {
      result.push(wasteReductionValArr[x2]);
    }
  } else {
    for (x2 = ctr2; x2 < result2.length; x2++) {
      result.push(result2[x2]);
    }
  }

  getTotalCO2(result);

  let reducer2 = (x, y) => x + y;
  let reducedArr2 = result.reduce(reducer2);
  totalWasteReductionValueInt = reducedArr2;
  wasteReductionValue.innerHTML = reducedArr2.toLocaleString();
  resultsObj.wasteReductionValue = reducedArr2.toLocaleString();

  resultsArr[1] = reducedArr2;
  let reducer3 = (a, b) => a + b;
  let reducedArr3 = resultsArr.reduce(reducer3);
  totalEconomicValueInt = reducedArr3;
  totalEconomicValue.innerHTML = reducedArr3.toLocaleString();
  getMonthlyValuesForRevenueAndWaste(resultsArr);
  return resultsArr;
}

function getTotalCO2(co2s) {
  let AvgCostPerKG = [10, 6, 1.2, 5, 3, 12, 4];
  let fixedestAvgkgco2 = [11, 11, 1.8, 23, 1.22, 8, 4];

  let accumulatedCo2kg = 0;

  for (let i = 0; i < AvgCostPerKG.length; i++) {
    accumulatedCo2kg += (co2s[i] / AvgCostPerKG[i]) * fixedestAvgkgco2[i];
  }
  c02reducedTotal = accumulatedCo2kg;
  co2eReduced.innerHTML = accumulatedCo2kg.toLocaleString();
}

function getMonthlyValuesForRevenueAndWaste(arr) {
  monthlyRevenue = Math.round(arr[0] / 12);
  monthlyWaste = Math.round(arr[1] / 12);

  resultsArr.push(monthlyRevenue, monthlyWaste);
  getMonthlyNumbers(monthlyRevenue);
  getMonthlyNumbersWaste(monthlyWaste);
  return resultsArr;
}

function getMonthlyNumbers(x) {
  monthlyRevenueArr = [];
  for (let i = 0; i < 13; i++) {
    if (i < 13) {
      monthlyRevenueArr.push(x * i);
    } else {
      return;
    }
  }
  return monthlyRevenueArr;
}

function getMonthlyNumbersWaste(x) {
  monthlyRevenueArrWaste = [];
  for (let i = 0; i < 13; i++) {
    if (i < 13) {
      monthlyRevenueArrWaste.push(x * i);
    } else {
      return;
    }
  }
  return monthlyRevenueArrWaste;
}

// CHART CODE // // // // // // // // // // // // // // //
// Chart scripts
let labels = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let ctx = document.getElementById("myChart").getContext("2d");
let ctx10 = document.getElementById("myChartTenYear").getContext("2d");

function makeChart() {
  // Destroy previous charts
  if (oneYearChart) oneYearChart.destroy();
  if (TenYearChart) TenYearChart.destroy();
  // Build new charts
  oneYearChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Revenue Upsale",
          data: [
            monthlyRevenueArr[1],
            monthlyRevenueArr[2],
            monthlyRevenueArr[3],
            monthlyRevenueArr[4],
            monthlyRevenueArr[5],
            monthlyRevenueArr[6],
            monthlyRevenueArr[7],
            monthlyRevenueArr[8],
            monthlyRevenueArr[9],
            monthlyRevenueArr[10],
            monthlyRevenueArr[11],
            monthlyRevenueArr[12],
          ],
          borderColor: ["#492FC4"],
          fill: true,
          backgroundColor: ["rgba(105,87,207,0.2)"],
          borderWidth: 1,
        },
        {
          label: "Waste Reduction",
          data: [
            monthlyRevenueArrWaste[1],
            monthlyRevenueArrWaste[2],
            monthlyRevenueArrWaste[3],
            monthlyRevenueArrWaste[4],
            monthlyRevenueArrWaste[5],
            monthlyRevenueArrWaste[6],
            monthlyRevenueArrWaste[7],
            monthlyRevenueArrWaste[8],
            monthlyRevenueArrWaste[9],
            monthlyRevenueArrWaste[10],
            monthlyRevenueArrWaste[11],
            monthlyRevenueArrWaste[12],
          ],
          borderColor: ["#47D71D"],
          fill: true,
          backgroundColor: ["rgba(80,190,67,0.4)"],
          // backgroundColor: ["#50BE43"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
  TenYearChart = new Chart(ctx10, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Revenue Upsale",
          data: [
            monthlyRevenueArr[1] * 12,
            monthlyRevenueArr[2] * 12,
            monthlyRevenueArr[3] * 12,
            monthlyRevenueArr[4] * 12,
            monthlyRevenueArr[5] * 12,
            monthlyRevenueArr[6] * 12,
            monthlyRevenueArr[7] * 12,
            monthlyRevenueArr[8] * 12,
            monthlyRevenueArr[9] * 12,
            monthlyRevenueArr[10] * 12,
            monthlyRevenueArr[11] * 12,
            monthlyRevenueArr[12] * 12,
          ],
          borderColor: ["#492FC4"],
          fill: true,
          backgroundColor: ["rgba(105,87,207,0.2)"],
          borderWidth: 1,
        },
        {
          label: "Waste Reduction",
          data: [
            monthlyRevenueArrWaste[1] * 12,
            monthlyRevenueArrWaste[2] * 12,
            monthlyRevenueArrWaste[3] * 12,
            monthlyRevenueArrWaste[4] * 12,
            monthlyRevenueArrWaste[5] * 12,
            monthlyRevenueArrWaste[6] * 12,
            monthlyRevenueArrWaste[7] * 12,
            monthlyRevenueArrWaste[8] * 12,
            monthlyRevenueArrWaste[9] * 12,
            monthlyRevenueArrWaste[10] * 12,
            monthlyRevenueArrWaste[11] * 12,
            monthlyRevenueArrWaste[12] * 12,
          ],
          borderColor: ["#47D71D"],
          fill: true,
          backgroundColor: ["rgba(80,190,67,0.4)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

// GETS DATA ON PAGE LOAD
//   window.addEventListener("load", (event) => {
totalRevenueSliderListenerFunc();
totalWasteUserInput();
//   });
