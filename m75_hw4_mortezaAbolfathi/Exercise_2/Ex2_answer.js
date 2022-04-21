// m75_hw4_morteza_abolfathi
// Ex. 2
// Do you know about SQL?!
// all of function and methods and command in SQL are in Capital letter.
// Now we have a broken keyboard that we can't type capital letter with that, because shift button doesn't work.
// Please help us to type SQL Command.
// Create Function that get SQL command in lower Case and give us that in upper Case

let text = "qur sql tutorial will teach you how to use sql in:";
console.log(`text is not UpperCase sql :${text}`);

//1_The first solution method. answer with for

// for (i = 0; i <= arr.length; i++) {
//   if (arr[i] == "sql") {
//     arr[i] = arr[i].toUpperCase();
//   }
// }
// text = arr.join(" ");
// console.log(`convert to upeperCase sql : ${text}`);

//2_The second solution method. // answer method  with map

function convertToUper(text) {
  let arr = text.split(" "); //[]
  const arrUperSql = arr.map((item) => {
    if (item == "sql") {
      return item.toUpperCase();
    } else {
      return item;
    }
  });
  return arrUperSql.join(" ");
}

// console.log(convertToUper(text));

//3_ the Third solution method
function convertToUper(text) {
  let arr = text.split(" "); //[]
  let arrUper = arr.map((item) => item.toUpperCase());
  arrUper = arrUper.join(" "); // remove ,
  return arrUper;
}

console.log(
  `text is UpperCase word    : ${JSON.stringify(convertToUper(text))}`
);
