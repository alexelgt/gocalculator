function Get_HP(Pokemon,IV,Level){
	HP = Math.trunc( (Pokemon.Stats[2]+IV[2]) * CP_Multiplier(Level) );
	if (HP < 10) {
    return 10
  }
  else {
    return HP
  }
}

function Get_CP() {
	/*==== Clear the output ====*/
	$("#Output_CP").html("<hr class='hrseparador'>");

	/*==== Set variables 1/2 ====*/
	var Pokemon_Name_CP = (document.getElementById("Pokemon_Name_CP").value);
	var Pokemon_Name_CP_String = Pokemon_Name_CP;
	Pokemon_Name_CP = Pokemon_Name_CP.toLowerCase();
	Pokemon_Name_CP = Input_Problematic_Pokemon(Pokemon_Name_CP);
	var Pokemon_CP = window[Pokemon_Name_CP];
	var Level = parseFloat(document.getElementById("Level_CP").valueHigh);
	/*===Set variables 1/2 ==*/

	notaneasteregg(Pokemon_Name_CP);

	/*==== Check if inputs are correct ====*/
	if (typeof Pokemon_CP == 'undefined'){
		if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
			$("#Output_CP").html($('#Output_CP').html() + "<div id='output_text'>Pokemon incorrecto.</div>");
		}
		else {
			$("#Output_CP").html($('#Output_CP').html() + "<div id='output_text'>Incorrect Pokemon.</div>");
		}
		return;
	}
	/*== Check if inputs are correct ==*/

	/*=== Set variables 2/2 ===*/
	var IV = [parseFloat(document.getElementById("IV_A").value), parseFloat(document.getElementById("IV_D").value), parseFloat(document.getElementById("IV_HP").value)];

	/*==== Get CP and HP ====*/
	var CP = CP_Formula(Pokemon_CP,IV,Level);
	var HP_CP = Get_HP(Pokemon_CP,IV,Level);
	/*== Get CP and HP ==*/

	/*=== Set output ===*/
	if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
		$("#Output_CP").html($('#Output_CP').html() + "<div id='output_text'>Los resultados obtenidos son:<h4 style='text-transform: capitalize;text-align: center'>" + Pokemon_Name_CP_String + "</h4></div>");

		$("#Output_CP").html($('#Output_CP').html() + "<table><tr><th>" + CP + "</th><th>"+ HP_CP + "</th><th>"+ Math.round((IV[0]+IV[1]+IV[2])/45*100) + "</th></tr><tr><td>PC</td><td>HP</td><td>%IV</td></tr></table>");
	}
	else {
		$("#Output_CP").html($('#Output_CP').html() + "<div id='output_text'>The results obtained are:<h4 style='text-transform: capitalize;text-align: center'>" + Pokemon_Name_CP_Raid_String + "</h4></div>");

		$("#Output_CP").html($('#Output_CP').html() + "<table><tr><th>" + CP + "</th><th>"+ HP_CP + "</th><th>"+ Math.round((IV[0]+IV[1]+IV[2])/45*100) + "</th></tr><tr><td>CP</td><td>HP</td><td>%IV</td></tr></table>");
	}
}

function Get_Candy_Dust() {
	/*==== Clear the output ====*/
	$("#Output_Candy_Dust").html("<hr class='hrseparador'>");

	/*==== Set variables 1/2 ====*/
	var Pokemon_Name_Candy_Dust = (document.getElementById("Pokemon_Name_CP").value);
	var Pokemon_Name_Candy_Dust_String = Pokemon_Name_Candy_Dust;
	Pokemon_Name_Candy_Dust = Pokemon_Name_Candy_Dust.toLowerCase();
	Pokemon_Name_Candy_Dust = Input_Problematic_Pokemon(Pokemon_Name_Candy_Dust);
	var Pokemon_Candy_Dust = window[Pokemon_Name_Candy_Dust];
	var Level_Max_Candy_Dust = parseFloat(document.getElementById("Level").valueHigh);
	var Level_Min_Candy_Dust = parseFloat(document.getElementById("Level").valueLow);
	/*===Set variables 1/2 ==*/

	notaneasteregg(Pokemon_Name_Candy_Dust);

	/*=== Set variables 2/2 ===*/
	var IV = [parseFloat(document.getElementById("IV_A").value), parseFloat(document.getElementById("IV_D").value), parseFloat(document.getElementById("IV_HP").value)];

	/*==== Get Dust and Candies ====*/
	var Dust_Cost = - Leveltostardust(Level_Max_Candy_Dust);
	var Candy_Cost = - Leveltocandy(Level_Max_Candy_Dust);

	for (var Level = Level_Min_Candy_Dust; Level <= Level_Max_Candy_Dust; Level+=0.5) {
		Dust_Cost += Leveltostardust(Level);
		Candy_Cost += Leveltocandy(Level);
	}
	/*== Get Dust and Candies ==*/

	/*=== Set output ===*/
	if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
		$("#Output_Candy_Dust").html($('#Output_Candy_Dust').html() + "<div id='output_text'>Los resultados obtenidos son:</div><div id='output_text'>El coste de caramelos es: " + Candy_Cost + "<br>El coste de polvosestelares es: " + Dust_Cost + "</div>");
	}
	else {
		$("#Output_Candy_Dust").html($('#Output_Candy_Dust').html() + "<div id='output_text'>The results obtained are:</div><div id='output_text'>The amount of candies required are: " + Candy_Cost + "<br>The amount of stardusts required are: " + Dust_Cost + "</div>");
	}

	if($("#showall_candy_dust").is(':checked')){

		/*==== Check if inputs are correct ====*/
		if (typeof Pokemon_Candy_Dust == 'undefined'){
			if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
				$("#Output_Candy_Dust").html($('#Output_Candy_Dust').html() + "<div id='output_text'>Pokemon incorrecto.</div>");
			}
			else {
				$("#Output_Candy_Dust").html($('#Output_Candy_Dust').html() + "<div id='output_text'>Incorrect Pokemon.</div>");
			}
			return;
		}
		/*== Check if inputs are correct ==*/

		/*==== Get CP and HP ====*/
			var CP_Max = CP_Formula(Pokemon_Candy_Dust,IV,Level_Max_Candy_Dust);
			var HP_CP_Max = Get_HP(Pokemon_Candy_Dust,IV,Level_Max_Candy_Dust);
			var CP_Min = CP_Formula(Pokemon_Candy_Dust,IV,Level_Min_Candy_Dust);
			var HP_CP_Min = Get_HP(Pokemon_Candy_Dust,IV,Level_Min_Candy_Dust);
			var CP_Difference = CP_Max - CP_Min;
			var HP_Difference = HP_CP_Max - HP_CP_Min;
		/*== Get CP and HP ==*/

		if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
			$("#Output_Candy_Dust").html($('#Output_Candy_Dust').html() + "<div id='output_text'><h4 style='text-transform: capitalize;text-align: center'>" + Pokemon_Name_Candy_Dust_String + "</h4></div><table><tr><th>" + CP_Max + " (+" + CP_Difference + ")</th><th>" + HP_CP_Max + " (+" + HP_Difference + ")</th><th>" + Math.round((IV[0]+IV[1]+IV[2])/45*100) + "</th></tr><tr><td>PC</td><td>HP</td><td>%IV</td></tr></table>");
		}
		else {
			$("#Output_Candy_Dust").html($('#Output_Candy_Dust').html() + "<div id='output_text'><h4 style='text-transform: capitalize;text-align: center'>" + Pokemon_Name_Candy_Dust_String + "</h4></div><table><tr><th>" + CP_Max + " (+" + CP_Difference + ")</th><th>" + HP_CP_Max + " (+" + HP_Difference + ")</th><th>" + Math.round((IV[0]+IV[1]+IV[2])/45*100) + "</th></tr><tr><td>CP</td><td>HP</td><td>%IV</td></tr></table>");
		}
	}
}

function Get_CP_Raids() {
	/*==== Clear the output ====*/
	$("#Output_CP_Raids").html("<hr class='hrseparador'>");
	$("#Output_CP_Raids_2").html("");
	$("#Output_CP_Raids_3").html("");

	/*==== Set variables 1/2 ====*/
	var Pokemon_Name_CP_Raid = (document.getElementById("Pokemon_Name_CP").value);
	var Pokemon_Name_CP_Raid_String = Pokemon_Name_CP_Raid;
	Pokemon_Name_CP_Raid = Pokemon_Name_CP_Raid.toLowerCase();
	Pokemon_Name_CP_Raid = Input_Problematic_Pokemon(Pokemon_Name_CP_Raid);
	var Pokemon_CP_Raid = window[Pokemon_Name_CP_Raid];
	/*===Set variables 1/2 ==*/

	notaneasteregg(Pokemon_Name_CP);

	/*==== Check if inputs are correct ====*/
	if (typeof Pokemon_CP_Raid == 'undefined'){
		if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
			$("#Output_CP_Raids").html($('#Output_CP_Raids').html() + "<div id='output_text'>Pokemon incorrecto.</div>");
		}
		else {
			$("#Output_CP_Raids").html($('#Output_CP_Raids').html() + "<div id='output_text'>Incorrect Pokemon.</div>");
		}
		return;
	}
	/*== Check if inputs are correct ==*/

	/*=== Set output ===*/
	if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
		$("#Output_CP_Raids").html($('#Output_CP_Raids').html() + "<div id='output_text'>Los resultados obtenidos son:<h4 style='text-transform: capitalize;text-align: center'>" + Pokemon_Name_CP_Raid_String + "</h4></div>");
	}
	else {
		$("#Output_CP_Raids").html($('#Output_CP_Raids').html() + "<div id='output_text'>The results obtained are:<h4 style='text-transform: capitalize;text-align: center'>" + Pokemon_Name_CP_Raid_String + "</h4></div>");
	}

	var Level_Raids;

	if($("#level_15").is(':checked')) {
		Level_Raids = 15;
	}
	else {
		Level_Raids = 25;
	}

	$( "#Output_CP_Raids_2" ).append( "<tr><th>15</th><th>15</th><th>15</th><th>" + CP_Formula(Pokemon_CP_Raid,[15, 15, 15],20) + "</th><th>" + CP_Formula(Pokemon_CP_Raid,[15, 15, 15],Level_Raids) + "</th><th>100</th></tr>" );


	if($("#showall_raids").is(':checked')) {
		for(var IV_Total=44; IV_Total>=31; IV_Total--) {
			for(var IV_A=15; IV_A>=10; IV_A--) {
				for(var IV_D=15; IV_D>=10; IV_D--) {
					for(var IV_HP=15; IV_HP>=10; IV_HP--) {

						if (IV_Total == IV_A + IV_D + IV_HP) {
							$( "#Output_CP_Raids_2" ).append( "<tr><th>" + IV_A + "</th><th>"+ IV_D + "</th><th>" + IV_HP + "</th><th>" + CP_Formula(Pokemon_CP_Raid,[IV_A, IV_D, IV_HP],20) + "</th><th>" + CP_Formula(Pokemon_CP_Raid,[IV_A, IV_D, IV_HP],Level_Raids) + "</th><th>" + Math.round(IV_Total/45*100) + "</th></tr>" );
						}

					}
				}
			}
		}
	}

	$( "#Output_CP_Raids_2" ).append( "<tr><th>10</th><th>10</th><th>10</th><th>" + CP_Formula(Pokemon_CP_Raid,[10, 10, 10],20) + "</th><th>" + CP_Formula(Pokemon_CP_Raid,[10, 10, 10],Level_Raids) + "</th><th>67</th></tr>" );

	if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
		$( "#Output_CP_Raids_2" ).append( "<tr><td>A</td><td>D</td><td>HP</td><td>PC N20</td><td>PC N25</td><td>%IV</td></tr>" );
	}
	else {
		$( "#Output_CP_Raids_2" ).append( "<tr><td>A</td><td>D</td><td>HP</td><td>PC L20</td><td>PC L25</td><td>%IV</td></tr>" );
	}

	if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
		$("#Output_CP_Raids_3").html($('#Output_CP_Raids_3').html() + "<div id='output_text'>Los resultados para nivel 25 son solo para Pokémon obtenidos de raids.</div>");
	}
	else {
		$("#Output_CP_Raids_3").html($('#Output_CP_Raids_3').html() + "<div id='output_text'>The results for level 25 are only for Pokémon obtained from raids.</div>");
	}

}

function Get_CP_Wild() {
	/*==== Clear the output ====*/
	$("#Output_CP_Wild").html("<hr class='hrseparador'>");
	$("#Output_CP_Wild_2").html("");

	/*==== Set variables 1/2 ====*/
	var Pokemon_Name_CP_Wild = (document.getElementById("Pokemon_Name_CP").value);
	var Pokemon_Name_CP_Wild_String = Pokemon_Name_CP_Wild;
	Pokemon_Name_CP_Wild = Pokemon_Name_CP_Wild.toLowerCase();
	Pokemon_Name_CP_Wild = Input_Problematic_Pokemon(Pokemon_Name_CP_Wild);
	var Pokemon_CP_Wild = window[Pokemon_Name_CP_Wild];
	/*===Set variables 1/2 ==*/

	notaneasteregg(Pokemon_Name_CP);

	/*==== Check if inputs are correct ====*/
	if (typeof Pokemon_CP_Wild == 'undefined'){
		if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
			$("#Output_CP_Wild").html($('#Output_CP_Wild').html() + "<div id='output_text'>Pokemon incorrecto.</div>");
		}
		else {
			$("#Output_CP_Wild").html($('#Output_CP_Wild').html() + "<div id='output_text'>Incorrect Pokemon.</div>");
		}
		return;
	}
	/*== Check if inputs are correct ==*/

	/*=== Set output ===*/
	if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
		$("#Output_CP_Wild").html($('#Output_CP_Wild').html() + "<div id='output_text'>Los resultados obtenidos son:<h4 style='text-transform: capitalize;text-align: center'>" + Pokemon_Name_CP_Wild_String + "</h4></div>");
	}
	else {
		$("#Output_CP_Wild").html($('#Output_CP_Wild').html() + "<div id='output_text'>The results obtained are:<h4 style='text-transform: capitalize;text-align: center'>" + Pokemon_Name_CP_Wild_String + "</h4></div>");
	}

	if($("#showall_wild").is(':checked')) {
		for(var Level=35; Level>=1; Level--) {
			$( "#Output_CP_Wild_2" ).append( "<tr><th>" + CP_Formula(Pokemon_CP_Wild,[15, 15, 15],Level) + "</th><th>" + Get_HP(Pokemon_CP_Wild,[15, 15, 15],Level) + "</th><th>" + Level + " (" + Leveltostardust(Level) + ")</th></tr>" );
		}
	}
	else {
		$( "#Output_CP_Wild_2" ).append( "<tr><th>" + CP_Formula(Pokemon_CP_Wild,[15, 15, 15],35) + "</th><th>" + Get_HP(Pokemon_CP_Wild,[15, 15, 15],35) + "</th><th>35 (8000)</th></tr>" );
		$( "#Output_CP_Wild_2" ).append( "<tr><th>" + CP_Formula(Pokemon_CP_Wild,[15, 15, 15],30) + "</th><th>" + Get_HP(Pokemon_CP_Wild,[15, 15, 15],30) + "</th><th>30 (5000)</th></tr>" );
	}

	if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
		$( "#Output_CP_Wild_2" ).append( "<tr><td>PC</td><td>HP</td><td>Nivel</td></tr>" );
	}
	else {
		$( "#Output_CP_Wild_2" ).append( "<tr><td>CP</td><td>HP</td><td>Level</td></tr>" );

	}

}

function Get_CP_Search() {
	/*==== Clear the output ====*/
	$("#Output_CP_Search").html("<hr class='hrseparador'>");
	$("#Output_CP_Search_2").html("");

	/*==== Set variables 1/2 ====*/
	var Pokemon_Name_CP_Search = (document.getElementById("Pokemon_Name_CP").value);
	var Pokemon_Name_CP_Search_String = Pokemon_Name_CP_Search;
	Pokemon_Name_CP_Search = Pokemon_Name_CP_Search.toLowerCase();
	Pokemon_Name_CP_Search = Input_Problematic_Pokemon(Pokemon_Name_CP_Search);
	var Pokemon_CP_Search = window[Pokemon_Name_CP_Search];
	if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
		var CP_String = "PC";
	}
	else {
		var CP_String = "CP";
	}
	/*===Set variables 1/2 ==*/

	notaneasteregg(Pokemon_Name_CP);

	/*==== Check if inputs are correct ====*/
	if (typeof Pokemon_CP_Search == 'undefined'){
		if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
			$("#Output_CP_Search").html($('#Output_CP_Search').html() + "<div id='output_text'>Pokemon incorrecto.</div>");
		}
		else {
			$("#Output_CP_Search").html($('#Output_CP_Search').html() + "<div id='output_text'>Incorrect Pokemon.</div>");
		}
		return;
	}
	/*== Check if inputs are correct ==*/

	/*=== Set output ===*/
	if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
		$("#Output_CP_Search").html($('#Output_CP_Search').html() + "<div id='output_text'>Los resultados obtenidos son:<h4 style='text-transform: capitalize;text-align: center'>" + Pokemon_Name_CP_Search_String + "</h4></div>");
	}
	else {
		$("#Output_CP_Search").html($('#Output_CP_Search').html() + "<div id='output_text'>The results obtained are:<h4 style='text-transform: capitalize;text-align: center'>" + Pokemon_Name_CP_Search_String + "</h4></div>");
	}

	$( "#Output_CP_Search_2" ).append( Pokemon_Name_CP_Search_String + "&" );
	for(var Level=40; Level>=1; Level -= 0.5) {
		$( "#Output_CP_Search_2" ).append( CP_String + CP_Formula(Pokemon_CP_Search,[15, 15, 15],Level) + "," );
	}

}

function Get_IV() {
	$("#Output_IV_1").html("<hr class='hrseparador'>");
	$("#Output_IV_2").html("");
	$("#Output_IV_3").html("");

	var Pokemon_Name_IV = (document.getElementById("Pokemon_Name_IV").value); Pokemon_Name_IV = Pokemon_Name_IV.toLowerCase();
	Pokemon_Name_IV = Input_Problematic_Pokemon(Pokemon_Name_IV);
	var Pokemon_IV = window[Pokemon_Name_IV];

	notaneasteregg(Pokemon_Name_IV);

	var HP = (document.getElementById("HP_IV").value);
	var CP = (document.getElementById("CP_IV").value);

	/*==== Check if inputs are correct 1/3 ====*/
	if (typeof Pokemon_IV == 'undefined'){
		if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
			$("#Output_IV_1").html($('#Output_IV_1').html() + "<div id='output_text'>Pokemon incorrecto.</div>");
		}
		else {
			$("#Output_IV_1").html($('#Output_IV_1').html() + "<div id='output_text'>Incorrect Pokemon.</div>");
		}
		return;
	}
	if (!HP){
		if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
			$("#Output_IV_1").html($('#Output_IV_1').html() + "<div id='output_text'>HP no establecido.</div>");
		}
		else {
			$("#Output_IV_1").html($('#Output_IV_1').html() + "<div id='output_text'>HP not set.</div>");
		}
		return;
	}
	if (!CP){
		if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
			$("#Output_IV_1").html($('#Output_IV_1').html() + "<div id='output_text'>PC no establecido.</div>");
		}
		else {
			$("#Output_IV_1").html($('#Output_IV_1').html() + "<div id='output_text'>CP not set.</div>");
		}
		return;
	}
	/*== Check if inputs are correct 1/3 ==*/

	var Stardust_IV = (document.getElementById("Stardust_IV").value);
	var Level_limits = Stardusttolevel(Stardust_IV);
	var size_Level_limits = Level_limits[1]*2-Level_limits[0]*2+1;

	var k=0;

	var HP_calculated = [];
	for(var i=0; i<size_Level_limits; i++) {
    HP_calculated[i] = new Array(17);
	}

	for (var i = Level_limits[0]*2; i <= Level_limits[1]*2; i++) {
		for (var j = 0; j <= 15; j++) {
			HP_calculated[k][j] = Math.trunc((Pokemon_IV.Stats[2]+j)*CP_Multiplier(i/2));
		}
		HP_calculated[k][16]=i/2;
		k=k+1;
	}

	k=0;
	for (var i = 0; i < size_Level_limits; i++) {
		for (var j = 0; j <= 15; j++) {
			if (HP_calculated[i][j] == HP) {
				k=k+1;
			}
		}
	}

	var number_guess=k;
	var IV_HP_guess = [];
	for(var i=0; i<number_guess; i++) {
    IV_HP_guess[i] = new Array(2);
	}

	k=0;
	for (var i = 0; i < size_Level_limits; i++) {
		for (var j = 0; j <= 15; j++) {
			if (HP_calculated[i][j] == HP) {
				IV_HP_guess[k][0] = HP_calculated[i][16];
				IV_HP_guess[k][1]=j;
				k=k+1;
			}
		}
	}

	var number_matches=0;
	for (var i = 0; i < number_guess; i++) {
		for (var j = 0; j <= 15; j++) {
			for (var k = 0; k <= 15; k++) {
				if ( CP == CP_Formula(Pokemon_IV,[j,k,IV_HP_guess[i][1]],IV_HP_guess[i][0]) ) {
					number_matches = number_matches+1;
				}
			}
		}
	}

	/*==== Check if inputs are correct 2/3 ====*/
	if (number_matches == 0){
		if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
			$("#Output_IV_1").html($('#Output_IV_1').html() + "<div id='output_text'>No se ha encontrado combinacion.</div>");
		}
		else {
			$("#Output_IV_1").html($('#Output_IV_1').html() + "<div id='output_text'>No combination found.</div>");
		}
		return;
	}
	/*== Check if inputs are correct 2/3 ==*/

	var matches = [];
	for(var i=0; i<number_matches+1; i++) {
	   matches[i] = new Array(7);
	}

	var l=1;
	for (var i = 0; i < number_guess; i++) {
		for (var j = 0; j <= 15; j++) {
			for (var k = 0; k <= 15; k++) {
				if ( CP == CP_Formula(Pokemon_IV,[j,k,IV_HP_guess[i][1]],IV_HP_guess[i][0]) ) {
					matches[l][0] = IV_HP_guess[i][0];
					matches[l][1] = j;
					matches[l][2] = k;
					matches[l][3] = IV_HP_guess[i][1];
					matches[l][4] = Math.round((matches[l][1]+matches[l][2]+matches[l][3])/45*100);
					matches[l][5] = Math.round((CP - CP_Formula(Pokemon_IV,[0,0,0],IV_HP_guess[i][0]))/(CP_Formula(Pokemon_IV,[15,15,15],IV_HP_guess[i][0]) - CP_Formula(Pokemon_IV,[0,0,0],IV_HP_guess[i][0]))*100);
					matches[l][6] = "show";
					l=l+1;
				}
			}
		}
	}

	if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
		matches[0][0]="Nivel";
	}
	else {
		matches[0][0]="Level";
	}
	matches[0][1]="A";
	matches[0][2]="D";
	matches[0][3]="HP";
	matches[0][4]="%IV";
	matches[0][5]="%PC";
	matches[0][6]="Filter";

	var hatched = (document.getElementById("hatched").value);

	if($("#hatched").is(':checked')) {
		for (var i = 1; i <= number_matches; i++) {
			if ( (matches[i][1] < 10) || (matches[i][2] < 10) || (matches[i][3] < 10) ) {
					matches[i][6] = "hide";
			}
		}
	}

	if($("#powered").is(':not(:checked)')) {
		for (var i = 1; i <= number_matches; i++) {
			if ( matches[i][0] - Math.floor(matches[i][0]) == 0.5 ) {
					matches[i][6] = "hide";
			}
		}
	}

	var Appraisal_IV_Total = (document.getElementById("Appraisal_IV_Total").value);

	if (Appraisal_IV_Total == "Appraisal_IV_Total_1") {
		for (var i = 1; i <= number_matches; i++) {
			if ( (matches[i][1] + matches[i][2] + matches[i][3] > 22) ) {
					matches[i][6] = "hide";
			}
		}
	}
	else if (Appraisal_IV_Total == "Appraisal_IV_Total_2") {
		for (var i = 1; i <= number_matches; i++) {
			if ( (matches[i][1] + matches[i][2] + matches[i][3] > 29) || (matches[i][1] + matches[i][2] + matches[i][3] < 23) ) {
					matches[i][6] = "hide";
			}
		}
	}
	else if (Appraisal_IV_Total == "Appraisal_IV_Total_3") {
		for (var i = 1; i <= number_matches; i++) {
			if ( (matches[i][1] + matches[i][2] + matches[i][3] > 36) || (matches[i][1] + matches[i][2] + matches[i][3] < 30) ) {
					matches[i][6] = "hide";
			}
		}
	}
	else if (Appraisal_IV_Total == "Appraisal_IV_Total_4") {
		for (var i = 1; i <= number_matches; i++) {
			if ( (matches[i][1] + matches[i][2] + matches[i][3] < 37) ) {
					matches[i][6] = "hide";
			}
		}
	}

	var Max_IV = [];

	for (var i = 1; i <= number_matches; i++) {
			Max_IV[i] = Math.max(matches[i][1],matches[i][2],matches[i][3]);
	}

	if( ($("#Appraisal_A").is(':checked')) || ($("#Appraisal_D").is(':checked')) || ($("#Appraisal_HP").is(':checked')) ) {
		if($("#Appraisal_A").is(':checked')){
			for (var i = 1; i <= number_matches; i++) {
				if( matches[i][1] != Max_IV[i] ){
					matches[i][6] = "hide";
				}
			}
		}

		if($("#Appraisal_D").is(':checked')){
			for (var i = 1; i <= number_matches; i++) {
				if( matches[i][2] != Max_IV[i] ){
					matches[i][6] = "hide";
				}
			}
		}

		if($("#Appraisal_HP").is(':checked')){
			for (var i = 1; i <= number_matches; i++) {
				if( matches[i][3] != Max_IV[i] ){
					matches[i][6] = "hide";
				}
			}
		}

		if($("#Appraisal_A").is(':not(:checked)')){
			for (var i = 1; i <= number_matches; i++) {
				if( matches[i][1] == Max_IV[i]){
					matches[i][6] = "hide";
				}
			}
		}

		if($("#Appraisal_D").is(':not(:checked)')){
			for (var i = 1; i <= number_matches; i++) {
				if( matches[i][2] == Max_IV[i]){
					matches[i][6] = "hide";
				}
			}
		}

		if($("#Appraisal_HP").is(':not(:checked)')){
			for (var i = 1; i <= number_matches; i++) {
				if( matches[i][3] == Max_IV[i] ){
					matches[i][6] = "hide";
				}
			}
		}

	}

	var Appraisal_IV_Higher = (document.getElementById("Appraisal_IV_Higher").value);

	if (Appraisal_IV_Higher == "Appraisal_IV_Higher_1") {
		for (var i = 1; i <= number_matches; i++) {
			if ( (Max_IV[i] > 7) ) {
				matches[i][6] = "hide";
			}
		}
	}
	else if (Appraisal_IV_Higher == "Appraisal_IV_Higher_2") {
		for (var i = 1; i <= number_matches; i++) {
			if ( (Max_IV[i] > 12) || (Max_IV[i] < 8) ) {
				matches[i][6] = "hide";
			}
		}
	}
	else if (Appraisal_IV_Higher == "Appraisal_IV_Higher_3") {
		for (var i = 1; i <= number_matches; i++) {
			if ( (Max_IV[i] > 14) || (Max_IV[i] < 13) ) {
				matches[i][6] = "hide";
			}
		}
	}
	else if (Appraisal_IV_Higher == "Appraisal_IV_Higher_4") {
		for (var i = 1; i <= number_matches; i++) {
			if ( (Max_IV[i] < 15) ) {
				matches[i][6] = "hide";
			}
		}
	}

	/*==== Check if inputs are correct 3/3 ====*/
	var showlist = 0;
	for (var i = 1; i <= number_matches; i++) {
		if ( (matches[i][6] == "show") ) {
			showlist = 1;break;
		}
	}

	if (showlist == 0){
		if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
			$("#Output_IV_1").html($('#Output_IV_1').html() + "<div id='output_text'>No se ha encontrado combinacion.</div>");
		}
		else {
			$("#Output_IV_1").html($('#Output_IV_1').html() + "<div id='output_text'>No combination found.</div>");
		}
		return;
	}
	/*== Check if inputs are correct 3/3 ==*/

	if (Pokemon_IV.Evolutions != null) {
		var Pokemon_Evolutions = [];
		for (var i = 0; i < Pokemon_IV.Evolutions.length; i++) {
			Pokemon_Evolutions[i] = window[Pokemon_IV.Evolutions[i]];
		}

		var CP_Evolutions = [];
		for(var i=0; i<number_matches+1; i++) {
		   CP_Evolutions[i] = new Array(Pokemon_IV.Evolutions.length);
		}

		for (var i = 0; i < Pokemon_IV.Evolutions.length; i++) {
			if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
				CP_Evolutions[0][i] = "PC " + Pokemon_IV.Evolutions[i];
			}
			else {
				CP_Evolutions[0][i] = "CP " + Pokemon_IV.Evolutions[i];
			}
		}

		for (var i = 1; i < number_matches+1; i++) {
			for (var j = 0; j < Pokemon_IV.Evolutions.length; j++) {
				CP_Evolutions[i][j] = CP_Formula(Pokemon_Evolutions[j],[matches[i][1],matches[i][2],matches[i][3]],matches[i][0]);
			}
		}
	}

	// mostrar
	if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
		$("#Output_IV_1").html($('#Output_IV_1').html() + "<div id='output_text'>Los resultados obtenidos son:</div>");
	}
	else {
		$("#Output_IV_1").html($('#Output_IV_1').html() + "<div id='output_text'>The results obtained are:</div>");
	}

	for (var i = 1; i <= number_matches; i++) {
		if ( matches[i][6] != "hide" ) {
			$( "#Output_IV_2" ).append( "<tr>" );
			for (var j = 0; j < 5; j++) {
				$( "#Output_IV_2" ).append( "<th>" + matches[i][j] + "</th>");
			}
			$( "#Output_IV_2" ).append( "<th id='ultimo'>" + matches[i][5] + "</th>");
		}
		$( "#Output_IV_2" ).append( "</tr>" );
	}

	$( "#Output_IV_2" ).append( "<tr>" );
	for (var j = 0; j < 6; j++) {
		$( "#Output_IV_2" ).append( "<td>" + matches[0][j] + "</td>");
	}
	$( "#Output_IV_2" ).append( "</tr>" );

	if (Pokemon_IV.Evolutions != null ) {

		var Max_CP_Evolutions = [];
		var Min_CP_Evolutions = [];
		var set_number;
		var set_min_number;
		var set_max_number;
		var CP_p_min;
		var CP_p_max;

		for (var i = 0; i < Pokemon_IV.Evolutions.length; i++) {
			for (var j = 1; j <= number_matches; j++) {
				if (matches[j][6] != "hide") {
					Min_CP_Evolutions[i] = CP_Evolutions[j][i];
					Max_CP_Evolutions[i] = CP_Evolutions[j][i];
					set_number = j;
					set_min_number = j;
					set_max_number = j;
					break;
				}
			}

			for (var j = set_number; j <= number_matches; j++) {
				if (CP_Evolutions[j][i] > Max_CP_Evolutions[i] && matches[j][6] != "hide") {
					Max_CP_Evolutions[i] = CP_Evolutions[j][i];
					set_max_number = j;
				}
				if (CP_Evolutions[j][i] < Min_CP_Evolutions[i] && matches[j][6] != "hide") {
					Min_CP_Evolutions[i] = CP_Evolutions[j][i];
					set_min_number = j;
				}
			}
		}

		for (var l = 0; l < Pokemon_IV.Evolutions.length; l++) {
			CP_p_min = Math.round((Min_CP_Evolutions[l] - CP_Formula(window[Pokemon_IV.Evolutions[l]],[0,0,0],matches[set_min_number][0]))/(CP_Formula(window[Pokemon_IV.Evolutions[l]],[15,15,15],matches[set_min_number][0]) - CP_Formula(window[Pokemon_IV.Evolutions[l]],[0,0,0],matches[set_min_number][0]))*100);
			CP_p_max = Math.round((Max_CP_Evolutions[l] - CP_Formula(window[Pokemon_IV.Evolutions[l]],[0,0,0],matches[set_max_number][0]))/(CP_Formula(window[Pokemon_IV.Evolutions[l]],[15,15,15],matches[set_max_number][0]) - CP_Formula(window[Pokemon_IV.Evolutions[l]],[0,0,0],matches[set_max_number][0]))*100);
			if (Min_CP_Evolutions[l] != Max_CP_Evolutions[l]) {
				$( "#Output_IV_3" ).append( "<table><tr><th>" + Min_CP_Evolutions[l] + " (" + CP_p_min + "%)" + " - " + Max_CP_Evolutions[l]+ " (" + CP_p_max + "%)" + "</th></tr><tr><td>" + CP_Evolutions[0][l] + "</td></tr></table>");
			}
			else {
					$( "#Output_IV_3" ).append( "<table><tr><th>" + Min_CP_Evolutions[l] + " (" + CP_p_min + "%)" + "</th></tr><tr><td>" + CP_Evolutions[0][l] + "</td></tr></table>");
			}
		}
	}
}
