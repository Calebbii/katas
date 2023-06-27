// BDD 
// Given an input string containing alphabets and numeric digits
// When the function countDuplicates is called with the input string
// Then it should return the count alphanumeric characters that occur more than once in the input string



// Psedocode 

// function countDuplicates(input):
//   lowercaseInput = convert input to lowercase
//   characterCounts = {}

//   for each character in lowercaseInput:
//     if character is alphanumeric:
//       if character exists as a key in characterCounts:
//         increment its count by 1
//       else:
//         initialize its count to 1

//   duplicateCount = 0
//   for each key in characterCounts:
//     if count of key > 1:
//       increment duplicateCount by 1

//   return duplicateCount



// Solution

function countDuplicates(data) {
    const lowercaseInput = data.toLowerCase();
    const characterCounts = {};
  
    for (let i = 0; i < lowercaseInput.length; i++) {
      const char = lowercaseInput[i];
      characterCounts[char] = (characterCounts[char] || 0) + 1;
    }
  
    let duplicateCount = 0;
    for (const char in characterCounts) {
      if (characterCounts[char] > 1) {
        duplicateCount++;
      }
    }
  
    return duplicateCount;
  }
  
console.log(countDuplicates("abcde")); // 0
console.log(countDuplicates("aabbcde")); // 2
console.log(countDuplicates("aabBcde")); // 2
console.log(countDuplicates("indivisibility")); // 1
console.log(countDuplicates("Indivisibilities")); // 2
console.log(countDuplicates("aA11")); // 2
console.log(countDuplicates("ABBA")); // 2
