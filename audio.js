
//background audio plays on button click and pauses
var music = document.getElementById('audio');

function playAudio() {
  if (music.paused) {
    music.play();
    pButton.className = 'pause';
  } else {
    music.pause();
    pButton.className = 'play';
  }
}
