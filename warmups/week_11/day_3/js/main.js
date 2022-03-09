// Have your page load the contents of a text file into a single variable using AJAX (you will need to run a local server so you can open the file as a URL). This is a quick google search away! hint use a search term involving 'simple http server'
// Separate all the text in the loaded file into an array of words.
// Iterate over the array and add a key to your lookup table for each word, and an empty array as the key's value (if it's not already set as a key); get the word that follows this word and push it onto the array of words for this key (i.e. and words in this array are words which have been found to follow this word in your original text). Repeat.
// Pick a random starting word, and get the next word by randomly picking one of the words in its array of following words (if we've allowed duplicates in this array, words that were found to follow more often will have a higher probability of being picked). Repeat!


//console.log('hellooooo')

let markov = {}

let sentenceStarter = []

const file = './text.txt'

const makeMarkov = (text) =>{
  //split the huge string into an array of individual words
  const words = text.split(/[ ,;\-\n]+/)
  console.log('words', words);

  for (let i = 0; i < words.length - 1; i++){
    let word = words[i]

    if(!markov[word]){
      markov[word] = [] //markov key's value must be initialised or .push won't work
    }

    let nextWord = words[i+1]
    console.log('nextWord', nextWord)
    markov[word].push(nextWord)

    //keep track of suitable words starting with a capital letter
    if (word.match(/^[A-Z][a-z]/)){
      sentenceStarter.push(word)
    }
  }
  console.log(sentenceStarter)
}

//helper functionssssss
//1. get random value

const getRandom = (num) => {
  return Math.floor(Math.random() * num)
}

//2. get random element from an array => textSoup

const chooseText = (array) =>{
  return array[getRandom(array.length)]
}

const generate = (length) => {
  let upcomingText = chooseText(sentenceStarter)
  let output = upcomingText

  for (let i = 0; i < length; i++){
    let word = chooseText(markov[upcomingText])

    output += " " + word
    upcomingText = word
  }
  return output
}


$(document).ready(function(){
  axios.get(file)
  .then((res) =>{
    console.log(res.data)
    makeMarkov(res.data)

    let nextText = generate(60)
    let $el = $('<p>').text(nextText)
    console.log($el);
    $('#output').append($el)

  })
  .catch((err) =>{
    console.warn(err)
  })
})
