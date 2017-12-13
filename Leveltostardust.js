function Leveltostardust(Level){
  if(Level>=1 && Level<=2.5) Stardust=200
  else if(Level>=3 && Level<=4.5) Stardust=400
  else if(Level>=5 && Level<=6.5) Stardust=600
  else if(Level>=7 && Level<=8.5) Stardust=800
  else if(Level>=9 && Level<=10.5) Stardust=1000
  else if(Level>=11 && Level<=12.5) Stardust=1300
  else if(Level>=13 && Level<=14.5) Stardust=1600
  else if(Level>=15 && Level<=16.5) Stardust=1900
  else if(Level>=17 && Level<=18.5) Stardust=2200
  else if(Level>=19 && Level<=20.5) Stardust=2500
  else if(Level>=21 && Level<=22.5) Stardust=3000
  else if(Level>=23 && Level<=24.5) Stardust=3500
  else if(Level>=25 && Level<=26.5) Stardust=4000
  else if(Level>=27 && Level<=28.5) Stardust=4500
  else if(Level>=29 && Level<=30.5) Stardust=5000
  else if(Level>=31 && Level<=32.5) Stardust=6000
  else if(Level>=33 && Level<=34.5) Stardust=7000
  else if(Level>=35 && Level<=36.5) Stardust=8000
  else if(Level>=37 && Level<=38.5) Stardust=9000
  else if(Level>=39 && Level<=40) Stardust=10000

  return Stardust
}
