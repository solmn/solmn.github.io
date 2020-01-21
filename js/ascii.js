window.onload = function() {
      "use strict";

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
      var turbo = document.getElementById("turbo");
      var fontSizeSelect = document.getElementById("fontsize");
      let stop = false;
      var interval;

      startButton.onclick = start;

      animationSelect.onchange = ()=> {
           stop=true;
           clear();
           textarea.value = ANIMATIONS[animationSelect.value].split('=====\n')[0];
           startButton.disabled = false;
      }

     fontSizeSelect.onchange = () => textarea.style.fontSize = FontSize[fontSizeSelect.value];

     turbo.onchange = () => {
       clear();
       start();
     }

     stopButton.onclick = () => {
       stop = true;
       stopButton.disabled = stop;
       startButton.disabled = false;
     }

     function start() {
       startButton.disabled = true;
       stop = false;
       if (animationSelect.value !== "Blank") {stopButton.disabled = false;}
       const doAnimation = animate(animationSelect.value)
       interval = setInterval(doAnimation, turbo.checked ? 50: 250);
     }

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

    function clear() {
      stopButton.disabled = true;
      clearInterval(interval);
      textarea.value = "";
    }
}
