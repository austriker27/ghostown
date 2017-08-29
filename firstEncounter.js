var userCharacter = JSON.parse(localStorage.character);

questionTextArray = ['This is the Question. Answer it or face the consequences', 'Welcome to question two, your life will be taken from you (again), unless you answer this one correct'];
strOptionArray = ['This is the strength Option', 'This is the strength Option'];
intOptionArray = ['this is the Intelligence Option', 'this is the Intelligence Option'];
agilOptionArray = ['This is the agility option', 'This is the agility option'];

function changeQuestion(questionText, choiceOneIn, choiceTwoIn, choiceThreeIn){

  var textField = document.getElementsByClassName('textField')[0];
  console.log(textField);
  while (textField.hasChildNodes()) {
    textField.removeChild(textField.lastChild);
  };
  var speakingField = document.createElement('h2');
  textField.appendChild(speakingField);
  var promptField = document.createElement('p');
  promptField.innerText = questionText;
  textField.appendChild(promptField);
  var unList = document.createElement('ul');
  textField.appendChild(unList);
  var ghostNameDisplay = document.getElementsByTagName('h2')[0];
  ghostNameDisplay.innerText = userCharacter.name + ':';
  var choiceOne = document.createElement('li');
  choiceOne.innerText = choiceOneIn;
  choiceOne.setAttribute('id', 'strChoice');
  choiceOne.addEventListener('click', strengthListener);
  var choiceTwo = document.createElement('li');
  choiceTwo.innerText = choiceTwoIn;
  choiceTwo.setAttribute('id', 'intChoice');
  choiceTwo.addEventListener('click', intListener);
  var choiceThree = document.createElement('li');
  choiceThree.innerText = choiceThreeIn;
  choiceThree.setAttribute('id', 'agilChoice');
  choiceThree.addEventListener('click', agilListener);

  // var lineBreakTwo = document.createElement('br');
  // lineBreakTwo.setAttribute('class', 'break');
  var answersArray = [];
  answersArray.push(choiceOne, choiceTwo, choiceThree);
  setTimeout(function(){
    for(var i = 0; i < 3; i++){
      setTimeout(function(){
        var randIndex = Math.floor(Math.random() * answersArray.length);
        unList.appendChild(answersArray[randIndex]);
        var lineBreakOne = document.createElement('br');
        lineBreakOne.setAttribute('class', 'break');
        unList.appendChild(lineBreakOne);
        answersArray.splice(randIndex, 1);}, 500 + (i * 200));
    }} , 5000);
  // setTimeout(function(){unList.appendChild(choiceOne);
  //   unList.appendChild(lineBreakOne);}, 1500);
  // setTimeout(function(){
  //   unList.appendChild(choiceTwo);
  //   unList.appendChild(lineBreakTwo);}, 1700);
  // setTimeout(function(){
  //   unList.appendChild(choiceThree);}, 2000);
  if (userCharacter.hp <= 0){
    clearTimeout();
    console.log(userCharacter.hp);
    characterDeath();
  }
};
function strengthListener(event){
  event.preventDefault();
  fightCheck(userCharacter, enemyCharacter, 'str');
}
function intListener(event){
  event.preventDefault();
  fightCheck(userCharacter, enemyCharacter, 'int');
}
function agilListener(event){
  event.preventDefault();
  fightCheck(userCharacter, enemyCharacter, 'agil');
}
changeQuestion(questionTextArray[0], strOptionArray[0], intOptionArray[0], agilOptionArray[0]);
var enemyCharacter = new Character('Doggo', 1, 1, 1, 1);
