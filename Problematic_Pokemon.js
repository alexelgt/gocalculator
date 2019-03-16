function Input_Problematic_Pokemon(Pokemon_Name){
  if (Pokemon_Name == "nidoran♀") {
    Pokemon_Name = "nidoranf";
  }
  else if (Pokemon_Name == "nidoran♂") {
    Pokemon_Name = "nidoranm";
  }
  else if (Pokemon_Name == "mime jr.") {
    Pokemon_Name = "mimejr";
  }
  else if (Pokemon_Name == "mr. mime") {
    Pokemon_Name = "mrmime";
  }
  else if (Pokemon_Name == "farfetch'd") {
    Pokemon_Name = "farfetchd";
  }
  else if (Pokemon_Name == "ho-oh") {
    Pokemon_Name = "hooh";
  }

  else if (Pokemon_Name == "deoxys normal") {
    Pokemon_Name = "deoxysn";
  }

  else if (Pokemon_Name == "giratina altered") {
    Pokemon_Name = "giratinaa";
  }

  else if (Pokemon_Name == "giratina origin") {
    Pokemon_Name = "giratinao";
  }
  else if (Pokemon_Name == "geodude alola") {
    Pokemon_Name = "geodude_alola";
  }
  else if (Pokemon_Name == "graveler alola") {
    Pokemon_Name = "graveler_alola";
  }
  else if (Pokemon_Name == "golem alola") {
    Pokemon_Name = "golem_alola";
  }

  return Pokemon_Name;
}
