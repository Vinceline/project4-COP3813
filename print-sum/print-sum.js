function printSum(x, y) {
   if (!isNaN(x) && !isNaN(y)) {
      console.log(`Sum is ${x + y}.`);
   } else if (isNaN(x) && isNaN(y)) {
      console.log(`'${x}' and '${y}' are not numbers.`);
   } else if (isNaN(x)) {
      console.log(`'${x}' is not a number.`);
   } else {
      console.log(`'${y}' is not a number.`);
   }
}


console.log("Testing printSum()...");

printSum(3, 6);            // 9
printSum(3.5, 6.1);        // 9.6
printSum("hello", 6);      // 'hello' is not a number
printSum(10, "hi");        // 'hi' is not a number
printSum("hello", "hi");   // 'hello' and 'hi' are not numbers
