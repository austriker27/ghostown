function character (name, str, agil, int, hp){
  this.name = name;
  this.str = str;
  this.agil = agil;
  this.int = int;
  this.hp = hp;
}
function fightCheck (charOne, charTwo, stat){
  var damage = (charOne.stat - charTwo.stat);
  if (damage > -1){
    charTwo.hp -= damage;
    var display = charTwo.name + ' took ' + damage + ' points of damage.';
  }else {
    charOne.hp += damage;
    var display = 'Oh no, ' + charTwo.name + ' has a higher ' + stat + ' level! ' + charOne.name + ' took ' + (-1 * damage) + ' points of damage.';
  }
}
