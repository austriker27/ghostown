
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
      var damage = charOne[inputStat] - charTwo[inputStat];
      if (damage > -1){
        charTwo.hp -= damage;
        var display = charTwo.name + ' took ' + damage + ' points of damage.';
        damageDisplay(display);
      }else {
        charOne.hp += damage;
        var display = 'Oh no, ' + charTwo.name + ' has a higher ' + inputStat + ' level! ' + charOne.name + ' took ' + (-1 * damage) + ' points of damage.';
        damageDisplay(display);
      }
    }
    else if (charTwo[inputStat] > 499 && charTwo[inputStat] < 506){
      enviroEventFunct(inputStat, compareStat, charOne, charTwo);}
    else{
      itemEventFunction(inputStat, compareStat, charOne, charTwo);
    }
  }
}
      // if (charTwo[inputStat] === 500){
      //   if(charOne[inputStat] > 7){
      //     displayText('You stand your ground and prepare to fight.');
      //   }else{
      //     charOne.hp -= 1;
      //     //hurt sound effect
      //     displayText('You attempt to stand your ground, but you are too weak. You take some damage and prepare to fight');
      //   }
      // }
      // else if (charTwo[inputStat] === 501) {
      //   if(charOne[inputStat] > 6){
      //     questionCounter += 1;
      //     displayText('You manage to get away from the skeleton! Onward!');
      //     //skip encounter, no level up
      //   }else{
      //     displayText('You attempt to run away from the skeleton, but fail. Prepare to fight');
      //   }
      // }
      // else if (charTwo[inputStat] === 502) {
      //   if(charOne[inputStat] > 6){
      //     enemyCharacter[questionCounter + 1].hp -= 1;
      //     displayText('Relying on your quick thinking, you manage to set the trap. The skeleton stumbles into the trap and takes some damage. Prepare to fight');
      //   }else{
      //     charOne.hp -= 1;
      //     displayText('Due to your weaker intellect, in attempting to set the trap, you hurt yourself. Prepare to fight');
      //   }
      // }
      // else if (charTwo[inputStat] === 503) {
      //   if(charOne[inputStat] > 10){
      //     enemyCharacter[questionCounter + 1].hp -= 3;
      //     displayText('You dig in your heels and successfully make the first strike on ghostly.');
      //   }else{
      //     charOne.hp -= 2;
      //     //hurt sound effect
      //     displayText('You attempt to dig in your heels, but realize that you dont have feet, causing you to fall and take damage. Prepare to fight');
      //   } }
      // else if (charTwo[inputStat] === 504) {
      //   enemyCharacter[questionCounter + 1].hp -= 3;
      //   displayText('You sick doggo on ghostly. Doggo, being the good dog that he is, damages ghostly. Ghostly then charges at you');
      // }
      // else if (charTwo[inputStat] === 505) {
      //   if(charOne[inputStat] > 10){
      //     enemyCharacter[questionCounter + 1].hp -= 3;
      //     displayText('You taunt ghostly, causing him to faulter and take some damage. Ghostly then charges you in a fit of rage');
      //   }else{
      //     charOne.int -= 2;
      //     //hurt sound effect
      //     displayText('Your attempt to taunt the ghost, but fail spectaularly. You feel your intelligence has been damaged by your stupidity. Prepare to fight');
      //   }
      //}
//       else if (charTwo[inputStat] === 506){
//         userCharacter[razor.posSkill] += razor.buff;
//         userCharacter[razor.negSkill] -= razor.debuff;
//         userCharacter[razor.secPosSkill] += razor.secBuff;
//         userCharacter.itemArray.push(razor.imgNum);
//         displayText('You pick up the straight razor, feeling like you can take on the world, which you were a fan of before everyone else.');
//       }else if(charTwo[inputStat] === 507){
//         userCharacter[gauges.posSkill] += gauges.buff;
//         userCharacter[gauges.negSkill] -= gauges.debuff;
//         userCharacter[gauges.secPosSkill] += gauges.secBuff;
//         userCharacter.itemArray.push(gauges.imgNum);
//         displayText('You put the ear gauges in your ears. You feel more aerodynamic. You also think they look dumb');
//       }else if(charTwo[inputStat] === 508){
//         userCharacter[kafka.posSkill] += kafka.buff;
//         userCharacter[kafka.negSkill] -= kafka.debuff;
//         userCharacter[kafka.secPosSkill] += kafka.secBuff;
//         userCharacter.itemArray.push(kafka.imgNum);
//         displayText('You begin to read the works of Franz Kafka. You suddenly feel like you\'re better than everyone else.');
//       }else if(charTwo[inputStat] === 509){
//         userCharacter[hammer.posSkill] += hammer.buff;
//         userCharacter[hammer.negSkill] -= hammer.debuff;
//         userCharacter[hammer.secPosSkill] += hammer.secBuff;
//         userCharacter.itemArray.push(hammer.imgNum);
//         displayText('The hammer feels good in your hands, but is quite heavy');
//       }else if (charTwo[inputStat] === 5010){
//         userCharacter[skull.posSkill] += skull.buff;
//         userCharacter[skull.negSkill] -= skull.debuff;
//         userCharacter[skull.secPosSkill] += skull.secBuff;
//         userCharacter.itemArray.push(skull.imgNum);
//         displayText('You convene with the skull, gaining its former life\'s wisdom. It\'s quite cumbersome.');
//       }else if(charTwo[inputStat] === 5011){
//         userCharacter[grannyApple.posSkill] += grannyApple.buff;
//         userCharacter[grannyApple.negSkill] -= grannyApple.debuff;
//         userCharacter[grannyApple.secPosSkill] += grannyApple.secBuff;
//         userCharacter.itemArray.push(grannyApple.imgNum);
//         displayText('You eat the apple and feel better. You\'re not a huge fan of granny smiths though.');
//       }else if(charTwo[inputStat] === 5012){
//         userCharacter[gasCloud.posSkill] += gasCloud.buff;
//         userCharacter[gasCloud.negSkill] -= gasCloud.debuff;
//         userCharacter[gasCloud.secPosSkill] += gasCloud.secBuff;
//         userCharacter.itemArray.push(gasCloud.imgNum);
//         displayText('Why are you touching strange clouds??? You should have eaten the apple. You feel weaker.');
//       }else if(charTwo[inputStat] === 5013){
//         userCharacter[fujiApple.posSkill] += fujiApple.buff;
//         userCharacter[fujiApple.negSkill] -= fujiApple.debuff;
//         userCharacter[fujiApple.secPosSkill] += fujiApple.secBuff;
//         userCharacter.itemArray.push(fujiApple.imgNum);
//         displayText('You eat the fuji apple, which you find delicious.');
//       }else if(charTwo[inputStat] === 5014){
//         userCharacter[skateboard.posSkill] += skateboard.buff;
//         userCharacter[skateboard.negSkill] -= skateboard.debuff;
//         userCharacter[skateboard.secPosSkill] += skateboard.secBuff;
//         userCharacter.itemArray.push(skateboard.imgNum);
//         displayText('You shred some gnar. Your the fasted ghost in this town.');
//       }
//     }
//   }
// }
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
