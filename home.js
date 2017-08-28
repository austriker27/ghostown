function Character (name, str, agil, int, hp){
  this.name = name;
  this.str = str;
  this.agil = agil;
  this.int = int;
  this.hp = hp;
  this.totalLvl = (this.str + this.agil + this.int);
}
var userChar = '';
for(var i = 0; i < document.getElementsByClassName('ghostPic').length; i++){
  var ghostie = document.getElementsByClassName('ghostPic')[i];
  ghostie.addEventListener('click', selectGhost);
}
function selectGhost(event){
  var userChar = event.target.id;
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
  return stat;
}

function startGame(event){
  var userName = event.target.input;
  var mainCharacter = new Character(userName, 0, 0, 0, 0);
  if(userChar == 'ghostOne'){
    var strGen = genStats(4, 3);
    mainCharacter.str = strGen;
    var intGen = genStats(2, 1);
    mainCharacter.int = intGen;
    var agilGen = genStats(6, 5);
    mainCharacter.agil = agilGen;
    var hpGen = genStats(11, 9);
    mainCharacter.hp = hpGen;
  }else if(userChar == 'ghostTwo'){
    var strGen = genStats(2, 1);
    mainCharacter.str = strGen;
    var intGen = genStats(6, 5);
    mainCharacter.int = intGen;
    var agilGen = genStats(4, 3);
    mainCharacter.agil = agilGen;
    var hpGen = genStats(10, 8);
    mainCharacter.hp = hpGen;
  }else if(userChar == 'ghostThree'){
    var strGen = genStats(8, 7);
    mainCharacter.str = strGen;
    var intGen = genStats(2, 1);
    mainCharacter.int = intGen;
    var agilGen = genStats(2, 1);
    mainCharacter.agil = agilGen;
    var hpGen = genStats(11, 9);
    mainCharacter.hp = hpGen;
  }
  console.log(mainCharacter.totalLvl);
  localStorage.setItem('character', JSON.stringify(mainCharacter));
  window.location.replace(game.html);
}
