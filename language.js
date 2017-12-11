function language(){

  if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
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
    $(".STRING_HP").html("Salud");
    $(".STRING_MAIN_PHRASE").html("IVs totales");
    $(".STRING_SECUNDARY_PHRASE").html("IV más alto");
    $(".STRING_OBTAIN").html("Obtener");

    $(".STRING_CALCULATE_CP").html("Calcular PC");
    $(".STRING_CALCULATE_CP_EGG").html("Calcular PC huevo");
    $(".STRING_LEVEL").html("Nivel");

    $(".STRING_CP_RAIDS").html("PC raids");
    $(".STRING_SHOW_ALL_RESULTS").html("Mostrar todos los resultados");



    $(".STRING_INCORRECT").html("Nivel");

    $(".STRING_INFORMATION").html("Información");

    $(".STRING_TEAM").html("Equipo");


    $("#Team").html("<option value='Team_Blue'>Azul</option><option value='Team_Red'>Rojo</option><option value='Team_Yellow'>Amarillo</option>");

    $("#team_phrase").html("");
    $("#team_phrase").html("<table><tr><th class='informacion'>37 - 45</th><th class='informacion'>Maravilla para la vista</th></tr><tr><th class='informacion'>30 - 36</th><th class='informacion'>Me ha llamado ciertamente la atención</th></tr><tr><th class='informacion'>23 - 29</th><th class='informacion'>Por encima de la media</th></tr><tr><th class='informacion'>0 - 22</th><th class='informacion'>No parece que vaya a llegar muy lejos en combate</th></tr><tr><td class='informacion'>IVs totales</td><td class='informacion'>Frase</td></tr></table>");
    $("#team_phrase").html($('#team_phrase').html() + "<table style='margin-top:30px'><tr><th class='informacion'>15</th><th class='informacion'>Fuera de todo cálculo</th></tr><tr><th class='informacion'>13 - 14</th><th class='informacion'>Realmente impresionantes</th></tr><tr><th class='informacion'>8 - 12</th><th class='informacion'>Bastante bien</th></tr><tr><th class='informacion'>0 - 7</th><th class='informacion'>Dejan un poco que desear</th></tr><tr><td class='informacion'>IV más alto</td><td class='informacion'>Frase</td></tr></table>");

    $(".STRING_INFORMATION_TEXT").html("<p><b>¿Qué son los IV?</b></p><p>Se conocen como Valores Individuales (Individual Values en inglés) y se suman a las estadísticas base de ataque, defensa y salud.</p><p>Cada uno de estos IV van de 0 a 15 por lo que se puede obtener un porcentaje de perfección.</p><p><b>¿Cómo funciona la calculadora de IV?</b></p><p>Para que la calculadora muestre resultados es obligatorio completar los campos Pokémon, PC, HP y Polvoestelar.</p><p>El resto de campos son opcionales y actúan como filtros para descartar distintas combinaciones de IV. Si se dejan los valores por defecto, no filtran nada.</p><p><u>Eclosionado:</u> si el Pokémon es de huevo.</p><p><u>Potenciado:</u> si has pulsado el botón MÁS PODER.</p><p><u>IVs totales:</u> información que se obtiene de la primera frase que dice tu lider de equipo al valorar un Pokémon.</p><p><u>Ataque, Defensa y Salud:</u> se marca la opción si tu lider de equipo dice la estadística al valorar un Pokémon.</p><p><u>IV más alto:</u> información que se obtiene de la siguiente frase que dice tu lider de equipo al valorar un Pokémon.</p>");
  }
  else {
    $("#Team").html("<option value='Team_Blue'>Blue</option><option value='Team_Red'>Red</option><option value='Team_Yellow'>Yellow</option>");

    $(".STRING_INFORMATION_TEXT").html("<p><b>What are IV?</b></p><p>They are known as Individual Values and are added to the base stats of attack, defense and health.</p><p>Each of these IV ranges from 0 to 15 so a percentage of perfection can be obtained.</p><p><b>How does the IV calculator work?</b></p><p>For the calculator to show results, it is required to complete the fields Pokémon, CP, HP y Stardust.</p><p>The remaining fields are optional and act as filters to discard different combinations of IV. If the default values are left, they do not filter anything.</p><p><u>Hatched:</u> if the Pokémon is from an egg.</p><p><u>Powered:</u> if you have pressed the button POWER UP.</p><p><u>Total IVs:</u> information that is obtained from the first phrase that your team leader says when appraising a Pokémon.</p><p><u>Attack, Defense and Health:</u> the option is checked if your team leader says the stat when appraising a Pokémon.</p><p><u>Higher IV:</u> information that is obtained from the next phrase that your team leader says when appraising a Pokémon.</p>");

    $("#team_phrase").html("");
    $("#team_phrase").html("<table><tr><th class='informacion'>37 - 45</th><th class='informacion'>Your Pokémon is a wonder! What a breathtaking Pokémon!</th></tr><tr><th class='informacion'>30 - 36</th><th class='informacion'>Your Pokémon has certainly caught my attention</th></tr><tr><th class='informacion'>23 - 29</th><th class='informacion'>Your Pokémon is above average</th></tr><tr><th class='informacion'>0 - 22</th><th class='informacion'>Your Pokémon is not likely to make much headway in battle</th></tr><tr><td class='informacion'>Total IVs</td><td class='informacion'>Phrase</td></tr></table>");
    $("#team_phrase").html($('#team_phrase').html() + "<table style='margin-top:30px'><tr><th class='informacion'>15</th><th class='informacion'>Its stats exceed my calculations. It's incredible!</th></tr><tr><th class='informacion'>13 - 14</th><th class='informacion'>I am certainly impressed by its stats, I must say</th></tr><tr><th class='informacion'>8 - 12</th><th class='informacion'>Its stats are noticeably trending to the positive</th></tr><tr><th class='informacion'>0 - 7</th><th class='informacion'>Its stats are not out of the norm, in my estimation</th></tr><tr><td class='informacion'>Higher IV</td><td class='informacion'>Phrase</td></tr></table>");
  }
}

function team_phrase() {
  var Team = (document.getElementById("Team").value);
  $("#team_phrase").html("");
  if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
    if (Team == "Team_Blue") {
      $("#team_phrase").html("<table><tr><th class='informacion'>37 - 45</th><th class='informacion'>Maravilla para la vista</th></tr><tr><th class='informacion'>30 - 36</th><th class='informacion'>Me ha llamado ciertamente la atención</th></tr><tr><th class='informacion'>23 - 29</th><th class='informacion'>Por encima de la media</th></tr><tr><th class='informacion'>0 - 22</th><th class='informacion'>No parece que vaya a llegar muy lejos en combate</th></tr><tr><td class='informacion'>IVs totales</td><td class='informacion'>Frase</td></tr></table>");
      $("#team_phrase").html($('#team_phrase').html() + "<table style='margin-top:30px'><tr><th class='informacion'>15</th><th class='informacion'>Fuera de todo cálculo</th></tr><tr><th class='informacion'>13 - 14</th><th class='informacion'>Realmente impresionantes</th></tr><tr><th class='informacion'>8 - 12</th><th class='informacion'>Bastante bien</th></tr><tr><th class='informacion'>0 - 7</th><th class='informacion'>Dejan un poco que desear</th></tr><tr><td class='informacion'>IV más alto</td><td class='informacion'>Frase</td></tr></table>");
    }
    if (Team == "Team_Red") {
      $("#team_phrase").html("<table><tr><th class='informacion'>37 - 45</th><th class='informacion'>Simplemente me fascina ¡Puede lograr cualquier cosa!</th></tr><tr><th class='informacion'>30 - 36</th><th class='informacion'>Es muy fuerte ¡Qué orgullo debes sentir!</th></tr><tr><th class='informacion'>23 - 29</th><th class='informacion'>Está bastante bien</th></tr><tr><th class='informacion'>0 - 22</th><th class='informacion'>Puede que no sea el mejor en combate, pero aun así me gusta</th></tr><tr><td class='informacion'>IVs totales</td><td class='informacion'>Frase</td></tr></table>");
      $("#team_phrase").html($('#team_phrase').html() + "<table style='margin-top:30px'><tr><th class='informacion'>15</th><th class='informacion'>Estoy flipando con sus características ¡GUAU!</th></tr><tr><th class='informacion'>13 - 14</th><th class='informacion'>Cuenta con excelentes características ¡Qué emocionante!</th></tr><tr><th class='informacion'>8 - 12</th><th class='informacion'>Te ayudarán a cumplir su objetivo en combate</th></tr><tr><th class='informacion'>0 - 7</th><th class='informacion'>No te serán de mucha utilidad en combate</th></tr><tr><td class='informacion'>IV más alto</td><td class='informacion'>Frase</td></tr></table>");
    }
    if (Team == "Team_Yellow") {
      $("#team_phrase").html("<table><tr><th class='informacion'>37 - 45</th><th class='informacion'>¡Puede enfrentarse a los mejores!</th></tr><tr><th class='informacion'>30 - 36</th><th class='informacion'>¡Es realmente fuerte!</th></tr><tr><th class='informacion'>23 - 29</th><th class='informacion'>Está bastante bien</th></tr><tr><th class='informacion'>0 - 22</th><th class='informacion'>Podría mejorar algo en lo que se refiere a combates</th></tr><tr><td class='informacion'>IVs totales</td><td class='informacion'>Frase</td></tr></table>");
      $("#team_phrase").html($('#team_phrase').html() + "<table style='margin-top:30px'><tr><th class='informacion'>15</th><th class='informacion'>¡Son los mejor que he visto nunca! ¡Qué pasada!</th></tr><tr><th class='informacion'>13 - 14</th><th class='informacion'>¡Son realmente fuertes! Es impresionante</th></tr><tr><th class='informacion'>8 - 12</th><th class='informacion'>Buenas características, sin duda</th></tr><tr><th class='informacion'>0 - 7</th><th class='informacion'>Están...bien, supongo</th></tr><tr><td class='informacion'>IV más alto</td><td class='informacion'>Frase</td></tr></table>");
    }
  }
  else {
    if (Team == "Team_Blue") {
      $("#team_phrase").html("<table><tr><th class='informacion'>37 - 45</th><th class='informacion'>Your Pokémon is a wonder! What a breathtaking Pokémon!</th></tr><tr><th class='informacion'>30 - 36</th><th class='informacion'>Your Pokémon has certainly caught my attention</th></tr><tr><th class='informacion'>23 - 29</th><th class='informacion'>Your Pokémon is above average</th></tr><tr><th class='informacion'>0 - 22</th><th class='informacion'>Your Pokémon is not likely to make much headway in battle</th></tr><tr><td class='informacion'>Total IVs</td><td class='informacion'>Phrase</td></tr></table>");
      $("#team_phrase").html($('#team_phrase').html() + "<table style='margin-top:30px'><tr><th class='informacion'>15</th><th class='informacion'>Its stats exceed my calculations. It's incredible!</th></tr><tr><th class='informacion'>13 - 14</th><th class='informacion'>I am certainly impressed by its stats, I must say</th></tr><tr><th class='informacion'>8 - 12</th><th class='informacion'>Its stats are noticeably trending to the positive</th></tr><tr><th class='informacion'>0 - 7</th><th class='informacion'>Its stats are not out of the norm, in my estimation</th></tr><tr><td class='informacion'>Higher IV</td><td class='informacion'>Phrase</td></tr></table>");
    }
    if (Team == "Team_Red") {
      $("#team_phrase").html("<table><tr><th class='informacion'>37 - 45</th><th class='informacion'>Your Pokémon simply amazes me. It can accomplish anything!</th></tr><tr><th class='informacion'>30 - 36</th><th class='informacion'>Your Pokémon is a strong Pokémon. You should be proud!</th></tr><tr><th class='informacion'>23 - 29</th><th class='informacion'>Your Pokémon is a decent Pokémon</th></tr><tr><th class='informacion'>0 - 22</th><th class='informacion'>Your Pokémon may not be great in battle, but I still like it!</th></tr><tr><td class='informacion'>Total IVs</td><td class='informacion'>Phrase</td></tr></table>");
      $("#team_phrase").html($('#team_phrase').html() + "<table style='margin-top:30px'><tr><th class='informacion'>15</th><th class='informacion'>I'm blown away by its stats. WOW!</th></tr><tr><th class='informacion'>13 - 14</th><th class='informacion'>It's got excellent stats! How exciting!</th></tr><tr><th class='informacion'>8 - 12</th><th class='informacion'>Its stats indicate that in battle, it'll get the job done</th></tr><tr><th class='informacion'>0 - 7</th><th class='informacion'>Its stats don't point to greatness in battle</th></tr><tr><td class='informacion'>Higher IV</td><td class='informacion'>Phrase</td></tr></table>");
    }
    if (Team == "Team_Yellow") {
      $("#team_phrase").html("<table><tr><th class='informacion'>37 - 45</th><th class='informacion'>Your Pokémon looks like it can really battle with the best of them!</th></tr><tr><th class='informacion'>30 - 36</th><th class='informacion'>Your Pokémon is really strong!</th></tr><tr><th class='informacion'>23 - 29</th><th class='informacion'>Your Pokémon is pretty decent!</th></tr><tr><th class='informacion'>0 - 22</th><th class='informacion'>Your Pokémon has room for improvement as far as battling goes</th></tr><tr><td class='informacion'>Total IVs</td><td class='informacion'>Phrase</td></tr></table>");
      $("#team_phrase").html($('#team_phrase').html() + "<table style='margin-top:30px'><tr><th class='informacion'>15</th><th class='informacion'>Its stats are the best I've ever seen! No doubt about it!</th></tr><tr><th class='informacion'>13 - 14</th><th class='informacion'>Its stats are really strong! Impressive</th></tr><tr><th class='informacion'>8 - 12</th><th class='informacion'>It's definitely got some good stats. Definitely!</th></tr><tr><th class='informacion'>0 - 7</th><th class='informacion'>Its stats are all right, but kinda basic, as far as I can see</th></tr><tr><td class='informacion'>Higher IV</td><td class='informacion'>Phrase</td></tr></table>");
    }
  }
}
