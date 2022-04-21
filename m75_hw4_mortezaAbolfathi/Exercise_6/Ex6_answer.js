//m75_hw4_mortezaAbolfathi
//6_
let userText = "Welcome to Introduction to JavaScript.";
// console.log(userText.length); //38
function cutSlice(text, number) {
  let textCut = [];
  text = text.replace(/ /g, ""); //space is remove
  for (let i = 0; i < text.length; i += number) {
    let cut = text.slice(i, number + i);
    textCut.push(cut); //1["we"] 2["lc"]
  }
  return textCut;
}
console.log(cutSlice(userText, 2));

//mishe ba mapHam nevesht
