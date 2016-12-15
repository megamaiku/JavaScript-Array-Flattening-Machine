# JavaScript Array Flattening Tool - By Mike Reina

# Usage:
[-] Use square bracket notation to input an array of integers. The array may contain other arrays (i.e., it can be a multi-dimensional array). The output will be a one-dimensional array containing all the elements in the original array, but without any array type objects (i.e., a flattened array).

# Story:
I knew I had to use recursion, and I knew this would be a learning experience--since I do not use recursion much (sorry electrical engineers). So I started creating a simple *for* loop inside a function. What I wasn't too confident about was how reliable recursion could be in JavaScript (spoiler alert: It is reliable!), so I went on a tangent and decided that I would recreate the conditions and behaviour of a recursive function. I actually did it, but the code was messy. Had a chat with a programmer friend (thanks Jorden!), who assured me that I could trust JavaScript's ability to properly stack recursive calls properly. So with that information in mind, I went back to my original code, and patiently stepped through the code to determine whether my friend's claims were right--and they were.

Once I figured out how to do it hard-coded, I wanted to add actual funcionality to the code. I went in and added a front-end where a user could input an array (in square notation) and have the flattened array display in the view. I then added some character to the UI by making it look like a terminal window.

Lastly, I decided to enable the Github Pages option in my repo, so people can see the application and use it live. Take a look: https://megamaiku.github.io/JavaScript-Array-Flattening-Machine/
