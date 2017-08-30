function deathCheck(charOne, charTwo){
  if (userCharacter.hp <= 0){
    characterDeath();
  }
  if (charTwo.hp <= 0 && userCharacter.hp > 0){
    var display = charTwo.name + ' soul is at rest. R.I.P';
    displayText(display);
  }
  if (charOne.hp <= 0 && userCharacter.hp > 0){
    var display = charOne.name + ' soul is at rest. R.I.P';
    displayText(display);
  }
}

function displayText(display){
  var textField = document.getElementsByClassName('textField')[0];
  while (textField.hasChildNodes()) {
    textField.removeChild(textField.lastChild);
  };
  var speakingField = document.createElement('h2');
  textField.appendChild(speakingField);
  var promptField = document.createElement('p');
  promptField.innerText = display;
  textField.appendChild(promptField);
  var unList = document.createElement('ul');
  textField.appendChild(unList);
  var choiceOne = document.createElement('li');
  choiceOne.innerText = 'Continue';
  choiceOne.setAttribute('id', 'strChoice');
  textField.appendChild(choiceOne);
  choiceOne.addEventListener('click', continueToQuestion);
  clearTimeout();
}

function characterDeath(){
  var textField = document.getElementsByClassName('textField')[0];
  while (textField.hasChildNodes()) {
    textField.removeChild(textField.lastChild);
  };
  var speakingField = document.createElement('h2');
  textField.appendChild(speakingField);
  var promptField = document.createElement('p');
  promptField.innerText = 'Game OVER';
  promptField.setAttribute('class', 'gameOver');
  textField.appendChild(promptField);
  promptField.addEventListener('click', resetGame);
  clearTimeout();
}

function resetGame(event){
  localStorage.clear;
  window.open('index.html','_self');
}
