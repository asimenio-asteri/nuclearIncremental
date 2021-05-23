var currentHeat = 0;
var currentCash = 0;
var currentRad = 0;
var currentPower = 0;
var maxHeat = 1000;
var maxPower = 1000;
var maxRad = 100;
var powerSec = 0;
var powerSell = 1;
var heatSec = -1;
var radSec = 0;
var mapCells = 256;
var cellLive = false;
var pctPower;
var pctHeat;
var pctRad;
var selectCell = "";
var map = {};
var typesImg = ["hydrogen.png", "dualhydrogen.png", "quadhydrogen.png"];
function init() {
  for (x = 1; x <= 256; x++) {
    map[`_${x}`] = {
      comp: "",
      compType: "",
      power: 0,
      heat: 0,
      ticksLeft: -1,
      sellVal: 0
    };
  }
}
init();
setInterval(update, 10);
setInterval(updateMap, 1000);
setInterval(updateSec, 1000);
function select(id) {
  try {
    selectCell = id;
    get(selectCell).src =`select/green${id}`;
    for (x = 0; x <= typesImg.length; x++) {
      if (id != typesImg[x]) {
        get(typesImg[x]).src = `img/big${typesImg[x]}`;
      }
    }
  } catch (error) {
    console.error("selected cell has no green version");
  }
}
function placeComp(id) {
  let mapKey = `_${id}`;
  let occ = (get(id).innerHTML ? true : false);
  if (!occ) {
    if (selectCell == "hydrogen.png" && currentCash >= 10) {
      currentCash -= 10;
      powerSec++;
      heatSec += 2;
      map[mapKey].comp = "sH";
      map[mapKey].compType = "cell";
      map[mapKey].power = 1;
      map[mapKey].heat = 2;
      map[mapKey].ticksLeft = 15;
      get(id).innerHTML = `<img src="${selectCell}" />`;
    } else if (selectCell == "dual_hydrogen.png" && currentCash >= 20) {
      currentCash -= 20;
      powerSec += 2;
      heatSec += 4;
      map[mapKey].comp = "dH";
      map[mapKey].comp = "cell";
      map[mapKey].power = 2;
      map[mapKey].heat = 4;
      map[mapKey].ticksLeft = 25;
      get(id).innerHTML = `<img src="${selectCell}" />`;
    } else if (selectCell == "quad_hydrogen.png" && currentCash >= 30) {
      currentCash -= 30;
      powerSec += 8;
      heatSec += 16;
      map[mapKey].comp = "qH";
      map[mapKey].comp = "cell";
      map[mapKey].power = 8;
      map[mapKey].heat = 16;
      map[mapKey].ticksLeft = 100;
      get(id).innerHTML = `<img src="${selectCell}" />`;
    } else if (selectCell == "fan.png" && currentCash >= 50) {
      currentCash -= 50;
      map[mapKey].comp = "bF";
      map[mapKey].comp = "cool";
      map[mapKey].ticksLeft = -1;
      get(id).innerHTML = `<img src="${selectCell}" />`;
    } else if (selectCell == "outlet.png" && currentCash >= 75) {
      currentCash -= 75;
      map[mapKey].comp = "bO";
      map[mapKey].comp = "outlet";
      map[mapKey].ticksLeft = -1;
      get(id).innerHTML = `<img src="${selectCell}" />`;
    }
  cellLive = true;
  }
}
function sellComp(id) {
  let mapKey = `_${id}`;
  if (map[mapKey].comp != "") {
    currentCash += map[mapKey].sellVal;
    map[mapKey].comp = "";
    powerSec -= map[mapKey].power;
    map[mapKey].power = 0;
    heatSec -= map[mapKey].heat;
    map[mapKey].heat = 0;
    map[mapKey].ticksLeft = -1;
    map[mapKey].sellVal = 0;
    get(id).innerHTML = "";
  }
}
function powerButton() {
  if (currentCash < 10 && !cellLive) {
    currentCash++;
    if (currentCash >= 10) {
      get("powerBtn").innerHTML = "Sell all power";
    } else {
      get("powerBtn").innerHTML = "Pick up some coins";
    }
  } else {
    currentCash += currentPower;
    currentPower = 0;
  }
}
function heatButton() {
  if (currentHeat > 0) {
    currentHeat--;
    if (currentHeat < 0) {
      currentHeat = 0;
    }
  }
}
function update() {
  pctPower = (currentPower/maxPower) * 100;
  pctHeat = (currentHeat/maxHeat) * 100;
  pctRad = (currentRad/maxRad) * 100;
  if (pctPower <= 100) {
    get("power").style.width = pctPower + "%";
  } else {
    get("power").style.width = "100%";
  }
  get("power").innerHTML = currentPower + "/" + maxPower;
  if (pctHeat <= 100) {
    get("heat").style.width = pctHeat + "%";
  } else {
    get("heat").style.width = "100%";
  }
  get("heat").innerHTML = currentHeat + "/" + maxHeat;
  get("money").innerHTML = currentCash + "$";
}
function updateSec() {
  if (currentPower + powerSec - powerSell >= 0) {
    currentPower -= powerSell;
    currentCash += powerSell;
  }
  currentPower += powerSec;
  currentHeat += heatSec;
  currentRad += radSec;
  if (currentPower < 0) {
    currentPower = 0;
  }
  if (currentHeat < 0) {
    currentHeat = 0;
  }
  if (currentRad < 0) {
    currentRad = 0;
  }
}
function updateMap() {
  let cellsAlive = false;
  for (var cell in map) {
    let cellId = cell.replace(/_/g, "");
    let keyed = map[cell];
    if (keyed.ticksLeft > -1 && keyed.compType == "cell") {
      keyed.ticksLeft -= 1;
      cellsAlive = true;
    }
    if (keyed.ticksLeft == -1 && keyed.compType == "cell") {
      keyed.comp = "";
      powerSec -= keyed.power;
      keyed.power = 0;
      heatSec -= keyed.heat;
      keyed.heat = 0;
      keyed.ticksLeft = -1;
      keyed.sellVal = 0;
      get(cellId).innerHTML = "";
    }
  }
  if (cellsAlive) {
    cellLive = true;
  }
}
function openTab(pageName) {
  var i, tabcontent;
  tabcontent = document.getElementsByClassName("tabShop");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(pageName).style.display = "block";
}
function get(id) {
  return document.getElementById(id);
}