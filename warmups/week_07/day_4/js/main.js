console.log("gooey", dat.GUI);
console.log("jQuery", jQuery);
console.log("HELLOOOOO");
//2. helper functions to get random values

const getRandomValue = function(num){
  return Math.floor(Math.random() * num)
}

const getRandomElementFromArray = function(array){
  const randomIndex = getRandomValue(array.length)
  return array[randomIndex]
}

let timerID = null;

$(document).ready( function(){
  //Set up the GUI pane

  const gui = new dat.GUI();

  //set up the controllers by creating an object that will store the variables
  //through this object, dat.gui will apply some magic to determine the controller type

  const controls = {
    fadeIn: 2000,
    fadeOut: 2000,
    fontSize: 30,
    //BONUS TIME
    wordTimerInterval: 100,
    addWord: "",
    color: '#FFFFFF',
    refresh: function(){
      $('.word').remove();
    }
  }

  //add the controllers to the GUI interface
  //using the method gui.add

  gui.add(controls, "fadeIn", 0, 5000);
  gui.add(controls, "fadeOut", 0, 5000);
  gui.add(controls, "fontSize", 0, 5000);
  gui.addColor(controls, "color"); // colour picker
  gui.add(controls, "addWord");


  //add the wordTimerInterval controller
  //To change the interval we need to clear the current interval
  //Use the .onFinishChange event handler
  gui.add(controls, "wordTimerInterval", 1, 1000).onFinishChange(function(newValue){
    //this code will run when the slider has stopped being dragged by the user (onFinishChange)
    console.log(newValue);

    //clear the current interval so we can avoid having multiple set timers
    clearInterval(timerID)
    //start a new interval with our newValue
    timerID = setInterval(textSoup, newValue)

  })
  gui.add(controls, "refresh");

  //1. get the contents of the div as a string and then split it
  const content = $('#words').html();

  const onlyWords = content.split(/[ ;:_.,?!'"()\-\n]+/)
  console.log(onlyWords)

  //3. main function
    const textSoup = function(){
      //a. get each from array and put into a new div
      let eachWord = getRandomElementFromArray(onlyWords)

      if (controls.addWord.length > 0 && Math.random() > 0.5){
        eachWord = controls.addWord
      }
      //b. create a new div
      const $wordDiv = $('<div class="word">')
      $wordDiv.text(eachWord)

      //c. set random position
      const xPos = getRandomValue(window.innerWidth)
      const yPos = getRandomValue(window.innerHeight)

      //d. set random position using css
      //Use the GUI colour and font values
      $wordDiv.css({
        top: yPos,
        left: xPos,
        fontSize: `${controls.fontSize}pt`,
        color: controls.color,
        transform: `rotate(${getRandomValue(360)}deg)`
      })

      $('body').append($wordDiv)


      //e. fade in and out, and remove so it doesn't clog the page
      //Use the GUI fadeIn/fadeOut values
      $wordDiv.fadeIn(controls.fadeIn).fadeOut(controls.fadeOut, function(){
        $(this).remove()
      })
    } //textSoup()
// we want to be able to clear this interval so add it to a variable called timerID
  timerID = setInterval(textSoup, 100)
}) //documentReady()
