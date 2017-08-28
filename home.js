function Character (name, str, agil, int, hp){
  this.name = name;
  this.str = str;
  this.agil = agil;
  this.int = int;
  this.hp = hp;
}
var userChar = "";
for(var i = 0; i < ghostPic.length; i++){
  var ghostie = document.getElementsByClassName('ghostPic')[i];
  ghostie.addEventListener('click', selectGhost);
}
function selectGhost(event){
  var userChar = event.currentTarget.Id;
  var chooseText = document.getElementsByClassName('chooseGhost')[0];
  var parentElm = chooseText.parentNode;
  parentElm.removeChild(chooseText);
  var inputElm = document.getElementsByClassName('inputClass')[0];
  parentElm = inputElm.parentNode;
  parentElm.remove(inputElm);
  var inputElm = document.createElement('input');
  inputElm.class = inputClass;
  inputElm.setAttribute('placeholder', 'Enter Your Name');
  inputElm.setAttribute('type', 'text');
  inputElm.setAttribute('name', 'nameForm');
  var formElm = document.getElementsByClassName('inputForm')[0];
  formElm.appendChild(inputElm);
  formElm.addEventListener('submit', startGame);
}
function startGame(event){
  var userName =
};
