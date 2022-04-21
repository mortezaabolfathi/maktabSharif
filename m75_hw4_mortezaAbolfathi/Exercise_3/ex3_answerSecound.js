function convertTobasic(number, numb1, numb2) {
  let convetr = parseInt(number, numb1).toString(numb2);
  return convetr;
}
console.log(convertTobasic(10010, 2, 10));
