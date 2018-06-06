// return all the indices (zero-based positions) in the string where each character is found.
//  So for each letter, we're no longer returning just one number to represent its number of occurrences, 
//  but rather (potentially) multiple numbers to represent all the places in the string that it shows up.


function countLetters(string) {
  var objLetterCount = {};
  var indicesArr = [];
  var noSpaces = string.toLowerCase().split(" ").join("");
  // console.log(noSpaces); //->lighthouse
  for (var i = 0; i < noSpaces.length; i++) {
    // console.log(objLetterCount);
    // console.log(string[i]); //-> "l"
    if (objLetterCount[noSpaces[i]]) {      //if letter at first index exists; increment by 1; else assign letter value to 1 
      objLetterCount[noSpaces[i]]["occurrences"] += 1;
      objLetterCount[noSpaces[i]]["indices"].push(i);
      
    }
    else {
      objLetterCount[noSpaces[i]] = {"occurrences": 1, "indices": [i]};
      // objLetterCount[noSpaces[i]]["occurrences"] = 1;
      // objLetterCount[noSpacec[i]]["indices"] = [i];
    }
  }
  console.log(objLetterCount);
  // console.log("indicesArr" + indicesArr);
}

countLetters("lighthouse");

/*{ l: {occurrences: 1,  indices:[0,5,6]}   << create empty array, then push indices into it; finally, reassign objectLetterCount.noSpaces = indicesArr
    i: 1, 
    g: 1, 
    h: 2, 
    t: 1, 
    o: 1, 
    u: 1, 
    s: 1, 
    e: 1 } */




