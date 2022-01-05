console.log("Insults loaded");

//Declare variables
const firstAdjectives = [
    'artless',
    'bawdy',
    'beslubbering',
    'bootless',
    'churlish',
    'cockered',
    'clouted',
    'craven',
    'currish',
    'dankish',
    'dissembling',
    'droning',
    'errant',
    'fawning',
    'fobbing',
    'froward',
    'frothy',
    'gleeking',
    'goatish',
    'gorbellied',
    'impertinent',
    'infectious',
    'jarring',
    'loggerheaded',
    'lumpish',
    'mammering',
    'mangled',
    'mewling',
    'paunchy',
    'pribbling',
    'puking',
    'puny',
    'qualling',
    'rank',
    'reeky',
    'roguish',
    'ruttish',
    'saucy',
    'spleeny',
    'spongy',
    'surly',
    'tottering',
    'unmuzzled',
    'vain',
    'venomed',
    'villainous',
    'warped',
    'wayward',
    'weedy',
    'yeasty'
  ];

const secondAdjectives = [
    'base-court',
    'bat-fowling',
    'beef-witted',
    'beetle-headed',
    'boil-brained',
    'clapper-clawed',
    'clay-brained',
    'common-kissing',
    'crook-pated',
    'dismal-dreaming',
    'dizzy-eyed',
    'doghearted',
    'dread-bolted',
    'earth-vexing',
    'elf-skinned',
    'fat-kidneyed',
    'fen-sucked',
    'flap-mouthed',
    'fly-bitten',
    'folly-fallen',
    'fool-born',
    'full-gorged',
    'guts-griping',
    'half-faced',
    'hasty-witted',
    'hedge-born',
    'hell-hated',
    'idle-headed',
    'ill-breeding',
    'ill-nurtured',
    'knotty-pated',
    'milk-livered',
    'motley-minded',
    'onion-eyed',
    'plume-plucked',
    'pottle-deep',
    'pox-marked',
    'reeling-ripe',
    'rough-hewn',
    'rude-growing',
    'rump-fed',
    'shard-borne',
    'sheep-biting',
    'spur-galled',
    'swag-bellied',
    'tardy-gaited',
    'tickle-brained',
    'toad-spotted',
    'unchin-snouted',
    'weather-bitten'
  ];

const nouns = [
    'apple-john',
    'baggage',
    'barnacle',
    'bladder',
    'boar-pig',
    'bugbear',
    'bum-bailey',
    'canker-blossom',
    'clack-dish',
    'clotpole',
    'coxcomb',
    'codpiece',
    'death-token',
    'dewberry',
    'flap-dragon',
    'flax-wench',
    'flirt-gill',
    'foot-licker',
    'fustilarian',
    'giglet',
    'gudgeon',
    'haggard',
    'harpy',
    'hedge-pig',
    'horn-beast',
    'hugger-mugger',
    'joithead',
    'lewdster',
    'lout',
    'maggot-pie',
    'malt-worm',
    'mammet',
    'measle',
    'minnow',
    'miscreant',
    'moldwarp',
    'mumble-news',
    'nut-hook',
    'pigeon-egg',
    'pignut',
    'puttock',
    'pumpion',
    'ratsbane',
    'scut',
    'skainsmate',
    'strumpet',
    'varlot',
    'vassal',
    'whey-face',
    'wagtail'
  ];

//Declare functions

//This function returns a random element from a given array
const getElementFromArray = function (array) { 
  const i = Math.floor(Math.random() * array.length);
  return array[i];
  //return array[Math.floor(Math.random() * array.length)];
}
//PSEUDOCODE

  //Goal: Print out a randomly generated insult

  //1. Pick a random element from the first array
  //  Use Math.Random on array[index]
  //    a. generate and store a random number betwixt 0 ... length -1
  //    b. use that random number as an index into the array
  //    c. store whatever is found at that index
  //2. Pick a random element from the second array (second adjectives)
  //3. Pick a random element from the third array (nouns)
  //4. Concatenate the three elements into a string, starting with 'Thou ', and ending with '!'


const generateInsult = function () {
  const firstAdjectivesRNG = getElementFromArray(firstAdjectives);
  const secondAdjectivesRNG = getElementFromArray(secondAdjectives);
  const nounsRNG = getElementFromArray(nouns);

  return `Thou ${firstAdjectivesRNG} ${secondAdjectivesRNG} ${nounsRNG}!`;
  //console.log(`Thou ${getElementFromArray(firstAdjectives)} ${getElementFromArray(secondAdjectives)} ${getElementFromArray(nouns)}!`);
}
//generateInsult();

//This is just me trying to write this code in as few lines as possible
console.log(`Thou ${firstAdjectives[Math.floor(Math.random() * firstAdjectives.length)]} ${secondAdjectives[Math.floor(Math.random() * secondAdjectives.length)]} ${nouns[Math.floor(Math.random() * nouns.length)]}!`);







