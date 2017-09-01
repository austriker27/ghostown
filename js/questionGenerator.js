
function changeQuestion(questionText, choiceOneIn, choiceTwoIn, choiceThreeIn, enemy){
  var textField = document.getElementsByClassName('textField')[0];
  while (textField.hasChildNodes()) {
    textField.removeChild(textField.lastChild);
  };
  var enemyAssetDiv = document.getElementsByClassName('enemy')[0];
  if (document.getElementById('enemy')){
    var enemyAsset = document.getElementById('enemy');
    enemyAssetDiv.removeChild(enemyAsset);
  }
  if(enemyCharacter[questionCounter].ghostType){
    var newEnemy = enemyCharacter[questionCounter].ghostType;
    var newEnemyAsset = document.createElement('img');
    newEnemyAsset.setAttribute('id', 'enemy');
    newEnemyAsset.setAttribute('src', newEnemy);
    enemyAssetDiv.appendChild(newEnemyAsset);
  }
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
    }} , 2000);
};
function sameQuestion(questionText, choiceOneIn, choiceTwoIn, choiceThreeIn, enemy){
  var textField = document.getElementsByClassName('textField')[0];
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
  var answersArray = [];
  answersArray.push(choiceOne, choiceTwo, choiceThree);
  for(var i = 0; i < 3; i++){
    var randIndex = Math.floor(Math.random() * answersArray.length);
    unList.appendChild(answersArray[randIndex]);
    var lineBreakOne = document.createElement('br');
    lineBreakOne.setAttribute('class', 'break');
    unList.appendChild(lineBreakOne);
    answersArray.splice(randIndex, 1);
  }
}
function strengthListener(event){
  event.preventDefault();
  fightCheck(userCharacter, enemyCharacter[questionCounter], 'str');
}
function intListener(event){
  event.preventDefault();
  fightCheck(userCharacter, enemyCharacter[questionCounter], 'int');
}
function agilListener(event){
  event.preventDefault();
  fightCheck(userCharacter, enemyCharacter[questionCounter], 'agil');
}
