
// append menus to the how to hover
function howToMenu() {
  var howToPlay1 = document.createElement('p');
  howToPlay1.setAttribute('class', 'howToItem');
  howToPlay1.innerText = 'Pick the Ghostie that\'s right for you and name it!';
  mouseOverHowToPlay.appendChild(howToPlay1);

  var howToPlay2 = document.createElement('p');
  howToPlay2.setAttribute('class', 'howToItem');
  howToPlay2.innerText = 'Each ghostie has an advantage/disadvantage in Strength, Intelligence, or Agility -- the ghostie you choose matters.';
  mouseOverHowToPlay.appendChild(howToPlay2);

  var howToPlay3 = document.createElement('p');
  howToPlay3.setAttribute('class', 'howToItem');
  howToPlay3.innerText = 'When facing enemies, your choices are linked to one of the three statistics, so pay attention and leverage your stats accordingly!';
  mouseOverHowToPlay.appendChild(howToPlay3);

  var howToPlay4 = document.createElement('p');
  howToPlay4.setAttribute('class', 'howToItem');
  howToPlay4.innerText = 'Try to stay dead (alive)!';
  mouseOverHowToPlay.appendChild(howToPlay4);
}

// event listener for hovering over
var mouseOverHowToPlay = document.getElementsByClassName('dropdown')[0];
var howToHover = document.getElementsByClassName('howTo')[0];
howToHover.addEventListener('mouseover', howToMenu);

// on unhover remove all stuff
howToHover.addEventListener('mouseleave', removeHowToMenu);

function removeHowToMenu() {
  var howToInstructions = document.getElementsByClassName('howToItem');
  var howToChild1 = document.getElementsByClassName('howToItem')[0];
  var howToChild2 = document.getElementsByClassName('howToItem')[1];
  var howToChild3 = document.getElementsByClassName('howToItem')[2];
  var howToChild4 = document.getElementsByClassName('howToItem')[3];
  mouseOverHowToPlay.removeChild(howToChild1);
  mouseOverHowToPlay.removeChild(howToChild2);
  mouseOverHowToPlay.removeChild(howToChild3);
  mouseOverHowToPlay.removeChild(howToChild4);
};
