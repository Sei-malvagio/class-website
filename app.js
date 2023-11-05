let scrollPosition = window.scrollY || window.pageYOffset;

document.addEventListener('DOMContentLoaded', function() {
    let modeNight = document.querySelector('#day-night');
    let body = document.body;
    let textHeader = document.querySelector('#text1');
    let textParagraph = document.querySelector('#text2');
    let textHead = document.querySelector('#text3');
    let textParag = document.querySelector('#text4');
    let textSwipe = document.querySelector('#text5');
    
    modeNight.addEventListener('click', () => {
        body.classList.toggle('light-mode-click');
        textHeader.classList.toggle('light-mode-change-all');
        textParagraph.classList.toggle('light-mode-change-all');
        textHead.classList.toggle('light-mode-change-all');
        textParag.classList.toggle('light-mode-change-all');
        textSwipe.classList.toggle('light-mode-change-all');
    })
});

document.addEventListener('scroll', function() {
  let scrollPosition = window.scrollY;
  let targetElement = document.querySelector('.text3');

  if (scrollPosition > 1) {
    targetElement.classList.add('text3');
  } else {
    targetElement.classList.remove('text3');
  }
});

console.log('Posisi scroll: ' + scrollPosition + ' piksel');