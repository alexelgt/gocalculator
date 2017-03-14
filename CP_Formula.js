function CP_Formula(Pokemon,IV,Level){
  CP = Math.trunc( Math.pow(CP_Multiplier(Level),2)/10*(Pokemon.Stats[0]+IV[0])*Math.pow((Pokemon.Stats[1]+IV[1])*(Pokemon.Stats[2]+IV[2]),1/2) );
  if (CP < 10) {
    return 10
  }
  else {
    return CP
  }
}
