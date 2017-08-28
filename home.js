function Character (name, str, agil, int, hp, ghostType){
  this.name = name;
  this.str = str;
  this.agil = agil;
  this.int = int;
  this.hp = hp;
  this.ghostType = 0;
  this.totalLvl = 0;
}
var userChar = [];
for(var i = 0; i < document.getElementsByClassName('ghostPic').length; i++){
  var ghostie = document.getElementsByClassName('ghostPic')[i];
  ghostie.addEventListener('click', selectGhost);
}
function selectGhost(event){
  userChar = [];
  userChar.push(event.target.id);
  if(document.getElementsByClassName('chooseGhostie')[0]){
    var chooseText = document.getElementsByClassName('chooseGhostie')[0];
    var parentElm = chooseText.parentNode;
    parentElm.removeChild(chooseText);
  };
  if(document.getElementsByClassName('inputClass')[0]){
    var inputElm = document.getElementsByClassName('inputClass')[0];
    parentElm = inputElm.parentNode;
    parentElm.removeChild(inputElm);
  };
  var inputElm = document.createElement('input');
  inputElm.setAttribute('class', 'inputClass');
  inputElm.setAttribute('placeholder', 'Enter Your Name');
  inputElm.setAttribute('type', 'text');
  inputElm.setAttribute('name', 'nameForm');
  var formElm = document.getElementById('inputForm');
  formElm.appendChild(inputElm);
  formElm.addEventListener('submit', startGame);
}

function genStats(max, min, stat){
  var statCreate = Math.floor(Math.random() * (max - min) + min);
  return statCreate;
}

function startGame(event){
  event.preventDefault();
  var userName = event.target.nameForm.value;
  var mainCharacter = new Character(userName, 0, 0, 0, 0, 0);
  if(userChar[0] == 'ghostOne'){
    var strGen = genStats(5, 3);
    mainCharacter.str = strGen;
    var intGen = genStats(3, 1);
    mainCharacter.int = intGen;
    var agilGen = genStats(7, 5);
    mainCharacter.agil = agilGen;
    var hpGen = genStats(12, 9);
    mainCharacter.hp = hpGen;
    mainCharacter.ghostType = 0;
  }else if(userChar[0] == 'ghostTwo'){
    var strGen = genStats(3, 1);
    mainCharacter.str = strGen;
    var intGen = genStats(7, 5);
    mainCharacter.int = intGen;
    var agilGen = genStats(5, 3);
    mainCharacter.agil = agilGen;
    var hpGen = genStats(11, 8);
    mainCharacter.hp = hpGen;
    mainCharacter.ghostType = 1;
  }else if(userChar[0] == 'ghostThree'){
    var strGen = genStats(9, 7);
    mainCharacter.str = strGen;
    var intGen = genStats(3, 1);
    mainCharacter.int = intGen;
    var agilGen = genStats(3, 1);
    mainCharacter.agil = agilGen;
    var hpGen = genStats(14, 11);
    mainCharacter.hp = hpGen;
    mainCharacter.ghostType = 2;
  }
  mainCharacter.totalLvl = (mainCharacter.str + mainCharacter.int + mainCharacter.agil + mainCharacter.hp);
  console.log(mainCharacter.totalLvl);
  localStorage.setItem('character', JSON.stringify(mainCharacter));
  window.open('game.html','_self');
}
