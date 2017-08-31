var storyCounter = 0;

function storyProgressFunction(event){
  if(storyCounter < enemyCharacter[questionCounter].prestory.length - 1){
    storyCounter += 1;
    displayStory(enemyCharacter[questionCounter].prestory[storyCounter][0]);
  }else{
    storyCounter = 0;
    if(enemyCharacter[questionCounter].enemy){
      initialEnemyHealth();
    }
    changeQuestion(encounterArray[questionCounter][0], encounterArray[questionCounter][1], encounterArray[questionCounter][2], encounterArray[questionCounter][3], encounterArray[questionCounter][4]);
  }
}
function displayStory(storyText){
  var textField = document.getElementsByClassName('textField')[0];
  while (textField.hasChildNodes()) {
    textField.removeChild(textField.lastChild);
  };
  var speakingField = document.createElement('h2');
  textField.appendChild(speakingField);
  var promptField = document.createElement('p');
  promptField.innerText = storyText;
  textField.appendChild(promptField);
  var unList = document.createElement('ul');
  textField.appendChild(unList);
  var choiceOne = document.createElement('li');
  choiceOne.innerText = 'Continue';
  choiceOne.setAttribute('id', 'continueButton');
  textField.appendChild(choiceOne);
  choiceOne.addEventListener('click', storyProgressFunction);
}
