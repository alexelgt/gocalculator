/*==== Search codes ====*/
function Get_CP_Check_Filter(Filter,IV_A,IV_D,IV_HP, max_IV_Atk, max_IV_Def, max_IV_HP, total_IVs) {
	if ( Filter == "100%" || Filter == "0%") {
		if ( (IV_A+IV_D+IV_HP) >= total_IVs) {
			return 1;
		}
	}
	else if ( Filter == "98% 15A" || Filter == "96% 15A" || Filter == "93% 15A" || Filter == "91% 15A" || Filter == "91% 15A 14HP" || Filter == "93% 15A ≥14HP" || Filter == "96% 15A ≥14HP") {
		if ( (IV_A+IV_D+IV_HP) >= total_IVs && IV_A == max_IV_Atk) {
			return 1;
		}
	}
	else if ( Filter == "98%" || Filter == "96%") {
		if ( (IV_A+IV_D+IV_HP) >= total_IVs) {
			return 1;
		}
	}
}

function Get_CP_Search() {
	/*==== Clear the output ====*/
	$("#Output_CP_Search").html("<hr class='hrseparador'>");
	$("#Output_CP_Search_2").html("");

	/*==== Set variables ====*/
	var Pokemon_Name_CP_Search = (document.getElementById("Pokemon_CombatPower").value);
	var Pokemon_Name_CP_Search_String = Pokemon_Name_CP_Search;
	Pokemon_Name_CP_Search = Pokemon_Name_CP_Search.toLowerCase();
	Pokemon_Name_CP_Search = inputProblematicPokemon(Pokemon_Name_CP_Search);
	var Pokemon_CP_Search = window[Pokemon_Name_CP_Search];
	if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
		var CP_String = "PC";
		var HP_String = "puntos de salud";
	}
	else {
		var CP_String = "CP";
		var HP_String = "hp";
	}
	/*===Set variables ==*/

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

	var total_IVs;
	var min_IV;
	var max_IV;
	var max_IV_Atk;
	var max_IV_Def;
	var max_IV_HP;
	if ( (document.getElementById("CP_Search_IVs_Filter").value) == "100%") {
		total_IVs = 45;
		max_IV = 15;

		min_IV_Atk = 15;
		min_IV_Def = 15;
		min_IV_HP = 15;
	}
	if ( (document.getElementById("CP_Search_IVs_Filter").value) == "0%") {
		total_IVs = 0;
		max_IV = 0;

		min_IV_Atk = 0;
		min_IV_Def = 0;
		min_IV_HP = 0;
	}
	else if ( (document.getElementById("CP_Search_IVs_Filter").value) == "98% 15A") {
		total_IVs = 44;
		max_IV_Atk = 15;
		max_IV = 15;

		min_IV_Atk = 15;
		min_IV_Def = 14;
		min_IV_HP = 14;
	}
	else if ( (document.getElementById("CP_Search_IVs_Filter").value) == "98%") {
		total_IVs = 44;
		max_IV = 15;

		min_IV_Atk = 14;
		min_IV_Def = 14;
		min_IV_HP = 14;
	}
	else if ( (document.getElementById("CP_Search_IVs_Filter").value) == "96% 15A") {
		total_IVs = 43;
		max_IV_Atk = 15;
		max_IV = 15;

		min_IV_Atk = 15;
		min_IV_Def = 13;
		min_IV_HP = 13;
	}
	else if ( (document.getElementById("CP_Search_IVs_Filter").value) == "96%") {
		total_IVs = 43;
		max_IV = 15;

		min_IV_Atk = 13;
		min_IV_Def = 13;
		min_IV_HP = 13;
	}
	else if ( (document.getElementById("CP_Search_IVs_Filter").value) == "96% 15A ≥14HP") {
		total_IVs = 43;
		max_IV_Atk = 15;
		max_IV = 15;

		min_IV_Atk = 15;
		min_IV_Def = 13;
		min_IV_HP = 14;
	}
	else if ( (document.getElementById("CP_Search_IVs_Filter").value) == "93% 15A") {
		total_IVs = 42;
		max_IV_Atk = 15;
		max_IV = 15;

		min_IV_Atk = 15;
		min_IV_Def = 12;
		min_IV_HP = 12;
	}
	else if ( (document.getElementById("CP_Search_IVs_Filter").value) == "93% 15A ≥14HP") {
		total_IVs = 42;
		max_IV_Atk = 15;
		max_IV = 15;

		min_IV_Atk = 15;
		min_IV_Def = 12;
		min_IV_HP = 14;
	}
	else if ( (document.getElementById("CP_Search_IVs_Filter").value) == "91% 15A") {
		total_IVs = 41;
		max_IV_Atk = 15;
		max_IV = 15;

		min_IV_Atk = 15;
		min_IV_Def = 11;
		min_IV_HP = 11;
	}
	else if ( (document.getElementById("CP_Search_IVs_Filter").value) == "91% 15A 14HP") {
		total_IVs = 41;
		max_IV_Atk = 15;
		max_IV = 15;

		min_IV_Atk = 15;
		min_IV_Def = 11;
		min_IV_HP = 14;
	}

	/*==== Set output ====*/
	if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
		$("#Output_CP_Search").html($('#Output_CP_Search').html() + "<div id='output_text'>Los resultados obtenidos son:<h4 style='text-transform: capitalize;text-align: center'>" + Pokemon_Name_CP_Search_String + "</h4></div>");
	}
	else {
		$("#Output_CP_Search").html($('#Output_CP_Search').html() + "<div id='output_text'>The results obtained are:<h4 style='text-transform: capitalize;text-align: center'>" + Pokemon_Name_CP_Search_String + "</h4></div>");
	}

	var cp_search_code = "";
	cp_search_code += Pokemon_CP_Search.Pokedex_number + "&";

	/*==== Get the search code ====*/
	contador_CP_values = 0;
	var CP_values = [];
	var HP_values = [];
	for(var Level=35; Level>=1; Level -= 1) {

		for (var i = max_IV; i >= min_IV_Atk; i--) {
			for (var j = max_IV; j >= min_IV_Def; j--) {
				for (var k = max_IV; k >= min_IV_HP; k--) {

					var condicion_CP_Search_filter = Get_CP_Check_Filter((document.getElementById("CP_Search_IVs_Filter").value), i, j, k, max_IV_Atk, max_IV_Def, max_IV_HP, total_IVs);

					if ( condicion_CP_Search_filter == 1) {
						CP_values[contador_CP_values] = CP_Formula(Pokemon_CP_Search,[i, j, k],Level);
						HP_values[contador_CP_values] = GetHP(Pokemon_CP_Search,[i, j, k],Level);
						contador_CP_values++;
					}
				}
			}
		}
	}

	CP_values.sort(function(a, b) {
			return parseFloat(b) - parseFloat(a);
	});

	HP_values.sort(function(a, b) {
			return parseFloat(b) - parseFloat(a);
	});

	CP_values_norepeated = [];
	CP_values_norepeated = Stat_values_filter_norepeated(CP_values);


	HP_values_norepeated = [];
	HP_values_norepeated = Stat_values_filter_norepeated(HP_values);

	var cp_min = CP_values_norepeated[0];
	var cp_max = CP_values_norepeated[0];
	for (var i = 1; i < CP_values_norepeated.length; i++) {

		if (CP_values_norepeated[i-1] - CP_values_norepeated[i] == 1) {
			cp_min = CP_values_norepeated[i];
		}
		if (CP_values_norepeated[i-1] - CP_values_norepeated[i] > 1) {
			if (cp_max == cp_min) {
				cp_search_code += CP_String + cp_min + ",";
			}
			else {
				cp_search_code += CP_String + cp_max + "-" + cp_min + ",";
			}
			cp_min = CP_values_norepeated[i];
			cp_max = CP_values_norepeated[i];
		}
	}
	if (CP_values_norepeated[CP_values_norepeated.length-2] - CP_values_norepeated[CP_values_norepeated.length - 1] > 1) {
		cp_search_code += CP_String + CP_values_norepeated[CP_values_norepeated.length - 1]  + "&";
	}
	else {
		cp_search_code += CP_String + CP_values_norepeated[CP_values_norepeated.length - 2] + "-" + CP_values_norepeated[CP_values_norepeated.length - 1]  + "&";
	}

	var hp_min = HP_values_norepeated[0];
	var hp_max = HP_values_norepeated[0];
	for (var i = 1; i < HP_values_norepeated.length; i++) {

		if (HP_values_norepeated[i-1] - HP_values_norepeated[i] == 1) {
			hp_min = HP_values_norepeated[i];
		}
		if (HP_values_norepeated[i-1] - HP_values_norepeated[i] > 1) {
			if (hp_max == hp_min) {
				cp_search_code += HP_String + hp_min + ",";
			}
			else {
				cp_search_code += HP_String + hp_max + "-" + hp_min + ",";
			}
			hp_min = HP_values_norepeated[i];
			hp_max = HP_values_norepeated[i];
		}
	}
	if (HP_values_norepeated[HP_values_norepeated.length-2] - HP_values_norepeated[HP_values_norepeated.length - 1] > 1) {
		cp_search_code += HP_String + HP_values_norepeated[HP_values_norepeated.length - 1];
	}
	else {
		cp_search_code += HP_String + HP_values_norepeated[HP_values_norepeated.length - 2] + "-" + HP_values_norepeated[HP_values_norepeated.length - 1];
	}
	document.getElementById("Output_CP_Search_2").value = cp_search_code;
	/*== Get the search code ==*/
	/*== Set output ==*/
}
/*== Search codes ==*/

/*==== CP raids and eggs ====*/
function Get_CP_Raids() {
	/*==== Clear the output ====*/
	$("#Output_CP_Raids").html("<hr class='hrseparador'>");
	$("#Output_CP_Raids_2").html("");
	$("#Output_CP_Raids_3").html("");

	/*==== Set variables 1/2 ====*/
	var Pokemon_Name_CP_Raid = (document.getElementById("Pokemon_CombatPower").value);
	var Pokemon_Name_CP_Raid_String = Pokemon_Name_CP_Raid;
	Pokemon_Name_CP_Raid = Pokemon_Name_CP_Raid.toLowerCase();
	Pokemon_Name_CP_Raid = inputProblematicPokemon(Pokemon_Name_CP_Raid);
	var Pokemon_CP_Raid = window[Pokemon_Name_CP_Raid];
	/*===Set variables 1/2 ==*/

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
		$( "#Output_CP_Raids_2" ).append( "<tr><td>A</td><td>D</td><td>HP</td><td>PC N20</td><td>PC N" + Level_Raids + "</td><td>%IV</td></tr>" );
	}
	else {
		$( "#Output_CP_Raids_2" ).append( "<tr><td>A</td><td>D</td><td>HP</td><td>PC L20</td><td>PC L" + Level_Raids + "</td><td>%IV</td></tr>" );
	}

	if($("#level_15").is(':checked')) {
		if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
			$("#Output_CP_Raids_3").html($('#Output_CP_Raids_3').html() + "<div id='output_text'>Los resultados para nivel 15 son solo para Pokémon obtenidos de investigaciones.</div>");
		}
		else {
			$("#Output_CP_Raids_3").html($('#Output_CP_Raids_3').html() + "<div id='output_text'>The results for level 15 are only for Pokémon obtained from researches.</div>");
		}
	}
	else {
		if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
			$("#Output_CP_Raids_3").html($('#Output_CP_Raids_3').html() + "<div id='output_text'>Los resultados para nivel 25 son solo para Pokémon obtenidos de raids.</div>");
		}
		else {
			$("#Output_CP_Raids_3").html($('#Output_CP_Raids_3').html() + "<div id='output_text'>The results for level 25 are only for Pokémon obtained from raids.</div>");
		}
	}

}
/*== CP raids and eggs ==*/

/*==== Wild perfect CP ====*/
function Get_CP_Wild() {
	/*==== Clear the output ====*/
	$("#Output_CP_Wild").html("<hr class='hrseparador'>");
	$("#Output_CP_Wild_2").html("");

	/*==== Set variables 1/2 ====*/
	var Pokemon_Name_CP_Wild = (document.getElementById("Pokemon_CombatPower").value);
	var Pokemon_Name_CP_Wild_String = Pokemon_Name_CP_Wild;
	Pokemon_Name_CP_Wild = Pokemon_Name_CP_Wild.toLowerCase();
	Pokemon_Name_CP_Wild = inputProblematicPokemon(Pokemon_Name_CP_Wild);
	var Pokemon_CP_Wild = window[Pokemon_Name_CP_Wild];
	/*===Set variables 1/2 ==*/

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
			$( "#Output_CP_Wild_2" ).append( "<tr><th>" + CP_Formula(Pokemon_CP_Wild,[15, 15, 15],Level) + "</th><th>" + GetHP(Pokemon_CP_Wild,[15, 15, 15],Level) + "</th><th>" + Level + " (" + LevelToStardust(Level) + ")</th></tr>" );
		}
	}
	else {
		$( "#Output_CP_Wild_2" ).append( "<tr><th>" + CP_Formula(Pokemon_CP_Wild,[15, 15, 15],35) + "</th><th>" + GetHP(Pokemon_CP_Wild,[15, 15, 15],35) + "</th><th>35 (8000)</th></tr>" );
		$( "#Output_CP_Wild_2" ).append( "<tr><th>" + CP_Formula(Pokemon_CP_Wild,[15, 15, 15],30) + "</th><th>" + GetHP(Pokemon_CP_Wild,[15, 15, 15],30) + "</th><th>30 (5000)</th></tr>" );
	}

	if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
		$( "#Output_CP_Wild_2" ).append( "<tr><td>PC</td><td>HP</td><td>Nivel</td></tr>" );
	}
	else {
		$( "#Output_CP_Wild_2" ).append( "<tr><td>CP</td><td>HP</td><td>Level</td></tr>" );

	}

}
/*== Wild perfect CP ==*/

/*==== Calculate CP ====*/
function Get_CP() {
	/*==== Clear the output ====*/
	$("#Output_CP").html("<hr class='hrseparador'>");

	/*==== Set variables 1/2 ====*/
	var Pokemon_Name_CP = (document.getElementById("Pokemon_CombatPower").value);
	var Pokemon_Name_CP_String = Pokemon_Name_CP;
	Pokemon_Name_CP = Pokemon_Name_CP.toLowerCase();
	Pokemon_Name_CP = inputProblematicPokemon(Pokemon_Name_CP);
	var Pokemon_CP = window[Pokemon_Name_CP];
	var Level = parseFloat(document.getElementById("Level_CP").valueHigh);
	/*===Set variables 1/2 ==*/

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
	var HP_CP = GetHP(Pokemon_CP,IV,Level);
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
/*== Calculate CP ==*/

/*==== Candies and stardusts cost ====*/
function Get_Candy_Dust() {
	/*==== Clear the output ====*/
	$("#Output_Candy_Dust").html("<hr class='hrseparador'>");

	/*==== Set variables 1/2 ====*/
	var Pokemon_Name_Candy_Dust = (document.getElementById("Pokemon_CombatPower").value);
	var Pokemon_Name_Candy_Dust_String = Pokemon_Name_Candy_Dust;
	Pokemon_Name_Candy_Dust = Pokemon_Name_Candy_Dust.toLowerCase();
	Pokemon_Name_Candy_Dust = inputProblematicPokemon(Pokemon_Name_Candy_Dust);
	var Pokemon_Candy_Dust = window[Pokemon_Name_Candy_Dust];
	var Level_Max_Candy_Dust = parseFloat(document.getElementById("Level").valueHigh);
	var Level_Min_Candy_Dust = parseFloat(document.getElementById("Level").valueLow);
	/*===Set variables 1/2 ==*/

	/*=== Set variables 2/2 ===*/
	var IV = [parseFloat(document.getElementById("IV_A").value), parseFloat(document.getElementById("IV_D").value), parseFloat(document.getElementById("IV_HP").value)];

	/*==== Get Dust and Candies ====*/
	var Dust_Cost = - LevelToStardust(Level_Max_Candy_Dust);
	var Candy_Cost = - LevelToCandy(Level_Max_Candy_Dust);

	for (var Level = Level_Min_Candy_Dust; Level <= Level_Max_Candy_Dust; Level+=0.5) {
		Dust_Cost += LevelToStardust(Level);
		Candy_Cost += LevelToCandy(Level);
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
			var HP_CP_Max = GetHP(Pokemon_Candy_Dust,IV,Level_Max_Candy_Dust);
			var CP_Min = CP_Formula(Pokemon_Candy_Dust,IV,Level_Min_Candy_Dust);
			var HP_CP_Min = GetHP(Pokemon_Candy_Dust,IV,Level_Min_Candy_Dust);
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
/*== Candies and stardusts cost ==*/