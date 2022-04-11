//mortezaAbolfathi
//m75_cw_exercise

// 2-You know A B C D E F . . . Z
// Make list of alphabet
// Create an arrow function to give every other letter (A , C , E , G, …)(یکی در میان)

let alphabet = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
// let sliceAlphabet = alphabet.split(" ");
// console.log(sliceAlphabet.length);
function logAlphabet() {
  let sliceAlphabet = alphabet.split(" "); // [a, b, c, d, e, f,...]
  return sliceAlphabet.filter((item, itemIndex) => {
    // console.log(itemIndex); // 1 2 3 4
    return itemIndex % 2 == 0;
  });
}
console.log(logAlphabet());
