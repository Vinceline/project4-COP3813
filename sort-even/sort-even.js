function sortEvens(numArray) {
   let evenray =[]
   for (let i=0;i<numArray.length;i++)
   {
      if (Math.abs(numArray[i])%2 ==0)
      {
         evenray.push(numArray[i])
      }
   }
   return evenray.sort((a, b) => a - b);

}

let nums = [4, 2, 9, 1, 8];
console.log(`numbers to sort: ${nums}`)
let evenNums = sortEvens(nums);
console.log("sorted even numbers:")
console.log(evenNums);
