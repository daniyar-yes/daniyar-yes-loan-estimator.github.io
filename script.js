function estimateRate() {
    var tib = document.getElementById("number").value;
    var oneTruck = document.getElementById("1-truck").checked;
if (tib < 2) {
    alert("Startup financing: down payment required. Rates from 10%");
} else if (oneTruck == true) {
    alert("Due to fleet size, down payment required. Rates from 9%");
} else {
    alert("No down payment. Rates from 4% to 8%, depending on equipment age and amount requested.")
}
}
function checkIndustry() {
  var isTransportation = document.getElementById("isTransportation").selected;
  if (isTransportation == true) {
    document.getElementById("industryType").removeAttribute("style");
  } else { document.getElementById("industryType").style.display = "none";
}
}
