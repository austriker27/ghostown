function updateHealth(healthStart){
  if(userCharacter.hp !== healthStart){
    var oldHealth = document.getElementsByClassName('currentHP')[0];
    var HPBox = document.getElementsByClassName('hitPointsBox')[0];
    HPBox.removeChild(oldHealth);
    var newHealth = document.createElement('div');
    newHealth.innerText = userCharacter.hp;
    newHealth.setAttribute('class', 'currentHP');
    HPBox.appendChild(newHealth);
  }
}
function initialHealth(){
  var hitPointsOuterDiv = document.getElementsByClassName('hitPointsBox')[0];
  var newHealth = document.createElement('div');
  newHealth.innerText = userCharacter.hp;
  newHealth.setAttribute('class', 'currentHP');
  hitPointsOuterDiv.appendChild(newHealth);
}
function damageDisplay(display){
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
  var continueButton = document.createElement('li');
  continueButton.innerText = 'Continue';
  continueButton.setAttribute('id', 'continueButton');
  textField.appendChild(continueButton);
  if(enemyTurn){
    continueButton.removeEventListener('click', damageRedisplayQuestion);
    continueButton.addEventListener('click', enemyTurnFunction);
  }else{
    continueButton.removeEventListener('click', enemyTurnFunction);
    continueButton.addEventListener('click', damageRedisplayQuestion);
  };
}

function damageRedisplayQuestion(event){
  clearTimeout();
  sameQuestion(encounterArray[questionCounter][0], encounterArray[questionCounter][1], encounterArray[questionCounter][2], encounterArray[questionCounter][3], encounterArray[questionCounter][4]);
}
initialHealth();
