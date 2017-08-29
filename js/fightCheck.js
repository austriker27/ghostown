
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
    if(encounterArray[questionCounter][5] === true){
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
    } else if (encounterArray[questionCounter][5] === false) {
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
        if(charOne[inputStat] > 10){
          enemyCharacter[questionCounter + 1].hp -= 3;
          var display = 'You dig in your heels and successfully make the first strike on ghostly.';
          displayText(display);
        }else{
          charOne.hp -= 2;
          var display = 'You attempt to dig in your heels, but realize that you dont have feet, causing you to fall and take damage. Prepare to fight';
          //hurt sound effect
          displayText(display);
        } }
      else if (charTwo[inputStat] === 4) {
        enemyCharacter[questionCounter + 1].hp -= 3;
        var display = 'You sick doggo on ghostly. Doggo, being the good dog that he is, damages ghostly. Ghostly then charges at you';
        displayText(display);
      }
      else if (charTwo[inputStat] === 5) {
        if(charOne[inputStat] > 10){
          enemyCharacter[questionCounter + 1].hp -= 3;
          var display = 'You taunt ghostly, causing him to faulter and take some damage. Ghostly then charges you in a fit of rage';
          displayText(display);
        }else{
          charOne.int -= 2;
          var display = 'Your attempt to taunt the ghost, but fail spectaularly. You feel your intelligence has been damaged by your stupidity. Prepare to fight';
          //hurt sound effect
          displayText(display);
        }
      }else if (charTwo[input] === 6){
        charOne.agil += 1;
        charOne.str += 2;
        displayText('You pick up the straight razor, feeling like you can take on the world, which you were a fan of before everyone else.');
      }else if(charTwo[input] === 7){
        charOne.int -= 2;
        charOne.agil += 2;
        displayText('You put the ear gauges in your ears. You feel more aerodynamic. You also think they look dumb');
      }else if(charTwo[input] === 8){
        charOne.int += 3;// 2-3
        displayText('You begin to read the works of Franz Kafka. You suddenly feel like you\'re better than everyone else.');
      }else if(charTwo[input] === 9){
        charOne.str += 6;//5-6
        charOne.agil -= 3;//2-3
        displayText('The hammer feels good in your hands, but is quite heavy');
      }else if (charTwo[input] === 10){
        charOne.int += 4;//3-4
        charOne.agil -= 2;//1-2
        displayText('You convene with the skull, gaining its former life\'s wisdom. It\'s quite cumbersome.');
      }else if(charTwo[input] === 11){
        charOne.hp += 4;
        displayText('You eat the apple and feel better. You\'re not a huge fan of granny smiths though.');
      }else if(charTwo[input] === 12){
        charOne.hp -= 3;
        displayText('Why are you touching strange clouds??? You should have eaten the apple. You feel weaker.');
      }else if(charTwo[input] === 13){
        charOne.hp += 6;
        displayText('You eat the fuji apple, which you find delicious.');
      }else if(charTwo[input] === 14){
        charOne.agil += 4;//3-4
        displayText('You shred some gnar. Your the fasted ghost in this town.');
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
  changeQuestion(encounterArray[questionCounter][0], encounterArray[questionCounter][1], encounterArray[questionCounter][2], encounterArray[questionCounter][3], encounterArray[questionCounter][4]);
}

function continueToQuestion(){
  clearTimeout();
  questionCounter += 1;
  changeQuestion(encounterArray[questionCounter][0], encounterArray[questionCounter][1], encounterArray[questionCounter][2], encounterArray[questionCounter][3], encounterArray[questionCounter][4]);
}
