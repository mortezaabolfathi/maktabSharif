//m75_hw5_mortezaAbolfathi

// call convert number
function callconvert(usernumber, innumber, toform) {
  if (innumber == 10 && toform == 2) {
    return decToBinary(usernumber);
  } else if (innumber == 2 && toform == 10) {
    return binaryToDecimal(usernumber);
  }
}
// console.log(callconvert(18, 10, 2));

// Function to convert binary to decimal
function binaryToDecimal(temp) {
  let desimalValu = 0;
  let base = 1;
  while (temp) {
    let last_digit = temp % 10; //1 1 0 1
    temp = Math.floor(temp / 10); // 101 10 1 0
    desimalValu += last_digit * base;
    base = base * 2;
  }
  return desimalValu;
}
// console.log(binaryToDecimal(1011));

// function to convert decimal to binary
function decToBinary(n) {
  let binaryNum = new Array(5); // object 5

  // counter for binary array
  let i = 0;
  while (n > 0) {
    // storing remainder in binary array
    binaryNum[i] = n % 2;
    n = Math.floor(n / 2); //9 4 2 1
    i++;
  }
  // console.log(binaryNum); //01001
  let k = 0;
  let binNew = [];
  // revers array baineri  // method is array.reverse();
  for (let i = binaryNum.length - 1; i >= 0; i--) {
    binNew[k] = binaryNum[i];
    k++;
  }
  binNew = binNew.toString();
  // binNew = parseInt("binNew", 2);
  return binNew;
}

// let n = 18;
// console.log(decToBinary(n));
