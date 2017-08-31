function deathCheck(charOne, charTwo){
  if (userCharacter.hp <= 0){
    characterDeath();
  }
  if (charTwo.hp <= 0 && userCharacter.hp > 0){
    var display = charTwo.name + ' is defeated';
    if(questionCounter === 0){
      display = 'Doggo wants to join the party and get the heck outta dodge. Doggo is now accompanying you on your journey.';
    }
    enemyTurn = false;
    enemyDeathHealth();
    displayText(display);
  }
  if (charOne.hp <= 0 && userCharacter.hp > 0){
    var display = charOne.name + ' is defeated';
    if(questionCounter === 0){
      display = 'Doggo wants to join the party and get the heck outta dodge. Doggo is now accompanying you on your journey.';
    }
    enemyTurn = false;
    enemyDeathHealth();
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
  choiceOne.setAttribute('id', 'continueButton');
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
function enemyDeathHealth(){
  var enemyAssetDiv = document.getElementsByClassName('enemy')[0];
  if (document.getElementById('enemy')){
    var enemyAsset = document.getElementById('enemy');
    enemyAssetDiv.removeChild(enemyAsset);
  }
  var enemyOldHP = document.getElementsByClassName('enemyHP')[0];
  var enemyHPBox = document.getElementsByClassName('enemyHPBox')[0];
  enemyHPBox.innerText = '';
  // enemyHPBox.removeChild(enemyOldHP);
}
function resetGame(event){
  localStorage.clear;
  window.open('index.html','_self');
}
