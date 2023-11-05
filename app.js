let scrollPositionEqual = window.scrollY || window.pageYOffset;

document.addEventListener('DOMContentLoaded', function() {
    let modeNight = document.querySelector('#day-night');
    let body = document.body;
    let textHeader = document.querySelector('#text1');
    let textParagraph = document.querySelector('#text2');
    let textHead = document.querySelector('#text3');
    let textParag = document.querySelector('#text4');
    let textSwipe = document.querySelector('#text5');
    let textMemo = document.querySelector('#text6');
    
    modeNight.addEventListener('click', () => {
        body.classList.toggle('light-mode-click');
        textHeader.classList.toggle('light-mode-change-all');
        textParagraph.classList.toggle('light-mode-change-all');
        textHead.classList.toggle('light-mode-change-all');
        textParag.classList.toggle('light-mode-change-all');
        textSwipe.classList.toggle('light-mode-change-all');
        textMemo.classList.toggle('light-mode-change-all')
    })
});

/* -- Nanti Saja -- */
/*document.addEventListener('scroll', function() {
  let scrollPosition = window.scrollY;
  let targetElement = document.querySelector('.scroll-anm');

  if (scrollPosition > scrollPositionEqual) {
    targetElement.classList.add('scroll-anm');
  } else {
    targetElement.classList.remove('scroll-anm');
  }
});*/

console.log('Posisi scroll: ' + scrollPositionEqual + ' piksel');

/* -- untuk memori kelas -- */

const track = document.getElementById("image-track");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  track.dataset.percentage = nextPercentage;
  
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });

  for(const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);

alert("Bila anda membuka website ini di laya hp disarankan untuk pakai mode dekstop, setelah itu landscape hp kalian(miringin).\nDan jika ingin lebih powerfull silahkan buka di pc/laptop anda, terimakasih.");