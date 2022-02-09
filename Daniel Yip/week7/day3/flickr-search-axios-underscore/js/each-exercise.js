console.log("hello from main js");
console.log('');

const sayHello = function(){
  console.log("oh hello");
}

const runNicley = function(functionToRun){
  console.log('Hi let me run niceley etc');
  functionToRun();
  console.log('It was so nice to run that function...')
}

// write your own implementation of the for each method:





const each = function(array, callback){
  for (let i = 0; i < array.length; i++){
    callback(array[i])
  }  
}


const arr = [ 'first', 'second', 'third']


each(arr, function(item){
  console.log('Inside callback', item);
})


