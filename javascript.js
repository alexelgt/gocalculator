function language(){

  if (navigator.language == "es-es" || navigator.language == "es") {
    $(".STRING_IV_CALCULATOR").html("Calculadora IV");
    $(".STRING_CP_CALCULATOR").html("Calculadora PC");
    $(".STRING_CALCULATE_IV").html("Calcular IV");
    $(".STRING_CP").html("PC");
    $(".STRING_STARDUST").html("Polvoestelar");
    $(".STRING_EXTRA_INFORMATION").html("Información extra");
    $(".STRING_HATCHED").html("Eclosionado");
    $(".STRING_POWERED").html("Potenciado");
    $(".STRING_APPRAISE").html("Valorar");
    $(".STRING_ATTACK").html("Ataque");
    $(".STRING_DEFENSE").html("Defensa");
    $(".STRING_MAIN_PHRASE").html("Frase principal");
    $(".STRING_SECUNDARY_PHRASE").html("Frase secundaria");
    $(".STRING_OBTAIN").html("Obtener");

    $(".STRING_CALCULATE_CP").html("Calcular PC");
    $(".STRING_CALCULATE_CP_EGG").html("Calcular PC huevo");
    $(".STRING_LEVEL").html("Nivel");

    $(".STRING_INCORRECT").html("Nivel");

    $(".STRING_INFORMATION").html("Información");

    $(".STRING_INFORMATION_TEXT").html("La siguiente actualización incluirá información en esta sección.");
  }
  else {
    $(".STRING_INFORMATION_TEXT").html("Next update will include information in this section.");
  }
}

function ventanaemergente(id,id2) {
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
