const maxOfTwoNum = (nums) => {
    const reducer = (prevValue, currValue) => prevValue > currValue ? prevValue : currValue;
    return nums.reduce(reducer);
}

const maxOfThreeNum = (nums) => {
    const reducer = (prevValue, currValue) => prevValue > currValue ? prevValue : currValue; // compare the values sequentially until you find the largest one. 
    return nums.reduce(reducer);
}

const checkVowel = (letter) => {
    let vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(letter);
}

console.log(maxOfThreeNum([1,2,3]));
console.log(checkVowel("a"));