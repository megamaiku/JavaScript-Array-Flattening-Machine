// This program will magically take any type of milti-dimensional
// integer array and convert it into a one-dimensional array of the same type

// Second attempt: Flatten a two-dimensional array:
// Not sure if the recursion is working right in javascript...arrgg

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
  // tried a while loop, but the logic just didn't work well...scrap!
  for(var i = 0; i < currentArray.length; i++) {
  //while (currentArrayLength < (currentArray.length + 1)) {
    if (currentArray[2] === true){
      currentArray.pop();
      i = currentArray.pop();
      currentArray = currentArray[0];
    }
    if(!Array.isArray(currentArray[i])) {
      this.newIntArray.push(currentArray[i]);
      console.log(currentArray[i]);
      //currentArrayLength ++;
      //i++;
    }
    else {
      //this.indexArray.push(i + 1);
      // Since I'm not sure if the recursion is "remembering" what index
      // I'm at, why not record it in a separate array?
      this.intArrayHistory.push([currentArray, (i + 1), true]);
      return undressArray(currentArray[i]);
    }
  }
  return undressArray(intArrayHistory.pop())
}

undressArray(this.intArray);
