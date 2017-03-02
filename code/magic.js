// This program will magically take any type of multi-dimensional
// integer array and convert it into a one-dimensional array of the same type
// Created by Mike Reina


// initiate global variables
this.intArray = [];
this.newIntArray = [];
this.consoleBody = document.getElementsByClassName("consoleContent");

function undressArray() {
  try {
    // Read array from Input box
    this.currentArray = JSON.parse(document.getElementById("arrayInputBox").value);
    // If it's not an array, return
    if (!Array.isArray(currentArray)) {
      return;
    }
    //recursive function: takes an array and undresses...it
    function undressRecursively(currentArray) {

      for(var i = 0; i < currentArray.length; i++) {
        // if an element is an array, then call the function again and go a level deeper
        if(Array.isArray(currentArray[i])) {
          undressRecursively(currentArray[i]);
        }
        else { // else, push the current element into our newIntArray
          this.newIntArray.push(currentArray[i]);
          // for additional tracking and troubleshooting, we'll log the array elements
          // being pushed
          console.log(currentArray[i]);
        }
      }
    }
      // initial call (triggered by button)
      undressRecursively(currentArray);

    // print the the newIntArray to "console" div
    this.consoleBody[0].innerHTML = this.consoleBody[0].innerHTML +
    "> You just transmogrified " + document.getElementById("arrayInputBox").value + " into:<br />[";
    for(var j = 0; j < newIntArray.length; j++) {
      this.consoleBody[0].innerHTML = this.consoleBody[0].innerHTML + newIntArray[j];
      if (j < (newIntArray.length - 1)) {
        this.consoleBody[0].innerHTML = this.consoleBody[0].innerHTML + ", ";
      }
    }
    this.consoleBody[0].innerHTML = this.consoleBody[0].innerHTML + "]<br />All done. Cowabunga!<br />";
    document.getElementById("arrayInputBox").value = "";
    newIntArray = [];
  }
  catch(err) { // If anything goes wrong, it's most likely that the format is wrong
    this.consoleBody[0].innerHTML = this.consoleBody[0].innerHTML + "> Whoops! Incorrect format. Please comply!<br />" ;
  }
}
