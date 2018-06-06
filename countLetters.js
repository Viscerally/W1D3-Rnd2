// Write a function countLetters that can return to us all the unique characters that exist in a string that is passed
// into the function.
// Furthermore, the function should also report back how many instances of each letter were found in the string.


function countLetters (string) {
  var objLetterCount = {};
  var noSpaces = string.split(" ").join("");
  // console.log(noSpaces);
  for (var i = 0; i < noSpaces.length; i++){
    // console.log(string[i]);
    if (objLetterCount[noSpaces[i]]) {
      objLetterCount[noSpaces[i]] += 1;
      
    }
    else {
      objLetterCount[noSpaces[i]] = 1;
    }
  }
console.log(objLetterCount);
 
 
  // let letterCount =+ 0
  // for (let letters of string)  
  // objStr = string.split("").join()
  
  // object.letters[i] = letterCount;


  // return uniqueLetters    //this should be an object
}

countLetters("lighthouse in the house");

// {
//   l: 2,
//   o: 1,
// }
  