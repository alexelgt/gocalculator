function GetATK(Pokemon,IV,Level){
	ATK = ( (Pokemon.Stats[0]+IV[0]) * CPMultiplier(Level) );
  return ATK
}

function GetDEF(Pokemon,IV,Level){
	ATK = ( (Pokemon.Stats[1]+IV[1]) * CPMultiplier(Level) );
  return ATK
}

function GetHP(Pokemon,IV,Level){
	HP = Math.trunc( (Pokemon.Stats[2]+IV[2]) * CPMultiplier(Level) );
	if (HP < 10) {
    return 10
  }
  else {
    return HP
  }
}

function CP_Formula(Pokemon,IV,Level){
  CP = Math.trunc( Math.pow(CPMultiplier(Level),2)/10*(Pokemon.Stats[0]+IV[0])*Math.pow((Pokemon.Stats[1]+IV[1])*(Pokemon.Stats[2]+IV[2]),1/2) );
  if (CP < 10) {
    return 10
  }
  else {
    return CP
  }
}
