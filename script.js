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
var map = {
  
};
setInterval(update, 10);
setInterval(updateSec, 1000);
function placeComp(id) {
  if (selectCell == "hydrogen.png" && currentCash >= 10) {
    currentCash -= 10;
    powerSec += 1;
    heatSec += 2;
    get(id).innerHTML = `<img src="${selectCell}" />`;
  } else if (selectCell == "dual_hydrogen.png" && currentCash >= 20) {
    currentCash -= 20;
    get(id).innerHTML = `<img src="${selectCell}" />`;
  } else if (selectCell == "quad_hydrogen.png" && currentCash >= 30) {
    currentCash -= 30;
    get(id).innerHTML = `<img src="${selectCell}" />`;
  }
  cellLive = true;
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
  get("power").style.width = pctPower + "%";
  get("power").innerHTML = currentPower + "/" + maxPower;
  get("heat").style.width = pctHeat + "%";
  get("heat").innerHTML = currentHeat + "/" + maxHeat;
  get("money").innerHTML = currentCash + "$"; 
}
function updateSec() {
  currentPower += powerSec;
  currentPower -= powerSell;
  currentCash += powerSell;
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
function aaa() {
  let a = "";
  let b = "";
  for (i = 1; i <= 256; i++) {
    b = `  ${i}: {
    comp: "",
    heat: 0,
    ticksLeft: -1
  },
`;
    a = a.concat(b);
  }
  console.log(a);
}