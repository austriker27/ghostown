var userCharacter = JSON.parse(localStorage.character);

function Character (name, str, agil, int, hp, enemy, prestory, ghostType, audioFilePath){
  this.name = name;
  this.str = str;
  this.agil = agil;
  this.int = int;
  this.hp = hp;
  this.totalLvl = 0;
  this.enemy = enemy;
  this.prestory = prestory;
  this.ghostType = ghostType;
  this.audioFilePath = audioFilePath;
  this.enemyBackgroundMusicChange = function() {
    var grabBackgroundMusicAudio = document.getElementById('audio');
    var enemyAudioFile = this.audioFilePath;
    grabBackgroundMusicAudio.setAttribute('src', this.audioFilePath);
  };
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
var dogEncounter = ['What will you do?', 'Remembering old fido, your dog of yesteryear, you reach out to pet Doggo.', 'Thinking you can outsmart the dog, you try to play hide and seek with him to distract him.', 'Doggo looks friendly, so you attempt to play with it.', true];
var hipsterEncounter = ['What to do?', 'Luckily you have been hitting the GhostGym lately and feel you can overpower this Hipster Ghost. So you prepare your best right hook and....', 'Thinking you can fool the Hipster Ghost you try to con him by kindly informing him there\'s a nice brunch down the street.', 'Relying on your many years of intramural track and field experience at GhostCollege you attempt to swiftly float past the Hipster Ghost. ', true];
var firstDropEncounter = ['The hipster drops some items for you. You can only carry one. Choose wisely', 'Old Timey Straight Razor', 'Die Verwandlung by Franz Kafka', 'Ear Gauges', false];
var enviroOneEncounter = ['... what WILL... you do??', 'Stand your ground, just like the historically accurate movie of 300.', 'Set a trap, I mean how smart could this thing be?', 'Run for it!!', false];
var skeletonEncounter = ['What will you do?', 'His skull looks brittle. Throw a GhostPUNCH!', 'Make a persuasive argument to damage his ego', 'Dodge, Dip, Duck, Dive, and DODGE.', false];
var secondDropEncounter = ['The skeleton drops some items, your carrying capicity is slightly larger than last time, but you can only carry one more. Make your pick', 'Hammer', 'Granny Smith Apple', 'Skull', false];
var enviroTwoEncounter = ['You\'ve got a chance to make the first move. Don\'t blow it!', 'Do a flying judo kick.', 'Taunt this weirdo.', 'Sick Doggo on him!!!', false];
var ghostlyEncounter = ['Make your decision...', 'Swing your arms like crazy!', 'This guy looks kinda weird. So you taunt him, like any normal ghost would do in this situation. ', 'You attempt to outmaneuver the floating head.', true];
var thirdDropEncounter = ['The ghostly ghost drops a couple more items. Make sure you choose wisely, you have a bad feeling somethign big is coming.', 'Gas Cloud', 'Skateboard', 'Fuji Apple', false];
var finalBossEncounter = ['Welp, this is it. It doesnt look like your going to make it out of this one. That guy looks real big. You remind yourself that youve died once before, which calms you down momentarily, anticipating the impending ass kicking. Your move', 'Wrestle with this muscled mad-ghost!', 'Attempt to outsmart it.', 'Zip around until its head spins off.', true];
encounterArray.push(dogEncounter, hipsterEncounter, firstDropEncounter, enviroOneEncounter, skeletonEncounter, secondDropEncounter, enviroTwoEncounter, ghostlyEncounter, thirdDropEncounter, finalBossEncounter);

var Doggo = new Character('Doggo', 2, 2, 2, 20, true, doggoStory, 'assets/doggo.png', 'music/battleOne.mp3');
var hipsterGhost = new Character('Hipster Ghost', 3, 3, 3, 50, true, hipsterStory, 'assets/hipster.png', 'music/battleOne.mp3');
var firstItemDrop = new Character('Item Drop One', 506, 507, 508, 1, false, firstDropStory, null, 'music/idle.wav');
var enviroOne = new Character('Skeleton Trap', 500, 501, 502, 1, false, enviroOneStory, null, 'music/idle.wav');
var Skeleton = new Character('Skeleton', 10, 7, 5, 20, true, skeletonStory, 'assets/skullex.png', 'music/battleTwo.mp3');
var secondItemDrop = new Character('Item Drop Two', 509, 5010, 5011, 1, false, secondDropStory, null, 'music/idle.wav');
var enviroTwo = new Character('Second Environment', 503, 504, 505, 1, false, enviroTwoStory, null, 'music/idle.wav');
var ghostly = new Character('Ghostly', 7, 14, 12, 22, true, ghostlyStory, 'assets/ghostly.png', 'music/battleTwo.mp3');
var thirdItemDrop = new Character('Item Drop Three', 5012, 5013, 5014, 1, false, thridDropStory, null, 'music/idle.wav');
var finalBoss = new Character('Gho: Chaos Lord', 20, 13, 17, 30, true, ghoStory, 'assets/gho.png', 'music/boss.wav');
var endOfGameObject = new Character('The End', 1, 1, 1, 1, false, endingText, null, 'gameOver.wav');
enemyCharacter.push(Doggo, hipsterGhost, firstItemDrop, enviroOne, Skeleton, secondItemDrop, enviroTwo, ghostly, thirdItemDrop, finalBoss, endOfGameObject);

function appendUserGhost(){
  var userAsset = document.createElement('img');
  userAsset.setAttribute('id', 'hero');
  userAsset.setAttribute('src', userCharacter.ghostType);
  var assetHolder = document.getElementsByClassName('hero')[0];
  assetHolder.appendChild(userAsset);
}
appendUserGhost();
displayStory(enemyCharacter[0].prestory[0][0]);
enemyDeathHealth();
