document.getElementById(
  "wasteless-div"
).innerHTML += `<div id="simulation_main_wrapper">
<!-- wasteless simulations -->
<div id="simulation-wrapper" class="simulation-wrapper">
  <div class="header-section">
    <p style="font-weight: bold">
      What is your Total Annual Revenue (Gross)?
    </p>
    <span class="dollar_sign">$</span>
    <p class="submitWarning">Please enter only numbers</p>
    <!-- change to a number input -->
    

    <input
      type="text"
      id="totalRevenue"
      name="totalRevenue"
      maxlength="20"
      value="50,000,000,000"
      onClick="this.setSelectionRange(0, this.value.length)" 
    />
    <!-- <input type="submit" id="submit" /> -->

    <p style="font-weight: bold">
      What is the size and waste for each category?
    </p>
  </div>

  <div class="main-calculator-section">
    <div class="meatAndPoultry grid">
      <img
        class="icon milk"
        src="https://hayderameen.github.io/waste-calculator-tomaspasqualini/Assets/meat.png"
        alt=""
      />

      <p>Meat</p>

      <p class="slider sliderRev subinformation">% of total revenue</p>
      <input
        type="range"
        min="0"
        max="30"
        value="10"
        step="0.5"
        class="slider sliderRev meatAndPoultry"
        id="meatAndPoultry"
        name="meatAndPoultry"
        oninput="meatAndPoultryOutput.value=meatAndPoultry.value"
        onchange="totalRevenueSliderListenerFunc(this.value)"
      />
      <output
        id="meatAndPoultryOutput"
        name="meatAndPoultryOutput"
        for="meatAndPoultryOutput.value"
        class="meatAndPoultryOutput"
        >6</output
      ><span>%</span>

      <p class="slider subinformation">Waste %</p>

      <form action="">
        <input
          type="range"
          min="0"
          max="100"
          value="6"
          step="0.5"
          class="slider meatAndPoultryWaste"
          id="meatAndPoultryWaste"
          name="meatAndPoultryWaste"
          oninput="meatAndPoultryWasteOutput.value=meatAndPoultryWaste.value"
          onchange="totalWasteUserInput(this.value)"
        />
        <output
          id="meatAndPoultryWasteOutput"
          name="meatAndPoultryWasteOutput"
          for="meatAndPoultryWasteOutput.value"
          class="meatAndPoultryWasteOutput"
          >6</output
        ><span>%</span>
      </form>
    </div>

    <div class="packedMeals grid">
      <img
        class="icon"
        src="https://hayderameen.github.io/waste-calculator-tomaspasqualini/Assets/bread.png"
        alt=""
      />

      <p>Packed meals & Deli</p>
      <p class="slider sliderRev subinformation">% of total revenue</p>
      <input
        type="range"
        min="0"
        max="30"
        value="8"
        step="0.5"
        class="slider sliderRev packedMeals"
        id="packedMeals"
        name="packedMeals"
        oninput="packedMealsOutput.value=parseInt(packedMeals.value)"
        onchange="totalRevenueSliderListenerFunc(this.value)"
      />
      <output
        id="packedMealsOutput"
        name="packedMealsOutput"
        for="packedMealsOutput.value"
        class="packedMealsOutput"
        >8</output
      ><span>%</span>

      <p class="slider subinformation">Waste %</p>
      <form action="">
        <input
          type="range"
          min="0"
          max="100"
          value="10"
          step="0.5"
          class="slider packedMeals"
          id="packedMealsWaste"
          name="packedMealsWaste"
          oninput="packedMealsOutputWaste.value=(parseInt(packedMealsWaste.value))"
          onchange="totalWasteUserInput(this.value)"
        />
        <output
          id="packedMealsOutputWaste"
          name="packedMealsOutputWaste"
          for="packedMealsOutputWaste.value"
          class="packedMeals"
          >10</output
        ><span>%</span>
      </form>
    </div>

    <div class="Poultry grid">
      <img
        class="icon milk"
        src="https://hayderameen.github.io/waste-calculator-tomaspasqualini/Assets/poultry.png"
        alt="poultry icon wasteless"
      />

      <p>Poultry</p>

      <p class="slider sliderRev subinformation">% of total revenue</p>
      <input
        type="range"
        min="0"
        max="30"
        value="10"
        step="0.5"
        class="slider sliderRev Poultry"
        id="Poultry"
        name="Poultry"
        oninput="PoultryOutput.value=Poultry.value"
        onchange="totalRevenueSliderListenerFunc(this.value)"
      />
      <output
        id="PoultryOutput"
        name="PoultryOutput"
        for="PoultryOutput.value"
        class="PoultryOutput"
        >4</output
      ><span>%</span>

      <p class="slider subinformation">Waste %</p>

      <form action="">
        <input
          type="range"
          min="0"
          max="100"
          value="6"
          step="0.5"
          class="slider PoultryWaste"
          id="PoultryWaste"
          name="PoultryWaste"
          oninput="PoultryWasteOutput.value=PoultryWaste.value"
          onchange="totalWasteUserInput(this.value)"
        />
        <output
          id="PoultryWasteOutput"
          name="PoultryWasteOutput"
          for="PoultryWasteOutput.value"
          class="PoultryWasteOutput"
          >4</output
        ><span>%</span>
      </form>
    </div>

    <div class="fruitsAndVegetables grid">
      <!-- <img class="icon milk" src="/Assets/fruitAndVegetables.png" alt="" /> -->
      <img
        class="icon milk"
        src="https://hayderameen.github.io/waste-calculator-tomaspasqualini/Assets/fruitAndVegetables.png"
        alt=""
      />
      <p>Fruits & Vegetables</p>

      <p class="slider sliderRev subinformation">% of total revenue</p>
      <input
        type="range"
        min="0"
        max="30"
        value="14"
        step="0.5"
        class="slider sliderRev fruitAndVegetables"
        id="fruitAndVegetables"
        name="fruitAndVegetables"
        oninput="fruitAndVegetablesOutput.value=fruitAndVegetables.value"
        onchange="totalRevenueSliderListenerFunc(this.value)"
      />
      <output
        id="fruitAndVegetablesOutput"
        name="fruitAndVegetablesOutput"
        for="fruitAndVegetablesOutput.value"
        class="fruitAndVegetablesOutput"
        >14</output
      ><span>%</span>

      <p class="slider subinformation">Waste %</p>
      <form action="">
        <input
          type="range"
          min="0"
          max="100"
          value="14"
          step="0.5"
          class="slider fruitAndVegetablesWaste"
          id="fruitAndVegetablesWaste"
          name="fruitAndVegetablesWaste"
          oninput="fruitAndVegetablesWasteOutput.value=fruitAndVegetablesWaste.value"
          onchange="totalWasteUserInput(this.value)"
        />
        <output
          id="fruitAndVegetablesWasteOutput"
          name="fruitAndVegetablesWasteOutput"
          for="fruitAndVegetablesWasteOutput.value"
          class="fruitAndVegetablesWasteOutput"
          >14</output
        ><span>%</span>
      </form>
    </div>

    <div class="seafood grid">
      <!-- <img class="icon milk" src="/Assets/fish.png" alt="" /> -->
      <img
        class="icon milk"
        src="https://hayderameen.github.io/waste-calculator-tomaspasqualini/Assets/fish.png"
        alt=""
      />

      <p>Seafood</p>
      <!-- seafoodOutput seafoodWasteOutput -->
      <p class="slider sliderRev subinformation">% of total revenue</p>
      <input
        type="range"
        min="0"
        max="30"
        value="1"
        step="0.5"
        class="slider sliderRev seafood"
        id="seafood"
        name="seafood"
        oninput="seafoodOutput.value=seafood.value"
        onchange="totalRevenueSliderListenerFunc(this.value)"
      />
      <output
        id="seafoodOutput"
        name="seafoodOutput"
        for="seafoodOutput.value"
        class="seafoodOutput"
        >1</output
      ><span>%</span>

      <p class="slider subinformation">Waste %</p>
      <form action="">
        <input
          type="range"
          min="0"
          max="100"
          value="12"
          step="0.5"
          class="slider seafoodWaste"
          id="seafoodWaste"
          name="seafoodWaste"
          oninput="seafoodWasteOutput.value=seafoodWaste.value"
          onchange="totalWasteUserInput(this.value)"
        />
        <output
          id="seafoodWasteOutput"
          name="seafoodWasteOutput"
          for="seafoodWasteOutput"
          class="seafoodWasteOutput"
          >12</output
        ><span>%</span>
      </form>
    </div>

    <div class="dairy grid">
      <!-- <img class="icon milk" src="/Assets/milk.png" alt="" /> -->
      <img
        class="icon milk"
        src="https://hayderameen.github.io/waste-calculator-tomaspasqualini/Assets/milk.png"
        alt=""
      />

      <p>Dairy</p>

      <p class="slider sliderRev subinformation">% of total revenue</p>
      <input
        type="range"
        min="0"
        max="30"
        value="10"
        step="0.5"
        class="slider sliderRev dairy"
        id="dairy"
        name="dairy"
        oninput="dairyOutput.value=dairy.value"
        onchange="totalRevenueSliderListenerFunc(this.value)"
      />

      <output
        id="dairyOutput"
        name="dairyOutput"
        for="dairyOutput.value"
        class="dairyOutput"
        >10</output
      ><span>%</span>

      <p class="slider subinformation">Waste %</p>
      <form action="">
        <input
          type="range"
          min="0"
          max="100"
          value="5"
          step="0.5"
          class="slider dairyWaste"
          id="dairyWaste"
          name="dairyWaste"
          oninput="dairyWasteOutput.value=dairyWaste.value"
          onchange="totalWasteUserInput(this.value)"
        />
        <output
          id="dairyWasteOutput"
          name="dairyWasteOutput"
          for="dairyWasteOutput.value"
          class="dairyWasteOutput"
          >5</output
        ><span>%</span>
      </form>
    </div>

    <div class="bakery grid">
      <!-- <img class="icon milk" src="/Assets/milk.png" alt="" /> -->
      <img
        class="icon milk"
        src="https://hayderameen.github.io/waste-calculator-tomaspasqualini/Assets/bakery.png"
        alt="Bakery"
      />
      <p>Bakery</p>

      <p class="slider sliderRev subinformation">% of total revenue</p>
      <input
        type="range"
        min="0"
        max="30"
        value="6"
        step="0.5"
        class="slider sliderRev bakery"
        id="bakery"
        name="bakery"
        oninput="bakeryOutput.value=bakery.value"
        onchange="totalRevenueSliderListenerFunc(this.value)"
      />
      <output
        id="bakeryOutput"
        name="bakeryOutput"
        for="bakeryOutput.value"
        class="bakeryOutput"
        >6</output
      ><span>%</span>

      <p class="slider subinformation">Waste %</p>
      <form action="">
        <input
          type="range"
          min="0"
          max="100"
          value="15"
          step="0.5"
          class="slider bakeryWaste"
          id="bakeryWaste"
          name="bakeryWaste"
          oninput="bakeryWasteOutput.value=(parseInt(bakeryWaste.value))"
          onchange="totalWasteUserInput(this.value)"
        />
        <output
          id="bakeryWasteOutput"
          name="bakeryWasteOutput"
          for="bakeryWasteOutput.value"
          class="bakeryWasteOutput"
          >15</output
        ><span>%</span>
      </form>
    </div>

    <div class="frozenFoods grid">
      <img
        class="icon milk frozenfoods"
        src="https://hayderameen.github.io/waste-calculator-tomaspasqualini/Assets/frozenFood.png"
        alt=""
      />
      <p>Frozen Foods</p>
      <p class="slider sliderRev subinformation">% of total revenue</p>
      <input
        type="range"
        min="0"
        max="30"
        value="5"
        step="0.5"
        class="slider sliderRev frozenFood"
        id="frozenFood"
        name="frozenFood"
        oninput="frozenFoodOutput.value=frozenFood.value"
        onchange="totalRevenueSliderListenerFunc(this.value)"
      />

      <output
        id="frozenFoodOutput"
        name="frozenFoodOutput"
        for="frozenFoodOutput.value"
        class="frozenFoodOutput"
        >5</output
      ><span>%</span>

      <p class="slider subinformation">Waste %</p>
      <form action="">
        <input
          type="range"
          min="0"
          max="100"
          value="1"
          step="0.5"
          class="slider frozenFoodWaste"
          id="frozenFoodWaste"
          name="frozenFoodWaste"
          oninput="frozenFoodOutputWaste.value=frozenFoodWaste.value"
          onchange="totalWasteUserInput(this.value)"
        />
        <output
          id="frozenFoodOutputWaste"
          name="frozenFoodOutputWaste"
          for="frozenFoodOutputWaste.value"
          class="frozenFoodOutputWaste"
          >1</output
        ><span>%</span>
      </form>
    </div>

    <div class="dryFood grid">
      <img
        class="icon milk invisible"
        src="https://hayderameen.github.io/waste-calculator-tomaspasqualini/Assets/milk.png"
        alt=""
      />

      <p>Dry foods & all other products</p>
      <p class="slider sliderRev subinformation">% of store</p>
      <input
        type="range"
        min="0"
        max="100"
        value="0"
        step="0.5"
        class="slider sliderRev dryFoods"
        id="dryFoods"
        name="dryFoods"
        oninput="dryFoodsOutput.value=dryFoods.value"
      />

      <output
        id="dryFoodsOutput"
        name="dryFoodsOutput"
        for="dryFoodsOutput.value"
        class="dryFoodsOutput"
        >0</output
      ><span>%</span>

      <p class="revenueError">
        The sum of % of total revenue cannot exceed 100%. Please adjust!
      </p>
    </div>

  <div class="simulatebtn">
    <button onClick="calc()" class="simulateBtn submit" id="simulateBtn">
      CALCULATE
    </button>
  </div>
  </div>

</div>


<div class="results-container">
  <div class="resultsTitle">
    <h4>
      This is what you should expect after implementing STORE:
    </h4>
    <div class="resultsBtns">
      <p class="subinformation">Show results for:</p>
      <button
        onClick="OneYearGraph()"
        class="months period_btn active_period_btn"
      >
        12 Months
      </button>
      <button onClick="TenYearGraph()" class="years period_btn">
        10 Years
      </button>
    </div>
  </div>

  <div class="chart">
    <canvas id="myChart" style="min-height: 300px"></canvas>
    <canvas
      id="myChartTenYear"
      style="display: none; min-height: 300px"
    ></canvas>
  </div>
  <div class="metric_results_container">
    <div class="totalEconomicValueContainer metricResult">
      <h4 class="metricTitle">Total Economic Value</h4>
      <span class="metric">$</span>
      <span class="metric economicValue"></span>
    </div>
    <div class="totalEconomicValueContainer metricResult">
      <h4 class="metricTitle">CO2e Reduced</h4>
      <span class="metric co2reduced"></span
      ><span class="metric"> Kg</span>
    </div>
    <div class="totalEconomicValueContainer metricResult listItem upsale">
      <h4 class="metricTitle">Total Revenue Upsale</h4>
      <span class="metric" style="color: #492fc4">$</span>
      <span class="upsale totalUpsale metric"></span>
    </div>
    <div class="totalEconomicValueContainer metricResult listItem value">
      <h4 class="metricTitle">Waste Reduction Value</h4>
      <span class="metric" style="color: #47d71d">$</span>
      <span class="value wasteReductionValue metric"></span>
    </div>
  </div>
</div>
</div>`;
