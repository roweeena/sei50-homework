//What is bubble sort?
//Bubble Sort consists of a simple double loop. The inner for loop moves through the record array from left to right, comparing adjacent keys. If a record's key value is greater than the key of its right neighbor, then the two records are swapped.

function bubbleSort(array) {
    // Make some sort of loop that keeps happening if there were any swaps
    // that happened this turn

    let swapHappened = true;
    let endIndex = array.length - 1;

    while (swapHappened) {
      swapHappened = false // reset swapHappened to false each time so we can detect if a swap
      // happened in this specific iteration.

      for ( let i = 0; i < endIndex; i++){ // Make another loop (inside the first one) to go through one
        const currentElem = array[i]
        const nextElem = array[i + 1]

        if(nextElem < currentElem){
          // compare each pair of elements near each other
          // swap them if the bigger one was at a lower index.
          array[i] = nextElem;
          array[i + 1] = currentElem
          swapHappened = true   // Make sure to keep track of whether a swap happened! if no swaps are done in a pass, you can exit early
        }

      }// for
      endIndex--
      console.log(array)
    }

    return array;
}


// Test Script below, DO NOT TOUCH

mocha.setup('bdd');
const expect = chai.expect;

describe('Bubble Sort', ()=>{
  it('should sort the array', ()=>{
    const myArray = [12,6,3,7,13,8];
    const sorted = bubbleSort(myArray);
    expect(sorted).to.deep.equal([3,6,7,8,12,13]);
    const otherArray = [-3, -1, 5, 100];
    const otherSorted = bubbleSort(otherArray);
    expect(otherSorted).to.deep.equal([-3, -1, 5, 100]);
  })
});


mocha.run()
