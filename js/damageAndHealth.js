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
function enemyHealth(healthStart){
  if(enemyCharacter[questionCounter].hp !== healthStart){
    var enemyOldHP = document.getElementsByClassName('enemyHP')[0];
    var enemyHPBox = document.getElementsByClassName('enemyHPBox')[0];
    enemyHPBox.removeChild(enemyOldHP);
    enemyHPBox.innerText = 'HP';
    var newEnemyHP = document.createElement('div');
    newEnemyHP.innerText = enemyCharacter[questionCounter].hp;
    newEnemyHP.setAttribute('class', 'enemyHP');
    enemyHPBox.appendChild(newEnemyHP);
  }
}
function initialEnemyHealth(){
  if(document.getElementsByClassName('enemyHP')[0]){
    var enemyOldHP = document.getElementsByClassName('enemyHP')[0];
    var enemyHPBox = document.getElementsByClassName('enemyHPBox')[0];
    enemyHPBox.removeChild(enemyOldHP);
  }
  var enemyHPBox = document.getElementsByClassName('enemyHPBox')[0];
  enemyHPBox.innerText = 'HP';
  var initalEnemyHP = document.createElement('div');
  initalEnemyHP.innerText = enemyCharacter[questionCounter].hp;
  initalEnemyHP.setAttribute('class', 'enemyHP');
  enemyHPBox.appendChild(initalEnemyHP);
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
