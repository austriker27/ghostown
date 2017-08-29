
function fightCheck (charOne, charTwo, stat){
  if('str' == stat){
    var damage = (charOne.str - charTwo.str);
    if (damage > -1){
      charTwo.hp -= damage;
      var display = charTwo.name + ' took ' + damage + ' points of damage.';
    }else {
      charOne.hp += damage;
      var display = 'Oh no, ' + charTwo.name + ' has a higher ' + stat + ' level! ' + charOne.name + ' took ' + (-1 * damage) + ' points of damage.';
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
// function deathCheck(charOne, charTwo){
//   if (charTwo.hp <= 0){
//     var display = charTwo.name + ' soul is at rest. R.I.P';
//   }
//   if (charOne.hp <= 0){
//     var display = 'Oh No! You perished. Your soul moves on to a better realm.';
//   }
// }

// var Max = new Character('Max', 3, 3, 3, 3);
// var Enemy = new Character('Blarg', 2, 4, 3, 5);
// fightCheck(Max, Enemy, 'agil');
