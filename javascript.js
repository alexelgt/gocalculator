function start(){
  language();
  fullscreen();
  team_phrase();
  sliders();
}

function ventanaemergente(id,id2) {

  window.scrollTo(0, 0);
  document.body.scrollTop = 0;
  document.getElementById(id).style.display = "block";

    document.getElementById(id2).style.display = "none";

    if (id == "informacion") {
      document.getElementById("bg").style.backgroundImage = "none";
      document.getElementById("bg").style.backgroundColor = "#2a6c79";

    }
    else if (id == "ocultar") {
      document.getElementById("bg").style.backgroundImage = "url('background.jpeg')";

    }
}

function notaneasteregg(Pokemon) {
  if (Pokemon == "easteregg") {
    document.getElementById("bg").style.background = "url('egg.png') repeat fixed, url('background.jpeg')";
  }
  else {
    document.getElementById("bg").style.background = "url('background.jpeg')";
  }
}
