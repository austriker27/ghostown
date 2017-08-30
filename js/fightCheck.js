
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
      var statDifference = charOne[inputStat] - charTwo[inputStat];
      if (statDifference <= 0){
        var display = charOne.name + '\'s move fails to deal any damage';
        damageDisplay(display);
      }
      else if (statDifference > 0){
        function dndSim(){var num = Math.floor(Math.random() * (21 - 1) + 1);
          return num;}
        var attackRoll = dndSim();
        var defRoll = dndSim();
        var attackPower = charOne[inputStat] + attackRoll;
        var defensePower = charTwo[inputStat] + defRoll;
        var powerDifference = attackPower - defensePower;
        if (powerDifference <= 0){
          var damage = 5;
          var display = charOne.name + '\'s attack did very little damage.';
        }
        else if(powerDifference > 0){
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
        charTwo.hp -= damage;
        damageDisplay(display);
      // var damage = charOne[inputStat] - charTwo[inputStat];
      // if (damage > -1){
      //   charTwo.hp -= damage;
      //   var display = charTwo.name + ' took ' + damage + ' points of damage.';
      //   damageDisplay(display);
      // }else {
      //   charOne.hp += damage;
      //   var display = 'Oh no, ' + charTwo.name + ' has a higher ' + inputStat + ' level! ' + charOne.name + ' took ' + (-1 * damage) + ' points of damage.';
      //   damageDisplay(display);
      }
    }
    else if (charTwo[inputStat] > 499 && charTwo[inputStat] < 506){
      enviroEventFunct(inputStat, compareStat, charOne, charTwo);}
    else{
      itemEventFunction(inputStat, compareStat, charOne, charTwo);
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
  changeQuestion(encounterArray[questionCounter][0], encounterArray[questionCounter][1], encounterArray[questionCounter][2], encounterArray[questionCounter][3], encounterArray[questionCounter][4]);
}

function continueToQuestion(){
  clearTimeout();
  questionCounter += 1;
  changeQuestion(encounterArray[questionCounter][0], encounterArray[questionCounter][1], encounterArray[questionCounter][2], encounterArray[questionCounter][3], encounterArray[questionCounter][4]);
}
