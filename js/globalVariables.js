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
questionTextArray = ['This is the Dog encoutner. Fight him', 'You encounter a hipster ghost. He annoyingly bumps into you. Your life will be taken from you (again), unless you answer this one correct', 'A skeleton approaches. You see a skeleton trap on the ground. What do?', 'This is the skeleton encounter. Choose your path', 'This is the second environment event. Choose wisely', 'Oh god, a cute yet legally differentialble character named ghostly approaches. What will you do to vanquish this foe?', 'Welp, this is it. It doesnt look like your going to make it out of this one. That guy looks real big. You remind yourself that youve died once before, which calms you down momentarily, anticipating the impending ass kicking. Your move'];
strOptionArray = ['This is the strength Option', 'This is the strength Option', 'This is the strength Option', 'This is the strength Option', 'This is the strength Option', 'This is the strength Option', 'This is the strength Option'];
intOptionArray = ['this is the Intelligence Option', 'this is the Intelligence Option', 'this is the Intelligence Option', 'this is the Intelligence Option', 'this is the Intelligence Option', 'this is the Intelligence Option', 'this is the Intelligence Option'];
agilOptionArray = ['This is the agility option', 'This is the agility option', 'This is the agility option', 'This is the agility option', 'This is the agility option', 'This is the agility option', 'This is the agility option'];
enemyEnvironmentArray = [true, true, false, true, false, true, true];

var Doggo = new Character('Doggo', 1, 4, 1, 10);
var hipsterGhost = new Character('Hipster Ghost', 8, 4, 3, 15);
var enviroOne = new Character('Skeleton Trap', 0, 1, 2, 1);
var Skeleton = new Character('Skeleton', 10, 7, 5, 20);
var enviroTwo = new Character('Second Environment', 3, 4, 5, 1);
var ghostly = new Character('Ghostly', 7, 14, 12, 22);
var finalBoss = new Character('Chaos Lord', 20, 13, 17, 30);
enemyCharacter.push(Doggo, hipsterGhost, enviroOne, Skeleton, enviroTwo, ghostly, finalBoss);
// TODO:
