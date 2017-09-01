function deathCheck(charOne, charTwo){
  if (userCharacter.hp <= 0){
    characterDeath();
  }
  if (charTwo.hp <= 0 && userCharacter.hp > 0){
    var display = charTwo.name + ' is defeated';
    if(questionCounter === 0){
      display = 'Doggo wants to join the party and get the heck outta dodge. Doggo is now accompanying you on your journey.';
    }
    enemyTurn = false;
    enemyDeathHealth();
    displayText(display);
  }
  if (charOne.hp <= 0 && userCharacter.hp > 0){
    var display = charOne.name + ' is defeated';
    if(questionCounter === 0){
      display = 'Doggo wants to join the party and get the heck outta dodge. Doggo is now accompanying you on your journey.';
    }
    enemyTurn = false;
    enemyDeathHealth();
    displayText(display);
  }
}

function displayText(display){
  var textField = document.getElementsByClassName('textField')[0];
  while (textField.hasChildNodes()) {
    textField.removeChild(textField.lastChild);
  };
  var speakingField = document.createElement('h2');
  textField.appendChild(speakingField);
  var promptField = document.createElement('p');
  promptField.innerText = display;
  textField.appendChild(promptField);
  var unList = document.createElement('ul');
  textField.appendChild(unList);
  var choiceOne = document.createElement('li');
  choiceOne.innerText = 'Continue';
  choiceOne.setAttribute('id', 'continueButton');
  textField.appendChild(choiceOne);
  if(questionCounter < 10){
    choiceOne.addEventListener('click', continueToQuestion);
  }else{
    choiceOne.removeEventListener('click', continueToQuestion);
    choiceOne.addEventListener('click', endOfGame);
  }
  clearTimeout();
}

function characterDeath(){
  var textField = document.getElementsByClassName('textField')[0];
  while (textField.hasChildNodes()) {
    textField.removeChild(textField.lastChild);
  };
  var speakingField = document.createElement('h2');
  var totalScore = (userCharacter.str + userCharacter.agil + userCharacter.int) * 1000;
  speakingField.innerText = userCharacter.name + '\'s score was: ' + totalScore;
  textField.appendChild(speakingField);
  var promptField = document.createElement('p');
  promptField.innerText = 'Game OVER';
  promptField.setAttribute('class', 'gameOver');
  textField.appendChild(promptField);
  var grabBackgroundMusicAudio = document.getElementById('audio');
  var enemyAudioFile = 'music/gameOver.wav';
  grabBackgroundMusicAudio.setAttribute('src', enemyAudioFile);
  promptField.addEventListener('click', resetGame);
  var twitterDiv = document.createElement('div');
  twitterDiv.setAttribute('class', 'finalScoreTwitter');
  var twitterButton = document.createElement('a');
  twitterButton.setAttribute('class', 'twitter-share-button');
  twitterButton.setAttribute('href', 'https://twitter.com/share');
  twitterButton.setAttribute('data-size', 'large');
  var twitterMessage = 'I wasnt able to escape @GhostownGame. I got ' + totalScore + ' points. Can you survive? Try at.';
  twitterButton.setAttribute('data-text', twitterMessage);
  twitterButton.setAttribute('data-url', 'http://www.ghostowngame.com');
  twitterButton.setAttribute('data-hashtags', 'gamedev, indiedev, ghostown');
  twitterButton.setAttribute('data-related', 'twitterapi,ghostowngame');
  twitterButton.innerText = 'Post a Tweet!';
  twitterDiv.appendChild(twitterButton);
  textField.appendChild(twitterDiv);
  twttr.widgets.load();
  clearTimeout();
}
function enemyDeathHealth(){
  var enemyAssetDiv = document.getElementsByClassName('enemy')[0];
  if (document.getElementById('enemy')){
    var enemyAsset = document.getElementById('enemy');
    enemyAssetDiv.removeChild(enemyAsset);
  }
  var enemyOldHP = document.getElementsByClassName('enemyHP')[0];
  var enemyHPBox = document.getElementsByClassName('enemyHPBox')[0];
  enemyHPBox.innerText = '';
}
function resetGame(event){
  localStorage.clear;
  window.open('index.html','_self');
}
