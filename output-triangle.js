function drawTriangle(triangleSize) {
let i = 0;
let sub = "*"
 while ( i < triangleSize){
    console.log(sub)
    sub=sub.concat("*")
    i++;
 }

  
  
}

console.log("Testing drawTriangle()...");

// TODO: Test drawTriangle() with different arguments
drawTriangle(4);


// Do NOT remove the following line
export default drawTriangle;