
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
    if(encounterArray[questionCounter][4]){
      damage = 0;
      charTwo.totalLvl = charTwo.str + charTwo.int + charTwo.agil;
      userCharacter.totalLvl = userCharacter.str + userCharacter.int + userCharacter.agil + userCharacter.hp;
      function dndSim(){var num = Math.floor(Math.random() * (21 - 1) + 1);
        return num;}
      var attackRoll = dndSim();
      var defRoll = dndSim();
      var attackPower = charOne[inputStat] + attackRoll;
      var defensePower = charTwo.totalLvl;
      var powerDifference = 0;
      powerDifference = attackPower - defensePower;
      if (powerDifference < 0){
        var display = charOne.name + '\'s move fails to deal any damage';
      }else if(powerDifference === 0){
        var damage = 5;
        var display = charOne.name + '\'s attack did very little damage.';
      }else if(powerDifference > 0){
        var damage = 10;
        var display = charOne.name + '\'s attack was somewhat effective.';
        if(powerDifference > 3){
          damage = 20;
          display = charOne.name + '\'s attack did a reasonable amount of damage.';
        }else if(powerDifference > 6){
          damage = 30;
          display = charOne.name + 'dealt a mighty blow!';
        }else if(powerDifference > 10){
          damage = 40;
          display = charOne.name + '\'s attack was extremely effective!';
        }
      }if (attackRoll === 20){
        damage *= 2;
        display = charOne.name + ' landed a critical hit!';
      }else if(attackRoll === 1){
        damage = 10;
        charOne.hp -= damage;
        display = charOne.name + '\'s hit was so bad that they hurt themselves...';
        damageDisplay(display);
      }if(defRoll === 20){
        damage = 0;
        display = charTwo.name + '\'s defense overpowered ' + charOne.name + '\'s attack.';
      }else if(defRoll === 1){
        damage *= 1.7;
        display = charTwo.name + 'was caught off guard. ' + charOne.name + '\'s attack did extra damage.';
      }if (attackRoll === 20 && defRoll === 1){
        display = charOne.name + ' made a very heavy blow to ' + charTwo.name + '.';
      }else if(attackRoll === 20 && defRoll === 20){
        damage = 20;
        display = charOne.name + '\'s attack power was matched by ' + charTwo.name + '\'s defenses. Normal damage was dealt.';
      }
    }
    charTwo.hp -= damage;

    if(enemyTurn){
      enemyTurn = false;
    }else{
      enemyTurn = true;
    }
    damageDisplay(display);
  }
  else if (charTwo[inputStat] > 499 && charTwo[inputStat] < 506){
    enviroEventFunct(inputStat, compareStat, charOne, charTwo);}
  else{
    itemEventFunction(inputStat, compareStat, charOne, charTwo);
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
  if(enemyTurn){
    continueButton.removeEventListener('click', damageRedisplayQuestion);
    continueButton.addEventListener('click', enemyTurnFunction);
  }else{
    continueButton.removeEventListener('click', enemyTurnFunction);
    continueButton.addEventListener('click', damageRedisplayQuestion);
  };
}
function enemyTurnFunction(){
  var statsArray = ['str', 'int', 'agil'];
  var randNum = Math.floor(Math.random() * statsArray.length);
  fightCheck(enemyCharacter[questionCounter], userCharacter, statsArray[randNum]);
}
function damageRedisplayQuestion(event){
  clearTimeout();
  changeQuestion(encounterArray[questionCounter][0], encounterArray[questionCounter][1], encounterArray[questionCounter][2], encounterArray[questionCounter][3], encounterArray[questionCounter][4]);
}

function continueToQuestion(){
  clearTimeout();
  questionCounter += 1;
  changeQuestion(encounterArray[questionCounter][0], encounterArray[questionCounter][1], encounterArray[questionCounter][2], encounterArray[questionCounter][3], encounterArray[questionCounter][4]);
}
