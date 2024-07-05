function calcWordFrequencies(words) {
   // Split the input string into an array of words
   let wordArray = words.split(" ");

   // Create a new Map to store word frequencies
   let wordMap = new Map();

   // Iterate over each word in the array
   for (let word of wordArray) {
      // Check if the word already exists in the Map
      if (wordMap.has(word)) {
         // If yes, increment its count by 1
         wordMap.set(word, wordMap.get(word) + 1);
      } else {
         // If no, set its count to 1
         wordMap.set(word, 1);
      }
   }

   // Output the word frequencies
   for (let [key, value] of wordMap) {
      console.log(`${key} ${value}`);
   }
}

console.log("Testing calcWordFrequencies()...");
calcWordFrequencies("hey hi Mark hi mark");

