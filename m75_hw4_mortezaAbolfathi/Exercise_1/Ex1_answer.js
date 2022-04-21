//m74_hw4_morteza_abolfathi
// Ex. 1
// What is the output of this code ?! why ?!
// let zero = new Number(0); if (zero) { alert( "zero is truthy!?!" ); }

let zero = "";
// because 0 it was fasle and this in mthod convert to object, and object is ture
console.log(typeof zero); //object
if (zero) {
  console.log("zero is truthy!?!");
}
