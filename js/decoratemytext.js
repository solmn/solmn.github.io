window.onload = function() {
  "use strict"

  const decorateButton = document.getElementById("decoreButton");
  decorateButton.onclick = myTimer;

  const blingCheckbox = document.getElementById("blingCheckbox");
  blingCheckbox.onchange = changeStyle;

  const pigLatinButton = document.getElementById("pigLatinButton");
  const textArea = document.getElementById("myText");
  pigLatinButton.onclick = function() {
    const sen = textArea.value.trim().split("\n");
    let n = "";
    for (let i = 0; i < sen.length; i++) {
       n = n + "\n" + pigLatin(sen[i]);
    }
    textArea.value = n;
  }
  // pigLatinButton.onclick = () => textArea.value = pigLatin(textArea.value);

  const malkovichButton = document.getElementById("malkovichButton");
  // malkovichButton.onclick = () => textArea.value = malkovitch(textArea.value);
  malkovichButton.onclick = function()  {
    const sen = textArea.value.trim().split("\n");
    let n = "";
    for (let i = 0; i < sen.length; i++) {
       n = n + "\n" + malkovitch(sen[i]);
    }
    textArea.value = n;
  }



  function decorate () {
      const textArea = document.getElementById("myText");
      const currentFont = parseInt(window.getComputedStyle(textArea).fontSize);
      console.log(currentFont)
      textArea.style.fontSize = currentFont + 2 + "pt";
  }

  function myTimer () {
      setInterval(decorate, 500);
  }

  function changeStyle() {
    const textArea = document.getElementById("myText");
    const blingCheckbox = document.getElementById("blingCheckbox");
      if (blingCheckbox.checked) {
        textArea.classList.add("decorate-style");
        document.body.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
      }
      else {
        textArea.classList.remove("decorate-style");
        document.body.style.backgroundImage = "";
      }
  }

function isVowel(c) {
    return /^[aeiou]$/.test(c.toLowerCase());
}

function  firstUpperCase(s) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function pigLatin (text) {
    const words = text.trim().toLowerCase().split(" ");
    const newWords = [];
    words.forEach((word, i) => {
      if (isVowel(word[0])) {
         newWords.push(firstUpperCase(word.trim() + "ay"));
      }
      else {
        let index = 0;
        let word_ = word.trim();
        for (let j = 0; j < word_.length; j++) {
          if (isVowel(word_[j])) {
            index = j;
            break;
          }
        }
        if (index === 0 && /\d+/g .test(word_[0])) {
          newWords.push(word_);
        }
        else {
          newWords.push(firstUpperCase(word_.trim().slice(index) + word_.trim().slice(0, index) + "ay"));
        }
      }
    });
    return newWords.join(" ");
  }

  function malkovitch (text) {
     return text.trim().split(" ").map(w => w.length >= 5 ? "Malkovitch" : w).join(" ");
  }

}
