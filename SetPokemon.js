/*
var example = {
    Pokedex_number: 1,
    Stats      : [Attack, Defense, HP],
    Evolutions : ["Evolution1", "Evolution2"],
    Basic_evolution : "example"
};
*/
var bulbasaur = {
    Pokedex_number: 1,
    Stats      : [118, 111, 128],
    Evolutions : ["ivysaur", "venusaur"],
    Basic_evolution : "bulbasaur",
};
var ivysaur = {
    Pokedex_number: 2,
    Stats      : [151, 143, 155],
    Evolutions : ["venusaur"],
    Basic_evolution : "bulbasaur"
};
var venusaur = {
    Pokedex_number: 3,
    Stats      : [198, 189, 190],
    Evolutions : null,
    Basic_evolution : "bulbasaur"
};

var charmander = {
    Pokedex_number: 4,
    Stats      : [116, 93, 118],
    Evolutions : ["charmeleon", "charizard"],
    Basic_evolution : "charmander"
};
var charmeleon = {
    Pokedex_number: 5,
    Stats      : [158, 126, 151],
    Evolutions : ["charizard"],
    Basic_evolution : "charmander"
};
var charizard = {
    Pokedex_number: 6,
    Stats      : [223, 173, 186],
    Evolutions : null,
    Basic_evolution : "charmander",
    Element : ["Fire", "Flying"],
    Fast_moves : ["Fire Spin", "Air Slash", "Ember", "Wing Attack"],
    Charged_moves : ["Blast Burn", "Dragon Claw", "Fire Blast", "Flamethrower", "Overheat"]
};

var squirtle = {
    Pokedex_number: 7,
    Stats      : [94, 121, 127],
    Evolutions : ["wartortle", "blastoise"],
    Basic_evolution : "squirtle"
};
var wartortle = {
    Pokedex_number: 8,
    Stats      : [126, 155, 153],
    Evolutions : ["blastoise"],
    Basic_evolution : "squirtle"
};
var blastoise = {
    Pokedex_number: 9,
    Stats      : [171, 207, 188],
    Evolutions : null,
    Basic_evolution : "squirtle"
};

var caterpie = {
    Pokedex_number: 10,
    Stats      : [55, 55, 128],
    Evolutions : ["metapod", "butterfree"],
    Basic_evolution : "caterpie"
};
var metapod = {
    Pokedex_number: 11,
    Stats      : [45, 80, 137],
    Evolutions : ["butterfree"],
    Basic_evolution : "caterpie"
};
var butterfree = {
    Pokedex_number: 12,
    Stats      : [167, 137, 155],
    Evolutions : null,
    Basic_evolution : "caterpie"
};

var weedle = {
    Pokedex_number: 13,
    Stats      : [62, 50, 120],
    Evolutions : ["kakuna", "beedrill"],
    Basic_evolution : "weedle"
};
var kakuna = {
    Pokedex_number: 14,
    Stats      : [46, 75, 128],
    Evolutions : ["beedrill"],
    Basic_evolution : "weedle"
};
var beedrill = {
    Pokedex_number: 15,
    Stats      : [169, 130, 163],
    Evolutions : null,
    Basic_evolution : "weedle"
};

var pidgey = {
    Pokedex_number: 16,
    Stats      : [85, 73, 120],
    Evolutions : ["pidgeotto", "pidgeot"],
    Basic_evolution : "pidgey"
};
var pidgeotto = {
    Pokedex_number: 17,
    Stats      : [117, 106, 160],
    Evolutions : ["pidgeot"],
    Basic_evolution : "pidgey"
};
var pidgeot = {
    Pokedex_number: 18,
    Stats      : [166, 154, 195],
    Evolutions : null,
    Basic_evolution : "pidgey"
};

var rattata = {
    Pokedex_number: 19,
    Stats      : [103, 70, 102],
    Evolutions : ["raticate"],
    Basic_evolution : "rattata"
};
var raticate = {
    Pokedex_number: 20,
    Stats      : [161, 139, 146],
    Evolutions : null,
    Basic_evolution : "rattata"
};

var rattata_alola = {
    Pokedex_number: 19,
    Stats      : [103, 70, 102],
    Evolutions : ["raticate_alola"],
    Basic_evolution : "rattata_alola"
};
var raticate_alola = {
    Pokedex_number: 20,
    Stats      : [135, 154, 181],
    Evolutions : null,
    Basic_evolution : "rattata_alola"
};

var spearow = {
    Pokedex_number: 21,
    Stats      : [112, 60, 120],
    Evolutions : ["fearow"],
    Basic_evolution : "spearow"
};
var fearow = {
    Pokedex_number: 22,
    Stats      : [182, 133, 163],
    Evolutions : null,
    Basic_evolution : "spearow"
};

var ekans = {
    Pokedex_number: 23,
    Stats      : [110, 97, 111],
    Evolutions : ["arbok"],
    Basic_evolution : "ekans"
};
var arbok = {
    Pokedex_number: 24,
    Stats      : [167, 153, 155],
    Evolutions : null,
    Basic_evolution : "ekans"
};

var pichu = {
    Pokedex_number: 172,
    Stats      : [77, 53, 85],
    Evolutions : ["pikachu", "raichu"],
    Basic_evolution : "pichu"
};
var pikachu = {
    Pokedex_number: 25,
    Stats      : [112, 96, 111],
    Evolutions : ["raichu"],
    Basic_evolution : "pichu"
};
var raichu = {
    Pokedex_number: 26,
    Stats      : [193, 151, 155],
    Evolutions : null,
    Basic_evolution : "pichu"
};

var raichu_alola = {
    Pokedex_number: 26,
    Stats      : [201, 154, 155],
    Evolutions : null,
    Basic_evolution : "raichu_alola"
};

var sandshrew = {
    Pokedex_number: 27,
    Stats      : [126, 120, 137],
    Evolutions : ["sandslash"],
    Basic_evolution : "sandshrew"
};
var sandslash = {
    Pokedex_number: 28,
    Stats      : [182, 175, 181],
    Evolutions : null,
    Basic_evolution : "sandshrew"
};

var sandshrew_alola = {
    Pokedex_number: 27,
    Stats      : [125, 129, 137],
    Evolutions : ["sandslash_alola"],
    Basic_evolution : "sandshrew_alola"
};
var sandslash_alola = {
    Pokedex_number: 28,
    Stats      : [177, 195, 181],
    Evolutions : null,
    Basic_evolution : "sandshrew_alola"
};

var nidoranf = {
    Pokedex_number: 29,
    Stats      : [86, 89, 146],
    Evolutions : ["nidorina", "nidoqueen"],
    Basic_evolution : "nidoranf"
};
var nidorina = {
    Pokedex_number: 30,
    Stats      : [117, 120, 172],
    Evolutions : ["nidoqueen"],
    Basic_evolution : "nidoranf"
};
var nidoqueen = {
    Pokedex_number: 31,
    Stats      : [180, 173, 207],
    Evolutions : null,
    Basic_evolution : "nidoranf"
};

var nidoranm = {
    Pokedex_number: 32,
    Stats      : [105, 76, 130],
    Evolutions : ["nidorino", "nidoking"],
    Basic_evolution : "nidoranm"
};
var nidorino = {
    Pokedex_number: 33,
    Stats      : [137, 111, 156],
    Evolutions : ["nidoking"],
    Basic_evolution : "nidoranm"
};
var nidoking = {
    Pokedex_number: 34,
    Stats      : [204, 156, 191],
    Evolutions : null,
    Basic_evolution : "nidoranm"
};

var cleffa = {
    Pokedex_number: 173,
    Stats      : [75, 79, 137],
    Evolutions : ["clefairy", "clefable"],
    Basic_evolution : "cleffa"
};
var clefairy = {
    Pokedex_number: 35,
    Stats      : [107, 108, 172],
    Evolutions : ["clefable"],
    Basic_evolution : "cleffa"
};
var clefable = {
    Pokedex_number: 36,
    Stats      : [178, 162, 216],
    Evolutions : null,
    Basic_evolution : "cleffa"
};

var vulpix = {
    Pokedex_number: 37,
    Stats      : [96, 109, 116],
    Evolutions : ["ninetales"],
    Basic_evolution : "vulpix"
};
var ninetales = {
    Pokedex_number: 38,
    Stats      : [169, 190, 177],
    Evolutions : null,
    Basic_evolution : "vulpix"
};

var vulpix_alola = {
    Pokedex_number: 37,
    Stats      : [96, 109, 116],
    Evolutions : ["ninetales_alola"],
    Basic_evolution : "vulpix_alola"
};
var ninetales_alola = {
    Pokedex_number: 38,
    Stats      : [170, 193, 177],
    Evolutions : null,
    Basic_evolution : "vulpix_alola"
};

var igglybuff = {
    Pokedex_number: 174,
    Stats      : [69, 32, 207],
    Evolutions : ["jigglypuff", "wigglytuff"],
    Basic_evolution : "igglybuff"
};
var jigglypuff = {
    Pokedex_number: 39,
    Stats      : [80, 41, 251],
    Evolutions : ["wigglytuff"],
    Basic_evolution : "igglybuff"
};
var wigglytuff = {
    Pokedex_number: 40,
    Stats      : [156, 90, 295],
    Evolutions : null,
    Basic_evolution : "igglybuff"
};

var zubat = {
    Pokedex_number: 41,
    Stats      : [83, 73, 120],
    Evolutions : ["golbat", "crobat"],
    Basic_evolution : "zubat"
};
var golbat = {
    Pokedex_number: 42,
    Stats      : [161, 150, 181],
    Evolutions : ["crobat"],
    Basic_evolution : "zubat"
};
var crobat = {
    Pokedex_number: 169,
    Stats      : [194, 178, 198],
    Evolutions : null,
    Basic_evolution : "zubat"
};

var oddish = {
    Pokedex_number: 43,
    Stats      : [131, 112, 128],
    Evolutions : ["gloom", "vileplume", "bellossom"],
    Basic_evolution : "oddish"
};
var gloom = {
    Pokedex_number: 44,
    Stats      : [153, 136, 155],
    Evolutions : ["vileplume", "bellossom"],
    Basic_evolution : "oddish"
};
var vileplume = {
    Pokedex_number: 45,
    Stats      : [202, 167, 181],
    Evolutions : null,
    Basic_evolution : "oddish"
};
var bellossom = {
    Pokedex_number: 182,
    Stats      : [169, 186, 181],
    Evolutions : null,
    Basic_evolution : "oddish"
};

var paras = {
    Pokedex_number: 46,
    Stats      : [121, 99, 111],
    Evolutions : ["parasect"],
    Basic_evolution : "paras"
};
var parasect = {
    Pokedex_number: 47,
    Stats      : [165, 146, 155],
    Evolutions : null,
    Basic_evolution : "paras"
};

var venonat = {
    Pokedex_number: 48,
    Stats      : [100, 100, 155],
    Evolutions : ["venomoth"],
    Basic_evolution : "venonat"
};
var venomoth = {
    Pokedex_number: 49,
    Stats      : [179, 143, 172],
    Evolutions : null,
    Basic_evolution : "venonat"
};

var diglett = {
    Pokedex_number: 50,
    Stats      : [109, 78, 67],
    Evolutions : ["dugtrio"],
    Basic_evolution : "diglett"
};
var dugtrio = {
    Pokedex_number: 51,
    Stats      : [167, 136, 111],
    Evolutions : null,
    Basic_evolution : "diglett"
};

var diglett_alola = {
    Pokedex_number: 50,
    Stats      : [108, 81, 67],
    Evolutions : ["dugtrio_alola"],
    Basic_evolution : "diglett_alola"
};
var dugtrio_alola = {
    Pokedex_number: 51,
    Stats      : [201, 142, 111],
    Evolutions : null,
    Basic_evolution : "diglett_alola"
};

var meowth = {
    Pokedex_number: 52,
    Stats      : [92, 78, 120],
    Evolutions : ["persian"],
    Basic_evolution : "meowth"
};
var persian = {
    Pokedex_number: 53,
    Stats      : [150, 136, 163],
    Evolutions : null,
    Basic_evolution : "meowth"
};

var meowth_alola = {
    Pokedex_number: 52,
    Stats      : [99, 78, 120],
    Evolutions : ["persian_alola"],
    Basic_evolution : "meowth_alola"
};
var persian_alola = {
    Pokedex_number: 53,
    Stats      : [158, 136, 163],
    Evolutions : null,
    Basic_evolution : "meowth_alola"
};

var psyduck = {
    Pokedex_number: 54,
    Stats      : [122, 95, 137],
    Evolutions : ["golduck"],
    Basic_evolution : "psyduck"
};
var golduck = {
    Pokedex_number: 55,
    Stats      : [191, 162, 190],
    Evolutions : null,
    Basic_evolution : "psyduck"
};

var mankey = {
    Pokedex_number: 56,
    Stats      : [148, 82, 120],
    Evolutions : ["primeape"],
    Basic_evolution : "mankey"
};
var primeape = {
    Pokedex_number: 57,
    Stats      : [207, 138, 163],
    Evolutions : null,
    Basic_evolution : "mankey"
};

var growlithe = {
    Pokedex_number: 58,
    Stats      : [136, 93, 146],
    Evolutions : ["arcanine"],
    Basic_evolution : "growlithe"
};
var arcanine = {
    Pokedex_number: 59,
    Stats      : [227, 166, 207],
    Evolutions : null,
    Basic_evolution : "growlithe"
};

var poliwag = {
    Pokedex_number: 60,
    Stats      : [101, 82, 120],
    Evolutions : ["poliwhirl", "poliwrath", "politoed"],
    Basic_evolution : "poliwag"
};
var poliwhirl = {
    Pokedex_number: 61,
    Stats      : [130, 123, 163],
    Evolutions : ["poliwrath", "politoed"],
    Basic_evolution : "poliwag"
};
var poliwrath = {
    Pokedex_number: 62,
    Stats      : [182, 184, 207],
    Evolutions : null,
    Basic_evolution : "poliwag"
};
var politoed = {
    Pokedex_number: 186,
    Stats      : [174, 179, 207],
    Evolutions : null,
    Basic_evolution : "poliwag"
};

var abra = {
    Pokedex_number: 63,
    Stats      : [195, 82, 93],
    Evolutions : ["kadabra", "alakazam"],
    Basic_evolution : "abra"
};
var kadabra = {
    Pokedex_number: 64,
    Stats      : [232, 117, 120],
    Evolutions : ["alakazam"],
    Basic_evolution : "abra"
};
var alakazam = {
    Pokedex_number: 65,
    Stats      : [271, 167, 146],
    Evolutions : null,
    Basic_evolution : "abra"
};

var machop = {
    Pokedex_number: 66,
    Stats      : [137, 82, 172],
    Evolutions : ["machoke", "machamp"],
    Basic_evolution : "machop"
};
var machoke = {
    Pokedex_number: 67,
    Stats      : [177, 125, 190],
    Evolutions : ["machamp"],
    Basic_evolution : "machop"
};
var machamp = {
    Pokedex_number: 68,
    Stats      : [234, 159, 207],
    Evolutions : null,
    Basic_evolution : "machop"
};

var bellsprout = {
    Pokedex_number: 69,
    Stats      : [139, 61, 137],
    Evolutions : ["weepinbell", "victreebel"],
    Basic_evolution : "bellsprout"
};
var weepinbell = {
    Pokedex_number: 70,
    Stats      : [172, 92, 163],
    Evolutions : ["victreebel"],
    Basic_evolution : "bellsprout"
};
var victreebel = {
    Pokedex_number: 71,
    Stats      : [207, 135, 190],
    Evolutions : null,
    Basic_evolution : "bellsprout"
};

var tentacool = {
    Pokedex_number: 72,
    Stats      : [97, 149, 120],
    Evolutions : ["tentacruel"],
    Basic_evolution : "tentacool"
};
var tentacruel = {
    Pokedex_number: 73,
    Stats      : [166, 209, 190],
    Evolutions : null,
    Basic_evolution : "tentacool"
};

var geodude = {
    Pokedex_number: 74,
    Stats      : [132, 132, 120],
    Evolutions : ["graveler", "golem"],
    Basic_evolution : "geodude"
};
var graveler = {
    Pokedex_number: 75,
    Stats      : [164, 164, 146],
    Evolutions : ["golem"],
    Basic_evolution : "geodude"
};
var golem = {
    Pokedex_number: 76,
    Stats      : [211, 198, 190],
    Evolutions : null,
    Basic_evolution : "geodude"
};

var geodude_alola = {
    Pokedex_number: 74,
    Stats      : [132, 132, 120],
    Evolutions : ["graveler_alola", "golem_alola"],
    Basic_evolution : "geodude_alola"
};
var graveler_alola = {
    Pokedex_number: 75,
    Stats      : [164, 164, 146],
    Evolutions : ["golem_alola"],
    Basic_evolution : "geodude_alola"
};
var golem_alola = {
    Pokedex_number: 76,
    Stats      : [211, 198, 190],
    Evolutions : null,
    Basic_evolution : "geodude_alola"
};

var ponyta = {
    Pokedex_number: 77,
    Stats      : [170, 127, 137],
    Evolutions : ["rapidash"],
    Basic_evolution : "ponyta"
};
var rapidash = {
    Pokedex_number: 78,
    Stats      : [207, 162, 163],
    Evolutions : null,
    Basic_evolution : "ponyta"
};

var slowpoke = {
    Pokedex_number: 79,
    Stats      : [109, 98, 207],
    Evolutions : ["slowbro", "slowking"],
    Basic_evolution : "slowpoke"
};
var slowbro = {
    Pokedex_number: 80,
    Stats      : [177, 180, 216],
    Evolutions : null,
    Basic_evolution : "slowpoke"
};
var slowking = {
    Pokedex_number: 199,
    Stats      : [177, 180, 216],
    Evolutions : null,
    Basic_evolution : "slowpoke"
};

var magnemite = {
    Pokedex_number: 81,
    Stats      : [165, 121, 93],
    Evolutions : ["magneton", "magnezone"],
    Basic_evolution : "magnemite"
};
var magneton = {
    Pokedex_number: 82,
    Stats      : [223, 169, 137],
    Evolutions : ["magnezone"],
    Basic_evolution : "magnemite"
};
var magnezone = {
    Pokedex_number: 462,
    Stats      : [238, 205, 172],
    Evolutions : null,
    Basic_evolution : "magnemite"
};

var farfetchd = {
    Pokedex_number: 83,
    Stats      : [124, 115, 141],
    Evolutions : null,
    Basic_evolution : "farfetchd"
};

var doduo = {
    Pokedex_number: 84,
    Stats      : [158, 83, 111],
    Evolutions : ["dodrio"],
    Basic_evolution : "doduo"
};
var dodrio = {
    Pokedex_number: 85,
    Stats      : [218, 140, 155],
    Evolutions : null,
    Basic_evolution : "doduo"
};

var seel = {
    Pokedex_number: 86,
    Stats      : [85, 121, 163],
    Evolutions : ["dewgong"],
    Basic_evolution : "seel"
};
var dewgong = {
    Pokedex_number: 87,
    Stats      : [139, 177, 207],
    Evolutions : null,
    Basic_evolution : "seel"
};

var grimer = {
    Pokedex_number: 88,
    Stats      : [135, 90, 190],
    Evolutions : ["muk"],
    Basic_evolution : "grimer"
};
var muk = {
    Pokedex_number: 89,
    Stats      : [190, 172, 233],
    Evolutions : null,
    Basic_evolution : "grimer"
};

var grimer_alola = {
    Pokedex_number: 88,
    Stats      : [135, 90, 190],
    Evolutions : ["muk_alola"],
    Basic_evolution : "grimer_alola"
};
var muk_alola = {
    Pokedex_number: 89,
    Stats      : [190, 172, 233],
    Evolutions : null,
    Basic_evolution : "grimer_alola"
};

var shellder = {
    Pokedex_number: 90,
    Stats      : [116, 134, 102],
    Evolutions : ["cloyster"],
    Basic_evolution : "shellder"
};
var cloyster = {
    Pokedex_number: 91,
    Stats      : [186, 256, 137],
    Evolutions : null,
    Basic_evolution : "shellder"
};

var gastly = {
    Pokedex_number: 92,
    Stats      : [186, 67, 102],
    Evolutions : ["haunter", "gengar"],
    Basic_evolution : "gastly"
};
var haunter = {
    Pokedex_number: 93,
    Stats      : [223, 107, 128],
    Evolutions : ["gengar"],
    Basic_evolution : "gastly"
};
var gengar = {
    Pokedex_number: 94,
    Stats      : [261, 149, 155],
    Evolutions : null,
    Basic_evolution : "gastly"
};

var onix = {
    Pokedex_number: 95,
    Stats      : [85, 232, 111],
    Evolutions : ["steelix"],
    Basic_evolution : "onix"
};
var steelix = {
    Pokedex_number: 208,
    Stats      : [148, 272, 181],
    Evolutions : null,
    Basic_evolution : "onix"
};

var drowzee = {
    Pokedex_number: 96,
    Stats      : [89, 136, 155],
    Evolutions : ["hypno"],
    Basic_evolution : "drowzee"
};
var hypno = {
    Pokedex_number: 97,
    Stats      : [144, 193, 198],
    Evolutions : null,
    Basic_evolution : "drowzee"
};

var krabby = {
    Pokedex_number: 98,
    Stats      : [181, 124, 102],
    Evolutions : ["kingler"],
    Basic_evolution : "krabby"
};
var kingler = {
    Pokedex_number: 99,
    Stats      : [240, 181, 146],
    Evolutions : null,
    Basic_evolution : "krabby"
};

var voltorb = {
    Pokedex_number: 100,
    Stats      : [109, 111, 120],
    Evolutions : ["electrode"],
    Basic_evolution : "voltorb"
};
var electrode = {
    Pokedex_number: 101,
    Stats      : [173, 173, 155],
    Evolutions : null,
    Basic_evolution : "voltorb"
};

var exeggcute = {
    Pokedex_number: 102,
    Stats      : [107, 125, 155],
    Evolutions : ["exeggutor"],
    Basic_evolution : "exeggcute"
};
var exeggutor = {
    Pokedex_number: 103,
    Stats      : [233, 149, 216],
    Evolutions : null,
    Basic_evolution : "exeggcute"
};

var exeggutor_alola = {
    Pokedex_number: 103,
    Stats      : [230, 153, 216],
    Evolutions : null,
    Basic_evolution : "exeggutor_alola"
};

var cubone = {
    Pokedex_number: 104,
    Stats      : [90, 144, 137],
    Evolutions : ["marowak"],
    Basic_evolution : "cubone"
};
var marowak = {
    Pokedex_number: 105,
    Stats      : [144, 186, 155],
    Evolutions : null,
    Basic_evolution : "cubone"
};

var marowak_alola = {
    Pokedex_number: 105,
    Stats      : [144, 186, 155],
    Evolutions : null,
    Basic_evolution : "marowak_alola"
};

var tyrogue = {
    Pokedex_number: 236,
    Stats      : [64, 64, 111],
    Evolutions : ["hitmonlee", "hitmonchan", "hitmontop"],
    Basic_evolution : "tyrogue"
};
var hitmonlee = {
    Pokedex_number: 106,
    Pokedex_number: 106,
    Stats      : [224, 181, 137],
    Evolutions : null,
    Basic_evolution : "tyrogue"
};
var hitmonchan = {
    Pokedex_number: 107,
    Stats      : [193, 197, 137],
    Evolutions : null,
    Basic_evolution : "tyrogue"
};
var hitmontop = {
    Pokedex_number: 237,
    Stats      : [173, 207, 137],
    Evolutions : null,
    Basic_evolution : "tyrogue"
};

var lickitung = {
    Pokedex_number: 108,
    Stats      : [108, 137, 207],
    Evolutions : ["lickilicky"],
    Basic_evolution : "lickitung"
};
var lickilicky = {
    Pokedex_number: 463,
    Stats      : [161, 181, 242],
    Evolutions : null,
    Basic_evolution : "lickitung"
};

var koffing = {
    Pokedex_number: 109,
    Stats      : [119, 141, 120],
    Evolutions : ["weezing"],
    Basic_evolution : "koffing"
};
var weezing = {
    Pokedex_number: 110,
    Stats      : [174, 197, 163],
    Evolutions : null,
    Basic_evolution : "koffing"
};

var rhyhorn = {
    Pokedex_number: 111,
    Stats      : [140, 127, 190],
    Evolutions : ["rhydon", "rhyperior"],
    Basic_evolution : "rhyhorn"
};
var rhydon = {
    Pokedex_number: 112,
    Stats      : [222, 171, 233],
    Evolutions : ["rhyperior"],
    Basic_evolution : "rhyhorn"
};
var rhyperior = {
    Pokedex_number: 464,
    Stats      : [222, 190, 251],
    Evolutions : null,
    Basic_evolution : "rhyhorn"
};

var happiny = {
    Pokedex_number: 440,
    Stats      : [25, 77, 225],
    Evolutions : ["chansey", "blissey"],
    Basic_evolution : "happiny"
};
var chansey = {
    Pokedex_number: 113,
    Stats      : [60, 128, 487],
    Evolutions : ["blissey"],
    Basic_evolution : "happiny"
};
var blissey = {
    Pokedex_number: 242,
    Stats      : [129, 169, 496],
    Evolutions : null,
    Basic_evolution : "happiny"
};

var tangela = {
    Pokedex_number: 114,
    Stats      : [183, 169, 163],
    Evolutions : ["tangrowth"],
    Basic_evolution : "tangela"
};
var tangrowth = {
    Pokedex_number: 465,
    Stats      : [207, 184, 225],
    Evolutions : null,
    Basic_evolution : "tangela"
};

var kangaskhan = {
    Pokedex_number: 115,
    Stats      : [181, 165, 233],
    Evolutions : null,
    Basic_evolution : "kangaskhan"
};

var horsea = {
    Pokedex_number: 116,
    Stats      : [129, 103, 102],
    Evolutions : ["seadra", "kingdra"],
    Basic_evolution : "horsea"
};
var seadra = {
    Pokedex_number: 117,
    Stats      : [187, 156, 146],
    Evolutions : ["kingdra"],
    Basic_evolution : "horsea"
};
var kingdra = {
    Pokedex_number: 230,
    Stats      : [194, 194, 181],
    Evolutions : null,
    Basic_evolution : "horsea"
};

var goldeen = {
    Pokedex_number: 118,
    Stats      : [123, 110, 128],
    Evolutions : ["seaking"],
    Basic_evolution : "goldeen"
};
var seaking = {
    Pokedex_number: 119,
    Stats      : [175, 147, 190],
    Evolutions : null,
    Basic_evolution : "goldeen"
};

var staryu = {
    Pokedex_number: 120,
    Stats      : [137, 112, 102],
    Evolutions : ["starmie"],
    Basic_evolution : "staryu"
};
var starmie = {
    Pokedex_number: 121,
    Stats      : [210, 184, 155],
    Evolutions : null,
    Basic_evolution : "staryu"
};

var mimejr = {
    Pokedex_number: 439,
    Stats      : [125, 142, 85],
    Evolutions : ["mrmime"],
    Basic_evolution : "mimejr"
};
var mrmime = {
    Pokedex_number: 122,
    Stats      : [192, 205, 120],
    Evolutions : null,
    Basic_evolution : "mimejr"
};

var scyther = {
    Pokedex_number: 123,
    Stats      : [218, 170, 172],
    Evolutions : ["scizor"],
    Basic_evolution : "scyther"
};
var scizor = {
    Pokedex_number: 212,
    Stats      : [236, 181, 172],
    Evolutions : null,
    Basic_evolution : "scyther"
};

var smoochum = {
    Pokedex_number: 238,
    Stats      : [153, 91, 128],
    Evolutions : ["jynx"],
    Basic_evolution : "smoochum"
};
var jynx = {
    Pokedex_number: 124,
    Stats      : [223, 151, 163],
    Evolutions : null,
    Basic_evolution : "smoochum"
};

var elekid = {
    Pokedex_number: 239,
    Stats      : [135, 101, 128],
    Evolutions : ["electabuzz", "electivire"],
    Basic_evolution : "elekid"
};
var electabuzz = {
    Pokedex_number: 125,
    Stats      : [198, 158, 163],
    Evolutions : ["electivire"],
    Basic_evolution : "elekid"
};
var electivire = {
    Pokedex_number: 466,
    Stats      : [198, 163, 181],
    Evolutions : null,
    Basic_evolution : "elekid"
};

var magby = {
    Pokedex_number: 240,
    Stats      : [151, 99, 128],
    Evolutions : ["magmar", "magmortar"],
    Basic_evolution : "magby"
};
var magmar = {
    Pokedex_number: 126,
    Stats      : [206, 154, 163],
    Evolutions : ["magmortar"],
    Basic_evolution : "magby"
};
var magmortar = {
    Pokedex_number: 467,
    Stats      : [206, 172, 181],
    Evolutions : null,
    Basic_evolution : "magby"
};

var pinsir = {
    Pokedex_number: 127,
    Stats      : [238, 182, 163],
    Evolutions : null,
    Basic_evolution : "pinsir"
};

var tauros = {
    Pokedex_number: 128,
    Stats      : [198, 183, 181],
    Evolutions : null,
    Basic_evolution : "tauros"
};

var magikarp = {
    Pokedex_number: 129,
    Stats      : [29, 85, 85],
    Evolutions : ["gyarados"],
    Basic_evolution : "magikarp"
};
var gyarados = {
    Pokedex_number: 130,
    Stats      : [237, 186, 216],
    Evolutions : null,
    Basic_evolution : "magikarp"
};

var lapras = {
    Pokedex_number: 131,
    Stats      : [165, 174, 277],
    Evolutions : null,
    Basic_evolution : "lapras"
};

var ditto = {
    Pokedex_number: 132,
    Stats      : [91, 91, 96],
    Evolutions : null,
    Basic_evolution : "ditto"
};

var eevee = {
    Pokedex_number: 133,
    Stats      : [104, 114, 146],
    Evolutions : ["vaporeon", "jolteon", "flareon", "espeon", "umbreon", "leafeon", "glaceon"],
    Basic_evolution : "eevee"
};
var vaporeon = {
    Pokedex_number: 134,
    Stats      : [205, 161, 277],
    Evolutions : null,
    Basic_evolution : "eevee"
};
var jolteon = {
    Pokedex_number: 135,
    Stats      : [232, 182, 163],
    Evolutions : null,
    Basic_evolution : "eevee"
};
var flareon = {
    Pokedex_number: 136,
    Stats      : [246, 179, 163],
    Evolutions : null,
    Basic_evolution : "eevee"
};
var espeon = {
    Pokedex_number: 196,
    Stats      : [261, 175, 163],
    Evolutions : null,
    Basic_evolution : "eevee"
};
var umbreon = {
    Pokedex_number: 197,
    Stats      : [126, 240, 216],
    Evolutions : null,
    Basic_evolution : "eevee"
};
var leafeon = {
    Pokedex_number: 470,
    Stats      : [216, 219, 163],
    Evolutions : null,
    Basic_evolution : "eevee"
};
var glaceon = {
    Pokedex_number: 471,
    Stats      : [238, 205, 163],
    Evolutions : null,
    Basic_evolution : "eevee"
};

var porygon = {
    Pokedex_number: 137,
    Stats      : [153, 136, 163],
    Evolutions : ["porygon2", "porygonZ"],
    Basic_evolution : "porygon"
};
var porygon2 = {
    Pokedex_number: 233,
    Stats      : [198, 180, 198],
    Evolutions : ["porygonZ"],
    Basic_evolution : "porygon"
};
var porygonZ = {
    Pokedex_number: 474,
    Stats      : [264, 150, 198],
    Evolutions : null,
    Basic_evolution : "porygon"
};

var omanyte = {
    Pokedex_number: 138,
    Stats      : [155, 153, 111],
    Evolutions : ["omastar"],
    Basic_evolution : "omanyte"
};
var omastar = {
    Pokedex_number: 139,
    Stats      : [207, 201, 172],
    Evolutions : null,
    Basic_evolution : "omanyte"
};

var kabuto = {
    Pokedex_number: 140,
    Stats      : [148, 140, 102],
    Evolutions : ["kabutops"],
    Basic_evolution : "kabuto"
};
var kabutops = {
    Pokedex_number: 141,
    Stats      : [220, 186, 155],
    Evolutions : null,
    Basic_evolution : "kabuto"
};

var aerodactyl = {
    Pokedex_number: 142,
    Stats      : [221, 159, 190],
    Evolutions : null,
    Basic_evolution : "aerodactyl"
};

var munchlax = {
    Pokedex_number: 446,
    Stats      : [137, 117, 286],
    Evolutions : ["snorlax"],
    Basic_evolution : "munchlax"
};
var snorlax = {
    Pokedex_number: 143,
    Stats      : [190, 169, 330],
    Evolutions : null,
    Basic_evolution : "munchlax"
};

var articuno = {
    Pokedex_number: 144,
    Stats      : [192, 236, 207],
    Evolutions : null,
    Basic_evolution : "articuno"
};

var zapdos = {
    Pokedex_number: 145,
    Stats      : [253, 185, 207],
    Evolutions : null,
    Basic_evolution : "zapdos"
};

var moltres = {
    Pokedex_number: 146,
    Stats      : [251, 181, 207],
    Evolutions : null,
    Basic_evolution : "moltres"
};

var dratini = {
    Pokedex_number: 147,
    Stats      : [119, 91, 121],
    Evolutions : ["dragonair", "dragonite"],
    Basic_evolution : "dratini"
};
var dragonair = {
    Pokedex_number: 148,
    Stats      : [163, 135, 156],
    Evolutions : ["dragonite"],
    Basic_evolution : "dratini"
};
var dragonite = {
    Pokedex_number: 149,
    Stats  : [263, 198, 209],
    Evolutions : null,
    Basic_evolution : "dratini"
};

var mewtwo = {
    Pokedex_number: 150,
    Stats  : [300, 182, 214],
    Evolutions : null,
    Basic_evolution : "mewtwo"
};

var mew = {
    Pokedex_number: 151,
    Stats  : [210, 210, 225],
    Evolutions : null,
    Basic_evolution : "mew"
};

var chikorita = {
    Pokedex_number: 152,
    Stats      : [92, 122, 128],
    Evolutions : ["bayleef", "meganium"],
    Basic_evolution : "chikorita"
};
var bayleef = {
    Pokedex_number: 153,
    Stats      : [122, 155, 155],
    Evolutions : ["meganium"],
    Basic_evolution : "chikorita"
};
var meganium = {
    Pokedex_number: 154,
    Stats  : [168, 202, 190],
    Evolutions : null,
    Basic_evolution : "chikorita"
};

var cyndaquil = {
    Pokedex_number: 155,
    Stats      : [116, 93, 118],
    Evolutions : ["quilava", "typhlosion"],
    Basic_evolution : "cyndaquil"
};
var quilava = {
    Pokedex_number: 156,
    Stats      : [158, 126, 151],
    Evolutions : ["typhlosion"],
    Basic_evolution : "cyndaquil"
};
var typhlosion = {
    Pokedex_number: 157,
    Stats  : [223, 173, 186],
    Evolutions : null,
    Basic_evolution : "cyndaquil"
};

var totodile = {
    Pokedex_number: 158,
    Stats      : [117, 109, 137],
    Evolutions : ["croconaw", "feraligatr"],
    Basic_evolution : "totodile"
};
var croconaw = {
    Pokedex_number: 159,
    Stats      : [150, 142, 163],
    Evolutions : ["feraligatr"],
    Basic_evolution : "totodile"
};
var feraligatr = {
    Pokedex_number: 160,
    Stats  : [205, 188, 198],
    Evolutions : null,
    Basic_evolution : "totodile"
};

var sentret = {
    Pokedex_number: 161,
    Stats      : [79, 73, 111],
    Evolutions : ["furret"],
    Basic_evolution : "sentret"
};
var furret = {
    Pokedex_number: 162,
    Stats  : [148, 125, 198],
    Evolutions : null,
    Basic_evolution : "sentret"
};

var hoothoot = {
    Pokedex_number: 163,
    Stats      : [67, 88, 155],
    Evolutions : ["noctowl"],
    Basic_evolution : "hoothoot"
};
var noctowl = {
    Pokedex_number: 164,
    Stats  : [145, 156, 225],
    Evolutions : null,
    Basic_evolution : "hoothoot"
};

var ledyba = {
    Pokedex_number: 165,
    Stats      : [72, 118, 120],
    Evolutions : ["ledian"],
    Basic_evolution : "ledyba"
};
var ledian = {
    Pokedex_number: 166,
    Stats  : [107, 179, 146],
    Evolutions : null,
    Basic_evolution : "ledyba"
};

var spinarak = {
    Pokedex_number: 167,
    Stats      : [105, 73, 120],
    Evolutions : ["ariados"],
    Basic_evolution : "spinarak"
};
var ariados = {
    Pokedex_number: 168,
    Stats  : [161, 124, 172],
    Evolutions : null,
    Basic_evolution : "spinarak"
};

var chinchou = {
    Pokedex_number: 170,
    Stats      : [106, 97, 181],
    Evolutions : ["lanturn"],
    Basic_evolution : "chinchou"
};
var lanturn = {
    Pokedex_number: 171,
    Stats  : [146, 137, 268],
    Evolutions : null,
    Basic_evolution : "chinchou"
};

var togepi = {
    Pokedex_number: 175,
    Stats      : [67, 116, 111],
    Evolutions : ["togetic", "togekiss"],
    Basic_evolution : "togepi"
};
var togetic = {
    Pokedex_number: 176,
    Stats  : [139, 181, 146],
    Evolutions : ["togekiss"],
    Basic_evolution : "togepi"
};
var togekiss = {
    Pokedex_number: 468,
    Stats  : [225, 217, 198],
    Evolutions : null,
    Basic_evolution : "togepi"
};

var natu = {
    Pokedex_number: 177,
    Stats      : [134, 89, 120],
    Evolutions : ["xatu"],
    Basic_evolution : "natu"
};
var xatu = {
    Pokedex_number: 178,
    Stats  : [192, 146, 163],
    Evolutions : null,
    Basic_evolution : "natu"
};

var mareep = {
    Pokedex_number: 179,
    Stats      : [114, 79, 146],
    Evolutions : ["flaaffy", "ampharos"],
    Basic_evolution : "mareep"
};
var flaaffy = {
    Pokedex_number: 180,
    Stats      : [145, 109, 172],
    Evolutions : ["ampharos"],
    Basic_evolution : "mareep"
};
var ampharos = {
    Pokedex_number: 181,
    Stats  : [211, 169, 207],
    Evolutions : null,
    Basic_evolution : "mareep"
};

var azurill = {
    Pokedex_number: 298,
    Stats      : [36, 71, 137],
    Evolutions : ["marill", "azumarill"],
    Basic_evolution : "azurill"
};
var marill = {
    Pokedex_number: 183,
    Stats      : [37, 93, 172],
    Evolutions : ["azumarill"],
    Basic_evolution : "azurill"
};
var azumarill = {
    Pokedex_number: 184,
    Stats  : [112, 152, 225],
    Evolutions : null,
    Basic_evolution : "azurill"
};

var bonsly = {
    Pokedex_number: 438,
    Stats      : [124, 133, 137],
    Evolutions : ["sudowoodo"],
    Basic_evolution : "bonsly"
};
var sudowoodo = {
    Pokedex_number: 185,
    Stats  : [167, 176, 172],
    Evolutions : null,
    Basic_evolution : "bonsly"
};

var hoppip = {
    Pokedex_number: 187,
    Stats      : [67, 94, 111],
    Evolutions : ["skiploom", "jumpluff"],
    Basic_evolution : "hoppip"
};
var skiploom = {
    Pokedex_number: 188,
    Stats      : [91, 120, 146],
    Evolutions : ["jumpluff"],
    Basic_evolution : "hoppip"
};
var jumpluff = {
    Pokedex_number: 189,
    Stats  : [118, 183, 181],
    Evolutions : null,
    Basic_evolution : "hoppip"
};

var aipom = {
    Pokedex_number: 190,
    Stats  : [136, 112, 146],
    Evolutions : ["ambipom"],
    Basic_evolution : "aipom"
};
var ambipom = {
    Pokedex_number: 424,
    Stats  : [205, 143, 181],
    Evolutions : null,
    Basic_evolution : "aipom"
};

var sunkern = {
    Pokedex_number: 191,
    Stats      : [55, 55, 102],
    Evolutions : ["sunflora"],
    Basic_evolution : "sunkern"
};
var sunflora = {
    Pokedex_number: 192,
    Stats  : [185, 135, 181],
    Evolutions : null,
    Basic_evolution : "sunkern"
};

var yanma = {
    Pokedex_number: 193,
    Stats  : [154, 94, 163],
    Evolutions : ["yanmega"],
    Basic_evolution : "yanma"
};
var yanmega = {
    Pokedex_number: 469,
    Stats  : [231, 156, 200],
    Evolutions : null,
    Basic_evolution : "yanma"
};

var wooper = {
    Pokedex_number: 194,
    Stats      : [75, 66, 146],
    Evolutions : ["quagsire"],
    Basic_evolution : "wooper"
};
var quagsire = {
    Pokedex_number: 195,
    Stats  : [152, 143, 216],
    Evolutions : null,
    Basic_evolution : "wooper"
};

var murkrow = {
    Pokedex_number: 198,
    Stats  : [175, 87, 155],
    Evolutions : ["honchkrow"],
    Basic_evolution : "murkrow"
};
var honchkrow = {
    Pokedex_number: 430,
    Stats  : [243, 103, 225],
    Evolutions : null,
    Basic_evolution : "murkrow"
};

var misdreavus = {
    Pokedex_number: 200,
    Stats  : [167, 154, 155],
    Evolutions : ["mismagius"],
    Basic_evolution : "misdreavus"
};
var mismagius = {
    Pokedex_number: 429,
    Stats  : [211, 187, 155],
    Evolutions : null,
    Basic_evolution : "misdreavus"
};

var unown = {
    Pokedex_number: 201,
    Stats  : [136, 91, 134],
    Evolutions : null,
    Basic_evolution : "unown"
};

var wynaut = {
    Pokedex_number: 360,
    Stats      : [41, 86, 216],
    Evolutions : ["wobbuffet"],
    Basic_evolution : "wynaut"
};
var wobbuffet = {
    Pokedex_number: 202,
    Stats  : [60, 106, 382],
    Evolutions : null,
    Basic_evolution : "wynaut"
};

var girafarig = {
    Pokedex_number: 203,
    Stats  : [182, 133, 172],
    Evolutions : null,
    Basic_evolution : "girafarig"
};

var pineco = {
    Pokedex_number: 204,
    Stats      : [108, 122, 137],
    Evolutions : ["forretress"],
    Basic_evolution : "pineco"
};
var forretress = {
    Pokedex_number: 205,
    Stats  : [161, 205, 181],
    Evolutions : null,
    Basic_evolution : "pineco"
};

var dunsparce = {
    Pokedex_number: 206,
    Stats  : [131, 128, 225],
    Evolutions : null,
    Basic_evolution : "dunsparce"
};

var gligar = {
    Pokedex_number: 207,
    Stats  : [143, 184, 163],
    Evolutions : ["gliscor"],
    Basic_evolution : "gligar"
};
var gliscor = {
    Pokedex_number: 472,
    Stats  : [185, 222, 181],
    Evolutions : null,
    Basic_evolution : "gligar"
};

var snubbull = {
    Pokedex_number: 209,
    Stats      : [137, 85, 155],
    Evolutions : ["granbull"],
    Basic_evolution : "snubbull"
};
var granbull = {
    Pokedex_number: 210,
    Stats  : [212, 131, 207],
    Evolutions : null,
    Basic_evolution : "snubbull"
};

var qwilfish = {
    Pokedex_number: 211,
    Stats  : [184, 138, 163],
    Evolutions : null,
    Basic_evolution : "qwilfish"
};

var shuckle = {
    Pokedex_number: 213,
    Stats  : [17, 396, 85],
    Evolutions : null,
    Basic_evolution : "shuckle"
};

var heracross = {
    Pokedex_number: 214,
    Stats  : [234, 179, 190],
    Evolutions : null,
    Basic_evolution : "heracross"
};

var sneasel = {
    Pokedex_number: 215,
    Stats  : [189, 146, 146],
    Evolutions : ["weavile"],
    Basic_evolution : "sneasel"
};
var weavile = {
    Pokedex_number: 461,
    Stats  : [243, 171, 172],
    Evolutions : null,
    Basic_evolution : "sneasel"
};

var teddiursa = {
    Pokedex_number: 216,
    Stats      : [142, 93, 155],
    Evolutions : ["ursaring"],
    Basic_evolution : "teddiursa"
};
var ursaring = {
    Pokedex_number: 217,
    Stats  : [236, 144, 207],
    Evolutions : null,
    Basic_evolution : "teddiursa"
};

var slugma = {
    Pokedex_number: 218,
    Stats      : [118, 71, 120],
    Evolutions : ["magcargo"],
    Basic_evolution : "slugma"
};
var magcargo = {
    Pokedex_number: 219,
    Stats  : [139, 191, 137],
    Evolutions : null,
    Basic_evolution : "slugma"
};

var swinub = {
    Pokedex_number: 220,
    Stats      : [90, 69, 137],
    Evolutions : ["piloswine", "mamoswine"],
    Basic_evolution : "swinub"
};
var piloswine = {
    Pokedex_number: 221,
    Stats  : [181, 138, 225],
    Evolutions : ["mamoswine"],
    Basic_evolution : "swinub"
};
var mamoswine = {
    Pokedex_number: 473,
    Stats  : [247, 146, 242],
    Evolutions : null,
    Basic_evolution : "swinub"
};

var corsola = {
    Pokedex_number: 222,
    Stats  : [118, 156, 146],
    Evolutions : null,
    Basic_evolution : "corsola"
};

var remoraid = {
    Pokedex_number: 223,
    Stats      : [127, 69, 111],
    Evolutions : ["octillery"],
    Basic_evolution : "remoraid"
};
var octillery = {
    Pokedex_number: 224,
    Stats  : [197, 141, 181],
    Evolutions : null,
    Basic_evolution : "remoraid"
};

var delibird = {
    Pokedex_number: 225,
    Stats  : [128, 90, 128],
    Evolutions : null,
    Basic_evolution : "delibird"
};

var mantyke = {
    Pokedex_number: 458,
    Stats  : [105, 179, 128],
    Evolutions : ["mantine"],
    Basic_evolution : "mantyke"
};
var mantine = {
    Pokedex_number: 226,
    Stats  : [148, 226, 163],
    Evolutions : null,
    Basic_evolution : "mantyke"
};

var skarmory = {
    Pokedex_number: 227,
    Stats  : [148, 226, 163],
    Evolutions : null,
    Basic_evolution : "skarmory"
};

var houndour = {
    Pokedex_number: 228,
    Stats      : [152, 83, 128],
    Evolutions : ["houndoom"],
    Basic_evolution : "houndour"
};
var houndoom = {
    Pokedex_number: 229,
    Stats  : [224, 144, 181],
    Evolutions : null,
    Basic_evolution : "houndour"
};

var phanpy = {
    Pokedex_number: 231,
    Stats      : [107, 98, 207],
    Evolutions : ["donphan"],
    Basic_evolution : "phanpy"
};
var donphan = {
    Pokedex_number: 232,
    Stats  : [214, 185, 207],
    Evolutions : null,
    Basic_evolution : "phanpy"
};

var stantler = {
    Pokedex_number: 234,
    Stats  : [192, 131, 177],
    Evolutions : null,
    Basic_evolution : "stantler"
};

var smeargle = {
    Pokedex_number: 236,
    Stats  : [40, 83, 146],
    Evolutions : null,
    Basic_evolution : "stantler"
};

var miltank = {
    Pokedex_number: 241,
    Stats  : [157, 193, 216],
    Evolutions : null,
    Basic_evolution : "miltank"
};

var raikou = {
    Pokedex_number: 243,
    Stats  : [241, 195, 207],
    Evolutions : null,
    Basic_evolution : "raikou"
};

var entei = {
    Pokedex_number: 244,
    Stats  : [235, 171, 251],
    Evolutions : null,
    Basic_evolution : "entei"
};

var suicune = {
    Pokedex_number: 245,
    Stats  : [180, 235, 225],
    Evolutions : null,
    Basic_evolution : "suicune"
};

var larvitar = {
    Pokedex_number: 246,
    Stats      : [115, 93, 137],
    Evolutions : ["pupitar", "tyranitar"],
    Basic_evolution : "larvitar"
};
var pupitar = {
    Pokedex_number: 247,
    Stats      : [155, 133, 172],
    Evolutions : ["tyranitar"],
    Basic_evolution : "larvitar"
};
var tyranitar = {
    Pokedex_number: 248,
    Stats  : [251, 207, 225],
    Evolutions : null,
    Basic_evolution : "larvitar"
};

var lugia = {
    Pokedex_number: 249,
    Stats      : [193, 310, 235],
    Evolutions : null,
    Basic_evolution : "lugia"
};

var hooh = {
    Pokedex_number: 250,
    Stats      : [239, 244, 214],
    Evolutions : null,
    Basic_evolution : "hooh"
};

var celebi = {
    Pokedex_number: 251,
    Stats      : [210, 210, 225],
    Evolutions : null,
    Basic_evolution : "celebi"
};

var treecko = {
    Pokedex_number: 252,
    Stats      : [124, 94, 120],
    Evolutions : ["grovyle", "sceptile"],
    Basic_evolution : "treecko"
};
var grovyle = {
    Pokedex_number: 253,
    Stats      : [172, 120, 137],
    Evolutions : ["sceptile"],
    Basic_evolution : "treecko"
};
var sceptile = {
    Pokedex_number: 254,
    Stats      : [223, 169, 172],
    Evolutions : null,
    Basic_evolution : "treecko"
};

var torchic = {
    Pokedex_number: 255,
    Stats      : [130, 87, 128],
    Evolutions : ["combusken", "blaziken"],
    Basic_evolution : "torchic"
};
var combusken = {
    Pokedex_number: 256,
    Stats      : [163, 115, 155],
    Evolutions : ["blaziken"],
    Basic_evolution : "torchic"
};
var blaziken = {
    Pokedex_number: 257,
    Stats      : [240, 141, 190],
    Evolutions : null,
    Basic_evolution : "torchic"
};

var mudkip = {
    Pokedex_number: 258,
    Stats      : [126, 93, 137],
    Evolutions : ["marshtomp", "swampert"],
    Basic_evolution : "mudkip"
};
var marshtomp = {
    Pokedex_number: 259,
    Stats      : [156, 133, 172],
    Evolutions : ["swampert"],
    Basic_evolution : "mudkip"
};
var swampert = {
    Pokedex_number: 260,
    Stats      : [208, 175, 225],
    Evolutions : null,
    Basic_evolution : "mudkip"
};

var poochyena = {
    Pokedex_number: 261,
    Stats      : [96, 61, 111],
    Evolutions : ["mightyena"],
    Basic_evolution : "poochyena"
};
var mightyena = {
    Pokedex_number: 262,
    Stats      : [171, 132, 172],
    Evolutions : null,
    Basic_evolution : "poochyena"
};

var zigzagoon = {
    Pokedex_number: 263,
    Stats      : [58, 80, 116],
    Evolutions : ["linoone"],
    Basic_evolution : "zigzagoon"
};
var linoone = {
    Pokedex_number: 264,
    Stats      : [142, 128, 186],
    Evolutions : null,
    Basic_evolution : "linoone"
};

var wurmple = {
    Pokedex_number: 265,
    Stats      : [75, 59, 128],
    Evolutions : ["silcoon", "beautifly", "cascoon", "dustox"],
    Basic_evolution : "wurmple"
};
var silcoon = {
    Pokedex_number: 266,
    Stats      : [60, 77, 137],
    Evolutions : ["beautifly"],
    Basic_evolution : "wurmple"
};
var beautifly = {
    Pokedex_number: 267,
    Stats      : [189, 98, 155],
    Evolutions : null,
    Basic_evolution : "wurmple"
};
var cascoon = {
    Pokedex_number: 268,
    Stats      : [60, 77, 137],
    Evolutions : ["dustox"],
    Basic_evolution : "wurmple"
};
var dustox = {
    Pokedex_number: 269,
    Stats      : [98, 162, 155],
    Evolutions : null,
    Basic_evolution : "wurmple"
};

var lotad = {
    Pokedex_number: 270,
    Stats      : [71, 77, 120],
    Evolutions : ["lombre", "ludicolo"],
    Basic_evolution : "lotad"
};
var lombre = {
    Pokedex_number: 271,
    Stats      : [112, 119, 155],
    Evolutions : ["ludicolo"],
    Basic_evolution : "lotad"
};
var ludicolo = {
    Pokedex_number: 272,
    Stats      : [173, 176, 190],
    Evolutions : null,
    Basic_evolution : "lotad"
};

var seedot = {
    Pokedex_number: 273,
    Stats      : [71, 77, 120],
    Evolutions : ["nuzleaf", "shiftry"],
    Basic_evolution : "seedot"
};
var nuzleaf = {
    Pokedex_number: 274,
    Stats      : [134, 78, 172],
    Evolutions : ["shiftry"],
    Basic_evolution : "seedot"
};
var shiftry = {
    Pokedex_number: 275,
    Stats      : [200, 121, 207],
    Evolutions : null,
    Basic_evolution : "seedot"
};

var taillow = {
    Pokedex_number: 276,
    Stats      : [106, 61, 120],
    Evolutions : ["swellow"],
    Basic_evolution : "taillow"
};
var swellow = {
    Pokedex_number: 277,
    Stats      : [185, 124, 155],
    Evolutions : null,
    Basic_evolution : "taillow"
};

var wingull = {
    Pokedex_number: 278,
    Stats      : [106, 61, 120],
    Evolutions : ["pelipper"],
    Basic_evolution : "wingull"
};
var pelipper = {
    Pokedex_number: 279,
    Stats      : [175, 174, 155],
    Evolutions : null,
    Basic_evolution : "wingull"
};

var ralts = {
    Pokedex_number: 280,
    Stats      : [79, 59, 99],
    Evolutions : ["kirlia", "gardevoir", "gallade"],
    Basic_evolution : "ralts"
};
var kirlia = {
    Pokedex_number: 281,
    Stats      : [117, 90, 116],
    Evolutions : ["gardevoir", "gallade"],
    Basic_evolution : "ralts"
};
var gardevoir = {
    Pokedex_number: 282,
    Stats      : [237, 195, 169],
    Evolutions : null,
    Basic_evolution : "ralts"
};
var gallade = {
    Pokedex_number: 475,
    Stats      : [237, 195, 169],
    Evolutions : null,
    Basic_evolution : "ralts"
};

var surskit = {
    Pokedex_number: 283,
    Stats      : [93, 87, 120],
    Evolutions : ["masquerain"],
    Basic_evolution : "surskit"
};
var masquerain = {
    Pokedex_number: 284,
    Stats      : [192, 150, 172],
    Evolutions : null,
    Basic_evolution : "surskit"
};

var shroomish = {
    Pokedex_number: 285,
    Stats      : [74, 110, 155],
    Evolutions : ["breloom"],
    Basic_evolution : "shroomish"
};
var breloom = {
    Pokedex_number: 286,
    Stats      : [241, 144, 155],
    Evolutions : null,
    Basic_evolution : "shroomish"
};

var slakoth = {
    Pokedex_number: 287,
    Stats      : [104, 92, 155],
    Evolutions : ["vigoroth", "slaking"],
    Basic_evolution : "slakoth"
};
var vigoroth = {
    Pokedex_number: 288,
    Stats      : [159, 145, 190],
    Evolutions : ["slaking"],
    Basic_evolution : "slakoth"
};
var slaking = {
    Pokedex_number: 289,
    Stats      : [290, 166, 284],
    Evolutions : null,
    Basic_evolution : "slakoth"
};

var nincada = {
    Pokedex_number: 290,
    Stats      : [80, 126, 104],
    Evolutions : ["ninjask"],
    Basic_evolution : "nincada"
};
var ninjask = {
    Pokedex_number: 291,
    Stats      : [199, 112, 156],
    Evolutions : null,
    Basic_evolution : "nincada"
};

var shedinja = {
    Pokedex_number: 292,
    Stats      : [153, 73, 1],
    Evolutions : null,
    Basic_evolution : "shedinja"
};

var whismur = {
    Pokedex_number: 293,
    Stats      : [92, 42, 162],
    Evolutions : ["loudred", "exploud"],
    Basic_evolution : "whismur"
};
var loudred = {
    Pokedex_number: 294,
    Stats      : [134, 81, 197],
    Evolutions : ["exploud"],
    Basic_evolution : "whismur"
};
var exploud = {
    Pokedex_number: 295,
    Stats      : [179, 137, 232],
    Evolutions : null,
    Basic_evolution : "whismur"
};

var makuhita = {
    Pokedex_number: 296,
    Stats      : [99, 54, 176],
    Evolutions : ["hariyama"],
    Basic_evolution : "makuhita"
};
var hariyama = {
    Pokedex_number: 297,
    Stats      : [209, 114, 302],
    Evolutions : null,
    Basic_evolution : "makuhita"
};

var nosepass = {
    Pokedex_number: 299,
    Stats      : [82, 215, 102],
    Evolutions : ["probopass"],
    Basic_evolution : "nosepass"
};
var probopass = {
    Pokedex_number: 476,
    Stats      : [135, 275, 155],
    Evolutions : null,
    Basic_evolution : "nosepass"
};

var skitty = {
    Pokedex_number: 300,
    Stats      : [84, 79, 137],
    Evolutions : ["delcatty"],
    Basic_evolution : "skitty"
};
var delcatty = {
    Pokedex_number: 301,
    Stats      : [132, 127, 172],
    Evolutions : null,
    Basic_evolution : "skitty"
};

var sableye = {
    Pokedex_number: 302,
    Stats  : [141, 136, 137],
    Evolutions : null,
    Basic_evolution : "sableye"
};

var mawile = {
    Pokedex_number: 303,
    Stats  : [155, 141, 137],
    Evolutions : null,
    Basic_evolution : "mawile"
};

var aron = {
    Pokedex_number: 304,
    Stats      : [121, 141, 137],
    Evolutions : ["lairon", "aggron"],
    Basic_evolution : "aron"
};
var lairon = {
    Pokedex_number: 305,
    Stats      : [158, 198, 155],
    Evolutions : ["aggron"],
    Basic_evolution : "aron"
};
var aggron = {
    Pokedex_number: 306,
    Stats      : [198, 257, 172],
    Evolutions : null,
    Basic_evolution : "aron"
};

var meditite = {
    Pokedex_number: 307,
    Stats      : [78, 107, 102],
    Evolutions : ["medicham"],
    Basic_evolution : "meditite"
};
var medicham = {
    Pokedex_number: 308,
    Stats      : [121, 152, 155],
    Evolutions : null,
    Basic_evolution : "meditite"
};

var electrike = {
    Pokedex_number: 309,
    Stats      : [123, 78, 120],
    Evolutions : ["manectric"],
    Basic_evolution : "electrike"
};
var manectric = {
    Pokedex_number: 310,
    Stats      : [215, 127, 172],
    Evolutions : null,
    Basic_evolution : "electrike"
};

var plusle = {
    Pokedex_number: 311,
    Stats      : [167, 129, 155],
    Evolutions : null,
    Basic_evolution : "plusle"
};

var minun = {
    Pokedex_number: 312,
    Stats      : [147, 150, 155],
    Evolutions : null,
    Basic_evolution : "minun"
};

var volbeat = {
    Pokedex_number: 313,
    Stats      : [143, 166, 163],
    Evolutions : null,
    Basic_evolution : "volbeat"
};

var illumise = {
    Pokedex_number: 314,
    Stats      : [143, 166, 163],
    Evolutions : null,
    Basic_evolution : "illumise"
};

var budew = {
    Pokedex_number: 406,
    Stats      : [91, 109, 120],
    Evolutions : ["roselia", "roserade"],
    Basic_evolution : "budew"
};
var roselia = {
    Pokedex_number: 315,
    Stats      : [186, 131, 137],
    Evolutions : ["roserade"],
    Basic_evolution : "budew"
};
var roserade = {
    Pokedex_number: 407,
    Stats      : [243, 185, 155],
    Evolutions : null,
    Basic_evolution : "budew"
};

var gulpin = {
    Pokedex_number: 316,
    Stats      : [80, 99, 172],
    Evolutions : ["swalot"],
    Basic_evolution : "gulpin"
};
var swalot = {
    Pokedex_number: 317,
    Stats      : [140, 159, 225],
    Evolutions : null,
    Basic_evolution : "gulpin"
};

var carvanha = {
    Pokedex_number: 318,
    Stats      : [171, 39, 128],
    Evolutions : ["sharpedo"],
    Basic_evolution : "carvanha"
};
var sharpedo = {
    Pokedex_number: 319,
    Stats      : [243, 83, 172],
    Evolutions : null,
    Basic_evolution : "carvanha"
};

var wailmer = {
    Pokedex_number: 320,
    Stats      : [136, 68, 277],
    Evolutions : ["wailord"],
    Basic_evolution : "wailmer"
};
var wailord = {
    Pokedex_number: 321,
    Stats      : [175, 87, 347],
    Evolutions : null,
    Basic_evolution : "wailmer"
};

var numel = {
    Pokedex_number: 322,
    Stats      : [119, 79, 155],
    Evolutions : ["camerupt"],
    Basic_evolution : "numel"
};
var camerupt = {
    Pokedex_number: 323,
    Stats      : [194, 136, 172],
    Evolutions : null,
    Basic_evolution : "numel"
};

var torkoal = {
    Pokedex_number: 324,
    Stats      : [151, 203, 172],
    Evolutions : null,
    Basic_evolution : "torkoal"
};

var spoink = {
    Pokedex_number: 325,
    Stats      : [125, 122, 155],
    Evolutions : ["grumpig"],
    Basic_evolution : "spoink"
};
var grumpig = {
    Pokedex_number: 326,
    Stats      : [171, 188, 190],
    Evolutions : null,
    Basic_evolution : "spoink"
};

var spinda = {
    Pokedex_number: 327,
    Stats      : [116, 116, 155],
    Evolutions : null,
    Basic_evolution : "spinda"
};

var trapinch = {
    Pokedex_number: 328,
    Stats      : [162, 78, 128],
    Evolutions : ["vibrava", "flygon"],
    Basic_evolution : "trapinch"
};
var vibrava = {
    Pokedex_number: 329,
    Stats      : [134, 99, 137],
    Evolutions : ["flygon"],
    Basic_evolution : "trapinch"
};
var flygon = {
    Pokedex_number: 330,
    Stats      : [205, 168, 190],
    Evolutions : null,
    Basic_evolution : "trapinch"
};

var cacnea = {
    Pokedex_number: 331,
    Stats      : [156, 74, 137],
    Evolutions : ["cacturne"],
    Basic_evolution : "cacnea"
};
var cacturne = {
    Pokedex_number: 332,
    Stats      : [221, 115, 172],
    Evolutions : null,
    Basic_evolution : "cacnea"
};

var swablu = {
    Pokedex_number: 333,
    Stats      : [76, 132, 128],
    Evolutions : ["altaria"],
    Basic_evolution : "swablu"
};
var altaria = {
    Pokedex_number: 334,
    Stats      : [141, 201, 181],
    Evolutions : null,
    Basic_evolution : "swablu",
    Element : ["Dragon", "Flying"],
    Fast_moves : ["Dragon Breath", "Peck"],
    Charged_moves : ["Dazzling Gleam", "Dragon Pulse", "Sky Attack"]
};

var zangoose = {
    Pokedex_number: 335,
    Stats      : [222, 124, 177],
    Evolutions : null,
    Basic_evolution : "zangoose"
};

var seviper = {
    Pokedex_number: 336,
    Stats      : [196, 118, 177],
    Evolutions : null,
    Basic_evolution : "seviper"
};

var lunatone = {
    Pokedex_number: 337,
    Stats      : [178, 153, 207],
    Evolutions : null,
    Basic_evolution : "lunatone"
};

var solrock = {
    Pokedex_number: 338,
    Stats      : [178, 153, 207],
    Evolutions : null,
    Basic_evolution : "solrock"
};

var barboach = {
    Pokedex_number: 339,
    Stats      : [93, 82, 137],
    Evolutions : ["whiscash"],
    Basic_evolution : "barboach"
};
var whiscash = {
    Pokedex_number: 340,
    Stats  : [151, 141, 242],
    Evolutions : null,
    Basic_evolution : "barboach"
};

var corphish = {
    Pokedex_number: 341,
    Stats      : [141, 99, 125],
    Evolutions : ["crawdaunt"],
    Basic_evolution : "corphish"
};
var crawdaunt = {
    Pokedex_number: 342,
    Stats  : [224, 142, 160],
    Evolutions : null,
    Basic_evolution : "corphish"
};

var baltoy = {
    Pokedex_number: 343,
    Stats      : [77, 124, 120],
    Evolutions : ["claydol"],
    Basic_evolution : "baltoy"
};
var claydol = {
    Pokedex_number: 344,
    Stats  : [140, 229, 155],
    Evolutions : null,
    Basic_evolution : "baltoy"
};

var lileep = {
    Pokedex_number: 345,
    Stats      : [105, 150, 165],
    Evolutions : ["cradily"],
    Basic_evolution : "lileep"
};
var cradily = {
    Pokedex_number: 346,
    Stats  : [152, 194, 200],
    Evolutions : null,
    Basic_evolution : "lileep"
};

var anorith = {
    Pokedex_number: 347,
    Stats      : [176, 100, 128],
    Evolutions : ["armaldo"],
    Basic_evolution : "anorith"
};
var armaldo = {
    Pokedex_number: 348,
    Stats  : [222, 174, 181],
    Evolutions : null,
    Basic_evolution : "anorith"
};

var feebas = {
    Pokedex_number: 349,
    Stats      : [29, 85, 85],
    Evolutions : ["milotic"],
    Basic_evolution : "feebas"
};
var milotic = {
    Pokedex_number: 350,
    Stats  : [192, 219, 216],
    Evolutions : null,
    Basic_evolution : "feebas"
};

var castform = {
    Pokedex_number: 351,
    Stats  : [139, 139, 172],
    Evolutions : null,
    Basic_evolution : "castform"
};

var kecleon = {
    Pokedex_number: 352,
    Stats  : [161, 189, 155],
    Evolutions : null,
    Basic_evolution : "kecleon"
};

var shuppet = {
    Pokedex_number: 353,
    Stats      : [138, 65, 127],
    Evolutions : ["banette"],
    Basic_evolution : "shuppet"
};
var banette = {
    Pokedex_number: 354,
    Stats  : [251, 126, 162],
    Evolutions : null,
    Basic_evolution : "shuppet"
};

var duskull = {
    Pokedex_number: 355,
    Stats      : [70, 162, 85],
    Evolutions : ["dusclops", "dusknoir"],
    Basic_evolution : "duskull"
};
var dusclops = {
    Pokedex_number: 356,
    Stats  : [124, 234, 120],
    Evolutions : ["dusknoir"],
    Basic_evolution : "duskull"
};
var dusknoir = {
    Pokedex_number: 477,
    Stats  : [180, 254, 128],
    Evolutions : null,
    Basic_evolution : "duskull"
};

var tropius = {
    Pokedex_number: 357,
    Stats  : [136, 163, 223],
    Evolutions : null,
    Basic_evolution : "tropius"
};

var chingling = {
    Pokedex_number: 433,
    Stats  : [114, 94, 128],
    Evolutions : ["chimecho"],
    Basic_evolution : "chingling"
};
var chimecho = {
    Pokedex_number: 358,
    Stats  : [175, 170, 181],
    Evolutions : null,
    Basic_evolution : "chingling"
};

var absol = {
    Pokedex_number: 359,
    Stats  : [246, 120, 163],
    Evolutions : null,
    Basic_evolution : "absol"
};

var snorunt = {
    Pokedex_number: 361,
    Stats      : [95, 95, 137],
    Evolutions : ["glalie", "froslass"],
    Basic_evolution : "snorunt"
};
var glalie = {
    Pokedex_number: 362,
    Stats  : [162, 162, 190],
    Evolutions : null,
    Basic_evolution : "snorunt"
};
var froslass = {
    Pokedex_number: 478,
    Stats  : [171, 150, 172],
    Evolutions : null,
    Basic_evolution : "snorunt"
};

var spheal = {
    Pokedex_number: 363,
    Stats      : [95, 90, 172],
    Evolutions : ["sealeo", "walrein"],
    Basic_evolution : "spheal"
};
var sealeo = {
    Pokedex_number: 364,
    Stats      : [137, 132, 207],
    Evolutions : ["walrein"],
    Basic_evolution : "spheal",
    Element : ["Ice", "Water"],
    Fast_moves : ["Powder Snow", "Water Gun"],
    Charged_moves : ["Aurora Beam", "Body Slam", "Water Pulse"]
};
var walrein = {
    Pokedex_number: 365,
    Stats      : [182, 176, 242],
    Evolutions : null,
    Basic_evolution : "spheal"
};

var clamperl = {
    Pokedex_number: 366,
    Stats      : [133, 135, 111],
    Evolutions : ["huntail", "gorebyss"],
    Basic_evolution : "clamperl"
};
var huntail = {
    Pokedex_number: 367,
    Stats      : [197, 179, 146],
    Evolutions : null,
    Basic_evolution : "clamperl"
};
var gorebyss = {
    Pokedex_number: 368,
    Stats      : [211, 179, 146],
    Evolutions : null,
    Basic_evolution : "clamperl"
};

var relicanth = {
    Pokedex_number: 369,
    Stats  : [162, 203, 225],
    Evolutions : null,
    Basic_evolution : "relicanth"
};

var luvdisc = {
    Pokedex_number: 370,
    Stats  : [81, 128, 125],
    Evolutions : null,
    Basic_evolution : "luvdisc"
};

var bagon = {
    Pokedex_number: 371,
    Stats      : [134, 93, 128],
    Evolutions : ["shelgon", "salamence"],
    Basic_evolution : "bagon"
};
var shelgon = {
    Pokedex_number: 372,
    Stats      : [172, 155, 163],
    Evolutions : ["salamence"],
    Basic_evolution : "bagon"
};
var salamence = {
    Pokedex_number: 373,
    Stats      : [277, 168, 216],
    Evolutions : null,
    Basic_evolution : "bagon"
};

var beldum = {
    Pokedex_number: 374,
    Stats      : [96, 132, 120],
    Evolutions : ["metang", "metagross"],
    Basic_evolution : "beldum"
};
var metang = {
    Pokedex_number: 375,
    Stats      : [138, 176, 155],
    Evolutions : ["metagross"],
    Basic_evolution : "beldum"
};
var metagross = {
    Pokedex_number: 376,
    Stats      : [257, 228, 190],
    Evolutions : null,
    Basic_evolution : "beldum"
};

var regirock = {
    Pokedex_number: 377,
    Stats  : [179, 309, 190],
    Evolutions : null,
    Basic_evolution : "regirock"
};

var regice = {
    Pokedex_number: 378,
    Stats  : [270, 309, 190],
    Evolutions : null,
    Basic_evolution : "regice"
};

var registeel = {
    Pokedex_number: 379,
    Stats  : [143, 285, 190],
    Evolutions : null,
    Basic_evolution : "registeel"
};

var latias = {
    Pokedex_number: 380,
    Stats  : [228, 246, 190],
    Evolutions : null,
    Basic_evolution : "latias"
};

var latios = {
    Pokedex_number: 381,
    Stats  : [268, 212, 190],
    Evolutions : null,
    Basic_evolution : "latios"
};

var kyogre = {
    Pokedex_number: 382,
    Stats  : [270, 228, 205],
    Evolutions : null,
    Basic_evolution : "kyogre"
};

var groudon = {
    Pokedex_number: 383,
    Stats  : [270, 228, 205],
    Evolutions : null,
    Basic_evolution : "groudon"
};

var rayquaza = {
    Pokedex_number: 384,
    Stats  : [284, 170, 213],
    Evolutions : null,
    Basic_evolution : "rayquaza"
};

var jirachi = {
    Pokedex_number: 385,
    Stats  : [210, 210, 225],
    Evolutions : null,
    Basic_evolution : "jirachi"
};

var deoxysn = {
    Pokedex_number: 386,
    Stats  : [345, 115, 137],
    Evolutions : null,
    Basic_evolution : "deoxysn"
};
var deoxysa = {
    Pokedex_number: 386,
    Stats  : [414, 46, 137],
    Evolutions : null,
    Basic_evolution : "deoxysa"
};
var deoxysd = {
    Pokedex_number: 386,
    Stats  : [144, 330, 137],
    Evolutions : null,
    Basic_evolution : "deoxysd"
};
var deoxyss = {
    Pokedex_number: 386,
    Stats  : [230, 218, 137],
    Evolutions : null,
    Basic_evolution : "deoxyss"
};

var turtwig = {
    Pokedex_number: 387,
    Stats      : [119, 110, 146],
    Evolutions : ["grotle", "torterra"],
    Basic_evolution : "turtwig"
};
var grotle = {
    Pokedex_number: 388,
    Stats      : [157, 143, 181],
    Evolutions : ["torterra"],
    Basic_evolution : "turtwig"
};
var torterra = {
    Pokedex_number: 389,
    Stats      : [202, 188, 216],
    Evolutions : null,
    Basic_evolution : "turtwig"
};

var chimchar = {
    Pokedex_number: 390,
    Stats      : [113, 86, 127],
    Evolutions : ["monferno", "infernape"],
    Basic_evolution : "chimchar"
};
var monferno = {
    Pokedex_number: 391,
    Stats      : [158, 105, 162],
    Evolutions : ["infernape"],
    Basic_evolution : "chimchar"
};
var infernape = {
    Pokedex_number: 392,
    Stats      : [222, 151, 183],
    Evolutions : null,
    Basic_evolution : "chimchar"
};

var piplup = {
    Pokedex_number: 393,
    Stats      : [112, 102, 142],
    Evolutions : ["prinplup", "empoleon"],
    Basic_evolution : "piplup"
};
var prinplup = {
    Pokedex_number: 394,
    Stats      : [150, 139, 162],
    Evolutions : ["empoleon"],
    Basic_evolution : "piplup"
};
var empoleon = {
    Pokedex_number: 395,
    Stats      : [210, 186, 197],
    Evolutions : null,
    Basic_evolution : "piplup"
};

var starly = {
    Pokedex_number: 396,
    Stats      : [101, 58, 120],
    Evolutions : ["staravia", "staraptor"],
    Basic_evolution : "starly"
};
var staravia = {
    Pokedex_number: 397,
    Stats      : [142, 94, 146],
    Evolutions : ["staraptor"],
    Basic_evolution : "starly"
};
var staraptor = {
    Pokedex_number: 398,
    Stats      : [234, 140, 198],
    Evolutions : null,
    Basic_evolution : "starly"
};

var bidoof = {
    Pokedex_number: 399,
    Stats      : [80, 73, 153],
    Evolutions : ["bibarel"],
    Basic_evolution : "bidoof"
};
var bibarel = {
    Pokedex_number: 400,
    Stats      : [162, 119, 188],
    Evolutions : null,
    Basic_evolution : "bidoof"
};

var kricketot = {
    Pokedex_number: 401,
    Stats      : [45, 74, 114],
    Evolutions : ["kricketune"],
    Basic_evolution : "kricketot"
};
var kricketune = {
    Pokedex_number: 402,
    Stats      : [160, 100, 184],
    Evolutions : null,
    Basic_evolution : "kricketot"
};

var shinx = {
    Pokedex_number: 403,
    Stats      : [117, 64, 128],
    Evolutions : ["luxio", "luxray"],
    Basic_evolution : "shinx"
};
var luxio = {
    Pokedex_number: 404,
    Stats      : [159, 95, 155],
    Evolutions : ["luxray"],
    Basic_evolution : "shinx"
};
var luxray = {
    Pokedex_number: 405,
    Stats      : [232, 156, 190],
    Evolutions : null,
    Basic_evolution : "shinx"
};

var cranidos = {
    Pokedex_number: 408,
    Stats      : [218, 71, 167],
    Evolutions : ["rampardos"],
    Basic_evolution : "cranidos"
};
var rampardos = {
    Pokedex_number: 409,
    Stats      : [295, 109, 219],
    Evolutions : null,
    Basic_evolution : "cranidos"
};

var shieldon = {
    Pokedex_number: 410,
    Stats      : [76, 195, 102],
    Evolutions : ["bastiodon"],
    Basic_evolution : "shieldon"
};
var bastiodon = {
    Pokedex_number: 411,
    Stats      : [94, 286, 155],
    Evolutions : null,
    Basic_evolution : "shieldon"
};

var burmy = {
    Pokedex_number: 412,
    Stats      : [53, 83, 120],
    Evolutions : ["wormadam", "mothim"],
    Basic_evolution : "burmy"
};
var wormadam = {
    Pokedex_number: 413,
    Stats      : [141, 180, 155],
    Evolutions : null,
    Basic_evolution : "burmy"
};
var mothim = {
    Pokedex_number: 414,
    Stats      : [185, 98, 172],
    Evolutions : null,
    Basic_evolution : "burmy"
};

var combee = {
    Pokedex_number: 415,
    Stats      : [59, 83, 102],
    Evolutions : ["vespiquen"],
    Basic_evolution : "combee"
};
var vespiquen = {
    Pokedex_number: 416,
    Stats      : [149, 190, 172],
    Evolutions : null,
    Basic_evolution : "combee"
};

var pachirisu = {
    Pokedex_number: 417,
    Stats      : [94, 172, 155],
    Evolutions : null,
    Basic_evolution : "pachirisu"
};

var buizel = {
    Pokedex_number: 418,
    Stats      : [132, 67, 146],
    Evolutions : ["floatzel"],
    Basic_evolution : "buizel"
};
var floatzel = {
    Pokedex_number: 419,
    Stats      : [221, 114, 198],
    Evolutions : null,
    Basic_evolution : "buizel"
};

var cherubi = {
    Pokedex_number: 420,
    Stats      : [108, 92, 128],
    Evolutions : ["cherrim"],
    Basic_evolution : "cherubi"
};
var cherrim = {
    Pokedex_number: 421,
    Stats      : [170, 153, 172],
    Evolutions : null,
    Basic_evolution : "cherubi"
};

var shellos = {
    Pokedex_number: 422,
    Stats      : [103, 105, 183],
    Evolutions : ["gastrodon"],
    Basic_evolution : "shellos"
};
var gastrodon = {
    Pokedex_number: 423,
    Stats      : [169, 143, 244],
    Evolutions : null,
    Basic_evolution : "shellos"
};

var drifloon = {
    Pokedex_number: 425,
    Stats      : [117, 80, 207],
    Evolutions : ["drifblim"],
    Basic_evolution : "drifloon"
};
var drifblim = {
    Pokedex_number: 426,
    Stats      : [180, 102, 312],
    Evolutions : null,
    Basic_evolution : "drifloon"
};

var buneary = {
    Pokedex_number: 427,
    Stats      : [130, 105, 146],
    Evolutions : ["lopunny"],
    Basic_evolution : "buneary"
};
var lopunny = {
    Pokedex_number: 428,
    Stats      : [156, 194, 163],
    Evolutions : null,
    Basic_evolution : "buneary"
};

var glameow = {
    Pokedex_number: 431,
    Stats      : [109, 82, 135],
    Evolutions : ["purugly"],
    Basic_evolution : "glameow"
};
var purugly = {
    Pokedex_number: 432,
    Stats      : [172, 133, 174],
    Evolutions : null,
    Basic_evolution : "glameow"
};

var stunky = {
    Pokedex_number: 434,
    Stats      : [121, 90, 160],
    Evolutions : ["skuntank"],
    Basic_evolution : "stunky"
};
var skuntank = {
    Pokedex_number: 435,
    Stats      : [184, 132, 230],
    Evolutions : null,
    Basic_evolution : "stunky"
};

var bronzor = {
    Pokedex_number: 436,
    Stats      : [43, 154, 149],
    Evolutions : ["bronzong"],
    Basic_evolution : "bronzor"
};
var bronzong = {
    Pokedex_number: 437,
    Stats      : [161, 213, 167],
    Evolutions : null,
    Basic_evolution : "bronzor"
};

var chatot = {
    Pokedex_number: 441,
    Stats      : [183, 91, 183],
    Evolutions : null,
    Basic_evolution : "chatot"
};

var spiritomb = {
    Pokedex_number: 442,
    Stats      : [169, 199, 137],
    Evolutions : null,
    Basic_evolution : "spiritomb"
};

var gible = {
    Pokedex_number: 443,
    Stats      : [124, 84, 151],
    Evolutions : ["gabite", "garchomp"],
    Basic_evolution : "gible"
};
var gabite = {
    Pokedex_number: 444,
    Stats      : [172, 125, 169],
    Evolutions : ["garchomp"],
    Basic_evolution : "gible"
};
var garchomp = {
    Pokedex_number: 445,
    Stats      : [261, 193, 239],
    Evolutions : null,
    Basic_evolution : "gible"
};

var riolu = {
    Pokedex_number: 447,
    Stats      : [127, 78, 120],
    Evolutions : ["lucario"],
    Basic_evolution : "riolu"
};
var lucario = {
    Pokedex_number: 448,
    Stats      : [236, 144, 172],
    Evolutions : null,
    Basic_evolution : "riolu"
};

var hippopotas = {
    Pokedex_number: 449,
    Stats      : [124, 118, 169],
    Evolutions : ["hippowdon"],
    Basic_evolution : "hippopotas"
};
var hippowdon = {
    Pokedex_number: 450,
    Stats      : [201, 191, 239],
    Evolutions : null,
    Basic_evolution : "hippopotas"
};

var skorupi = {
    Pokedex_number: 451,
    Stats      : [93, 151, 120],
    Evolutions : ["drapion"],
    Basic_evolution : "skorupi"
};
var drapion = {
    Pokedex_number: 452,
    Stats      : [180, 202, 172],
    Evolutions : null,
    Basic_evolution : "skorupi"
};

var croagunk = {
    Pokedex_number: 453,
    Stats      : [116, 76, 134],
    Evolutions : ["toxicroak"],
    Basic_evolution : "croagunk"
};
var toxicroak = {
    Pokedex_number: 454,
    Stats      : [211, 133, 195],
    Evolutions : null,
    Basic_evolution : "croagunk"
};

var carnivine = {
    Pokedex_number: 455,
    Stats      : [187, 136, 179],
    Evolutions : null,
    Basic_evolution : "carnivine"
};

var finneon = {
    Pokedex_number: 456,
    Stats      : [96, 116, 135],
    Evolutions : ["lumineon"],
    Basic_evolution : "finneon"
};
var lumineon = {
    Pokedex_number: 457,
    Stats      : [142, 170, 170],
    Evolutions : null,
    Basic_evolution : "finneon"
};

var snover = {
    Pokedex_number: 459,
    Stats      : [115, 105, 155],
    Evolutions : ["abomasnow"],
    Basic_evolution : "snover"
};
var abomasnow = {
    Pokedex_number: 460,
    Stats      : [178, 158, 207],
    Evolutions : null,
    Basic_evolution : "snover"
};

var rotom = {
    Pokedex_number: 479,
    Stats      : [185, 159, 137],
    Evolutions : null,
    Basic_evolution : "rotom"
};

var uxie = {
    Pokedex_number: 480,
    Stats      : [156, 270, 181],
    Evolutions : null,
    Basic_evolution : "uxie"
};

var mesprit = {
    Pokedex_number: 481,
    Stats      : [212, 212, 190],
    Evolutions : null,
    Basic_evolution : "mesprit"
};

var azelf = {
    Pokedex_number: 482,
    Stats      : [270, 151, 181],
    Evolutions : null,
    Basic_evolution : "azelf"
};

var dialga = {
    Pokedex_number: 483,
    Stats      : [275, 211, 205],
    Evolutions : null,
    Basic_evolution : "dialga"
};

var palkia = {
    Pokedex_number: 484,
    Stats      : [280, 215, 189],
    Evolutions : null,
    Basic_evolution : "palkia"
};

var heatran = {
    Pokedex_number: 485,
    Stats      : [251, 213, 209],
    Evolutions : null,
    Basic_evolution : "heatran"
};

var regigigas = {
    Pokedex_number: 486,
    Stats      : [287, 210, 220],
    Evolutions : null,
    Basic_evolution : "regigigas"
};

var giratinaa = {
    Pokedex_number: 487,
    Stats      : [187, 225, 284],
    Evolutions : null,
    Basic_evolution : "giratinaa"
};

var giratinao = {
    Pokedex_number: 487,
    Stats      : [225, 187, 284],
    Evolutions : null,
    Basic_evolution : "giratinao"
};

var cresselia = {
    Pokedex_number: 488,
    Stats      : [152, 258, 260],
    Evolutions : null,
    Basic_evolution : "cresselia"
};

var darkrai = {
    Pokedex_number: 491,
    Stats      : [285, 198, 172],
    Evolutions : null,
    Basic_evolution : "darkrai"
};

var arceus = {
    Pokedex_number: 493,
    Stats      : [238, 238, 236],
    Evolutions : null,
    Basic_evolution : "arceus"
};

var meltan = {
    Pokedex_number: 808,
    Stats      : [118, 99, 130],
    Evolutions : ["melmetal"],
    Basic_evolution : "meltan"
};
var melmetal = {
    Pokedex_number: 809,
    Stats      : [226, 190, 264],
    Evolutions : null,
    Basic_evolution : "snover"
};
