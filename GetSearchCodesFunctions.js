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