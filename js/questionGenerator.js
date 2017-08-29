function changeQuestion(questionText, choiceOneIn, choiceTwoIn, choiceThreeIn, enemy){
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
  var choiceTwo = document.createElement('li');
  choiceTwo.innerText = choiceTwoIn;
  choiceTwo.setAttribute('id', 'intChoice');
  var choiceThree = document.createElement('li');
  choiceThree.innerText = choiceThreeIn;
  choiceThree.setAttribute('id', 'agilChoice');
  // if(enemy === true){
  choiceOne.addEventListener('click', strengthListener);
  choiceTwo.addEventListener('click', intListener);
  choiceThree.addEventListener('click', agilListener);
  // }else if(enemy === false){
  //   choiceOne.addEventListener('click', strengthEnvironment);
  //   choiceOne.addEventListener('click', intEnvironment);
  //   choiceOne.addEventListener('click', agilEnvironment);
  // }
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

  // if (userCharacter.hp <= 0){
  //   clearTimeout();
  //   console.log(userCharacter.hp);
  //   characterDeath();
  // }
};

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
changeQuestion(questionTextArray[0], strOptionArray[0], intOptionArray[0], agilOptionArray[0], enemyEnvironmentArray[0]);