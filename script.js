var currentHeat = 0;
var currentCash = 0;
var currentRad = 0;
var currentPower = 0;
var maxHeat = 1000;
var maxPower = 1000;
var maxRad = 100;
var powerSec = 0;
var heatSec = 0;
var radSec = 0;
var mapCells = 256;
var pctPower;
var pctHeat;
var pctRad;
var selectCell = "";
setInterval(update, 10);
setInterval(updateSec, 1000);
function placeComp(id) {
  get(id).innerHTML = `<img src="${selectCell}" />`;
}
function powerButton() {
  if (currentCash < 10) {
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
  currentHeat += heatSec;
  currentRad += radSec;
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