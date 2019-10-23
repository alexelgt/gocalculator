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
		Pokemon_Name_PVP_Stats = inputProblematicPokemon(Pokemon_Name_PVP_Stats);
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
							Pokemon_Stats_PVP[row_Stats_PVP] = [i, j, k, 40, PVP_Stats_Quality(GetATK(Pokemon_PVP_Stats,[i,j,k],40),GetDEF(Pokemon_PVP_Stats,[i,j,k],40),GetHP(Pokemon_PVP_Stats,[i,j,k],40))]
							row_Stats_PVP++;
						}
						else {
							for (var l = 40; l >= 1; l = l - 0.5) {
								if (CP_Formula(Pokemon_PVP_Stats,[i, j, k],l) <= League_CP_Limit) {
									Pokemon_Stats_PVP[row_Stats_PVP] = [i, j, k, l, PVP_Stats_Quality(GetATK(Pokemon_PVP_Stats,[i,j,k],l),GetDEF(Pokemon_PVP_Stats,[i,j,k],l),GetHP(Pokemon_PVP_Stats,[i,j,k],l))]
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
			    return parseFloat(GetHP(Pokemon_PVP_Stats,[b[0],b[1],b[2]],b[3])) - parseFloat(GetHP(Pokemon_PVP_Stats,[a[0],a[1],a[2]],a[3]));
			});

			/*====Sort by Quality ===*/
			Pokemon_Stats_PVP.sort(function(a, b) {
			    return parseFloat(b[4]) - parseFloat(a[4]);
			});
			/*== Sort the data ==*/

			/*==== Get IVs combination introduced ====*/
			if (csv_mode == 0) {
				var IV = [parseFloat(document.getElementById("IV_A").value), parseFloat(document.getElementById("IV_D").value), parseFloat(document.getElementById("IV_HP").value)];

				var Stats_PVP_Check;
				if (League_CP_Limit == null) { // In master league the best combination is always level 40 so no need to do a loop
					Stats_PVP_Check = [IV[0],IV[1],IV[2], 40, PVP_Stats_Quality(GetATK(Pokemon_PVP_Stats,[IV[0],IV[1],IV[2]],40),GetDEF(Pokemon_PVP_Stats,[IV[0],IV[1],IV[2]],40),GetHP(Pokemon_PVP_Stats,[IV[0],IV[1],IV[2]],40))]
				}
				else {
					for (var l = 40; l >= 1; l = l - 0.5) {
						if (CP_Formula(Pokemon_PVP_Stats,[IV[0],IV[1],IV[2]],l) <= League_CP_Limit) {
							Stats_PVP_Check = [IV[0],IV[1],IV[2], l, PVP_Stats_Quality(GetATK(Pokemon_PVP_Stats,[IV[0],IV[1],IV[2]],l),GetDEF(Pokemon_PVP_Stats,[IV[0],IV[1],IV[2]],l),GetHP(Pokemon_PVP_Stats,[IV[0],IV[1],IV[2]],l))]
							break; //combination under CP limit found so stop the loop over l
						}
					}
				}
			}

			/*== Get IVs combination introduced ==*/

			for (const [i, Pokemon_Stats_PVP_element] of Pokemon_Stats_PVP.entries()) {
				Pokemon_Stats_PVP_element[5] = i + 1;

				if (csv_mode == 0 && JSON.stringify(Pokemon_Stats_PVP_element.slice(0,3)) == JSON.stringify(Stats_PVP_Check.slice(0,3))) {
					Stats_PVP_Check[5] = Pokemon_Stats_PVP_element[5];
				}
			}

			if (csv_mode == 0 && Stats_PVP_Check[5] == undefined) {
				Stats_PVP_Check[5] = 0
			}


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
				//$( "#Output_PVP_Stats_4" ).append( "<tr><th>" + Pokemon_Stats_PVP[0][0] + "<br>(" + Math.round(GetATK(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[0][0],Pokemon_Stats_PVP[0][1],Pokemon_Stats_PVP[0][2]],Pokemon_Stats_PVP[0][3]) *10)/10 + ")" + "</th><th>" + Pokemon_Stats_PVP[0][1] + "<br>(" + Math.round(GetDEF(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[0][0],Pokemon_Stats_PVP[0][1],Pokemon_Stats_PVP[0][2]],Pokemon_Stats_PVP[0][3]) *10)/10 + ")" + "</th><th>" + Pokemon_Stats_PVP[0][2] + "<br>(" + GetHP(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[0][0],Pokemon_Stats_PVP[0][1],Pokemon_Stats_PVP[0][2]],Pokemon_Stats_PVP[0][3]) + ")" + "</th><th>" + CP_Formula(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[0][0], Pokemon_Stats_PVP[0][1], Pokemon_Stats_PVP[0][2]],Pokemon_Stats_PVP[0][3]) + "<br>(" + Pokemon_Stats_PVP[0][3] + ")</th><th>" + Pokemon_Stats_PVP[0][4] + "<br>(" + Math.round( ( PVP_Stats_Quality_percentage(Pokemon_Stats_PVP[0][4],Pokemon_Stats_PVP[Pokemon_Stats_PVP.length -1][4],Pokemon_Stats_PVP[0][4]) )*100*100)/100 + "%)</th></tr>" );

				var show_best_n_qualities;
				for(var i = 0; i < 10; i++) {
					show_best_n_qualities = i + 1;
					if (i == Pokemon_Stats_PVP.length) {
						break;
					}
					
					$( "#Output_PVP_Stats_4" ).append( "<tr><th>" + Pokemon_Stats_PVP[i][5] + "</th><th>" + Pokemon_Stats_PVP[i][0] + "<br>(" + Math.round(GetATK(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[i][0],Pokemon_Stats_PVP[i][1],Pokemon_Stats_PVP[i][2]],Pokemon_Stats_PVP[i][3]) *10)/10 + ")" + "</th><th>" + Pokemon_Stats_PVP[i][1] + "<br>(" + Math.round(GetDEF(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[i][0],Pokemon_Stats_PVP[i][1],Pokemon_Stats_PVP[i][2]],Pokemon_Stats_PVP[i][3]) *10)/10 + ")" + "</th><th>" + Pokemon_Stats_PVP[i][2] + "<br>(" + GetHP(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[i][0],Pokemon_Stats_PVP[i][1],Pokemon_Stats_PVP[i][2]],Pokemon_Stats_PVP[i][3]) + ")" + "</th><th>" + CP_Formula(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[i][0], Pokemon_Stats_PVP[i][1], Pokemon_Stats_PVP[i][2]],Pokemon_Stats_PVP[i][3]) + "<br>(" + Pokemon_Stats_PVP[i][3] + ")</th><th>" + Pokemon_Stats_PVP[i][4] + "<br>(" + Math.round( ( PVP_Stats_Quality_percentage(Pokemon_Stats_PVP[0][4],Pokemon_Stats_PVP[Pokemon_Stats_PVP.length -1][4],Pokemon_Stats_PVP[i][4]) )*100*100)/100 + "%)</th></tr>" );
					
				}

				if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
				  $( "#Output_PVP_Stats_4" ).append( "<tr><td>#</td><td>A</td><td>D</td><td>HP</td><td>PC<br>(Nivel)</td><td>Calidad</td></tr>" );
				}
				else {
				  $( "#Output_PVP_Stats_4" ).append( "<tr><td>#</td><td>A</td><td>D</td><td>HP</td><td>CP<br>(Level)</td><td>Quality</td></tr>" );
				}
				/*== Create table with the 10 best qualities ==*/

				/*==== Create table with IVs combination introduced ====*/
				$( "#Output_PVP_Stats_2" ).append( "<tr><th>" + Stats_PVP_Check[5] + "</th><th>" + Stats_PVP_Check[0] + "<br>(" + Math.round(GetATK(Pokemon_PVP_Stats,[Stats_PVP_Check[0],Stats_PVP_Check[1],Stats_PVP_Check[2]],Stats_PVP_Check[3]) *10)/10 + ")" + "</th><th>" + Stats_PVP_Check[1] + "<br>(" + Math.round(GetDEF(Pokemon_PVP_Stats,[Stats_PVP_Check[0],Stats_PVP_Check[1],Stats_PVP_Check[2]],Stats_PVP_Check[3]) *10)/10 + ")" + "</th><th>" + Stats_PVP_Check[2] + "<br>(" + GetHP(Pokemon_PVP_Stats,[Stats_PVP_Check[0],Stats_PVP_Check[1],Stats_PVP_Check[2]],Stats_PVP_Check[3]) + ")" + "</th><th>" + CP_Formula(Pokemon_PVP_Stats,[Stats_PVP_Check[0], Stats_PVP_Check[1], Stats_PVP_Check[2]],Stats_PVP_Check[3]) + "<br>(" + Stats_PVP_Check[3] + ")</th><th>" + Stats_PVP_Check[4] + "<br>(" + Math.round( ( PVP_Stats_Quality_percentage(Pokemon_Stats_PVP[0][4],Pokemon_Stats_PVP[Pokemon_Stats_PVP.length -1][4],Stats_PVP_Check[4]) )*100*100)/100 + "%)</th></tr>" );

				if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
					$( "#Output_PVP_Stats_2" ).append( "<tr><td>#</td><td>A</td><td>D</td><td>HP</td><td>PC<br>(Nivel)</td><td>Calidad</td></tr>" );
				}
				else {
					$( "#Output_PVP_Stats_2" ).append( "<tr><td>#</td><td>A</td><td>D</td><td>HP</td><td>CP<br>(Level)</td><td>Quality</td></tr>" );
				}
				/*== Create table with IVs combination introduced ==*/

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
							HP_values_PVP[contador_CP_values_PVP] = GetHP(Pokemon_PVP_Stats_Basic_evolution,[Pokemon_Stats_PVP[i][0], Pokemon_Stats_PVP[i][1], Pokemon_Stats_PVP[i][2]],Level);
						}
						else {
							CP_values_PVP[contador_CP_values_PVP] = CP_Formula(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[i][0], Pokemon_Stats_PVP[i][1], Pokemon_Stats_PVP[i][2]],Level);
							HP_values_PVP[contador_CP_values_PVP] = GetHP(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[i][0], Pokemon_Stats_PVP[i][1], Pokemon_Stats_PVP[i][2]],Level);
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
				csv_data.push([Pokemon_Name_PVP_Stats_String, Pokemon_Stats_PVP[0][0] + " / " + Pokemon_Stats_PVP[0][1] + " / " + Pokemon_Stats_PVP[0][2] + " (" + Math.round( ( PVP_Stats_Quality_percentage(Pokemon_Stats_PVP[0][4],Pokemon_Stats_PVP[Pokemon_Stats_PVP.length -1][4],Pokemon_Stats_PVP[0][4]) )*100*100)/100 + "%)",Math.round(GetATK(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[0][0],Pokemon_Stats_PVP[0][1],Pokemon_Stats_PVP[0][2]],Pokemon_Stats_PVP[0][3]) *10)/10 + " / " + Math.round(GetDEF(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[0][0],Pokemon_Stats_PVP[0][1],Pokemon_Stats_PVP[0][2]],Pokemon_Stats_PVP[0][3]) *10)/10 + " / " + GetHP(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[0][0],Pokemon_Stats_PVP[0][1] ,Pokemon_Stats_PVP[0][2]],Pokemon_Stats_PVP[0][3]),CP_Formula(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[0][0], Pokemon_Stats_PVP[0][1], Pokemon_Stats_PVP[0][2]],Pokemon_Stats_PVP[0][3]),Pokemon_Stats_PVP[1][0] + " / " + Pokemon_Stats_PVP[1][1] + " / " + Pokemon_Stats_PVP[1][2] + " (" + Math.round( ( PVP_Stats_Quality_percentage(Pokemon_Stats_PVP[0][4],Pokemon_Stats_PVP[Pokemon_Stats_PVP.length -1][4],Pokemon_Stats_PVP[1][4]) )*100*100)/100 + "%)",Math.round(GetATK(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[1][0],Pokemon_Stats_PVP[1][1],Pokemon_Stats_PVP[1][2]],Pokemon_Stats_PVP[1][3]) *10)/10 + " / " + Math.round(GetDEF(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[1][0],Pokemon_Stats_PVP[1][1],Pokemon_Stats_PVP[1][2]],Pokemon_Stats_PVP[1][3]) *10)/10 + " / " + GetHP(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[1][0],Pokemon_Stats_PVP[1][1],Pokemon_Stats_PVP[1][2]],Pokemon_Stats_PVP[1][3]),CP_Formula(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[1][0], Pokemon_Stats_PVP[1][1], Pokemon_Stats_PVP[1][2]],Pokemon_Stats_PVP[1][3]),Pokemon_Stats_PVP[2][0] + " / " + Pokemon_Stats_PVP[2][1] + " / " + Pokemon_Stats_PVP[2][2] + " (" + Math.round( ( PVP_Stats_Quality_percentage(Pokemon_Stats_PVP[0][4],Pokemon_Stats_PVP[Pokemon_Stats_PVP.length -1][4],Pokemon_Stats_PVP[2][4]) )*100*100)/100 + "%)",Math.round(GetATK(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[2][0],Pokemon_Stats_PVP[2][1],Pokemon_Stats_PVP[2][2]],Pokemon_Stats_PVP[2][3]) *10)/10 + " / " + Math.round(GetDEF(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[2][0],Pokemon_Stats_PVP[2][1],Pokemon_Stats_PVP[2][2]],Pokemon_Stats_PVP[2][3]) *10)/10 + " / " + GetHP(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[2][0],Pokemon_Stats_PVP[2][1],Pokemon_Stats_PVP[2][2]],Pokemon_Stats_PVP[2][3]),CP_Formula(Pokemon_PVP_Stats,[Pokemon_Stats_PVP[2][0], Pokemon_Stats_PVP[2][1], Pokemon_Stats_PVP[2][2]],Pokemon_Stats_PVP[2][3]), '"' + PVP_Code + '"']);
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

// function Get_PVP_Moves() {
// 	/*==== Clear the output ====*/
// 	$("#Output_CP").html("<hr class='hrseparador'>");

// 	/*==== Set variables 1/2 ====*/
// 	var Pokemon_Name_PVP_Moves = "Altaria";//(document.getElementById("Pokemon_PVP").value);
// 	var Pokemon_Name_PVP_Moves_String = Pokemon_Name_PVP_Moves;
// 	Pokemon_Name_PVP_Moves = Pokemon_Name_PVP_Moves.toLowerCase();
// 	Pokemon_Name_PVP_Moves = inputProblematicPokemon(Pokemon_Name_PVP_Moves);
// 	var Pokemon_PVP_Moves = window[Pokemon_Name_PVP_Moves];
// 	/*===Set variables 1/2 ==*/

// 	/*==== Check if inputs are correct ====*/
// 	if (typeof Pokemon_PVP_Moves == 'undefined'){
// 		if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
// 			$("#Output_PVP_Moves").html($('#Output_PVP_Moves').html() + "<div id='output_text'>Pokemon incorrecto.</div>");
// 		}
// 		else {
// 			$("#Output_PVP_Moves").html($('#Output_PVP_Moves').html() + "<div id='output_text'>Incorrect Pokemon.</div>");
// 		}
// 		return;
// 	}
// 	/*== Check if inputs are correct ==*/

// 	$("#Output_PVP_Moves").html($('#Output_PVP_Moves').html() + "<div id='output_text'>De momento solo se muestran los movimientos de Altaria</div>");

// 	if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
// 		$("#Output_PVP_Moves").html($('#Output_PVP_Moves').html() + "<div id='output_text'>Los resultados obtenidos son:<h4 style='text-transform: capitalize;text-align: center'>" + Pokemon_Name_PVP_Moves_String + "</h4></div>");
// 		$("#Output_PVP_Moves").html($('#Output_PVP_Moves').html() + "<div id='output_text'><h4 style='text-align: center'>Moviminetos rápidos</h4></div>");
// 	}
// 	else {
// 		$("#Output_PVP_Moves").html($('#Output_PVP_Moves').html() + "<div id='output_text'>The results obtained are:<h4 style='text-transform: capitalize;text-align: center'>" + Pokemon_Name_PVP_Moves_String + "</h4></div>");
// 		$("#Output_PVP_Moves").html($('#Output_PVP_Moves').html() + "<div id='output_text'><h4 style='text-align: center'>Fast moves</h4></div>");
// 	}



// 	for (var i = 0; i < Pokemon_PVP_Moves["Fast_moves"].length; i++) {
// 		$( "#Output_PVP_Moves_2" ).append( "<tr><th>" + Pokemon_PVP_Moves["Fast_moves"][i] + "<br>(" + movesPVP[Pokemon_PVP_Moves["Fast_moves"][i]]["Element"] + ")</th><th>" + movesPVP[Pokemon_PVP_Moves["Fast_moves"][i]]["Power"] + "<br>(" + (movesPVP[Pokemon_PVP_Moves["Fast_moves"][i]]["Power"]/movesPVP[Pokemon_PVP_Moves["Fast_moves"][i]]["Duration"]) + ")</th><th>" + movesPVP[Pokemon_PVP_Moves["Fast_moves"][i]]["Energy"] + "<br>(" + (movesPVP[Pokemon_PVP_Moves["Fast_moves"][i]]["Energy"]/movesPVP[Pokemon_PVP_Moves["Fast_moves"][i]]["Duration"]) + ")</th><th>" + movesPVP[Pokemon_PVP_Moves["Fast_moves"][i]]["Duration"] + "</th></tr>" );
// 	}

// 	if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
// 		$( "#Output_PVP_Moves_2" ).append( "<tr><td>Movimiento</td><td>Daño<br>(DPT)</td><td>Energía<br>(EPT)</td><td>Turnos</td></tr>" );
// 	}
// 	else {
// 		$( "#Output_PVP_Moves_2" ).append( "<tr><td>Move</td><td>Damage<br>(DPT)</td><td>Energy<br>(EPT)</td><td>Turns</td></tr>" );
// 	}

// 	if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
// 		$("#Output_PVP_Moves_3").html($('#Output_PVP_Moves_3').html() + "<div id='output_text'><h4 style='text-align: center'>Moviminetos cargados</h4></div>");
// 	}
// 	else {
// 		$("#Output_PVP_Moves_3").html($('#Output_PVP_Moves_3').html() + "<div id='output_text'><h4 style='text-align: center'>Charged moves</h4></div>");
// 	}

// 	for (var i = 0; i < Pokemon_PVP_Moves["Charged_moves"].length; i++) {
// 		$( "#Output_PVP_Moves_4" ).append( "<tr><th>" + Pokemon_PVP_Moves["Charged_moves"][i] + "<br>(" + movesPVP[Pokemon_PVP_Moves["Charged_moves"][i]]["Element"] + ")</th><th>" + movesPVP[Pokemon_PVP_Moves["Charged_moves"][i]]["Power"] + "<br>(" + Math.round(movesPVP[Pokemon_PVP_Moves["Charged_moves"][i]]["Power"]/movesPVP[Pokemon_PVP_Moves["Charged_moves"][i]]["Energy"] *100)/100 + ")</th><th>" + movesPVP[Pokemon_PVP_Moves["Charged_moves"][i]]["Energy"] + "</th></tr>" );
// 	}

// 	if (navigator.language == "es-es" || navigator.language == "es" || navigator.language == "es-ES") {
// 		$( "#Output_PVP_Moves_4" ).append( "<tr><td>Movimiento</td><td>Daño<br>(DPE)</td><td>Energía</td></tr>" );
// 	}
// 	else {
// 		$( "#Output_PVP_Moves_4" ).append( "<tr><td>Move</td><td>Damage<br>(DPE)</td><td>Energy</td></tr>" );
// 	}


// }