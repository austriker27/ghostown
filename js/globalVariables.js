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
var encounterArray = [['This is the Dog encoutner. Fight him', 'This is the strength Option', 'this is the Intelligence Option', 'This is the agility option', true], ['You encounter a hipster ghost. He annoyingly bumps into you. Your life will be taken from you (again), unless you answer this one correct', 'This is the strength Option', 'this is the Intelligence Option', 'This is the agility option', true], ['The hipster drops some items for you. You can only carry one. Choose wisely', 'Old Timey Straight Razor', 'Ear Gauges', 'Die Verwandlung by Franz Kafka', false], ['A skeleton approaches. You see a skeleton trap on the ground. What do?', 'This is the strength Option', 'this is the Intelligence Option', 'This is the agility option', false], ['This is the skeleton encounter. Choose your path', 'This is the strength Option', 'this is the Intelligence Option', 'This is the agility option', true], ['The skeleton drops some items, your carrying capicity is slightly larger than last time, but you can only carry one more. Make your pick', 'Hammer', 'Skull', 'Granny Smith Apple', false], ['This is the second environment event. Choose wisely', 'This is the strength Option', 'this is the Intelligence Option', 'This is the agility option', false], ['Oh god, a cute yet legally differentialble character named ghostly approaches. What will you do to vanquish this foe?', 'This is the strength Option', 'this is the Intelligence Option', 'This is the agility option', true], ['The ghostly ghost drops a couple more items. Make sure you choose wisely, you have a bad feeling somethign big is coming.', 'Gas Cloud', 'Fuji Apple', 'Skateboard', false], ['Welp, this is it. It doesnt look like your going to make it out of this one. That guy looks real big. You remind yourself that youve died once before, which calms you down momentarily, anticipating the impending ass kicking. Your move', 'This is the strength Option', 'this is the Intelligence Option', 'This is the agility option', true]];

var Doggo = new Character('Doggo', 1, 4, 1, 10);
var hipsterGhost = new Character('Hipster Ghost', 8, 4, 3, 15);
var firstItemDrop = new Character('Item Drop One', 6, 7, 8, 1);
var enviroOne = new Character('Skeleton Trap', 0, 1, 2, 1);
var Skeleton = new Character('Skeleton', 10, 7, 5, 20);
var secondItemDrop = new Character('Item Drop Two', 9, 10, 11, 1);
var enviroTwo = new Character('Second Environment', 3, 4, 5, 1);
var ghostly = new Character('Ghostly', 7, 14, 12, 22);
var thirdItemDrop = new Character('Item Drop Three', 12, 13, 14, 1);
var finalBoss = new Character('Chaos Lord', 20, 13, 17, 30);
enemyCharacter.push(Doggo, hipsterGhost, firstItemDrop, enviroOne, Skeleton, secondItemDrop, enviroTwo, ghostly, thirdItemDrop, finalBoss);
// TODO:
