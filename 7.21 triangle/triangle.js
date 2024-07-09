function trianglePerimeter(x1, y1, x2, y2, x3, y3) {
   // Calculate the lengths of the sides using the distance formula
   let side1 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
   let side2 = Math.sqrt(Math.pow(x3 - x2, 2) + Math.pow(y3 - y2, 2));
   let side3 = Math.sqrt(Math.pow(x1 - x3, 2) + Math.pow(y1 - y3, 2));

   // Calculate the perimeter by summing up the lengths of the sides
   let perimeter = side1 + side2 + side3;

   return perimeter;
}

//function to find area of triangle
function triangleArea(x1, y1, x2, y2, x3, y3) {
   let one = x1 * (y2 - y3)
   let two = x2 * (y3 - y1)
   let three = x3 * (y1 - y2)
    let solute = one+two+three
    return Math.abs(solute)/2

}

//testing the functions
console.log("Testing trianglePerimeter()...");
let perimeter = trianglePerimeter(1, 0, 2, 4, 4, 3);
console.log("Perimeter = " + perimeter);

console.log("Testing triangleArea()...");
let area = triangleArea(1, 0, 2, 4, 4, 3);
console.log("Area = " + area);
