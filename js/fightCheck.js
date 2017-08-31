
function fightCheck (charOne, charTwo, stat){
  if (stat == 'str'){
    fightCheckStatType(stat, 'str', charOne, charTwo);
  }else if (stat == 'int') {
    fightCheckStatType(stat, 'int', charOne, charTwo);
  }else if (stat == 'agil') {
    fightCheckStatType(stat, 'agil', charOne, charTwo);
  }
  if (charOne.hp <= 0 || charTwo.hp <= 0){
    deathCheck(charOne, charTwo);
  }
}

function fightCheckStatType(inputStat, compareStat, charOne, charTwo){
  if(enemyCharacter[questionCounter].enemy){
    damage = 0;
    var preFightHealth = userCharacter.hp;
    var enemyPreFight = enemyCharacter[questionCounter].hp;
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
      damage = 5;
      var display = charOne.name + '\'s attack did very little damage.';
    }else if(powerDifference >= 0){
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
      var concatdisplay = ' It was a critical hit!';
    }else if(attackRoll === 1){
      damage = 5;
      charOne.hp -= damage;
      display = charOne.name + '\'s hit was so bad that they hurt themselves...';
      damage = 0;
    }else if(attackRoll === 2){
      damage = 0;
      display = charOne.name + '\'s attack fails to do any damage.';
    }if(defRoll === 20){
      damage = 0;
      display = charTwo.name + '\'s defense overpowered ' + charOne.name + '\'s attack.';
    }else if(defRoll === 1){
      damage *= 1.7;
      var concatdisplay = ' ' + charTwo.name + ' was caught off guard. ' + charOne.name + '\'s attack did extra damage.';
    }if (attackRoll === 20 && defRoll === 1){
      display = charOne.name + ' made a very heavy blow to ' + charTwo.name + '.';
    }else if(attackRoll === 20 && defRoll === 20){
      damage = 20;
      display = charOne.name + '\'s attack power was matched by ' + charTwo.name + '\'s defenses. Normal damage was dealt.';
    }
    charTwo.hp -= damage;
    updateHealth(preFightHealth);
    enemyHealth(enemyPreFight);
    if(enemyTurn){
      enemyTurn = false;
    }else{
      enemyTurn = true;
    }
    if(concatdisplay){
      display += concatdisplay;
    }
    damageDisplay(display);
  }
  else if (charTwo[inputStat] > 499 && charTwo[inputStat] < 506){
    enviroEventFunct(inputStat, compareStat, charOne, charTwo);}
  else if(charTwo[inputStat] > 505){
    itemEventFunction(inputStat, compareStat, charOne, charTwo);
  }
}

function enemyTurnFunction(){
  var statsArray = ['str', 'int', 'agil'];
  var randNum = Math.floor(Math.random() * statsArray.length);
  fightCheck(enemyCharacter[questionCounter], userCharacter, statsArray[randNum]);
}

function continueToQuestion(){
  clearTimeout();
  questionCounter += 1;
  // if(enemyCharacter[questionCounter].enemy){
  //   initialEnemyHealth();
  // }
  displayStory(enemyCharacter[questionCounter].prestory[storyCounter][0]);
  // changeQuestion(encounterArray[questionCounter][0], encounterArray[questionCounter][1], encounterArray[questionCounter][2], encounterArray[questionCounter][3], encounterArray[questionCounter][4]);
}
