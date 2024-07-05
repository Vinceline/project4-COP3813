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

console.log("Testing sortEvens()...");
let nums = [4, 2, 9, 1, 8];
let evenNums = sortEvens(nums);
console.log(evenNums);
