//m75_hw4_mortezaAbolfatrhi
//5_
const concate = [
  { name: "morteza", family: "abolfathi" },
  {
    name: "yaser",
    family: "familyYaseri",
  },
  { name: "siavash", family: "siavashy" },
];
function serachCncate(startLeters, endLeters, concateEnter) {
  // console.log(startLeters, endLeters); // m a
  concateEnter.map((valueConcate) => {
    let arrSplitName = valueConcate.name.split(""); //[]*3 ex:["m","o","r",...]
    let startName = arrSplitName[0]; // m
    let endName = arrSplitName[arrSplitName.length - 1]; // a
    if (startName == startLeters && endName == endLeters) {
      console.log(valueConcate);
    }
  });
}
// console.log(serachCncate("m", "a", concate));

//2_the second method
function serachCncateNew(start, end, concateEnter) {
  let userSerach = concateEnter.filter(
    (item) => item.name.startsWith(start) && item.name.endsWith(end)
  );
  return userSerach;
}
// console.log(serachCncateNew("m", "a", concate));
// let searchName = (start, end, concateEnter) => (concateEnter.filter( (item) => item.name.startsWith(start) && item.name.endsWith(end))
// console.log(searchName())