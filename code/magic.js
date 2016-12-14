// This program will magically take any type of milti-dimensional
// integer array and convert it into a one-dimensional array of the same type

// Third attempt: Flatten a two-dimensional array:
// Okay, back to the basics. After reading more about recursion,
// I am now more confident that javascript is able to remember
// the index location of the last array item, before going into a
// new array (i.e., it's smart enough to know how deep into the
// rabit hole it's in.)

//WIP

// this.intArray = [1,2,[[3, 4],[5, 6]], 7, [8,[9,[10]], 11, [12, 13]], 14];
this.intArray = [];
this.newIntArray = [];
this.consoleBody = document.getElementsByClassName("console");
console.log("hello");

function undressArray() {
  this.currentArray = JSON.parse(document.getElementById("arrayInputBox").value);
  //currentArray = intArray;
  function undressRecursively(currentArray) {
    for(var i = 0; i < currentArray.length; i++) {
      // let's change up the logic here. Test for true.
      if(Array.isArray(currentArray[i])) {
        undressRecursively(currentArray[i]);
      }
      else {
        this.newIntArray.push(currentArray[i]);
        console.log(currentArray[i]);
      }
    }
  }
  undressRecursively(currentArray);
  //newIntArray.forEach(printNewIntArray);

  // print the array to "console" div
  this.consoleBody[0].innerHTML = "[";
  for(var j = 0; j < newIntArray.length; j++) {
    this.consoleBody[0].innerHTML = this.consoleBody[0].innerHTML + newIntArray[j];
    if (j < (newIntArray.length - 1)) {
      this.consoleBody[0].innerHTML = this.consoleBody[0].innerHTML + ", ";
    }
  }
  this.consoleBody[0].innerHTML = this.consoleBody[0].innerHTML + "]";
}
