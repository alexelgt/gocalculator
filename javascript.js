function start(){
  language();
  fullscreen();
  team_phrase();
  sliders();

  $('#clickme_CP_Search').click(function() {
      document.getElementById("Output_CP_Search_2").selectionStart = 0
      document.getElementById("Output_CP_Search_2").selectionEnd = 999
  });

  $('#clickme_PVP_Stats').click(function() {
      document.getElementById("Output_PVP_Stats_textarea").selectionStart = 0
      document.getElementById("Output_PVP_Stats_textarea").selectionEnd = 999
  });

  console.log('Hello');

  if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
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
