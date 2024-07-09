//function to print a triangle of stars
function drawTriangle(triangleSize) {
let i = 0;
let sub = "*"
 //print a star and increment the number of stars
 //until you reach the limit (triangle size)
 while ( i < triangleSize){
    console.log(sub)
    sub=sub.concat("*")
    i++;
 }

  
  
}

console.log("Testing drawTriangle()...");

// TODO: Test drawTriangle() with different arguments
drawTriangle(4);


