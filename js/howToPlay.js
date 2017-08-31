
// append menus to the how to hover
function howToMenu () {
  var howToPlay1 = document.createElement('p');
  howToPlay1.innerText = 'Pick the Ghostie that\'s right for you and name it!';
  mouseOverHowToPlay.appendChild(howToPlay1);

  var howToPlay1 = document.createElement('p');
  howToPlay2.innerText = 'Each ghostie has an advantage/disadvantage in Strength, Intelligence, or Agility -- the ghostie you choose matters.';
  mouseOverHowToPlay.appendChild(howToPlay1);

  var howToPlay1 = document.createElement('p');
  howToPlay3.innerText = 'When facing enemies, your choices are linked to one of the three statistics, so pay attention and leverage your stats accordingly!';
  mouseOverHowToPlay.appendChild(howToPlay1);

  var howToPlay1 = document.createElement('p');
  howToPlay4.innerText = 'Try to stay dead (alive)!';
  mouseOverHowToPlay.appendChild(howToPlay1);
}

// event listener for hovering over
var mouseOverHowToPlay = document.getElementsByClassName('dropdown');
mouseOverHowToPlay.addEventListener('hover', howToMenu);

// remove event listener after unhover
mouseOverHowToPlay.removeEventListener('unhover', howToMenu);
