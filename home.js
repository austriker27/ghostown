function play(){
  var audio = document.getElementById('audio');
  audio.play();
}

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
  inputElm.setAttribute('placeholder', 'Type Your Name & Hit Enter');
  inputElm.setAttribute('autocomplete', 'off');
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
    mainCharacter.str = genStats(5, 3);
    mainCharacter.int = genStats(3, 1);
    mainCharacter.agil = genStats(7, 5);
    mainCharacter.hp = genStats(12, 9);
    mainCharacter.ghostType = 0;
  }else if(userChar[0] == 'ghostTwo'){
    mainCharacter.str = genStats(3, 1);
    mainCharacter.int = genStats(7, 5);
    mainCharacter.agil = genStats(5, 3);
    mainCharacter.hp = genStats(11, 8);
    mainCharacter.ghostType = 1;
  }else if(userChar[0] == 'ghostThree'){
    mainCharacter.str = genStats(9, 7);
    mainCharacter.int = genStats(3, 1);
    mainCharacter.agil = genStats(3, 1);
    mainCharacter.hp = genStats(14, 11);
    mainCharacter.ghostType = 2;
  }
  mainCharacter.totalLvl = (mainCharacter.str + mainCharacter.int + mainCharacter.agil + mainCharacter.hp);
  console.log(mainCharacter.totalLvl);
  localStorage.setItem('character', JSON.stringify(mainCharacter));
  window.open('game.html','_self');
}
