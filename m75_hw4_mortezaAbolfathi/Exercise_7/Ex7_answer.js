//m75_hw4_mortezaAbolfatrhi
//7_

let alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "g",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

//1_ note function
// let decryCod = [];
// for (let i = 0; i < encryCod.length; i++) {
//   let char = encryCod[i];
//   alphabet.map((value, indexvalue) => {
//     if (char == value) {
//       let IndexNumb = indexvalue + numb;
//       if (IndexNumb >= 26) {
//         IndexNumbArund = IndexNumb + numb - 26;
//         decryCod.push(alphabet[IndexNumbArund]);
//       } else {
//         decryCod.push(alphabet[IndexNumb]);
//       }
//     }
//   });
// }
// console.log(decryCod);

// 2_ with function
function decoderCod(encryCod, numb) {
  let decryCod = [];
  for (let i = 0; i < encryCod.length; i++) {
    let char = encryCod[i];
    alphabet.map((value, indexvalue) => {
      if (char == value) {
        let IndexNumb = indexvalue + numb;
        if (IndexNumb >= 26) {
          IndexNumbArund = IndexNumb + numb - 29;
          decryCod.push(alphabet[IndexNumbArund]);
        } else {
          decryCod.push(alphabet[IndexNumb]);
        }
      }
    });
  }
  return decryCod;
}
// console.log(decoderCod("morteza", 3));

//3_with third method
function decoderCodThird(userEnter, step) {
  let decryCod = [];
  for (let i = 0; i < userEnter.length; i++) {
    let numberWord = userEnter.charCodeAt(i); // 109 111 114 116 101 122 97
    if (numberWord + step >= 122) {
      let numberWordArund = numberWord + step + 97 - 123; //121+5+97-123=98
      decryCod.push(String.fromCharCode(numberWordArund));
    } else {
      decryCod.push(String.fromCharCode(numberWord + step));
    }
  }
  return decryCod;
}
console.log(decoderCodThird("morteza", 3));
// let x = "a".charCodeAt(0);
// console.log(x);
