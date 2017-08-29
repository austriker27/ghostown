
function fightCheck (charOne, charTwo, stat){
  fightCheckStatType(stat, 'str', charOne, charTwo);
  fightCheckStatType(stat, 'int', charOne, charTwo);
  fightCheckStatType(stat, 'agil', charOne, charTwo);
  if (charOne.hp <= 0 || charTwo.hp <= 0){
    deathCheck(charOne, charTwo);
  }
}

function fightCheckStatType(inputStat, compareStat, charOne, charTwo){
  if(compareStat == inputStat){
    if(enemyEnvironmentArray[questionCounter] === true){
      var damage = charOne[inputStat] - charTwo[inputStat];
      if (damage > -1){
        charTwo.hp -= damage;
        var display = charTwo.name + ' took ' + damage + ' points of damage.';
        damageDisplay(display);
        // setTimeout(function(){
        //   changeQuestion(questionTextArray[questionCounter], strOptionArray[questionCounter], intOptionArray[questionCounter], agilOptionArray[questionCounter]);
        // }, 2000);
      }else {
        charOne.hp += damage;
        var display = 'Oh no, ' + charTwo.name + ' has a higher ' + inputStat + ' level! ' + charOne.name + ' took ' + (-1 * damage) + ' points of damage.';
        // setTimeout(function(){
        //   changeQuestion(questionTextArray[questionCounter], strOptionArray[questionCounter], intOptionArray[questionCounter], agilOptionArray[questionCounter]);
        // }, 2000);questionTextArray
        damageDisplay(display);
      }
    } else if (enemyEnvironmentArray[questionCounter] === false) {
      if (charTwo[inputStat] === 0){
        if(charOne[inputStat] > 7){
          var display = 'You stand your ground and prepare to fight.';
          displayText(display);
        }else{
          charOne.hp -= 1;
          var display = 'You attempt to stand your ground, but you are too weak. You take some damage and prepare to fight';
          //hurt sound effect
          displayText(display);
        }
      }
      else if (charTwo[inputStat] === 1) {
        if(charOne[inputStat] > 6){
          questionCounter += 1;
          var display = 'You manage to get away from the skeleton! Onward!';
          displayText(display);
          //skip encounter, no level up
        }else{
          var display = 'You attempt to run away from the skeleton, but fail. Prepare to fight';
          displayText(display);
        }
      }
      else if (charTwo[inputStat] === 2) {
        if(charOne[inputStat] > 6){
          enemyCharacter[questionCounter + 1].hp -= 1;
          var display = 'Relying on your quick thinking, you manage to set the trap. The skeleton stumbles into the trap and takes some damage. Prepare to fight';
          displayText(display);
        }else{
          charOne.hp -= 1;
          var display = 'Due to your weaker intellect, in attempting to set the trap, you hurt yourself. Prepare to fight';
          displayText(display);
        }
      }
      else if (charTwo[inputStat] === 3) {
      }
      else if (charTwo[inputStat] === 4) {
      }
      else if (charTwo[inputStat] === 5) {
      }
    }
  }
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
  continueButton.addEventListener('click', damageRedisplayQuestion);
}

function damageRedisplayQuestion(event){
  clearTimeout();
  changeQuestion(questionTextArray[questionCounter], strOptionArray[questionCounter], intOptionArray[questionCounter], agilOptionArray[questionCounter], enemyEnvironmentArray[questionCounter]);
}

function continueToQuestion(){
  clearTimeout();
  questionCounter += 1;
  changeQuestion(questionTextArray[questionCounter], strOptionArray[questionCounter], intOptionArray[questionCounter], agilOptionArray[questionCounter], enemyEnvironmentArray[questionCounter]);
}
