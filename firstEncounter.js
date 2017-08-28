var userCharacter = JSON.parse(localStorage.character);

questionTextArray = ['This is the Question. Answer it or face the consequences'];
choiceOneArray = ['This is the first Answer'];
choiceTwoArray = ['this is the second Answer'];
choiceThreeArray = ['This is Answer three'];

function changeQuestion(questionText, choiceOneIn, choiceTwoIn, choiceThreeIn){
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
  choiceOne.setAttribute('id', 'firstChoice');
  var choiceTwo = document.createElement('li');
  choiceTwo.innerText = choiceTwoIn;
  choiceTwo.setAttribute('id', 'secondChoice');
  var choiceThree = document.createElement('li');
  choiceThree.innerText = choiceThreeIn;
  choiceThree.setAttribute('id', 'thirdChoice');

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
    }} , 1500);

  // setTimeout(function(){unList.appendChild(choiceOne);
  //   unList.appendChild(lineBreakOne);}, 1500);
  // setTimeout(function(){
  //   unList.appendChild(choiceTwo);
  //   unList.appendChild(lineBreakTwo);}, 1700);
  // setTimeout(function(){
  //   unList.appendChild(choiceThree);}, 2000);
};
changeQuestion(questionTextArray[0], choiceOneArray[0], choiceTwoArray[0], choiceThreeArray[0]);
