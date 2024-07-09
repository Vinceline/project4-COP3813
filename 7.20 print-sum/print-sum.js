function printSum(x, y) {
  //if both are numbers, print sum
   if (!isNaN(x) && !isNaN(y)) {
      console.log(`Sum is ${x + y}.`);
   } else if (isNaN(x) && isNaN(y)) {
      //if neither are numbers
      console.log(`'${x}' and '${y}' are not numbers.`);
   } else if (isNaN(x)) {
      //if x isn't a number
      console.log(`'${x}' is not a number.`);
   } else {
      //if y isn't a number
      console.log(`'${y}' is not a number.`);
   }
}

//test function
console.log("Testing printSum()...");

printSum(3, 6);            // 9
printSum(3.5, 6.1);        // 9.6
printSum("hello", 6);      // 'hello' is not a number
printSum(10, "hi");        // 'hi' is not a number
printSum("hello", "hi");   // 'hello' and 'hi' are not numbers
