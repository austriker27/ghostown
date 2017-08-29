function Character (name, str, agil, int, hp, ghostType){
  this.name = name;
  this.str = str;
  this.agil = agil;
  this.int = int;
  this.hp = hp;
  this.ghostType = 0;
  this.totalLvl = 0;
}
questionCounter = 0;

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
  continueButton.addEventListener('click', damageRedisplayQuestion);
}
function damageRedisplayQuestion(event){
  clearTimeout();
  changeQuestion(questionTextArray[questionCounter], strOptionArray[questionCounter], intOptionArray[questionCounter], agilOptionArray[questionCounter]);
}
function fightCheck (charOne, charTwo, stat){
  if('str' == stat){
    var damage = charOne.str - charTwo.str;
    if (damage > -1){
      charTwo.hp -= damage;
      var display = charTwo.name + ' took ' + damage + ' points of damage.';
      damageDisplay(display);
      setTimeout(function(){
        changeQuestion(questionTextArray[questionCounter], strOptionArray[questionCounter], intOptionArray[questionCounter], agilOptionArray[questionCounter]);
      }, 4000);
    } else {
      charOne.hp += damage;
      var display = 'Oh no, ' + charTwo.name + ' has a higher ' + stat + ' level! ' + charOne.name + ' took ' + (-1 * damage) + ' points of damage.';
      damageDisplay(display);
      setTimeout(function(){
        changeQuestion(questionTextArray[questionCounter], strOptionArray[questionCounter], intOptionArray[questionCounter], agilOptionArray[questionCounter]);
      }, 4000);
    }
  }
  if(stat == 'agil'){
    var damage = (charOne.agil - charTwo.agil);
    if (damage > -1){
      charTwo.hp -= damage;
      var display = charTwo.name + ' took ' + damage + ' points of damage.';
    }else {
      charOne.hp += damage;
      var display = 'Oh no, ' + charTwo.name + ' has a higher ' + stat + ' level! ' + charOne.name + ' took ' + (-1 * damage) + ' points of damage.';
    }
  }
  if(stat == 'int'){
    var damage = (charOne.int - charTwo.int);
    if (damage > -1){
      charTwo.hp -= damage;
      var display = charTwo.name + ' took ' + damage + ' points of damage.';
    }else {
      charOne.hp += damage;
      var display = 'Oh no, ' + charTwo.name + ' has a higher ' + stat + ' level! ' + charOne.name + ' took ' + (-1 * damage) + ' points of damage.';
    }
  }
  if (charOne.hp <= 0 || charTwo.hp <= 0){
    deathCheck(charOne, charTwo);
  }
}

// Need global user name to display user death
function deathCheck(charOne, charTwo){
  if (charTwo.hp <= 0 && userCharacter.hp > 0){
    var display = charTwo.name + ' soul is at rest. R.I.P';
    deathDisplay(display);
    setTimeout(function(){
      questionCounter += 1;
      changeQuestion(questionTextArray[questionCounter], strOptionArray[questionCounter], intOptionArray[questionCounter], agilOptionArray[questionCounter]);}, 4000);
  }
  else if (charOne.hp <= 0 && userCharacter.hp > 0){
    var display = charTwo.name + ' soul is at rest. R.I.P';
    deathDisplay(display);
  }else if (userCharacter <= 0 ){
    var display = 'Oh no, ' + userCharacter.name + ' died.... Better luck next time!';
    deathDisplay(display);
  }

}
function deathDisplay(display){
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
}

function continueToQuestion(){
  clearTimeout();
  questionCounter += 1;
  changeQuestion(questionTextArray[questionCounter], strOptionArray[questionCounter], intOptionArray[questionCounter], agilOptionArray[questionCounter]);
}
// var Max = new Character('Max', 3, 3, 3, 3);
// var Enemy = new Character('Blarg', 2, 4, 3, 5);
// fightCheck(Max, Enemy, 'agil');
