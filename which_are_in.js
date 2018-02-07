// PSEUDO CODE

// Sort return array alphabetically
// Remove duplicates from return array

// take the first word of a1
// take the first letter of the word
// find that letter in the word of a2

// if found, search for the next letter in the a1 word in the next position of the word in a2
// if found keep searching
// else move to next a2 word and search first letter

// if all letters found in word in a2
// move a1 word to return array 


// CODE

// REFACTOR 3 using .some()
function inArray(array1,array2){
  var r = []
  sortFilter(array1).forEach(function(subWord) { 
    if ( array2.some(function(word) {
      return word.includes(subWord);
    }) ) {
      r.push(subWord); 
    }
  });
  return r;
}

// .slice() creates a copy before .sort() changes the original array.
function sortFilter(arr) {
  return arr.slice().sort().filter(function(item, index, arr) {
    return item != arr[index - 1];
  });
}


// DRIVER CODE

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]  
a1 = ["tarp", "mice", "bull"] // []
b1 = ["xyz", "live", "strong"] // ["live", "strong"]
c1 = ["live", "strong", "arp"] // ["arp", "live", "strong"]
d1 = ["live", "strong", "live", "strong", "arp"] // ["arp", "live", "strong"]

inArray(a1,a2);
inArray(b1,a2);
inArray(c1,a2);
inArray(d1,a2);


// ORIGINAL / PREVIOUS CODE VERSIONS => THOUGHT PROCESS 

// REFACTOR 2
// function inArray(array1,array2){
//   var r = []
//   sortFilter(array1).forEach(function(subWord) {
//     array2.forEach(function(word) { 
//       if (word.includes(subWord) && !r.includes(subWord)) {
//         r.push(subWord);
//       }
//     });
//   });
//   return r;
// }

// // Broke into a second function because .sort() changes array.  Still changing original array1...
// function sortFilter(arr) {
//   return arr.sort().filter(function(item, index, arr) {
//     return item != arr[index - 1];
//   });
// }


// // REFACTOR => Passing first tests
// function inArray(array1,array2){
//   var r = []
//   var one = array1.sort().filter(function(item, index, arr) {
//     return item != arr[index - 1];
//   }); // Note: .sort() changes the original array1
//   one.forEach(function(subWord) {
//     array2.forEach(function(word) { 
//       if (word.includes(subWord) && !r.includes(subWord)) {
//         r.push(subWord);
//       }
//     });
//   });
//   return r;
// }

// // FIRST PASS
// function inArray(array1,array2){
//   var r = []
//   var one = array1.sort().filter(function(item, index, arr) {
//     // console.log("item is " + item);
//     // console.log("index is " + index);
//     // console.log("arr is " + arr);
//     return item != arr[index - 1];
//   }); // Note: .sort() changes the original array1
//   console.log(one) // [ 'arp', 'live', 'strong' ]
//   console.log(array1) // [ 'arp', 'live', 'live', 'strong', 'strong' ]

//   one.forEach(function(subWord) {
//     console.log("Subword is " + subWord);
//     array2.forEach(function(word) { 
//       console.log("R is " + r)
//       console.log(!r.includes(subWord))
//       if (word.includes(subWord) && !r.includes(subWord)) {
//         r.push(subWord);
//       }

//     });
//   });
//   // for(let i=0; i < )
//   console.log(r);
//   return r;
// }


// // OTHER POTENTIAL ANSWERS => WRONG AS FILTER RETURNS DUPLICATES.
// function inArray(arr1, arr2) {
//   return arr1.filter(function(needle) {
//     return arr2.some(function(haystack) {
//       return haystack.indexOf(needle) > -1;
//     });
//   }).sort();
// }




