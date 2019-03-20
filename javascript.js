function start(){
  language();
  fullscreen();
  team_phrase();
  sliders();

  function fullscreen(){var a=document.getElementsByTagName("a");for(var i=0;i<a.length;i++){if(a[i].className.match("noeffect")){}else{a[i].onclick=function(){window.location=this.getAttribute("href");return false}}}}

  $('#clickme_CP_Search').click(function() {
      document.getElementById("Output_CP_Search_2").selectionStart = 0
      document.getElementById("Output_CP_Search_2").selectionEnd = 9999
  });

  $('#clickme_PVP_Stats').click(function() {
      document.getElementById("Output_PVP_Stats_textarea").selectionStart = 0
      document.getElementById("Output_PVP_Stats_textarea").selectionEnd = 9999
  });

  if ('serviceWorker' in navigator) {
    console.log('CLIENT: service worker registration in progress.');
    navigator.serviceWorker.register('service-worker.js').then(function() {
      console.log('CLIENT: service worker registration complete.');
    }, function() {
      console.log('CLIENT: service worker registration failure.');
    });
  } else {
    console.log('CLIENT: service worker is not supported.');
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
