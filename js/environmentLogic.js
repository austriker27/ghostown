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
      displayText('You manage to get away from the creepy skeleton. Onward!');
      //skip encounter, no level up
    }else{
      displayText('You attempt to run away from the skeleton but FAIL because you are just too slow. Prepare to fight!');
    }
  }
  else if (charTwo[inputStat] === 502) {
    if(charOne[inputStat] > 6){
      enemyCharacter[questionCounter + 1].hp -= 1;
      displayText('Relying on your quick thinking, you manage to set a trap. The skeleton stumbles, like an idiot, into the trap and takes some damage. Prepare to fight');
    }else{
      charOne.hp -= 1;
      displayText('Due to your weak intellect, you hurt yourself trying to set a trap. Good one. Prepare to fight!');
    }
  }
  else if (charTwo[inputStat] === 503) {
    if(charOne[inputStat] > 10){
      enemyCharacter[questionCounter + 1].hp -= 3;
      displayText('You dig in your heels and successfully make the first strike on ghostly.');
    }else{
      charOne.hp -= 2;
      //hurt sound effect
      displayText('You attempt to dig in your heels, but realize that you dont have feet -- because you\'re a ghost -- and you to fall to the ground and take damage. Prepare to fight.');
    } }
  else if (charTwo[inputStat] === 504) {
    enemyCharacter[questionCounter + 1].hp -= 3;
    displayText('You sick doggo on ghostly. Doggo, being the good dog that he is, damages ghostly. Ghostly then charges at you!');
  }
  else if (charTwo[inputStat] === 505) {
    if(charOne[inputStat] > 10){
      enemyCharacter[questionCounter + 1].hp -= 3;
      displayText('You taunt ghostly, causing him to faulter and take some damage. Ghostly charges you face first. Get ready!');
    }else{
      charOne.int -= 2;
      //hurt sound effect
      displayText('Your attempt to taunt the freaky ghost, but fail spectaularly. You feel your intelligence has been damaged by your stupidity. Prepare to fight');
    }
  }
}
