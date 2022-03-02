// # Badger's Revenge
// The names of those who witness clapping Badger more than twice in the first four days of any one week will go into a draw. On Friday morning, a random name will be drawn from that list and the 'winner' will be forced to deliver the solution to Friday's warmup.
//
// Create a program that Badger can use for this task - ideally, you should create an object (revengeOfBadger) to do this, but if you can get it working using standalone functions, that's cool.
//
// Your program should:
//
// - Track how many times each student in the class has clapped this week (just make up the numbers);
// - Include a collection of candidates for the Friday draw (ie, a list of names of people who have clapped Badger more than twice that week);
// - Pick a random student to deliver the solution to Friday's warmup.
// - If no one has clapped enough that week, the program should indicate that Badger has to do his own damned warmup.
//console.log('badgerbadgerbadger');

const students = {
  "Joe": 1,
  "Jojo": 2,
  "Mojo jojo": 4,
  "Joanna": 5,
  "Jolene": 7
}

const badgersRevenge = function(obj){
  let shortlisted = [];

  for ( let keys in obj){
    // console.log(keys);
    if (obj[keys] > 2){
      shortlisted.push(keys)
    }
  }
  console.log('shortlisted', shortlisted);

  let winner = '';

  if (shortlisted.length > 0){
    const randomIndex = Math.floor(Math.random() * shortlisted.length);
    console.log(`randomIndex`, randomIndex);
    winner = shortlisted[randomIndex]
  } else {
    winner = "Badger"
  }
  console.log(`${winner} has to deliver the solution to Friday's warmup`)
}



console.log(badgersRevenge(students))
