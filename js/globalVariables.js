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
questionCounter = 0;

questionTextArray = ['This is the Question. Answer it or face the consequences', 'Welcome to question two, your life will be taken from you (again), unless you answer this one correct'];
strOptionArray = ['This is the strength Option', 'This is the strength Option'];
intOptionArray = ['this is the Intelligence Option', 'this is the Intelligence Option'];
agilOptionArray = ['This is the agility option', 'This is the agility option'];

var enemyCharacter = new Character('Doggo', 1, 1, 1, 1);

changeQuestion(questionTextArray[0], strOptionArray[0], intOptionArray[0], agilOptionArray[0]);
