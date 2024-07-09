//function to sort array of numbers
function sortEvens(numArray) {
   let evenray =[]
  //loop through array
   for (let i=0;i<numArray.length;i++)
   {
      //if a number is even, add to evenray
      if (Math.abs(numArray[i])%2 ==0)
      {
         evenray.push(numArray[i])
      }
   }
  //return sorted array of even numbers
   return evenray.sort((a, b) => a - b);

}

//test function
let nums = [4, 2, 9, 1, 8];
console.log(`numbers to sort: ${nums}`)
let evenNums = sortEvens(nums);
console.log("sorted even numbers:")
console.log(evenNums);
