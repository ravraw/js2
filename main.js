const year1 = [1977, 2010, 1988, 2011, 2001, 1999];
const year2 = [2010, 1989, 2011, 1976, 1982, 2000];

const age1 = [];
const age2 = [];

booleanArray1 = [];
booleanArray2 = [];

// function calculates age
function calculateAge(yearOfBirth) {
  let age = new Date().getFullYear() - yearOfBirth;
  return age;
}

//Function checs age and logs to console
function checkIf18(age) {
  if (age >= 18) {
    console.log(age, "is of age");
    return true;
  } else {
    console.log(age, "is under-age");
    return false;
  }
}

// Function takes input and output arrays as parameters and returns  boolean values array
function returnArrayOfBooleans(yearArray, booleanArray) {
  for (let i of yearArray) {
    let age = calculateAge(i);
    let if18 = checkIf18(age);
    booleanArray.push(if18);
  }
  return booleanArray;
}

returnArrayOfBooleans(year1, booleanArray1);
returnArrayOfBooleans(year2, booleanArray2);
