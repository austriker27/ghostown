
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
      function dndSim(){var num = Math.floor(Math.random() * (21 - 1) + 1);
        return num;}
      var attackRoll = dndSim();
      var defRoll = dndSim();
      var attackPower = charOne[inputStat] + attackRoll;
      var defensePower = charTwo[inputStat] + defRoll;
      var powerDifference = attackPower - defensePower;
      if(powerDifference > 0){
          var damage = 10;
        if(powerDifference > 3){
          damage = 20;
        }else if(powerDifference > 6){
          damage = 30;
        }
      }
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
