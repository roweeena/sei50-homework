const storyTime = {

    // the actual story
    story: 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.' ,

    // overused words array
    unwantedWords1: ['really', 'very', 'basically'],

    // unnecessary words array
    unwantedWords2: ['extremely', 'literally', 'actually' ],

    //empty updatedArray
    finalArray: [],

    fixTheArray: function () {

        // split the story in to an array, and remove 
        let fix1 = this.story.split(' ').filter( word => ! this.unwantedWords1.includes(word) )
        let fix2 = fix1.filter( word => ! this.unwantedWords2.includes(word) )
        this.finalArray = fix2;

        let string = this.finalArray.join(' ');

        // count words and sentences and unwanted words (if they're still in there
        let numOfSentences = 0;
        string.split(' ').forEach(word => {
            if (word[word.length-1] === '.' || word[word.length-1] === '!') {
            numOfSentences+=1;
            }
        });

        console.log(numOfSentences)

        let numOfWords = 0;

        string.split(' ').forEach(word => {
            if (word === word)
            numOfWords+=1;
            });

        console.log(numOfWords)

        arrayOfUnwantedWords1 = string.split(' ').filter( word => this.unwantedWords1.includes(word) )
        array1length = arrayOfUnwantedWords1.length;

        arrayOfUnwantedWords2 = string.split(' ').filter( word => this.unwantedWords2.includes(word) )
        array2length = arrayOfUnwantedWords2.length;

        console.log(`The new story is: ${string}. 
        
There are ${numOfWords} words within ${numOfSentences} sentences in this story. Within these words, there are ${array1length+array2length} unwanted words.`)

    }, // end of fixTheArray

    countOriginalArray: function () {

        // count words and sentences and unwanted words (if they're still in there
        let numOfSentences = 0;
        
        this.story.split(' ').forEach(word => {
            if (word[word.length-1] === '.' || word[word.length-1] === '!') {
            numOfSentences+=1;
            }
        });

        let numOfWords = 0;

        this.story.split(' ').forEach(word => {
            numOfWords+=1;
            });

        arrayOfUnwantedWords1 = this.story.split(' ').filter( word => this.unwantedWords1.includes(word) )
        array1length = arrayOfUnwantedWords1.length

        arrayOfUnwantedWords2 = this.story.split(' ').filter( word => this.unwantedWords2.includes(word) )
        array2length = arrayOfUnwantedWords2.length

        console.log(`There are ${numOfWords} words within ${numOfSentences} sentences in this story. Within these words, there are ${array1length+array2length} unwanted words.`)



    }, // end of countArray

}; // end of storyTime object

console.log(storyTime.story);
// console.log(storyTime.story.split(' '))