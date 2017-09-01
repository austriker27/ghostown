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
    if(questionCounter === 0){
      enemyCharacter[0].enemyBackgroundMusicChange();
    }if(questionCounter < 10){
      changeQuestion(encounterArray[questionCounter][0], encounterArray[questionCounter][1], encounterArray[questionCounter][2], encounterArray[questionCounter][3], encounterArray[questionCounter][4]);
    }else{
      youWin();
    }
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

function youWin(){
  var textField = document.getElementsByClassName('textField')[0];
  while (textField.hasChildNodes()) {
    textField.removeChild(textField.lastChild);
  };
  var speakingField = document.createElement('h2');
  var totalScore = (userCharacter.str + userCharacter.agil + userCharacter.int + userCharacter.hp) * 1000;
  speakingField.innerText = userCharacter.name + '\'s score was: ' + totalScore;
  textField.appendChild(speakingField);
  var promptField = document.createElement('p');
  promptField.innerText = 'You Won!';
  promptField.setAttribute('class', 'gameOver');
  promptField.addEventListener('click', resetGame);
  textField.appendChild(promptField);
  var twitterDiv = document.createElement('div');
  twitterDiv.setAttribute('class', 'finalScoreTwitter');
  var twitterButton = document.createElement('a');
  twitterButton.setAttribute('class', 'twitter-share-button');
  twitterButton.setAttribute('href', 'https://twitter.com/share');
  twitterButton.setAttribute('data-size', 'large');
  var twitterMessage = 'I just escaped @GhostownGame! I got ' + totalScore + ' points! Can you survive? Try at.';
  twitterButton.setAttribute('data-text', twitterMessage);
  twitterButton.setAttribute('data-url', 'http://www.ghostowngame.com');
  twitterButton.setAttribute('data-hashtags', 'game,ghostown');
  twitterButton.setAttribute('data-related', 'twitterapi,ghostowngame');
  twitterButton.innerText = 'Post a Tweet!';
  twitterDiv.appendChild(twitterButton);
  var bodyElm = document.getElementsByTagName('body')[0];
  bodyElm.appendChild(twitterDiv);
}
