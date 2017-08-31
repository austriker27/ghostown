var userCharacter = JSON.parse(localStorage.character);

function Character (name, str, agil, int, hp, enemy, prestory, ghostType){
  this.name = name;
  this.str = str;
  this.agil = agil;
  this.int = int;
  this.hp = hp;
  this.totalLvl = 0;
  this.enemy = enemy;
  this.prestory = prestory;
  this.ghostType = ghostType;
}
var doggoStory = [story1, story2, story3, story4, story5, story6, storyDoggo1, storyDoggo2, storyDoggo3, storyDoggo4];
var hipsterStory = [storyHipster1, storyHipster2, storyHipster3, storyHipster4];
var firstDropStory = [storyHipster5];
var enviroOneStory = [storySkullex1, storySkullex2];
var skeletonStory = [storySkullex3, storySkullex4, storySkullex5];
var secondDropStory = [storySkullex6];
var enviroTwoStory = [storyGhostly1, storyGhostly2, storyGhostly3, storyGhostly4, storyGhostly5, storyGhostly6, storyGhostly7, storyGhostly8];
var ghostlyStory = [storyGhostly9];
var thridDropStory = [storyGhostly10, storyGhostly11];
var ghoStory = [storyGho1, storyGho2, storyGho4, storyGho5, storyGho6, storyGho7, storyGho8];
var enemyTurn = false;
var questionCounter = 0;
var enemyCharacter = [];
var encounterArray = [];
var dogEncounter = ['This is the Dog encoutner. Fight him', 'This is the strength Option', 'this is the Intelligence Option', 'This is the agility option', true];
var hipsterEncounter = ['You encounter a hipster ghost. He annoyingly bumps into you. Your life will be taken from you (again), unless you answer this one correct', 'This is the strength Option', 'this is the Intelligence Option', 'This is the agility option', true];
var firstDropEncounter = ['The hipster drops some items for you. You can only carry one. Choose wisely', 'Old Timey Straight Razor', 'Die Verwandlung by Franz Kafka', 'Ear Gauges', false];
var enviroOneEncounter = ['This is the event for the skeleton', 'This is the strength Option', 'this is the Intelligence Option', 'This is the agility option', false];
var skeletonEncounter = ['This is the skeleton encounter. Choose your path', 'This is the strength Option', 'this is the Intelligence Option', 'This is the agility option', true];
var secondDropEncounter = ['The skeleton drops some items, your carrying capicity is slightly larger than last time, but you can only carry one more. Make your pick', 'Hammer', 'Granny Smith Apple', 'Skull', false];
var enviroTwoEncounter = ['This is the second environment event. Choose wisely', 'This is the strength Option', 'this is the Intelligence Option', 'This is the agility option', false];
var ghostlyEncounter = ['Oh god, a cute yet legally differentialble character named ghostly approaches. What will you do to vanquish this foe?', 'This is the strength Option', 'this is the Intelligence Option', 'This is the agility option', true];
var thirdDropEncounter = ['The ghostly ghost drops a couple more items. Make sure you choose wisely, you have a bad feeling somethign big is coming.', 'Gas Cloud', 'Skateboard', 'Fuji Apple', false];
var finalBossEncounter = ['Welp, this is it. It doesnt look like your going to make it out of this one. That guy looks real big. You remind yourself that youve died once before, which calms you down momentarily, anticipating the impending ass kicking. Your move', 'This is the strength Option', 'this is the Intelligence Option', 'This is the agility option', true];
encounterArray.push(dogEncounter, hipsterEncounter, firstDropEncounter, enviroOneEncounter, skeletonEncounter, secondDropEncounter, enviroTwoEncounter, ghostlyEncounter, thirdDropEncounter, finalBossEncounter);
var Doggo = new Character('Doggo', 2, 2, 2, 20, true, doggoStory, 'assets/doggo.png');
var hipsterGhost = new Character('Hipster Ghost', 3, 3, 3, 50, true, hipsterStory, 'assets/hipster.png');
var firstItemDrop = new Character('Item Drop One', 506, 507, 508, 1, false, firstDropStory);
var enviroOne = new Character('Skeleton Trap', 500, 501, 502, 1, false, enviroOneStory);
var Skeleton = new Character('Skeleton', 10, 7, 5, 20, true, skeletonStory, 'assets/skullex.png');
var secondItemDrop = new Character('Item Drop Two', 509, 5010, 5011, 1, false, secondDropStory);
var enviroTwo = new Character('Second Environment', 503, 504, 505, 1, false, enviroTwoStory);
var ghostly = new Character('Ghostly', 7, 14, 12, 22, true, ghostlyStory, 'assets/ghostly.png');
var thirdItemDrop = new Character('Item Drop Three', 5012, 5013, 5014, 1, false, thridDropStory);
var finalBoss = new Character('Gho: Chaos Lord', 20, 13, 17, 30, true, ghoStory, 'assets/gho.png');
enemyCharacter.push(Doggo, hipsterGhost, firstItemDrop, enviroOne, Skeleton, secondItemDrop, enviroTwo, ghostly, thirdItemDrop, finalBoss);

function appendUserGhost(){
  var userAsset = document.createElement('img');
  userAsset.setAttribute('id', 'hero');
  userAsset.setAttribute('src', userCharacter.ghostType);
  var assetHolder = document.getElementsByClassName('hero')[0];
  assetHolder.appendChild(userAsset);
}
appendUserGhost();
displayStory(enemyCharacter[0].prestory[0][0]);
