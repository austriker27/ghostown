var userCharacter = JSON.parse(localStorage.character);

function Character (name, str, agil, int, hp, ghostType){
  this.name = name;
  this.str = str;
  this.agil = agil;
  this.int = int;
  this.hp = hp;
  this.ghostType = 0;
  this.totalLvl = 0;
}
var questionCounter = 0;
var enemyCharacter = [];
questionTextArray = ['This is the Question. Answer it or face the consequences', 'Welcome to question two, your life will be taken from you (again), unless you answer this one correct'];
strOptionArray = ['This is the strength Option', 'This is the strength Option'];
intOptionArray = ['this is the Intelligence Option', 'this is the Intelligence Option'];
agilOptionArray = ['This is the agility option', 'This is the agility option'];
enemyEnvironmentArray = [true, true, false];

var Doggo = new Character('Doggo', 1, 1, 1, 1);
var hipsterGhost = new Character('Hipster Ghost', 1, 1, 1, 1);
var enviroOne = new Character('Skeleton Trap', 0, 1, 2, 1);
var enviroTwo = new Character('Second Environment', 3, 4, 5, 1);
enemyCharacter.push(Doggo, hipsterGhost, enviroOne);
// TODO:
