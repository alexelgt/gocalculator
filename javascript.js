function fullscreen(){var a=document.getElementsByTagName("a");for(var i=0;i<a.length;i++){if(a[i].className.match("noeffect")){}else{a[i].onclick=function(){window.location=this.getAttribute("href");return false}}}}

function start(){
  language();
  fullscreen();
  team_phrase();
  sliders();
  pokemonListData();

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

function pokemonListData() {
  document.getElementById("pokemon").innerHTML = '<option>Bulbasaur</option>' +
  '<option>Ivysaur</option>' +
  '<option>Venusaur</option>' +
  '<option>Charmander</option>' +
  '<option>Charmeleon</option>' +
  '<option>Charizard</option>' +
  '<option>Squirtle</option>' +
  '<option>Wartortle</option>' +
  '<option>Blastoise</option>' +
  '<option>Caterpie</option>' +
  '<option>Metapod</option>' +
  '<option>Butterfree</option>' +
  '<option>Weedle</option>' +
  '<option>Kakuna</option>' +
  '<option>Beedrill</option>' +
  '<option>Pidgey</option>' +
  '<option>Pidgeotto</option>' +
  '<option>Pidgeot</option>' +
  '<option>Rattata</option>' +
  '<option>Raticate</option>' +
  '<option>Rattata Alola</option>' +
  '<option>Raticate Alola</option>' +
  '<option>Spearow</option>' +
  '<option>Fearow</option>' +
  '<option>Ekans</option>' +
  '<option>Arbok</option>' +
  '<option>Pichu</option>' +
  '<option>Pikachu</option>' +
  '<option>Raichu</option>' +
  '<option>Raichu Alola</option>' +
  '<option>Sandshrew</option>' +
  '<option>Sandslash</option>' +
  '<option>Sandshrew Alola</option>' +
  '<option>Sandslash Alola</option>' +
  '<option>Nidoran♀</option>' +
  '<option>Nidorina</option>' +
  '<option>Nidoqueen</option>' +
  '<option>Nidoran♂</option>' +
  '<option>Nidorino</option>' +
  '<option>Nidoking</option>' +
  '<option>Cleffa</option>' +
  '<option>Clefairy</option>' +
  '<option>Clefable</option>' +
  '<option>Vulpix</option>' +
  '<option>Ninetales</option>' +
  '<option>Vulpix Alola</option>' +
  '<option>Ninetales Alola</option>' +
  '<option>Igglybuff</option>' +
  '<option>Jigglypuff</option>' +
  '<option>Wigglytuff</option>' +
  '<option>Zubat</option>' +
  '<option>Golbat</option>' +
  '<option>Crobat</option>' +
  '<option>Oddish</option>' +
  '<option>Gloom</option>' +
  '<option>Vileplume</option>' +
  '<option>Bellossom</option>' +
  '<option>Paras</option>' +
  '<option>Parasect</option>' +
  '<option>Venonat</option>' +
  '<option>Venomoth</option>' +
  '<option>Diglett</option>' +
  '<option>Dugtrio</option>' +
  '<option>Diglett Alola</option>' +
  '<option>Dugtrio Alola</option>' +
  '<option>Meowth</option>' +
  '<option>Persian</option>' +
  '<option>Meowth Alola</option>' +
  '<option>Persian Alola</option>' +
  '<option>Psyduck</option>' +
  '<option>Golduck</option>' +
  '<option>Mankey</option>' +
  '<option>Primeape</option>' +
  '<option>Growlithe</option>' +
  '<option>Arcanine</option>' +
  '<option>Poliwag</option>' +
  '<option>Poliwhirl</option>' +
  '<option>Poliwrath</option>' +
  '<option>Politoed</option>' +
  '<option>Abra</option>' +
  '<option>Kadabra</option>' +
  '<option>Alakazam</option>' +
  '<option>Machop</option>' +
  '<option>Machoke</option>' +
  '<option>Machamp</option>' +
  '<option>Bellsprout</option>' +
  '<option>Weepinbell</option>' +
  '<option>Victreebel</option>' +
  '<option>Tentacool</option>' +
  '<option>Tentacruel</option>' +
  '<option>Geodude</option>' +
  '<option>Graveler</option>' +
  '<option>Golem</option>' +
  '<option>Geodude Alola</option>' +
  '<option>Graveler Alola</option>' +
  '<option>Golem Alola</option>' +
  '<option>Ponyta</option>' +
  '<option>Rapidash</option>' +
  '<option>Slowpoke</option>' +
  '<option>Slowbro</option>' +
  '<option>Slowking</option>' +
  '<option>Magnemite</option>' +
  '<option>Magneton</option>' +
  '<option>Magnezone</option>' +
  '<option>Farfetch´d</option>' +
  '<option>Doduo</option>' +
  '<option>Dodrio</option>' +
  '<option>Seel</option>' +
  '<option>Dewgong</option>' +
  '<option>Grimer</option>' +
  '<option>Muk</option>' +
  '<option>Grimer Alola</option>' +
  '<option>Muk Alola</option>' +
  '<option>Shellder</option>' +
  '<option>Cloyster</option>' +
  '<option>Gastly</option>' +
  '<option>Haunter</option>' +
  '<option>Gengar</option>' +
  '<option>Onix</option>' +
  '<option>Steelix</option>' +
  '<option>Drowzee</option>' +
  '<option>Hypno</option>' +
  '<option>Krabby</option>' +
  '<option>Kingler</option>' +
  '<option>Voltorb</option>' +
  '<option>Electrode</option>' +
  '<option>Exeggcute</option>' +
  '<option>Exeggutor</option>' +
  '<option>Exeggutor Alola</option>' +
  '<option>Cubone</option>' +
  '<option>Marowak</option>' +
  '<option>Marowak Alola</option>' +
  '<option>Tyrogue</option>' +
  '<option>Hitmonlee</option>' +
  '<option>Hitmonchan</option>' +
  '<option>Hitmontop</option>' +
  '<option>Lickitung</option>' +
  '<option>Lickilicky</option>' +
  '<option>Koffing</option>' +
  '<option>Weezing</option>' +
  '<option>Rhyhorn</option>' +
  '<option>Rhydon</option>' +
  '<option>Rhyperior</option>' +
  '<option>Happiny</option>' +
  '<option>Chansey</option>' +
  '<option>Blissey</option>' +
  '<option>Tangela</option>' +
  '<option>Tangrowth</option>' +
  '<option>Kangaskhan</option>' +
  '<option>Horsea</option>' +
  '<option>Seadra</option>' +
  '<option>Kingdra</option>' +
  '<option>Goldeen</option>' +
  '<option>Seaking</option>' +
  '<option>Staryu</option>' +
  '<option>Starmie</option>' +
  '<option>Mime Jr.</option>' +
  '<option>Mr. Mime</option>' +
  '<option>Scyther</option>' +
  '<option>Scizor</option>' +
  '<option>Smoochum</option>' +
  '<option>Jynx</option>' +
  '<option>Elekid</option>' +
  '<option>Electabuzz</option>' +
  '<option>Electivire</option>' +
  '<option>Magby</option>' +
  '<option>Magmar</option>' +
  '<option>Magmortar</option>' +
  '<option>Pinsir</option>' +
  '<option>Tauros</option>' +
  '<option>Magikarp</option>' +
  '<option>Gyarados</option>' +
  '<option>Lapras</option>' +
  '<option>Ditto</option>' +
  '<option>Eevee</option>' +
  '<option>Vaporeon</option>' +
  '<option>Jolteon</option>' +
  '<option>Flareon</option>' +
  '<option>Espeon</option>' +
  '<option>Umbreon</option>' +
  '<option>Leafeon</option>' +
  '<option>Glaceon</option>' +
  '<option>Porygon</option>' +
  '<option>Porygon2</option>' +
  '<option>PorygonZ</option>' +
  '<option>Omanyte</option>' +
  '<option>Omastar</option>' +
  '<option>Kabuto</option>' +
  '<option>Kabutops</option>' +
  '<option>Aerodactyl</option>' +
  '<option>Munchlax</option>' +
  '<option>Snorlax</option>' +
  '<option>Articuno</option>' +
  '<option>Zapdos</option>' +
  '<option>Moltres</option>' +
  '<option>Dratini</option>' +
  '<option>Dragonair</option>' +
  '<option>Dragonite</option>' +
  '<option>Mewtwo</option>' +
  '<option>Mew</option>' +
  '<option>Chikorita</option>' +
  '<option>Bayleef</option>' +
  '<option>Meganium</option>' +
  '<option>Cyndaquil</option>' +
  '<option>Quilava</option>' +
  '<option>Typhlosion</option>' +
  '<option>Totodile</option>' +
  '<option>Croconaw</option>' +
  '<option>Feraligatr</option>' +
  '<option>Sentret</option>' +
  '<option>Furret</option>' +
  '<option>Hoothoot</option>' +
  '<option>Moctowl</option>' +
  '<option>Ledyba</option>' +
  '<option>Ledian</option>' +
  '<option>Spinarak</option>' +
  '<option>Ariados</option>' +
  '<option>Chinchou</option>' +
  '<option>Lanturn</option>' +
  '<option>Togepi</option>' +
  '<option>Togetic</option>' +
  '<option>Togekiss</option>' +
  '<option>Matu</option>' +
  '<option>Xatu</option>' +
  '<option>Mareep</option>' +
  '<option>Flaaffy</option>' +
  '<option>Ampharos</option>' +
  '<option>Azurill</option>' +
  '<option>Marill</option>' +
  '<option>Azumarill</option>' +
  '<option>Bonsly</option>' +
  '<option>Sudowoodo</option>' +
  '<option>Hoppip</option>' +
  '<option>Skiploom</option>' +
  '<option>Jumpluff</option>' +
  '<option>Aipom</option>' +
  '<option>Ambipom</option>' +
  '<option>Sunkern</option>' +
  '<option>Sunflora</option>' +
  '<option>Yanma</option>' +
  '<option>Yanmega</option>' +
  '<option>Wooper</option>' +
  '<option>Quagsire</option>' +
  '<option>Murkrow</option>' +
  '<option>Honchkrow</option>' +
  '<option>Misdreavus</option>' +
  '<option>Mismagius</option>' +
  '<option>Unown</option>' +
  '<option>Wynaut</option>' +
  '<option>Wobbuffet</option>' +
  '<option>Girafarig</option>' +
  '<option>Pineco</option>' +
  '<option>Forretress</option>' +
  '<option>Dunsparce</option>' +
  '<option>Gligar</option>' +
  '<option>Gliscor</option>' +
  '<option>Snubbull</option>' +
  '<option>Granbull</option>' +
  '<option>Qwilfish</option>' +
  '<option>Shuckle</option>' +
  '<option>Heracross</option>' +
  '<option>Sneasel</option>' +
  '<option>Weavile</option>' +
  '<option>Teddiursa</option>' +
  '<option>Ursaring</option>' +
  '<option>Slugma</option>' +
  '<option>Magcargo</option>' +
  '<option>Swinub</option>' +
  '<option>Piloswine</option>' +
  '<option>Mamoswine</option>' +
  '<option>Corsola</option>' +
  '<option>Remoraid</option>' +
  '<option>Octillery</option>' +
  '<option>Delibird</option>' +
  '<option>Mantine</option>' +
  '<option>Skarmory</option>' +
  '<option>Houndour</option>' +
  '<option>Houndoom</option>' +
  '<option>Phanpy</option>' +
  '<option>Donphan</option>' +
  '<option>Stantler</option>' +
  '<option>Smeargle</option>' +
  '<option>Miltank</option>' +
  '<option>Raikou</option>' +
  '<option>Entei</option>' +
  '<option>Suicune</option>' +
  '<option>Larvitar</option>' +
  '<option>Pupitar</option>' +
  '<option>Tyranitar</option>' +
  '<option>Lugia</option>' +
  '<option>Ho-Oh</option>' +
  '<option>Celebi</option>' +
  '<option>Treecko</option>' +
  '<option>Grovyle</option>' +
  '<option>Sceptile</option>' +
  '<option>Torchic</option>' +
  '<option>Combusken</option>' +
  '<option>Blaziken</option>' +
  '<option>Mudkip</option>' +
  '<option>Marshtomp</option>' +
  '<option>Swampert</option>' +
  '<option>Poochyena</option>' +
  '<option>Mightyena</option>' +
  '<option>Zigzagoon</option>' +
  '<option>Linoone</option>' +
  '<option>Wurmple</option>' +
  '<option>Silcoon</option>' +
  '<option>Beautifly</option>' +
  '<option>Cascoon</option>' +
  '<option>Dustox</option>' +
  '<option>Lotad</option>' +
  '<option>Lombre</option>' +
  '<option>Ludicolo</option>' +
  '<option>Seedot</option>' +
  '<option>Nuzleaf</option>' +
  '<option>Shiftry</option>' +
  '<option>Taillow</option>' +
  '<option>Swellow</option>' +
  '<option>Wingull</option>' +
  '<option>Pelipper</option>' +
  '<option>Ralts</option>' +
  '<option>Kirlia</option>' +
  '<option>Gardevoir</option>' +
  '<option>Gallade</option>' +
  '<option>Surskit</option>' +
  '<option>Masquerain</option>' +
  '<option>Shroomish</option>' +
  '<option>Breloom</option>' +
  '<option>Slakoth</option>' +
  '<option>Vigoroth</option>' +
  '<option>Slaking</option>' +
  '<option>Nincada</option>' +
  '<option>Ninjask</option>' +
  '<option>Shedinja</option>' +
  '<option>Whismur</option>' +
  '<option>Loudred</option>' +
  '<option>Exploud</option>' +
  '<option>Makuhita</option>' +
  '<option>Hariyama</option>' +
  '<option>Nosepass</option>' +
  '<option>Probopass</option>' +
  '<option>Skitty</option>' +
  '<option>Delcatty</option>' +
  '<option>Sableye</option>' +
  '<option>Mawile</option>' +
  '<option>Aron</option>' +
  '<option>Lairon</option>' +
  '<option>Aggron</option>' +
  '<option>Meditite</option>' +
  '<option>Medicham</option>' +
  '<option>Electrike</option>' +
  '<option>Manectric</option>' +
  '<option>Plusle</option>' +
  '<option>Minun</option>' +
  '<option>Volbeat</option>' +
  '<option>Illumise</option>' +
  '<option>Budew</option>' +
  '<option>Roselia</option>' +
  '<option>Roserade</option>' +
  '<option>Gulpin</option>' +
  '<option>Swalot</option>' +
  '<option>Carvanha</option>' +
  '<option>Sharpedo</option>' +
  '<option>Wailmer</option>' +
  '<option>Wailord</option>' +
  '<option>Numel</option>' +
  '<option>Camerupt</option>' +
  '<option>Torkoal</option>' +
  '<option>Spoink</option>' +
  '<option>Grumpig</option>' +
  '<option>Trapinch</option>' +
  '<option>Vibrava</option>' +
  '<option>Flygon</option>' +
  '<option>Cacnea</option>' +
  '<option>Cacturne</option>' +
  '<option>Swablu</option>' +
  '<option>Altaria</option>' +
  '<option>Zangoose</option>' +
  '<option>Seviper</option>' +
  '<option>Lunatone</option>' +
  '<option>Solrock</option>' +
  '<option>Barboach</option>' +
  '<option>Whiscash</option>' +
  '<option>Corphish</option>' +
  '<option>Crawdaunt</option>' +
  '<option>Baltoy</option>' +
  '<option>Claydol</option>' +
  '<option>Lileep</option>' +
  '<option>Cradily</option>' +
  '<option>Anorith</option>' +
  '<option>Armaldo</option>' +
  '<option>Feebas</option>' +
  '<option>Milotic</option>' +
  '<option>Castform</option>' +
  '<option>Shuppet</option>' +
  '<option>Banette</option>' +
  '<option>Duskull</option>' +
  '<option>Dusclops</option>' +
  '<option>Dusknoir</option>' +
  '<option>Tropius</option>' +
  '<option>Chimecho</option>' +
  '<option>Chingling</option>' +
  '<option>Absol</option>' +
  '<option>Snorunt</option>' +
  '<option>Glalie</option>' +
  '<option>Spheal</option>' +
  '<option>Sealeo</option>' +
  '<option>Walrein</option>' +
  '<option>Clamperl</option>' +
  '<option>Huntail</option>' +
  '<option>Gorebyss</option>' +
  '<option>Relicanth</option>' +
  '<option>Luvdisc</option>' +
  '<option>Bagon</option>' +
  '<option>Shelgon</option>' +
  '<option>Salamence</option>' +
  '<option>Beldum</option>' +
  '<option>Metang</option>' +
  '<option>Metagross</option>' +
  '<option>Regirock</option>' +
  '<option>Regice</option>' +
  '<option>Registeel</option>' +
  '<option>Latias</option>' +
  '<option>Latios</option>' +
  '<option>Kyogre</option>' +
  '<option>Groudon</option>' +
  '<option>Rayquaza</option>' +
  '<option>Deoxys normal</option>' +
  '<option>Deoxys attack</option>' +
  '<option>Deoxys defense</option>' +
  '<option>Deoxys speed</option>' +
  '<option>Turtwig</option>' +
  '<option>Grotle</option>' +
  '<option>Torterra</option>' +
  '<option>Chimchar</option>' +
  '<option>Monferno</option>' +
  '<option>Infernape</option>' +
  '<option>Piplup</option>' +
  '<option>Prinplup</option>' +
  '<option>Empoleon</option>' +
  '<option>Starly</option>' +
  '<option>Staravia</option>' +
  '<option>Staraptor</option>' +
  '<option>Bidoof</option>' +
  '<option>Bibarel</option>' +
  '<option>Kricketot</option>' +
  '<option>Kricketune</option>' +
  '<option>Shinx</option>' +
  '<option>Luxio</option>' +
  '<option>Luxray</option>' +
  '<option>Cranidos</option>' +
  '<option>Rampardos</option>' +
  '<option>Shieldon</option>' +
  '<option>Bastiodon</option>' +
  '<option>Burmy</option>' +
  '<option>Wormadam</option>' +
  '<option>Mothim</option>' +
  '<option>Combee</option>' +
  '<option>Vespiquen</option>' +
  '<option>Pachirisu</option>' +
  '<option>Buizel</option>' +
  '<option>Floatzel</option>' +
  '<option>Cherubi</option>' +
  '<option>Cherrim</option>' +
  '<option>Shellos</option>' +
  '<option>Gastrodon</option>' +
  '<option>Drifloon</option>' +
  '<option>Drifblim</option>' +
  '<option>Buneary</option>' +
  '<option>Lopunny</option>' +
  '<option>Glameow</option>' +
  '<option>Purugly</option>' +
  '<option>Stunky</option>' +
  '<option>Skuntank</option>' +
  '<option>Bronzor</option>' +
  '<option>Bronzong</option>' +
  '<option>Chatot</option>' +
  '<option>Spiritomb</option>' +
  '<option>Gible</option>' +
  '<option>Gabite</option>' +
  '<option>Garchomp</option>' +
  '<option>Riolu</option>' +
  '<option>Lucario</option>' +
  '<option>Hippopotas</option>' +
  '<option>Hippowdon</option>' +
  '<option>Skorupi</option>' +
  '<option>Drapion</option>' +
  '<option>Croagunk</option>' +
  '<option>Toxicroak</option>' +
  '<option>Carnivine</option>' +
  '<option>Finneon</option>' +
  '<option>Lumineon</option>' +
  '<option>Snover</option>' +
  '<option>Abomasnow</option>' +
  '<option>Rotom</option>' +
  '<option>Uxie</option>' +
  '<option>Mesprit</option>' +
  '<option>Azelf</option>' +
  '<option>Dialga</option>' +
  '<option>Palkia</option>' +
  '<option>Heatran</option>' +
  '<option>Regigigas</option>' +
  '<option>Giratina Altered</option>' +
  '<option>Giratina Origin</option>' +
  '<option>Cresselia</option>' +
  '<option>Darkrai</option>' +
  '<option>Arceus</option>' +
  '<option>Meltan</option>' +
  '<option>Melmetal</option>'
}