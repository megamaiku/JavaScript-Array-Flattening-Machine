// This program will magically take any type of milti-dimensional
// integer array and convert it into a one-dimensional array of the same type

// First attempt: Flatten a two-dimensional array:
//WIP
this.intArray = [1,2,[[3, 4],[5, 6]], 7];
this.newIntArray = [];
//this.finalArray = [];
var currentArray = [];

console.log("hello");

function undressArray(currentArray) {
  // for(var i = 0; i < this.intArray.length; i++) {
    if(!Array.isArray(this.intArray[i])) {
      this.newIntArray.push(this.intArray[i]);
    }
    else {
      return undressArray(intArray[i]);
    }
  //}
}

undressArray(this.intArray);
