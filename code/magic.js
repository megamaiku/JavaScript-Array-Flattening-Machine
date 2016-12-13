// This program will magically take any type of milti-dimensional
// integer array and convert it into a one-dimensional array of the same type

// Third attempt: Flatten a two-dimensional array:
// Okay, back to the basics. After reading more about recursion,
// I am now more confident that javascript is able to remember
// the index location of the last array item, before going into a
// new array (i.e., it's smart enough to know how deep into the
// rabit hole it's in.)

//WIP
this.intArray = [1,2,[[3, 4],[5, 6]], 7];
this.newIntArray = [];
// create an array that holds the sequence, and popit when coming out
this.indexArray = [];
this.intArrayHistory = [];
var currentArray = [];
var i = 0;
var currentArrayLength = 0;

console.log("hello");

function undressArray(currentArray) {
  for(var i = 0; i < currentArray.length; i++) {
    // let's change up the logic here. Test for true.
    if(Array.isArray(currentArray[i])) {
      undressArray(currentArray[i]);
    }
    else {
      this.newIntArray.push(currentArray[i]);
      console.log(currentArray[i]);
    }
  }
}

undressArray(intArray);
