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
      document.body.style.background = "none";
      document.body.style.backgroundColor = "#2a6c79";
    }
    else if (id == "ocultar") {
      document.body.style.background = "url('background.jpeg') no-repeat fixed";

    }
}

function notaneasteregg(Pokemon) {
  if (Pokemon == "easteregg") {
    document.body.style.background = "url('egg.png') repeat fixed, url('background.jpeg') no-repeat fixed";
  }
  else {
    document.body.style.background = "url('background.jpeg') no-repeat fixed";
  }
}
