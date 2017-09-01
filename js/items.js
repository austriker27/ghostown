function ItemConstructor(buff, posSkill, debuff, negSkill, imgNum, secBuff, secPosSkill){
  this.buff = buff;
  this.posSkill = posSkill;
  this.debuff = debuff;
  this.negSkill = negSkill;
  this.imgNum = imgNum;
  this.secBuff = secBuff;
  this.secPosSkill = secPosSkill;
}
var razor = new ItemConstructor(1, 'agil',0,null,0,2,'str');
var kafka = new ItemConstructor(3, 'int', 0, null, 1);
var gauges = new ItemConstructor(2, 'agil', 2, 'int', 2);
var hammer = new ItemConstructor(6, 'str', 3, 'agil', 3);
var skull = new ItemConstructor(4, 'int', 2, 'agil', 4);
var grannyApple = new ItemConstructor(10, 'hp', 0, null, 5);
var gasCloud = new ItemConstructor(0, null, 3, 'hp', 6);
var fujiApple = new ItemConstructor(15, 'hp', 0, null, 7);
var skateboard = new ItemConstructor(4, 'agil', 0, null, 8);

function itemEventFunction (inputStat, compareStat, charOne, charTwo){
  if (charTwo[inputStat] === 506){
    userCharacter[razor.posSkill] += razor.buff;
    userCharacter[razor.negSkill] -= razor.debuff;
    userCharacter[razor.secPosSkill] += razor.secBuff;
    userCharacter.backpack.push(razor.imgNum);
    displayText('You pick up the straight razor, feeling like you can take on the world, which you were a fan of before everyone else.');
  }else if(charTwo[inputStat] === 507){
    userCharacter[gauges.posSkill] += gauges.buff;
    userCharacter[gauges.negSkill] -= gauges.debuff;
    userCharacter[gauges.secPosSkill] += gauges.secBuff;
    userCharacter.backpack.push(gauges.imgNum);
    displayText('You put the ear gauges in your ears. You feel more aerodynamic. You also think they look dumb');
  }else if(charTwo[inputStat] === 508){
    userCharacter[kafka.posSkill] += kafka.buff;
    userCharacter[kafka.negSkill] -= kafka.debuff;
    userCharacter[kafka.secPosSkill] += kafka.secBuff;
    userCharacter.backpack.push(kafka.imgNum);
    displayText('You begin to read the works of Franz Kafka. You suddenly feel like you\'re better than everyone else.');
  }else if(charTwo[inputStat] === 509){
    userCharacter[hammer.posSkill] += hammer.buff;
    userCharacter[hammer.negSkill] -= hammer.debuff;
    userCharacter[hammer.secPosSkill] += hammer.secBuff;
    userCharacter.backpack.push(hammer.imgNum);
    displayText('The hammer feels good in your hands, but is quite heavy');
  }else if (charTwo[inputStat] === 5010){
    userCharacter[skull.posSkill] += skull.buff;
    userCharacter[skull.negSkill] -= skull.debuff;
    userCharacter[skull.secPosSkill] += skull.secBuff;
    userCharacter.backpack.push(skull.imgNum);
    displayText('You convene with the skull, gaining its former life\'s wisdom. It\'s quite cumbersome.');
  }else if(charTwo[inputStat] === 5011){
    var originalHealth = userCharacter.hp;
    userCharacter[grannyApple.posSkill] += grannyApple.buff;
    userCharacter[grannyApple.negSkill] -= grannyApple.debuff;
    userCharacter[grannyApple.secPosSkill] += grannyApple.secBuff;
    userCharacter.backpack.push(grannyApple.imgNum);
    updateHealth(originalHealth);
    displayText('You eat the apple and feel better. You\'re not a huge fan of granny smiths though.');
  }else if(charTwo[inputStat] === 5012){
    var originalHealth = userCharacter.hp;
    userCharacter[gasCloud.posSkill] += gasCloud.buff;
    userCharacter[gasCloud.negSkill] -= gasCloud.debuff;
    userCharacter[gasCloud.secPosSkill] += gasCloud.secBuff;
    userCharacter.backpack.push(gasCloud.imgNum);
    updateHealth(originalHealth);
    displayText('Why are you touching strange clouds??? You should have eaten the apple. You feel weaker.');
  }else if(charTwo[inputStat] === 5013){
    var originalHealth = userCharacter.hp;
    userCharacter[fujiApple.posSkill] += fujiApple.buff;
    userCharacter[fujiApple.negSkill] -= fujiApple.debuff;
    userCharacter[fujiApple.secPosSkill] += fujiApple.secBuff;
    userCharacter.backpack.push(fujiApple.imgNum);
    updateHealth(originalHealth);
    displayText('You eat the fuji apple, which you find delicious.');
  }else if(charTwo[inputStat] === 5014){
    userCharacter[skateboard.posSkill] += skateboard.buff;
    userCharacter[skateboard.negSkill] -= skateboard.debuff;
    userCharacter[skateboard.secPosSkill] += skateboard.secBuff;
    userCharacter.backpack.push(skateboard.imgNum);
    displayText('You shred some gnar. You\'re the fasted ghost in this town.');
  }
}
