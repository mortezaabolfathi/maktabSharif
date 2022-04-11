//mortezaAbolfathi
//m75_cw_mortezaAbolfathi

// 1-Follow this steps
// Const sentence =”Cras mattis consectetur purus sit amet fermentum.”
// Create function to find a word in this sentence

let text = " Cras mattis consectetur purus sit amet fermentum";
let nameIntext = text.split(" ");
function findWord(nameUser) {
  return nameIntext.some((item) => item === nameUser);
}
console.log(findWord("mattis"));
