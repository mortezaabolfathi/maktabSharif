//mortezaAbolfathi
//m75_cw_mortezaAbolfathi

// 3-Follow this steps
// Create [{name:’’ , family:’’}, … }
// Create a function to return [{fullname:’’} , … }

const authors = [
  { firstName: "morteza", lastName: "Abolfathi" },
  { firstName: "mehdi", lastName: "abdi" },
  { firstName: "alireza", lastName: "mahmodi" },
];
let fullAuthorNames = authors.map(
  (authors) => `${authors.firstName}${authors.lastName}`
);
console.log(fullAuthorNames);
