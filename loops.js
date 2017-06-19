function forLoop(array) {
  var myArray = array;
  for (let i = 0; i < 25; i++) {
    if(i == 1){
     array.push("I am 1 strange loop.");
    } else {
     array.push(`"I am ${i} strange loops."`);
    }
  }
  return myArray;
}

function whileLoop(number) {
  let countdown = number;
  while (countdown >= 0) {
    if (countdown > 0){
      console.log(countdown);
    } else {
      return "done"
    }
  countdown--
  }
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function doWhileLoop(array){
  var myArray = array;
  do {
    console.log(myArray);
  } while (myArray.length >0 && maybeTrue()) {
    myArray.pop();
  }
  return myArray
}
