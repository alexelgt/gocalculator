function fullscreen(){var a=document.getElementsByTagName("a");for(var i=0;i<a.length;i++){if(a[i].className.match("noeffect")){}else{a[i].onclick=function(){window.location=this.getAttribute("href");return false}}}}

function start(){
  language();
  fullscreen();
  team_phrase();
  sliders();

  $('#clickme_CP_Search').click(function() {
      document.getElementById("Output_CP_Search_2").selectionStart = 0
      document.getElementById("Output_CP_Search_2").selectionEnd = 9999
  });

  $('#clickme_PVP_Stats').click(function() {
      document.getElementById("Output_PVP_Stats_textarea").selectionStart = 0
      document.getElementById("Output_PVP_Stats_textarea").selectionEnd = 9999
  });

}

function ventanaemergente(id,id2) {

  window.scrollTo(0, 0);
  document.body.scrollTop = 0;
  document.getElementById(id).style.display = "block";

    document.getElementById(id2).style.display = "none";

    if (id == "informacion") {
      document.body.style.backgroundColor = "#2a6c79";
    }
    else if (id == "ocultar") {
      document.body.style.backgroundColor = "#24ccaa";

    }
}
