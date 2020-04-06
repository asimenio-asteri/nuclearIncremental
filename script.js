var currentHeat = 0;
var currentCash = 0;
var currentPower = 0;
var maxHeat = 1000;
var maxPower = 1000;
var pctPower;
var pctHeat;
setInterval(update, 10);
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
function update() {
  pctPower = (currentPower/maxPower) * 100;
  pctHeat = (currentHeat/maxHeat) * 100;

  get("power").style.width = pctPower + "%";
  get("heat").style.width = pctHeat + "%";
  get("money").innerHTML = currentCash + "$"; 
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