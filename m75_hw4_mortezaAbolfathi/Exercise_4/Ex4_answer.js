//m75_hw4_mortezaAbolfathi
//4.
let text = `Lorem Ipsum is simply dummy text of the printing and 
typesetting industry. Lorem Ipsum has been the industry's standard dummy 
text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
make a type specimen book. It has survived not only five centuries, but also the
 leap into electronic typesetting, remaining essentially unchanged. It was popularised in 
 the 1960s with the release of Letraset sheets containing 2 Lorem Ipsum passages, and more recently 
 with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`;

function resarchText(textuser) {
  let arr = text.split(" ");
  let arrIndex = [];
  arr.map((itemVal, itemIndex) => {
    if (itemVal == textuser) {
      arrIndex.push(itemIndex);
    }
  });
  return arrIndex;
}
console.log(resarchText("Lorem")); //[ 0, 12, 74, 91 ]
