function Get_ATK(Pokemon,IV,Level){
	ATK = ( (Pokemon.Stats[0]+IV[0]) * CP_Multiplier(Level) );
  return ATK
}

function Get_DEF(Pokemon,IV,Level){
	ATK = ( (Pokemon.Stats[1]+IV[1]) * CP_Multiplier(Level) );
  return ATK
}

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
	var Pokemon_Name_CP = (document.getElementById("Pokemon_CombatPower").value);
	var Pokemon_Name_CP_String = Pokemon_Name_CP;
	Pokemon_Name_CP = Pokemon_Name_CP.toLowerCase();
	Pokemon_Name_CP = Input_Problematic_Pokemon(Pokemon_Name_CP);
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
	var Pokemon_Name_Candy_Dust = (document.getElementById("Pokemon_CombatPower").value);
	var Pokemon_Name_Candy_Dust_String = Pokemon_Name_Candy_Dust;
	Pokemon_Name_Candy_Dust = Pokemon_Name_Candy_Dust.toLowerCase();
	Pokemon_Name_Candy_Dust = Input_Problematic_Pokemon(Pokemon_Name_Candy_Dust);
	var Pokemon_Candy_Dust = window[Pokemon_Name_Candy_Dust];
	var Level_Max_Candy_Dust = parseFloat(document.getElementById("Level").valueHigh);
	var Level_Min_Candy_Dust = parseFloat(document.getElementById("Level").valueLow);
	/*===Set variables 1/2 ==*/

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
	var Pokemon_Name_CP_Raid = (document.getElementById("Pokemon_CombatPower").value);
	var Pokemon_Name_CP_Raid_String = Pokemon_Name_CP_Raid;
	Pokemon_Name_CP_Raid = Pokemon_Name_CP_Raid.toLowerCase();
	Pokemon_Name_CP_Raid = Input_Problematic_Pokemon(Pokemon_Name_CP_Raid);
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

function Get_CP_Wild() {
	/*==== Clear the output ====*/
	$("#Output_CP_Wild").html("<hr class='hrseparador'>");
	$("#Output_CP_Wild_2").html("");

	/*==== Set variables 1/2 ====*/
	var Pokemon_Name_CP_Wild = (document.getElementById("Pokemon_CombatPower").value);
	var Pokemon_Name_CP_Wild_String = Pokemon_Name_CP_Wild;
	Pokemon_Name_CP_Wild = Pokemon_Name_CP_Wild.toLowerCase();
	Pokemon_Name_CP_Wild = Input_Problematic_Pokemon(Pokemon_Name_CP_Wild);
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





function Stat_values_filter_norepeated(Stat_values_array) {
	var contador_Stat_values_norepeated = 1;
	Stat_values_array_norepeated = [];
	Stat_values_array_norepeated[0] = Stat_values_array[0];

	for (var i = 1; i < Stat_values_array.length; i++) {
		if (Stat_values_array[i] != Stat_values_array[i-1]) {
			Stat_values_array_norepeated[contador_Stat_values_norepeated] = Stat_values_array[i];
			contador_Stat_values_norepeated++;
		}
	}
	return Stat_values_array_norepeated
}







function Get_CP_Search() {
	/*==== Clear the output ====*/
	$("#Output_CP_Search").html("<hr class='hrseparador'>");
	$("#Output_CP_Search_2").html("");

	/*==== Set variables ====*/
	var Pokemon_Name_CP_Search = (document.getElementById("Pokemon_CombatPower").value);
	var Pokemon_Name_CP_Search_String = Pokemon_Name_CP_Search;
	Pokemon_Name_CP_Search = Pokemon_Name_CP_Search.toLowerCase();
	Pokemon_Name_CP_Search = Input_Problematic_Pokemon(Pokemon_Name_CP_Search);
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
						HP_values[contador_CP_values] = Get_HP(Pokemon_CP_Search,[i, j, k],Level);
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

function PVP_Stats_Quality(Atk,Def,HP){
	return Math.trunc(Atk*Def*HP)
}

function PVP_Stats_Quality_percentage(Max,Min,Value){
	//return (Value - Min) / (Max - Min)
	return (Value / Max)
}

function check_filter(filter_value,PVP_Stats_array){
	var rows_checked_filter = 0;
	for (var i = 0; i < PVP_Stats_array.length; i++) {
		if ( PVP_Stats_Quality_percentage(PVP_Stats_array[0][4],PVP_Stats_array[PVP_Stats_array.length - 1][4],PVP_Stats_array[i][4]) > filter_value) {
			rows_checked_filter++;
		}
		else {break;}
	}
	return rows_checked_filter
}

var Pokemon_Stats_PVP_csv = "";
var Pokemon_Set_PVP_CSV_global;
var file_name_league;

function Get_PVP_Stats(csv_mode) {

	/*==== Set variables 1/2 ====*/
	var code_filter = 0.99; // filter applied to generate the code. In orther to generate useful codes is has to be really high due to false positives
	var display_filter = 0.95; //filter that determines what is considered good quality. Kind of arbitrary value and hence the name

	if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
		var CP_String = "PC";
		var HP_String = "puntos de salud";
		var Stats_string = "Estadisticas";
		var CSV_search_string = "Codigos de busqueda para calidades superiores a " + code_filter*100.0 + "%";
	}
	else {
		var CP_String = "CP";
		var HP_String = "hp";
		var Stats_string = "Stats";
		var CSV_search_string = "Search code for qualities higher than " + code_filter*100.0 + "%";
	}

	var total_number_pokemon;
	var Pokemon_Set_PVP_CSV;
	var contador_pokemon_validos = 0;
	/*== Set variables 1/2 ==*/

	if (csv_mode == 0) {
		/*==== Clear the output ====*/
		$("#Output_PVP_Stats").html("<hr class='hrseparador'>");
		$("#Output_PVP_Stats_2").html("");
		$("#Output_PVP_Stats_3").html("");
		$("#Output_PVP_Stats_4").html("");
		$("#Output_PVP_Stats_5").html("");
		$("#Output_PVP_Stats_6").html("");
		$("#Output_PVP_Stats_textarea").html("");
		Pokemon_Stats_PVP_csv = "IVs,Level,Stats Product,Percentage 1,Percentage 2\n";
 
		/*== Clear the output ==*/

		/*==== Set variables 2/2 ====*/
		/*==== Set PVP League ====*/
		if (document.getElementById("PVP_Stats_Liga").value == "Super") {League_CP_Limit = 1500;}
		else if (document.getElementById("PVP_Stats_Liga").value == "Ultra") {League_CP_Limit = 2500;}
		else if (document.getElementById("PVP_Stats_Liga").value == "Master") {League_CP_Limit = null;}

		file_name_league;
		if (League_CP_Limit == 1500) {
			file_name_league= "super";
		}
		else if (League_CP_Limit == 2500) {
			file_name_league= "ultra";
		}
		else if (League_CP_Limit == null) {
			file_name_league= "master";
		}
		/*== Set PVP League ==*/

		/*==== Set PVP Pokemon ====*/
		Pokemon_Set_PVP_CSV = (document.getElementById("Pokemon_PVP").value);
		total_number_pokemon = 1;
		/*== Set PVP Pokemon ==*/
		var min_IV = document.getElementById("PVP_Stats_Min_IV").value;
		/*== Set variables 2/2 ==*/
	}
	else if (csv_mode == 1) {
		/*=== Clear the output ===*/
		$("#Output_PVP_CSV").html("");

		/*==== Set variables 2/2 ====*/
		/*==== Set PVP League ====*/
		if (document.getElementById("PVP_CSV_Liga").value == "Super") {League_CP_Limit = 1500;}
		else if (document.getElementById("PVP_CSV_Liga").value == "Ultra") {League_CP_Limit = 2500;}
		else if (document.getElementById("PVP_CSV_Liga").value == "Master") {League_CP_Limit = null;}
		/*== Set PVP League ==*/

		/*==== Set PVP Pokemon ====*/
		if ((document.getElementById("PVP_CSV_Included_Pokemon").value) == "Manual") {
			if (document.getElementById("Output_PVP_CSV_textarea").value == "") {
				if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
					$("#Output_PVP_CSV").html($('#Output_PVP_CSV').html() + "<div id='output_text'>Ningún Pokémon introducido.</div>");
				}
				else {
					$("#Output_PVP_CSV").html($('#Output_PVP_CSV').html() + "<div id='output_text'>No Pokémon introduced.</div>");
				}
				return;
			}
			Pokemon_Set_PVP_CSV = document.getElementById("Output_PVP_CSV_textarea").value.split(',');
		}
		else if ((document.getElementById("PVP_CSV_Included_Pokemon").value) == "Tempest") {
			Pokemon_Set_PVP_CSV = ["Lapras","Sealeo","Altaria","Skarmory","Charizard","Tropius","Abomasnow","Whiscash","Lanturn","Quagsire","Marshtomp","Glalie","Froslass", "Sandslash Alola","Mantine","Magneton","Drifblim"];
		}
		else if ((document.getElementById("PVP_CSV_Included_Pokemon").value) == "Kingdom") {
			Pokemon_Set_PVP_CSV = ["Lapras","Lucario","Bastiodon","Sealeo","Walrein","Flygon","Steelix","Marowak Alola","Melmetal","Blaziken","Empoleon","Typhlosion","Charizard","Dragonair","Altaria","Skarmory","Ninetales","Shelgon","Piloswine","Magneton"];
		}
		else if ((document.getElementById("PVP_CSV_Included_Pokemon").value) == "Nightmare") {
			Pokemon_Set_PVP_CSV = ["Spiritomb","Skuntank","Toxicroak","Lucario","Machoke","Machamp","Raichu Alola","Shiftry","Muk Alola","Grimer Alola","Primeape","Poliwrath","Umbreon","Hitmonchan","Hitmontop","Xatu","Heracross","Drapion","Gallade","Gardevoir","Hypno","Raticate Alola","Breloom","Hariyama","Crawdaunt","Alakazam","Murkrow","Honchkrow","Metang","Metagross","Wobbuffet"];
		}

		if ( ((document.getElementById("PVP_CSV_Included_Pokemon").value) == "Tempest") || ((document.getElementById("PVP_CSV_Included_Pokemon").value) == "Kingdom") || (document.getElementById("PVP_CSV_Included_Pokemon").value) == "Nightmare" ) {
			$("#Output_PVP_CSV_textarea").html("");
			for (var i = 0; i < Pokemon_Set_PVP_CSV.length - 1; i++) {
				$( "#Output_PVP_CSV_textarea" ).append( Pokemon_Set_PVP_CSV[i] + "," );
			}
			$( "#Output_PVP_CSV_textarea" ).append( Pokemon_Set_PVP_CSV[Pokemon_Set_PVP_CSV.length - 1]);
		}

		total_number_pokemon = Pokemon_Set_PVP_CSV.length;
		/*== Set PVP Pokemon ==*/
		var min_IV = document.getElementById("PVP_Stats_Min_IV_csv").value;
		/*== Set variables 2/2 ==*/

		if (navigator.language = "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
			$("#Output_PVP_CSV").html($('#Output_PVP_CSV').html() + "<div id='output_text'>Se van a analizar " + total_number_pokemon + " Pokémon:");
		}
		else {
			$("#Output_PVP_CSV").html($('#Output_PVP_CSV').html() + "<div id='output_text'>" + total_number_pokemon + " Pokémon are going to be analyzed:");
		}

		/*=== Head of the variable that contains the data of the csv file ===*/
		var csv_data = [["Pokemon", "IVs 1", Stats_string + " 1", CP_String + " 1",  "IVs 2", Stats_string + " 2", CP_String + " 2",  "IVs  3", Stats_string + " 3", CP_String + " 3", CSV_search_string]];
	}

	/*==== Core of the function ====*/
	for (var number_pokemon = 0; number_pokemon < total_number_pokemon; number_pokemon++) {

		if (csv_mode == 0) {
			var Pokemon_Name_PVP_Stats = Pokemon_Set_PVP_CSV;
		}
		else if (csv_mode == 1) {
			var Pokemon_Name_PVP_Stats = Pokemon_Set_PVP_CSV[number_pokemon];
		}

		var Pokemon_Name_PVP_Stats_String = Pokemon_Name_PVP_Stats;
		Pokemon_Name_PVP_Stats = Pokemon_Name_PVP_Stats.toLowerCase();
		Pokemon_Name_PVP_Stats = Input_Problematic_Pokemon(Pokemon_Name_PVP_Stats);
		var Pokemon_PVP_Stats = window[Pokemon_Name_PVP_Stats];

		/*==== Handle if the Pokemon is incorrect ====*/
		if (typeof Pokemon_PVP_Stats == 'undefined'){
			if (csv_mode == 0) {
				if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
					$("#Output_PVP_Stats").html($('#Output_PVP_Stats').html() + "<div id='output_text'>Pokemon incorrecto.</div>");
				}
				else {
					$("#Output_PVP_Stats").html($('#Output_PVP_Stats').html() + "<div id='output_text'>Incorrect Pokemon.</div>");
				}
				return;
			}
		}
		/*== Handle if the Pokemon is incorrect ==*/
		/*=== If Pokemon is correct then keep going ===*/
		else {
			contador_pokemon_validos++;

			/*==== Set IVs and best level combinations ====*/
			var Pokemon_Stats_PVP = [];
			var row_Stats_PVP = 0;
			for (var i = 15; i >= min_IV; i--) {
			  for (var j = 15; j >= min_IV; j--) {
			    for (var k = 15; k >= min_IV; k--) {
						if (League_CP_Limit == null) { // In master league the best combination is always level 40 so no need to do a loop
							Pokemon_Stats_PVP[row_Stats_PVP] = [i, j, k, 40, PVP_Stats_Quality(Get_ATK(Pokemon_PVP_Stats,[i,j,k],40),Get_DEF(Pokemon_PVP_Stats,[i,j,k],40),Get_HP(Pokemon_PVP_Stats,[i,j,k],40))]
							row_Stats_PVP++;
						}
						else {
							for (var l = 40; l >= 1; l = l - 0.5) {
								if (CP_Formula(Pokemon_PVP_Stats,[i, j, k],l) <= League_CP_Limit) {
									Pokemon_Stats_PVP[row_Stats_PVP] = [i, j, k, l, PVP_Stats_Quality(Get_ATK(Pokemon_PVP_Stats,[i,j,k],l),Get_DEF(Pokemon_PVP_Stats,[i,j,k],l),Get_HP(Pokemon_PVP_Stats,[i,j,k],l))]
									row_Stats_PVP++;
									break; //combination under CP limit found so stop the loop over l
								}
				      }
						}
			    }
			  }
			}

			/*==== Sort the data ====*/
			/*====Sort by HP ===*/
			Pokemon_Stats_PVP.sort(function(a, b) {
			    return parseFloat(Get_HP(Pokemon_PVP_Stats,[b[0],b[1],b[2]],b[3])) - parseFloat(Get_HP(Pokemon_PVP_Stats,[a[0],a[1],a[2]],a[3]));
			});

			/*====Sort by Quality ===*/
			Pokemon_Stats_PVP.sort(function(a, b) {
			    return parseFloat(b[4]) - parseFloat(a[4]);
			});
			/*== Sort the data ==*/
			/*== Set IVs and best level combinations ==*/

			if (csv_mode == 0) {
				var Pokemon_Stats_PVP_Quality_Max = Math.max(...Pokemon_Stats_PVP.map((x) => x[4]))
				var Pokemon_Stats_PVP_Quality_Min = Math.min(...Pokemon_Stats_PVP.map((x) => x[4]))

				for (const row of Pokemon_Stats_PVP) {
					Pokemon_Stats_PVP_csv += row[0] + "/" + row[1] + "/" + row[2] + "," + row[3] + "," + row[4] + "," + Math.round(row[4] / Pokemon_Stats_PVP_Quality_Max * 100 * 100) / 100 + "," + Math.round((row[4] - Pokemon_Stats_PVP_Quality_Min) / (Pokemon_Stats_PVP_Quality_Max - Pokemon_Stats_PVP_Quality_Min) * 100 * 100) / 100 + "\n"
				}
				Pokemon_Set_PVP_CSV_global = Pokemon_Set_PVP_CSV;
				

				if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
					$("#Output_PVP_Stats").html($('#Output_PVP_Stats').html() + "<div id='output_text'>Los resultados obtenidos son:<h4 style='text-transform: capitalize;text-align: center'>" + Pokemon_Name_PVP_Stats_String + "</h4></div>");
					$("#Output_PVP_Stats_5").html($('#Output_PVP_Stats_5').html() + "<button class='mini' onclick='downloadAllQualities(Pokemon_Stats_PVP_csv,Pokemon_Set_PVP_CSV_global,file_name_league)'>Descargar todas las calidades</button>");
				}
				else {
					$("#Output_PVP_Stats").html($('#Output_PVP_Stats').html() + "<div id='output_text'>The results obtained are:<h4 style='text-transform: capitalize;text-align: center'>" + Pokemon_Name_PVP_Stats_String + "</h4></div>");
					$("#Output_PVP_Stats_5").html($('#Output_PVP_Stats_5').html() + "<button class='mini' onclick='downloadAllQualities(Pokemon_Stats_PVP_csv,Pokemon_Set_PVP_CSV_global,file_name_league)'>Download all qualities</button>");
				}
			}

			/*=== Get number of rows that have a quality > code_filter ===*/
			var rows_checked_code_filter = check_filter(code_filter,Pokemon_Stats_PVP);

			if (csv_mode == 0) {

				/*==== Create table with the 10 best qualities ====*/
				//$( "#Output_PVP_Stats_4" ).append( "<tr><th>" + Pokemon_Stats_PVP[0][0] + "<br>(" + Math.round(Get_ATK(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[0][0],Pokemon_Stats_PVP[0][1],Pokemon_Stats_PVP[0][2]],Pokemon_Stats_PVP[0][3]) *10)/10 + ")" + "</th><th>" + Pokemon_Stats_PVP[0][1] + "<br>(" + Math.round(Get_DEF(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[0][0],Pokemon_Stats_PVP[0][1],Pokemon_Stats_PVP[0][2]],Pokemon_Stats_PVP[0][3]) *10)/10 + ")" + "</th><th>" + Pokemon_Stats_PVP[0][2] + "<br>(" + Get_HP(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[0][0],Pokemon_Stats_PVP[0][1],Pokemon_Stats_PVP[0][2]],Pokemon_Stats_PVP[0][3]) + ")" + "</th><th>" + CP_Formula(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[0][0], Pokemon_Stats_PVP[0][1], Pokemon_Stats_PVP[0][2]],Pokemon_Stats_PVP[0][3]) + "<br>(" + Pokemon_Stats_PVP[0][3] + ")</th><th>" + Pokemon_Stats_PVP[0][4] + "<br>(" + Math.round( ( PVP_Stats_Quality_percentage(Pokemon_Stats_PVP[0][4],Pokemon_Stats_PVP[Pokemon_Stats_PVP.length -1][4],Pokemon_Stats_PVP[0][4]) )*100*100)/100 + "%)</th></tr>" );

				var show_best_n_qualities;
				for(var i = 0; i < 10; i++) {
					show_best_n_qualities = i + 1;
					if (i == Pokemon_Stats_PVP.length) {
						break;
					}
					
					$( "#Output_PVP_Stats_4" ).append( "<tr><th>" + Pokemon_Stats_PVP[i][0] + "<br>(" + Math.round(Get_ATK(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[i][0],Pokemon_Stats_PVP[i][1],Pokemon_Stats_PVP[i][2]],Pokemon_Stats_PVP[i][3]) *10)/10 + ")" + "</th><th>" + Pokemon_Stats_PVP[i][1] + "<br>(" + Math.round(Get_DEF(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[i][0],Pokemon_Stats_PVP[i][1],Pokemon_Stats_PVP[i][2]],Pokemon_Stats_PVP[i][3]) *10)/10 + ")" + "</th><th>" + Pokemon_Stats_PVP[i][2] + "<br>(" + Get_HP(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[i][0],Pokemon_Stats_PVP[i][1],Pokemon_Stats_PVP[i][2]],Pokemon_Stats_PVP[i][3]) + ")" + "</th><th>" + CP_Formula(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[i][0], Pokemon_Stats_PVP[i][1], Pokemon_Stats_PVP[i][2]],Pokemon_Stats_PVP[i][3]) + "<br>(" + Pokemon_Stats_PVP[i][3] + ")</th><th>" + Pokemon_Stats_PVP[i][4] + "<br>(" + Math.round( ( PVP_Stats_Quality_percentage(Pokemon_Stats_PVP[0][4],Pokemon_Stats_PVP[Pokemon_Stats_PVP.length -1][4],Pokemon_Stats_PVP[i][4]) )*100*100)/100 + "%)</th></tr>" );
					
				}

				if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
				  $( "#Output_PVP_Stats_4" ).append( "<tr><td>A</td><td>D</td><td>HP</td><td>PC<br>(Nivel)</td><td>Calidad</td></tr>" );
				}
				else {
				  $( "#Output_PVP_Stats_4" ).append( "<tr><td>A</td><td>D</td><td>HP</td><td>CP<br>(Level)</td><td>Quality</td></tr>" );
				}
				/*== Create table with the 10 best qualities ==*/

				/*==== Check IVs combination introduced ====*/
				var IV = [parseFloat(document.getElementById("IV_A").value), parseFloat(document.getElementById("IV_D").value), parseFloat(document.getElementById("IV_HP").value)];

				var Stats_PVP_Check;
				if (League_CP_Limit == null) { // In master league the best combination is always level 40 so no need to do a loop
					Stats_PVP_Check = [IV[0],IV[1],IV[2], 40, PVP_Stats_Quality(Get_ATK(Pokemon_PVP_Stats,[IV[0],IV[1],IV[2]],40),Get_DEF(Pokemon_PVP_Stats,[IV[0],IV[1],IV[2]],40),Get_HP(Pokemon_PVP_Stats,[IV[0],IV[1],IV[2]],40))]
				}
				else {
					for (var l = 40; l >= 1; l = l - 0.5) {
						if (CP_Formula(Pokemon_PVP_Stats,[IV[0],IV[1],IV[2]],l) <= League_CP_Limit) {
							Stats_PVP_Check = [IV[0],IV[1],IV[2], l, PVP_Stats_Quality(Get_ATK(Pokemon_PVP_Stats,[IV[0],IV[1],IV[2]],l),Get_DEF(Pokemon_PVP_Stats,[IV[0],IV[1],IV[2]],l),Get_HP(Pokemon_PVP_Stats,[IV[0],IV[1],IV[2]],l))]
							break; //combination under CP limit found so stop the loop over l
						}
					}
				}

				

				/*==== Create table with IVs combination introduced ====*/
				$( "#Output_PVP_Stats_2" ).append( "<tr><th>" + Stats_PVP_Check[0] + "<br>(" + Math.round(Get_ATK(Pokemon_PVP_Stats,[Stats_PVP_Check[0],Stats_PVP_Check[1],Stats_PVP_Check[2]],Stats_PVP_Check[3]) *10)/10 + ")" + "</th><th>" + Stats_PVP_Check[1] + "<br>(" + Math.round(Get_DEF(Pokemon_PVP_Stats,[Stats_PVP_Check[0],Stats_PVP_Check[1],Stats_PVP_Check[2]],Stats_PVP_Check[3]) *10)/10 + ")" + "</th><th>" + Stats_PVP_Check[2] + "<br>(" + Get_HP(Pokemon_PVP_Stats,[Stats_PVP_Check[0],Stats_PVP_Check[1],Stats_PVP_Check[2]],Stats_PVP_Check[3]) + ")" + "</th><th>" + CP_Formula(Pokemon_PVP_Stats,[Stats_PVP_Check[0], Stats_PVP_Check[1], Stats_PVP_Check[2]],Stats_PVP_Check[3]) + "<br>(" + Stats_PVP_Check[3] + ")</th><th>" + Stats_PVP_Check[4] + "<br>(" + Math.round( ( PVP_Stats_Quality_percentage(Pokemon_Stats_PVP[0][4],Pokemon_Stats_PVP[Pokemon_Stats_PVP.length -1][4],Stats_PVP_Check[4]) )*100*100)/100 + "%)</th></tr>" );

				if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
					$( "#Output_PVP_Stats_2" ).append( "<tr><td>A</td><td>D</td><td>HP</td><td>PC<br>(Nivel)</td><td>Calidad</td></tr>" );
				}
				else {
					$( "#Output_PVP_Stats_2" ).append( "<tr><td>A</td><td>D</td><td>HP</td><td>CP<br>(Level)</td><td>Quality</td></tr>" );
				}
				/*== Create table with IVs combination introduced ==*/
				/*== Check IVs combination introduced ==*/

				/*==== Tell the user some info about the data ====*/
				percentage_code = Math.round(rows_checked_code_filter / Pokemon_Stats_PVP.length*100 * 1000) / 1000;

				if (navigator.language = "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
					$("#Output_PVP_Stats_6").html($('#Output_PVP_Stats_6').html() + "<div id='output_text'>Para generar el código se han tenido en cuenta las combinaciones con calidades superiores al " + code_filter*100.0 + "% lo cual incluye " + rows_checked_code_filter + " combinaciones (" + percentage_code + "%).</div>");
					$("#Output_PVP_Stats_3").html($('#Output_PVP_Stats_3').html() + "<div id='output_text'>Las combinaciones que tienen las " + show_best_n_qualities + " mejores calidades son:</div>");
				}
				else {
					$("#Output_PVP_Stats_6").html($('#Output_PVP_Stats_6').html() + "<div id='output_text'>To generate the code, combinations with qualities higher than " + code_filter*100.0 + "% have been taken into account which includes " + rows_checked_code_filter + " combinations (" + percentage_code + "%).</div>");
					$("#Output_PVP_Stats_3").html($('#Output_PVP_Stats_3').html() + "<div id='output_text'>The combinations with " + show_best_n_qualities + " highest qualities are:</div>");
				}
				/*== Tell the user some info about the data ==*/
			}

			/*==== Get the search code ====*/
			var Pokemon_PVP_Stats_Basic_evolution = window[Pokemon_PVP_Stats.Basic_evolution];

			var max_Level = Pokemon_Stats_PVP[0][3];
			var max_CP; var min_CP;
			var max_CP_Basic; var min_CP_Basic;
			var max_HP; var min_HP;
			var max_HP_Basic; var min_HP_Basic;

			/*==== Get maximun level of the combinations ====*/
			if (rows_checked_code_filter != 0) {
				for (var i = 0; i <= rows_checked_code_filter; i++) {
					if (Pokemon_Stats_PVP[i][3] > max_Level) {
						max_Level = Pokemon_Stats_PVP[i][3];
					}
				}
			}
			/*== Get maximun level of the combinations ==*/

			/*==== Get the Pokemon's name ====*/
			// Note: if generate_code_basic is checked the code will be generated taking into account the input Pokemon (for the criterias) but the data of the basic evolution will be put in the search code
			var PVP_Code = "";
			if(($("#generate_code_basic").is(':checked') && csv_mode == 0) || ($("#generate_code_basic_csv").is(':checked') && csv_mode == 1)) {
				PVP_Code += Pokemon_PVP_Stats_Basic_evolution.Pokedex_number + "&" ;
				Pokemon_PVP_Stats_Basic_evolution
			}
			else {
				PVP_Code += Pokemon_PVP_Stats.Pokedex_number + "&";
			}
			/*== Get the Pokemon's name ==*/


			contador_CP_values_PVP = 0;
			var CP_values_PVP = [];
			var HP_values_PVP = [];

			for(var Level=Math.trunc(max_Level); Level>=1; Level -= 1) {
				for (var i = 0; i <= rows_checked_code_filter; i++) {
					if ((CP_Formula(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[i][0], Pokemon_Stats_PVP[i][1], Pokemon_Stats_PVP[i][2]],Level) <= League_CP_Limit || League_CP_Limit == null)) {
						if(($("#generate_code_basic").is(':checked') && csv_mode == 0) || ($("#generate_code_basic_csv").is(':checked') && csv_mode == 1)) {
							CP_values_PVP[contador_CP_values_PVP] = CP_Formula(Pokemon_PVP_Stats_Basic_evolution,[Pokemon_Stats_PVP[i][0], Pokemon_Stats_PVP[i][1], Pokemon_Stats_PVP[i][2]],Level);
							HP_values_PVP[contador_CP_values_PVP] = Get_HP(Pokemon_PVP_Stats_Basic_evolution,[Pokemon_Stats_PVP[i][0], Pokemon_Stats_PVP[i][1], Pokemon_Stats_PVP[i][2]],Level);
						}
						else {
							CP_values_PVP[contador_CP_values_PVP] = CP_Formula(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[i][0], Pokemon_Stats_PVP[i][1], Pokemon_Stats_PVP[i][2]],Level);
							HP_values_PVP[contador_CP_values_PVP] = Get_HP(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[i][0], Pokemon_Stats_PVP[i][1], Pokemon_Stats_PVP[i][2]],Level);
						}
						contador_CP_values_PVP++;
					}
				}
			}

			CP_values_PVP.sort(function(a, b) {
			    return parseFloat(b) - parseFloat(a);
			});

			HP_values_PVP.sort(function(a, b) {
			    return parseFloat(b) - parseFloat(a);
			});

			CP_values_PVP_norepeated = [];
			CP_values_PVP_norepeated = Stat_values_filter_norepeated(CP_values_PVP);

			HP_values_PVP_norepeated = [];
			HP_values_PVP_norepeated = Stat_values_filter_norepeated(HP_values_PVP);

			var cp_min = CP_values_PVP_norepeated[0];
			var cp_max = CP_values_PVP_norepeated[0];
			for (var i = 1; i < CP_values_PVP_norepeated.length; i++) {

			  if (CP_values_PVP_norepeated[i-1] - CP_values_PVP_norepeated[i] == 1) {
			    cp_min = CP_values_PVP_norepeated[i];
			  }
			  if (CP_values_PVP_norepeated[i-1] - CP_values_PVP_norepeated[i] > 1) {
			    if (cp_max == cp_min) {
			      PVP_Code += ( CP_String + cp_min + ",");
			    }
			    else {
			      PVP_Code += ( CP_String + cp_max + "-" + cp_min + ",");
			    }
			    cp_min = CP_values_PVP_norepeated[i];
			    cp_max = CP_values_PVP_norepeated[i];
			  }
			}
			if (CP_values_PVP_norepeated[CP_values_PVP_norepeated.length-2] - CP_values_PVP_norepeated[CP_values_PVP_norepeated.length - 1] > 1) {
			  PVP_Code += ( CP_String + CP_values_PVP_norepeated[CP_values_PVP_norepeated.length - 1]  + "&");
			}
			else {
			  PVP_Code += ( CP_String + CP_values_PVP_norepeated[CP_values_PVP_norepeated.length - 2] + "-" + CP_values_PVP_norepeated[CP_values_PVP_norepeated.length - 1]  + "&");
			}

			var hp_min = HP_values_PVP_norepeated[0];
			var hp_max = HP_values_PVP_norepeated[0];
			for (var i = 1; i < HP_values_PVP_norepeated.length; i++) {

			  if (HP_values_PVP_norepeated[i-1] - HP_values_PVP_norepeated[i] == 1) {
			    hp_min = HP_values_PVP_norepeated[i];
			  }
			  if (HP_values_PVP_norepeated[i-1] - HP_values_PVP_norepeated[i] > 1) {
			    if (hp_max == hp_min) {
			      PVP_Code += ( HP_String + hp_min + ",");
			    }
			    else {
			      PVP_Code += ( HP_String + hp_max + "-" + hp_min + ",");
			    }
			    hp_min = HP_values_PVP_norepeated[i];
			    hp_max = HP_values_PVP_norepeated[i];
			  }
			}
			if (HP_values_PVP_norepeated[HP_values_PVP_norepeated.length-2] - HP_values_PVP_norepeated[HP_values_PVP_norepeated.length - 1] > 1) {
			  PVP_Code += ( HP_String + HP_values_PVP_norepeated[HP_values_PVP_norepeated.length - 1]);
			}
			else {
			  PVP_Code += ( HP_String + HP_values_PVP_norepeated[HP_values_PVP_norepeated.length - 2] + "-" + HP_values_PVP_norepeated[HP_values_PVP_norepeated.length - 1]);
			}
			/*== Get the search code ==*/

			if (csv_mode == 0) {
				/*=== Send the search code to textarea so the user can copy it ===*/
				document.getElementById("Output_PVP_Stats_textarea").value = PVP_Code;
			}

			if (csv_mode == 1) {
				/*==== Send the search code to the variable that contains the data of the csv file ====*/
				csv_data.push([Pokemon_Name_PVP_Stats_String, Pokemon_Stats_PVP[0][0] + " / " + Pokemon_Stats_PVP[0][1] + " / " + Pokemon_Stats_PVP[0][2] + " (" + Math.round( ( PVP_Stats_Quality_percentage(Pokemon_Stats_PVP[0][4],Pokemon_Stats_PVP[Pokemon_Stats_PVP.length -1][4],Pokemon_Stats_PVP[0][4]) )*100*100)/100 + "%)",Math.round(Get_ATK(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[0][0],Pokemon_Stats_PVP[0][1],Pokemon_Stats_PVP[0][2]],Pokemon_Stats_PVP[0][3]) *10)/10 + " / " + Math.round(Get_DEF(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[0][0],Pokemon_Stats_PVP[0][1],Pokemon_Stats_PVP[0][2]],Pokemon_Stats_PVP[0][3]) *10)/10 + " / " + Get_HP(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[0][0],Pokemon_Stats_PVP[0][1] ,Pokemon_Stats_PVP[0][2]],Pokemon_Stats_PVP[0][3]),CP_Formula(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[0][0], Pokemon_Stats_PVP[0][1], Pokemon_Stats_PVP[0][2]],Pokemon_Stats_PVP[0][3]),Pokemon_Stats_PVP[1][0] + " / " + Pokemon_Stats_PVP[1][1] + " / " + Pokemon_Stats_PVP[1][2] + " (" + Math.round( ( PVP_Stats_Quality_percentage(Pokemon_Stats_PVP[0][4],Pokemon_Stats_PVP[Pokemon_Stats_PVP.length -1][4],Pokemon_Stats_PVP[1][4]) )*100*100)/100 + "%)",Math.round(Get_ATK(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[1][0],Pokemon_Stats_PVP[1][1],Pokemon_Stats_PVP[1][2]],Pokemon_Stats_PVP[1][3]) *10)/10 + " / " + Math.round(Get_DEF(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[1][0],Pokemon_Stats_PVP[1][1],Pokemon_Stats_PVP[1][2]],Pokemon_Stats_PVP[1][3]) *10)/10 + " / " + Get_HP(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[1][0],Pokemon_Stats_PVP[1][1],Pokemon_Stats_PVP[1][2]],Pokemon_Stats_PVP[1][3]),CP_Formula(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[1][0], Pokemon_Stats_PVP[1][1], Pokemon_Stats_PVP[1][2]],Pokemon_Stats_PVP[1][3]),Pokemon_Stats_PVP[2][0] + " / " + Pokemon_Stats_PVP[2][1] + " / " + Pokemon_Stats_PVP[2][2] + " (" + Math.round( ( PVP_Stats_Quality_percentage(Pokemon_Stats_PVP[0][4],Pokemon_Stats_PVP[Pokemon_Stats_PVP.length -1][4],Pokemon_Stats_PVP[2][4]) )*100*100)/100 + "%)",Math.round(Get_ATK(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[2][0],Pokemon_Stats_PVP[2][1],Pokemon_Stats_PVP[2][2]],Pokemon_Stats_PVP[2][3]) *10)/10 + " / " + Math.round(Get_DEF(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[2][0],Pokemon_Stats_PVP[2][1],Pokemon_Stats_PVP[2][2]],Pokemon_Stats_PVP[2][3]) *10)/10 + " / " + Get_HP(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[2][0],Pokemon_Stats_PVP[2][1],Pokemon_Stats_PVP[2][2]],Pokemon_Stats_PVP[2][3]),CP_Formula(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[2][0], Pokemon_Stats_PVP[2][1], Pokemon_Stats_PVP[2][2]],Pokemon_Stats_PVP[2][3]), '"' + PVP_Code + '"']);
				/*== Send the search code to the variable that contains the data of the csv file ==*/

				$("#Output_PVP_CSV").html($('#Output_PVP_CSV').html() + "<h4 style='text-transform: capitalize;text-align: center'>" + Pokemon_Name_PVP_Stats_String + "</h4>");
			}
		}

	}
	/*== Core of the function ==*/

	if (csv_mode == 1) {
		/*==== Error if none of the Pokemon are correct ====*/
		if (contador_pokemon_validos == 0) {
			if (navigator.language = "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
				$("#Output_PVP_CSV").html($('#Output_PVP_CSV').html() + "<div id='output_text'>Ninguno de los Pokémon analizados son correctos.</div>");
			}
			else {
				$("#Output_PVP_CSV").html($('#Output_PVP_CSV').html() + "<div id='output_text'>None of the Pokémon analyzed are correct.</div>");
			}
			return;
		}
		/*== Error if none of the Pokemon are correct ==*/

		/*==== Save data to external file ====*/
		let csvContent = "data:text/csv;charset=utf-8,";
		csv_data.forEach(function(rowArray){
		   let csv_data = rowArray.join(",");
		   csvContent += csv_data + "\r\n";
		});

		

		var file_name_includedpokemon;
		if ((document.getElementById("PVP_CSV_Included_Pokemon").value) == "Manual") {
			file_name_includedpokemon= "custom";
		}
		else if ((document.getElementById("PVP_CSV_Included_Pokemon").value) == "Tempest") {
			file_name_includedpokemon= "tempest";
		}
		else if ((document.getElementById("PVP_CSV_Included_Pokemon").value) == "Kingdom") {
			file_name_includedpokemon= "kingdom";
		}
		else if ((document.getElementById("PVP_CSV_Included_Pokemon").value) == "Nightmare") {
			file_name_includedpokemon= "nightmare";
		}

		var file_name_basicevols = "";
		if(($("#generate_code_basic_csv").is(':checked'))) {
			file_name_basicevols = "_basicevols";
		}

		var file_name_csv = "pvp_" + file_name_league + "_" + file_name_includedpokemon + file_name_basicevols + "_stats.csv";
		var encodedUri = encodeURI(csvContent);
		var link = document.createElement("a");
		link.setAttribute("href", encodedUri);
		link.setAttribute("download", file_name_csv);
		document.body.appendChild(link); // Required for FF

		link.click();

		if (navigator.language = "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
			$("#Output_PVP_CSV").html($('#Output_PVP_CSV').html() + "<br>Se han guardado los resultados en el archivo " + file_name_csv + "</div>");
		}
		else {
			$("#Output_PVP_CSV").html($('#Output_PVP_CSV').html() + "<br>The results have been saved in the file " + file_name_csv + "</div>");
		}
		/*== Save data to external file ==*/
	}
}

function downloadAllQualities(string,pokemon_name,league) {
	let file_data = "data:text/csv;charset=utf-8," + string;
	file_data = file_data.replace(/[\r]+/g, '').trim();
	var encodedUri = encodeURI(file_data);
	var link = document.createElement("a");
	link.setAttribute("href", encodedUri);
	link.setAttribute("download", pokemon_name + "_" + league + "_all_qualities.csv");
	document.body.appendChild(link);
	link.click();
}

function Get_IV() {
	$("#Output_IV_1").html("<hr class='hrseparador'>");
	$("#Output_IV_2").html("");
	$("#Output_IV_3").html("");

	var Pokemon_Name_IV = (document.getElementById("Pokemon_IV").value); Pokemon_Name_IV = Pokemon_Name_IV.toLowerCase();
	Pokemon_Name_IV = Input_Problematic_Pokemon(Pokemon_Name_IV);
	var Pokemon_IV = window[Pokemon_Name_IV];

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

function damage_PVP(move_attacker,atk_attacker,def_defender,damage_multiplier) {
	return Math.trunc(0.5 * moves_pvp[move_attacker]["Power"] * atk_attacker / def_defender * damage_multiplier) + 1.0
}

function STAB_multiplier(pokemon_element, move_element) {
	var STAB_multiplier_value = 1.0;
	for (var i = 0; i < pokemon_element.length; i++) {
		if (pokemon_element[i] == move_element) {
			STAB_multiplier_value = 1.2;
		}
	}
	return STAB_multiplier_value
}

function effectiveness_multiplier(attacker_attack_element,defender_element) {
	var effectiveness_multiplier_value = 1.0;
	if (attacker_attack_element == "Fire") {
		for (var i = 0; i < defender_element.length; i++) {
			if (defender_element[i] == "Water" || defender_element[i] == "Dragon" || defender_element[i] == "Fire" || defender_element[i] == "Rock") {
				effectiveness_multiplier_value = effectiveness_multiplier_value * 0.625;
			}
			if (defender_element[i] == "Steel" || defender_element[i] == "Bug" || defender_element[i] == "Ice" || defender_element[i] == "Grass") {
				effectiveness_multiplier_value = effectiveness_multiplier_value * 1.6;
			}
		}
	}
	if (attacker_attack_element == "Fairy") {
		for (var i = 0; i < defender_element.length; i++) {
			if (defender_element[i] == "Steel" || defender_element[i] == "Fire" || defender_element[i] == "Poison") {
				effectiveness_multiplier_value = effectiveness_multiplier_value * 0.625;
			}
		}
	}
	if (attacker_attack_element == "Dragon") {
		for (var i = 0; i < defender_element.length; i++) {
			if (defender_element[i] == "Dragon") {
				effectiveness_multiplier_value = effectiveness_multiplier_value * 1.6;
			}
		}
	}
	if (attacker_attack_element == "Water") {
		for (var i = 0; i < defender_element.length; i++) {
			if (defender_element[i] == "Fire" || defender_element[i] == "Rock" || defender_element[i] == "Ground") {
				effectiveness_multiplier_value = effectiveness_multiplier_value * 1.6;
			}
		}
	}
	if (attacker_attack_element == "Ice") {
		for (var i = 0; i < defender_element.length; i++) {
			if (defender_element[i] == "Dragon" || defender_element[i] == "Grass" || defender_element[i] == "Ground" || defender_element[i] == "Flying") {
				effectiveness_multiplier_value = effectiveness_multiplier_value * 1.6;
			}
		}
	}
	return effectiveness_multiplier_value
}



















function PVP_Simulator(shields1,shields2,IV_PVP_1,IV_PVP_2,HP_1,HP_2,Energy_1,Energy_2,fast_move1,fast_move2,charged1_move1,charged1_move2,charged2_move1,charged2_move2,damage_fast1,damage_fast2,move_turns1,move_turns2,move_fast_energy1,move_fast_energy2,damage_charged1,damage_charged2,move_charged_energy1,move_charged_energy2,Pokemon_Name_PVP1,Pokemon_Name_PVP2,Pokemon_PVP1,Pokemon_PVP2,moves_charged1,moves_charged2,Pokemon_PVP1_Stats,Pokemon_PVP2_Stats,verbose) {

	$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br><br><b>Inputs simulación</b>");
	if (verbose == 1) {
		$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>Pokemon 1: " + Pokemon_Name_PVP1);
		$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>• IVs 1: " + IV_PVP_1);
		$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>• HP 1: " + HP_1);
		$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>• Energía 1: " + Energy_1);
		$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>• Movimiento rápido 1: " + Pokemon_PVP1["Fast_moves"][fast_move1]);
	}
		if (charged1_move1 == null) {
			$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>• Movimiento cargado 1: " + charged1_move1);
		}
		else {
			$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>• Movimiento cargado 1: " + Pokemon_PVP1["Charged_moves"][charged1_move1]);
		}
		if (charged2_move1 == null) {
			$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>• Movimiento cargado 2: " + charged2_move1);
		}
		else {
			$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>• Movimiento cargado 2: " + Pokemon_PVP1["Charged_moves"][charged2_move1]);
		}

		$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>• Escudos 1: " + shields1);
	if (verbose == 1) {
		$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br><br>Pokemon 2: " + Pokemon_Name_PVP2);
		$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>• IVs 2: " + IV_PVP_2);
		$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>• HP 2: " + HP_2);
		$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>• Energía 2: " + Energy_2);
		$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>• Movimiento rápido 2: " + Pokemon_PVP2["Fast_moves"][fast_move2]);
	}
		if (charged1_move2 == null) {
			$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>• Movimiento cargado 1: " + charged1_move2);
		}
		else {
			$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>• Movimiento cargado 1: " + Pokemon_PVP2["Charged_moves"][charged1_move2]);
		}
		if (charged2_move2 == null) {
			$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>• Movimiento cargado 2: " + charged2_move2);
		}
		else {
			$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>• Movimiento cargado 2: " + Pokemon_PVP2["Charged_moves"][charged2_move2]);
		}

		$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>• Escudos 2: " + shields2);
	if (verbose == 1) {

		$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>---------<br><b>Simulacion</b></div>");
		$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>HP: " + HP_1 + ", " + HP_2 + ", Energía: " + Energy_1 + ", " + Energy_2);
	}


	Move_skipturns1 = 0;
	Move_skipturns2 = 0;

	damage_dealt1 = 0;
	damage_dealt2 = 0;

	old_HP1 = HP_1;
	old_HP2 = HP_2;

	var time = 1.0;
	var time_turn = 0.5;
	var time_charged_move = 7.0;

	var willuse_charged_move1 = 0;
	var willuse_charged_move2 = 0;

	var charged_move2_pending = 0;

	var allow_fast_move_1 = 1;

	for (var turn = 0; turn < battle_turns; turn++) {

		real_condicion_test = true;
		condicion_test = (Move_skipturns1 == 0 && Move_skipturns2 == 0 && shields2 == 0 && (move_turns1[fast_move1] <= move_turns2[fast_move2]) && (charged1_move1 != null && Energy_1 >= move_charged_energy1[charged1_move1] || charged2_move1 != null && Energy_1 >= move_charged_energy1[charged2_move1]) && (charged2_move2 != null && Energy_2 < move_charged_energy2[charged2_move2]) );
		if (condicion_test == true) {
			real_condicion_test = false;
		}

		real_condicion_test2 = true;
		condicion_test2 = (Move_skipturns1 == 0 && Move_skipturns2 == 0 && shields1 == 0 && (move_turns2[fast_move2] <= move_turns1[fast_move1]) && (charged1_move2 != null && Energy_2 >= move_charged_energy2[charged1_move2] || charged2_move2 != null && Energy_2 >= move_charged_energy2[charged2_move2]) && (charged2_move1 != null && Energy_1 < move_charged_energy1[charged2_move1]) );
		if (condicion_test2 == true) {
			real_condicion_test2 = false;
		}

		if (verbose == 1) {
			$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>Turno " + turn + ", " + Move_skipturns1 + ", " + Move_skipturns2 + ", " + (move_charged_energy2[charged2_move2] <= null) );

			$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>• HP: " + HP_1 + ", " + HP_2 + ", Energía: " + Energy_1 + ", " + Energy_2);
		}

		//Pokemon 1
		var charged_move_used1 = null;
		var use_charged_move1 = 0;
		var shield_used1 = null;

		//Pokemon 2
		var charged_move_used2 = null;
		var use_charged_move2 = 0;
		var shield_used2 = null;

		/*==== CHARGED ATTACK 1-1 ====*/
		if (Move_skipturns1 == 0 && charged1_move1 != null && Energy_1 >= move_charged_energy1[charged1_move1] && real_condicion_test == true) {

			use_charged_move1 = 1;

			time += time_charged_move;
			turn = turn + 14;

			if (verbose == 1) {
				$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>- " + Pokemon_Name_PVP1 + " (1) uso " + moves_charged1[charged1_move1]);
			}

			if (shields2 > 0) {
				HP_2 --;
				shields2--;
				if (verbose == 1) {
					$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>- " + Pokemon_Name_PVP2 + " (2) uso un escudo");
				}
			}
			else {
				HP_2 -= damage_charged1[charged1_move1];
			}
			Energy_1 -= move_charged_energy1[charged1_move1];
		}
		/*== CHARGED ATTACK 1-1 ==*/

		/*==== CHARGED ATTACK 2-1 ====*/
		else if (Move_skipturns1 == 0 && charged2_move1 != null && Energy_1 >= move_charged_energy1[charged2_move1] && (   (HP_2 - damage_charged1[charged2_move1] <= 0) || (shields2 > 0) ||  ( Move_skipturns2 <= 1 && ( ( charged1_move2 != null && Energy_2 >= move_charged_energy2[charged1_move2] && (HP_1 - damage_charged2[charged1_move2] <= 0)  ) || ( charged2_move2 != null && Energy_2 >= move_charged_energy2[charged2_move2] && (HP_1 - damage_charged2[charged2_move2] <= 0) ) || (HP_1 - damage_fast2[fast_move2] <= 0)              )    )    )     && real_condicion_test == true        ) {

			use_charged_move1 = 1;

			time += time_charged_move;
			turn = turn + 14;

			if (verbose == 1) {
				$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>- " + Pokemon_Name_PVP1 + " (1) uso " + moves_charged1[charged2_move1]);
			}

			if (shields2 > 0) {
				HP_2 --;
				shields2--;
				shield_used2 = 1;
				if (verbose == 1) {
					$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>- " + Pokemon_Name_PVP2 + " (2) uso un escudo");
				}
			}
			else {
				HP_2 -= damage_charged1[charged2_move1];
			}
			Energy_1 -= move_charged_energy1[charged2_move1];
		}
		/*== CHARGED ATTACK 2-1 ==*/

		/*==== FAST ATTACK 1 ====*/
		else if (Move_skipturns1 == 0) {

			HP_2 -= damage_fast1[fast_move1];
			Energy_1 += move_fast_energy1[fast_move1]; if (Energy_1 > 100) {Energy_1 = 100;}
			Move_skipturns1 = move_turns1[fast_move1] - 1;

		}
		/*== FAST ATTACK 1 ==*/
		else {
			Move_skipturns1--;
		}


		/*==== CHARGED ATTACK 1-2 ====*/
		if (Move_skipturns2 == 0 && charged1_move2 != null && Energy_2 >= move_charged_energy2[charged1_move2] && real_condicion_test2 == true) {

			use_charged_move2 = 1;

			time += time_charged_move;
			turn = turn + 14;

			if (verbose == 1) {
				$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>- " + Pokemon_Name_PVP2 + " (2) uso " + moves_charged2[charged1_move2]);
			}

			if (shields1 > 0) {
				HP_1 --;
				shields1--;
				if (verbose == 1) {
					$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>- " + Pokemon_Name_PVP2 + " (2) uso un escudo");
				}
			}
			else {
				HP_1 -= damage_charged2[charged1_move2];
			}
			Energy_2 -= move_charged_energy2[charged1_move2];
		}
		/*==== CHARGED ATTACK 1-2 ====*/
		else if ( Move_skipturns2 == 0 && charged2_move2 != null && Energy_2 >= move_charged_energy2[charged2_move2] && ( (HP_1 - damage_charged2[charged2_move2] <= 0) || (shields1 > 0) || (( Move_skipturns1 <= 1 && ( ( charged1_move1 != null && Energy_1 >= move_charged_energy1[charged1_move1] && (HP_2 - damage_charged1[charged1_move1] <= 0)  ) || ( charged2_move1 != null && Energy_1 >= move_charged_energy1[charged2_move1] && (HP_2 - damage_charged1[charged2_move1] <= 0) ) || (HP_2 - damage_fast1[fast_move1] <= 0)              )    ))  )   && real_condicion_test2 == true ) {

			use_charged_move2 = 1;

			time += time_charged_move;
			turn = turn + 14;

			if (verbose == 1) {
				$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>- " + Pokemon_Name_PVP2 + " (2) uso " + moves_charged2[charged2_move2]);
			}

			if (shields1 > 0) {
				HP_1 --;
				shields1--;
				if (verbose == 1) {
					$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>- " + Pokemon_Name_PVP2 + " (2) uso un escudo");
				}
			}
			else {
				HP_1 -= damage_charged2[charged2_move2];
			}
			Energy_2 -= move_charged_energy2[charged2_move2];
		}

		/*==== FAST ATTACK 2 ====*/
		else if (Move_skipturns2 == 0) {
			HP_1 -= damage_fast2[fast_move2];
			Energy_2 += move_fast_energy2[fast_move2]; if (Energy_2 > 100) {Energy_2 = 100;}
			Move_skipturns2 = move_turns2[fast_move2] - 1;
		}
		/*== FAST ATTACK 2 ==*/
		else {
			Move_skipturns2--;
		}















		if (use_charged_move1 == 1 || use_charged_move2 == 1) {
			Move_skipturns1 = 0;
			Move_skipturns2 = 0;
		}



		if (HP_1 <= 0) {
			HP_1 = 0;
		}
		if (HP_2 <= 0) {
			HP_2 = 0;
		}








		damage_dealt1 +=  old_HP2 - HP_2;
		damage_dealt2 +=  old_HP1 - HP_1;

		old_HP1 = HP_1;
		old_HP2 = HP_2;

		if (verbose == 1) {
			$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>• HP: " + HP_1 + ", " + HP_2 + ", Energía: " + Energy_1 + ", " + Energy_2);
		}




		time += time_turn;
		/*==== if one of the Pokemon has fainted then end the battle ====*/
		if ((HP_1 == 0 || HP_2 == 0)) {
			break;
		}


		/*== if one of the Pokemon has fainted then end the battle ==*/


	}
	var battle_rating1 = (500.0 * damage_dealt1 / Pokemon_PVP2_Stats[2]) + (500.0 * HP_1 / Pokemon_PVP1_Stats[2]);
	var battle_rating2 = (500.0 * damage_dealt2 / Pokemon_PVP1_Stats[2]) + (500.0 * HP_2 / Pokemon_PVP2_Stats[2]);

	if (verbose == 1) {
		$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br><br>Turnos simulación: " + turn + " (" + time + " segundos)" + (2+turn)*0.5);
		$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br><br>Battle rating: " + Math.trunc(battle_rating1) + ", " + Math.trunc(battle_rating2));
	}

	return battle_rating1
}



function Get_PVP_Simulator() {
	$("#Output_PVP_Simulator").html("<hr class='hrseparador'>");

	/*==== Set variables 1/2 ====*/
	battle_turns = 480;
	var Pokemon_Name_PVP1 = "Sealeo";
	var Pokemon_PVP1 = window[Input_Problematic_Pokemon(Pokemon_Name_PVP1.toLowerCase())];

	// Do something to get IVs and level of the best combination
	var IV_PVP_1 = [15,15,15];
	var Level_1 = 30;
	var Pokemon_PVP1_Stats = [Get_ATK(Pokemon_PVP1,[IV_PVP_1[0],IV_PVP_1[1],IV_PVP_1[2]],Level_1), Get_DEF(Pokemon_PVP1,[IV_PVP_1[0],IV_PVP_1[1],IV_PVP_1[2]],Level_1), Get_HP(Pokemon_PVP1,[IV_PVP_1[0],IV_PVP_1[1],IV_PVP_1[2]],Level_1)];

	var Pokemon_Name_PVP2 = "Charizard";
	var Pokemon_PVP2 = window[Input_Problematic_Pokemon(Pokemon_Name_PVP2.toLowerCase())];
	var IV_PVP_2 = [15,15,15];
	var Level_2 = 20;
	var Pokemon_PVP2_Stats = [Get_ATK(Pokemon_PVP2,[IV_PVP_2[0],IV_PVP_2[1],IV_PVP_2[2]],Level_2), Get_DEF(Pokemon_PVP2,[IV_PVP_2[0],IV_PVP_2[1],IV_PVP_2[2]],Level_2), Get_HP(Pokemon_PVP2,[IV_PVP_2[0],IV_PVP_2[1],IV_PVP_2[2]],Level_2)];
	/*===Set variables 1/2 ==*/

	var damage_multiplier_fast1 = [];
	var damage_fast1 = [];
	var move_turns1 = [];
	var move_fast_energy1 = [];
	var moves_fast1 = Pokemon_PVP1["Fast_moves"];
	//
	var damage_multiplier_charged1 = [];
	var damage_charged1 = [];
	var move_charged_energy1 = [];
	var moves_charged1 = Pokemon_PVP1["Charged_moves"];
	//
	var damage_multiplier_fast2 = [];
	var damage_fast2 = [];
	var move_turns2 = [];
	var move_fast_energy2 = [];
	var moves_fast2 = Pokemon_PVP2["Fast_moves"];
	//
	var damage_multiplier_charged2 = [];
	var damage_charged2 = [];
	var move_charged_energy2 = [];
	var moves_charged2 = Pokemon_PVP2["Charged_moves"];

	$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<b>Inputs datos Pokemon</b>");
	for (var i = 0; i < Pokemon_PVP1["Fast_moves"].length; i++) {
		damage_multiplier_fast1[i] = STAB_multiplier(Pokemon_PVP1["Element"], moves_pvp[Pokemon_PVP1["Fast_moves"][i]]["Element"]) * effectiveness_multiplier(moves_pvp[Pokemon_PVP1["Fast_moves"][i]]["Element"],Pokemon_PVP2["Element"]) * 1.3;
		damage_fast1[i] = damage_PVP(Pokemon_PVP1["Fast_moves"][i],Pokemon_PVP1_Stats[0],Pokemon_PVP2_Stats[1],damage_multiplier_fast1[i]);
		move_turns1[i] = moves_pvp[Pokemon_PVP1["Fast_moves"][i]]["Duration"];
		move_fast_energy1[i] = moves_pvp[Pokemon_PVP1["Fast_moves"][i]]["Energy"];
	}
	for (var i = 0; i < Pokemon_PVP1["Charged_moves"].length; i++) {
		damage_multiplier_charged1[i] = STAB_multiplier(Pokemon_PVP1["Element"], moves_pvp[Pokemon_PVP1["Charged_moves"][i]]["Element"]) * effectiveness_multiplier(moves_pvp[Pokemon_PVP1["Charged_moves"][i]]["Element"],Pokemon_PVP2["Element"]) * 1.3;
		damage_charged1[i] = damage_PVP(Pokemon_PVP1["Charged_moves"][i],Pokemon_PVP1_Stats[0],Pokemon_PVP2_Stats[1],damage_multiplier_charged1[i]);
		move_charged_energy1[i] = moves_pvp[Pokemon_PVP1["Charged_moves"][i]]["Energy"];
	}
	$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>Pokemon 1: " + Pokemon_Name_PVP1);
	$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>• Movimientos rápidos: " + moves_fast1);
	$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>• Daño rápidos: " + damage_fast1);
	$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>• Duracion: " + move_turns1);
	$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>• Energía rápidos: " + move_fast_energy1);
	$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>• Movimientos cargados: " + moves_charged1);
	$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>• Daño cargados: " + damage_charged1);
	$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>• Energía cargados: " + move_charged_energy1);


	for (var i = 0; i < Pokemon_PVP2["Fast_moves"].length; i++) {
		damage_multiplier_fast2[i] = STAB_multiplier(Pokemon_PVP2["Element"], moves_pvp[Pokemon_PVP2["Fast_moves"][i]]["Element"]) * effectiveness_multiplier(moves_pvp[Pokemon_PVP2["Fast_moves"][i]]["Element"],Pokemon_PVP1["Element"]) * 1.3;
		damage_fast2[i] = damage_PVP(Pokemon_PVP2["Fast_moves"][i],Pokemon_PVP2_Stats[0],Pokemon_PVP1_Stats[1],damage_multiplier_fast2[i]);
		move_turns2[i] = moves_pvp[Pokemon_PVP2["Fast_moves"][i]]["Duration"];
		move_fast_energy2[i] = moves_pvp[Pokemon_PVP2["Fast_moves"][i]]["Energy"];
	}
	for (var i = 0; i < Pokemon_PVP2["Charged_moves"].length; i++) {
		damage_multiplier_charged2[i] = STAB_multiplier(Pokemon_PVP2["Element"], moves_pvp[Pokemon_PVP2["Charged_moves"][i]]["Element"]) * effectiveness_multiplier(moves_pvp[Pokemon_PVP2["Charged_moves"][i]]["Element"],Pokemon_PVP1["Element"]) * 1.3;
		damage_charged2[i] = damage_PVP(Pokemon_PVP2["Charged_moves"][i],Pokemon_PVP2_Stats[0],Pokemon_PVP1_Stats[1],damage_multiplier_charged2[i]);
		move_charged_energy2[i] = moves_pvp[Pokemon_PVP2["Charged_moves"][i]]["Energy"];
	}
	$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br><br>Pokemon 2: " + Pokemon_Name_PVP2);
	$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>• Movimientos rápidos: " + moves_fast2);
	$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>• Daño rápidos: " + damage_fast2);
	$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>• Duracion: " + move_turns2);
	$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>• Energía rápidos: " + move_fast_energy2);
	$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>• Movimientos cargados: " + moves_charged2);
	$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>• Daño cargados: " + damage_charged2);
	$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>• Energía cargados: " + move_charged_energy2);

	var a_00 = 0.13;
	var a_11 = 0.14;
	var a_22 = 0.12;

	var a_01 = 0.11;
	var a_02 = 0.12;
	var a_12 = 0.11;

	var a_10 = 0.10;
	var a_21 = 0.10;
	var a_20 = 0.07;



	/*==== Configuration of the simulation ====*/
	verbose = 1;

	HP_1 = Pokemon_PVP1_Stats[2];
	HP_2 = Pokemon_PVP2_Stats[2];

	Energy_1 = 0;
	Energy_2 = 0;

	var fast_move1 = 1;
	var fast_move2 = 0;

	var battle_rating_total = [];

	var simulate_multiple_charged_moves = 0;

	var simulate_multiple_shields = 1;

	var shields1 = 1;
	var shields2 = 0;

	var charged1_move1 = 2;
	var charged2_move1 = 1;
	var charged1_move2 = 0;
	var charged2_move2 = 1;

	if (simulate_multiple_charged_moves == 0) {
		/*==== Simular 1 combinación de cargados ====*/


		var charged1_move1_use;
		var charged2_move1_use;
		var charged1_move2_use;
		var charged2_move2_use;

		if ((damage_charged1[charged1_move1]/move_charged_energy1[charged1_move1]) > (damage_charged1[charged2_move1]/move_charged_energy1[charged2_move1])) {
			charged1_move1_use = charged1_move1;
			charged2_move1_use = charged2_move1;
		}
		else {
			charged1_move1_use = charged2_move1;
			charged2_move1_use = charged1_move1;
		}


		if ((damage_charged2[charged1_move2]/move_charged_energy2[charged1_move2]) > (damage_charged2[charged2_move2]/move_charged_energy2[charged2_move2])) {
			charged1_move2_use = charged1_move2;
			charged2_move2_use = charged2_move2;
		}
		else {
			charged1_move2_use = charged2_move2;
			charged2_move2_use = charged1_move2;
		}

		if (simulate_multiple_shields == 0) {

			battle_rating_total[0] = Math.trunc(PVP_Simulator(shields1,shields2,IV_PVP_1,IV_PVP_2,HP_1,HP_2,Energy_1,Energy_2,fast_move1,fast_move2,charged1_move1_use,charged1_move2_use,charged2_move1_use,charged2_move2_use,damage_fast1,damage_fast2,move_turns1,move_turns2,move_fast_energy1,move_fast_energy2,damage_charged1,damage_charged2,move_charged_energy1,move_charged_energy2,Pokemon_Name_PVP1,Pokemon_Name_PVP2,Pokemon_PVP1,Pokemon_PVP2,moves_charged1,moves_charged2,Pokemon_PVP1_Stats,Pokemon_PVP2_Stats,verbose));

			$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>Todos los battle rating: " + battle_rating_total);
		}
		else {
			contador_battle_rating = 0;
			for (var i = 0; i <= 2; i++) {
				for (var j = 0; j <= 2; j++) {
					battle_rating_total[contador_battle_rating] = Math.trunc(PVP_Simulator(i,j,IV_PVP_1,IV_PVP_2,HP_1,HP_2,Energy_1,Energy_2,fast_move1,fast_move2,charged1_move1_use,charged1_move2_use,charged2_move1_use,charged2_move2_use,damage_fast1,damage_fast2,move_turns1,move_turns2,move_fast_energy1,move_fast_energy2,damage_charged1,damage_charged2,move_charged_energy1,move_charged_energy2,Pokemon_Name_PVP1,Pokemon_Name_PVP2,Pokemon_PVP1,Pokemon_PVP2,moves_charged1,moves_charged2,Pokemon_PVP1_Stats,Pokemon_PVP2_Stats,verbose));
					contador_battle_rating++;
				}
			}
			battle_rating_total_criterio = battle_rating_total[0] * a_00 + battle_rating_total[1] * a_01 + battle_rating_total[2] * a_02 + battle_rating_total[3] * a_10 + battle_rating_total[4] * a_11 + battle_rating_total[5] * a_12 + battle_rating_total[6] * a_20 + battle_rating_total[7] * a_21 + battle_rating_total[8] * a_22;

			$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>Todos los battle rating: " + battle_rating_total + "; " + battle_rating_total_criterio);
		}



		/*== Simular 1 combinación de cargados ==*/
	}
	if (simulate_multiple_charged_moves == 1) {
		/*==== Simular multiples combinaciones de cargados para Pokemon 1 ====*/
		for (var i = 0; i < Pokemon_PVP1["Charged_moves"].length; i++) {
		    for (var j = i+1; j < Pokemon_PVP1["Charged_moves"].length; j++) {
		      if (damage_charged1[i]/move_charged_energy1[i] > damage_charged1[j]/move_charged_energy1[j]) {

		      }
		      else {
						temp1 = damage_charged1[i];
		        damage_charged1[i] = damage_charged1[j];
		        damage_charged1[j] = temp1;

						temp2 = move_charged_energy1[i];
		        move_charged_energy1[i] = move_charged_energy1[j];
		        move_charged_energy1[j] = temp2;

						temp3 = moves_charged1[i];
		        moves_charged1[i] = moves_charged1[j];
		        moves_charged1[j] = temp3;
		      }
		    }
		}


		for (var i = 0; i < Pokemon_PVP1["Charged_moves"].length - 1; i++) {
			for (var j = i+1; j < Pokemon_PVP1["Charged_moves"].length; j++) {
				if (simulate_multiple_shields == 0) {
					contador_battle_rating = 0;
					battle_rating_total[contador_battle_rating] = Math.trunc(PVP_Simulator(shields1,shields2,IV_PVP_1,IV_PVP_2,HP_1,HP_2,Energy_1,Energy_2,fast_move1,fast_move2,i,charged1_move2,j,charged2_move2,damage_fast1,damage_fast2,move_turns1,move_turns2,move_fast_energy1,move_fast_energy2,damage_charged1,damage_charged2,move_charged_energy1,move_charged_energy2,Pokemon_Name_PVP1,Pokemon_Name_PVP2,Pokemon_PVP1,Pokemon_PVP2,moves_charged1,moves_charged2,Pokemon_PVP1_Stats,Pokemon_PVP2_Stats,verbose));
					contador_battle_rating++;

				}
				battle_rating_total_criterio = battle_rating_total[0] * a_00 + battle_rating_total[1] * a_01 + battle_rating_total[2] * a_02 + battle_rating_total[3] * a_10 + battle_rating_total[4] * a_11 + battle_rating_total[5] * a_12 + battle_rating_total[6] * a_20 + battle_rating_total[7] * a_21 + battle_rating_total[8] * a_22;

				$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>Todos los battle rating: " + battle_rating_total);
			}

		}


	}




	//$("#Output_PVP_Simulator").html($('#Output_PVP_Simulator').html() + "<br>Todos fjdsfjkdsjhkf battle rating: " + damage_charged1 + ", " + move_charged_energy1 + ", " + moves_charged1);



	/*== Configuration of the simulation ==*/











}

function Get_PVP_Moves() {
	/*==== Clear the output ====*/
	$("#Output_CP").html("<hr class='hrseparador'>");

	/*==== Set variables 1/2 ====*/
	var Pokemon_Name_PVP_Moves = "Altaria";//(document.getElementById("Pokemon_PVP").value);
	var Pokemon_Name_PVP_Moves_String = Pokemon_Name_PVP_Moves;
	Pokemon_Name_PVP_Moves = Pokemon_Name_PVP_Moves.toLowerCase();
	Pokemon_Name_PVP_Moves = Input_Problematic_Pokemon(Pokemon_Name_PVP_Moves);
	var Pokemon_PVP_Moves = window[Pokemon_Name_PVP_Moves];
	/*===Set variables 1/2 ==*/

	/*==== Check if inputs are correct ====*/
	if (typeof Pokemon_PVP_Moves == 'undefined'){
		if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
			$("#Output_PVP_Moves").html($('#Output_PVP_Moves').html() + "<div id='output_text'>Pokemon incorrecto.</div>");
		}
		else {
			$("#Output_PVP_Moves").html($('#Output_PVP_Moves').html() + "<div id='output_text'>Incorrect Pokemon.</div>");
		}
		return;
	}
	/*== Check if inputs are correct ==*/

	$("#Output_PVP_Moves").html($('#Output_PVP_Moves').html() + "<div id='output_text'>De momento solo se muestran los movimientos de Altaria</div>");

	if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
		$("#Output_PVP_Moves").html($('#Output_PVP_Moves').html() + "<div id='output_text'>Los resultados obtenidos son:<h4 style='text-transform: capitalize;text-align: center'>" + Pokemon_Name_PVP_Moves_String + "</h4></div>");
		$("#Output_PVP_Moves").html($('#Output_PVP_Moves').html() + "<div id='output_text'><h4 style='text-align: center'>Moviminetos rápidos</h4></div>");
	}
	else {
		$("#Output_PVP_Moves").html($('#Output_PVP_Moves').html() + "<div id='output_text'>The results obtained are:<h4 style='text-transform: capitalize;text-align: center'>" + Pokemon_Name_PVP_Moves_String + "</h4></div>");
		$("#Output_PVP_Moves").html($('#Output_PVP_Moves').html() + "<div id='output_text'><h4 style='text-align: center'>Fast moves</h4></div>");
	}



	for (var i = 0; i < Pokemon_PVP_Moves["Fast_moves"].length; i++) {
		$( "#Output_PVP_Moves_2" ).append( "<tr><th>" + Pokemon_PVP_Moves["Fast_moves"][i] + "<br>(" + moves_pvp[Pokemon_PVP_Moves["Fast_moves"][i]]["Element"] + ")</th><th>" + moves_pvp[Pokemon_PVP_Moves["Fast_moves"][i]]["Power"] + "<br>(" + (moves_pvp[Pokemon_PVP_Moves["Fast_moves"][i]]["Power"]/moves_pvp[Pokemon_PVP_Moves["Fast_moves"][i]]["Duration"]) + ")</th><th>" + moves_pvp[Pokemon_PVP_Moves["Fast_moves"][i]]["Energy"] + "<br>(" + (moves_pvp[Pokemon_PVP_Moves["Fast_moves"][i]]["Energy"]/moves_pvp[Pokemon_PVP_Moves["Fast_moves"][i]]["Duration"]) + ")</th><th>" + moves_pvp[Pokemon_PVP_Moves["Fast_moves"][i]]["Duration"] + "</th></tr>" );
	}

	if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
		$( "#Output_PVP_Moves_2" ).append( "<tr><td>Movimiento</td><td>Daño<br>(DPT)</td><td>Energía<br>(EPT)</td><td>Turnos</td></tr>" );
	}
	else {
		$( "#Output_PVP_Moves_2" ).append( "<tr><td>Move</td><td>Damage<br>(DPT)</td><td>Energy<br>(EPT)</td><td>Turns</td></tr>" );
	}

	if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
		$("#Output_PVP_Moves_3").html($('#Output_PVP_Moves_3').html() + "<div id='output_text'><h4 style='text-align: center'>Moviminetos cargados</h4></div>");
	}
	else {
		$("#Output_PVP_Moves_3").html($('#Output_PVP_Moves_3').html() + "<div id='output_text'><h4 style='text-align: center'>Charged moves</h4></div>");
	}

	for (var i = 0; i < Pokemon_PVP_Moves["Charged_moves"].length; i++) {
		$( "#Output_PVP_Moves_4" ).append( "<tr><th>" + Pokemon_PVP_Moves["Charged_moves"][i] + "<br>(" + moves_pvp[Pokemon_PVP_Moves["Charged_moves"][i]]["Element"] + ")</th><th>" + moves_pvp[Pokemon_PVP_Moves["Charged_moves"][i]]["Power"] + "<br>(" + Math.round(moves_pvp[Pokemon_PVP_Moves["Charged_moves"][i]]["Power"]/moves_pvp[Pokemon_PVP_Moves["Charged_moves"][i]]["Energy"] *100)/100 + ")</th><th>" + moves_pvp[Pokemon_PVP_Moves["Charged_moves"][i]]["Energy"] + "</th></tr>" );
	}

	if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
		$( "#Output_PVP_Moves_4" ).append( "<tr><td>Movimiento</td><td>Daño<br>(DPE)</td><td>Energía</td></tr>" );
	}
	else {
		$( "#Output_PVP_Moves_4" ).append( "<tr><td>Move</td><td>Damage<br>(DPE)</td><td>Energy</td></tr>" );
	}


}