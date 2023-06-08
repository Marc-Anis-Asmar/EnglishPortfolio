var currentDivIndex = 0;
var divs = document.querySelectorAll('.left-div, .right-div');

function showDivs(startIndex) {
  for (var i = 0; i < divs.length; i++) {
    if (i === startIndex || i === startIndex + 1) {
      divs[i].classList.remove('hidden');
    } else {
      divs[i].classList.add('hidden');
    }
  }
}

function showNext() {
  currentDivIndex += 2;

  if (currentDivIndex >= divs.length) {
    currentDivIndex = 0;
  }

  showDivs(currentDivIndex);
}

function showPrevious() {
  currentDivIndex -= 2;

  if (currentDivIndex < 0) {
    currentDivIndex = divs.length - 2;
  }

  showDivs(currentDivIndex);
}

showDivs(currentDivIndex);
