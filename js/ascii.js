window.onload = function() {
  const FontSize = {
    "Tiny": "7pt",
    "Small": "10pt",
    "Medium": "12pt",
    "Large": "16pt",
    "Extra Large": "24pt",
    "XXL": "32pt"
   }
  var textarea = document.getElementById("text-area");
  var startButton = document.getElementById("start");
  var stopButton = document.getElementById("stop");
  var animationSelect = document.getElementById("animation");
  animationSelect.onchange = ()=> clear();
  var turbo = document.getElementById("turbo");
  turbo.onchange = () => {clear(); start();}
  var fontSizeSelect = document.getElementById("fontsize");
  let stop = false;
  var interval;
  startButton.onclick = start;

  function start() {
    stop = false;
    if (animationSelect.value !== "Blank") {stopButton.disabled = false;}
    const doAnimation = animate(animationSelect.value)
    interval = setInterval(doAnimation, turbo.checked ? 50: 250);
  }

  function clear() {
    clearInterval(interval);
    textarea.value = "";
  }

  fontSizeSelect.onchange = () => textarea.style.fontSize = FontSize[fontSizeSelect.value];

  function animate (type) {
    const anim = ANIMATIONS[type].split('=====\n');
    let animationIndex = 0;
    return function () {
      if (stop) {
        animationIndex = 0;
        textarea.value = anim[animationIndex];
        return;
      }
      textarea.value = anim[animationIndex];
      animationIndex = animationIndex + 1;
      if (animationIndex == anim.length) {
        animationIndex = 0;
      }
    }

  }


  stopButton.onclick = () => {stop = true; stopButton.disabled = stop;}
}
