function enviroEventFunct(inputStat, compareStat, charOne, charTwo){
  if (charTwo[inputStat] === 500){
    if(charOne[inputStat] > 7){
      displayText('You stand your ground and prepare to fight.');
    }else{
      charOne.hp -= 1;
      //hurt sound effect
      displayText('You attempt to stand your ground, but you are too weak. You take some damage and prepare to fight');
    }
  }
  else if (charTwo[inputStat] === 501) {
    if(charOne[inputStat] > 6){
      questionCounter += 2;
      displayText('You manage to get away from the skeleton! Onward!');
      //skip encounter, no level up
    }else{
      displayText('You attempt to run away from the skeleton, but fail. Prepare to fight');
    }
  }
  else if (charTwo[inputStat] === 502) {
    if(charOne[inputStat] > 6){
      enemyCharacter[questionCounter + 1].hp -= 1;
      displayText('Relying on your quick thinking, you manage to set the trap. The skeleton stumbles into the trap and takes some damage. Prepare to fight');
    }else{
      charOne.hp -= 1;
      displayText('Due to your weaker intellect, in attempting to set the trap, you hurt yourself. Prepare to fight');
    }
  }
  else if (charTwo[inputStat] === 503) {
    if(charOne[inputStat] > 10){
      enemyCharacter[questionCounter + 1].hp -= 3;
      displayText('You dig in your heels and successfully make the first strike on ghostly.');
    }else{
      charOne.hp -= 2;
      //hurt sound effect
      displayText('You attempt to dig in your heels, but realize that you dont have feet, causing you to fall and take damage. Prepare to fight');
    } }
  else if (charTwo[inputStat] === 504) {
    enemyCharacter[questionCounter + 1].hp -= 3;
    displayText('You sick doggo on ghostly. Doggo, being the good dog that he is, damages ghostly. Ghostly then charges at you');
  }
  else if (charTwo[inputStat] === 505) {
    if(charOne[inputStat] > 10){
      enemyCharacter[questionCounter + 1].hp -= 3;
      displayText('You taunt ghostly, causing him to faulter and take some damage. Ghostly then charges you in a fit of rage');
    }else{
      charOne.int -= 2;
      //hurt sound effect
      displayText('Your attempt to taunt the ghost, but fail spectaularly. You feel your intelligence has been damaged by your stupidity. Prepare to fight');
    }
  }
}
