var colors = ["deeppink", "darkblue", "yellow", "orange", "green", "darkgreen", "cyan", "violet"];
function clicked() {
  var idx = Math.floor(Math.random() * colors.length);
  document.getElementById("name").style.color = colors[idx];
}

function onEnter() {
  document.body.style.backgroundImage = 'url("harrywig.jpg")';
}

function onExit() {
  document.body.style.backgroundImage = "";
}
