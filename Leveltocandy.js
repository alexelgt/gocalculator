function LevelToCandy(Level){
  if(Level>=1 && Level<=10.5) return 1
  else if(Level>=11 && Level<=20.5) return 2
  else if(Level>=21 && Level<=25.5) return 3
  else if(Level>=26 && Level<=30.5) return 4
  else if(Level>=31 && Level<=32.5) return 6
  else if(Level>=33 && Level<=34.5) return 8
  else if(Level>=35 && Level<=36.5) return 10
  else if(Level>=37 && Level<=38.5) return 12
  else if(Level>=39 && Level<=40) return 15
}
