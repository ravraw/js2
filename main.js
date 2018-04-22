const array1 = [1982, 1985, 1986, 1990, 1970, 2005, 2001, 2000];
const array2 = [];

function calculateAge(yearOfBirth) {
  return new Date().getFullYear() - yearOfBirth;
}

//Push age to array2
for (let i of array1) {
  array2.push(calculateAge(i));
}

// Logs age to console
for (let i of array2) {
  if (i >= 18) {
    console.log(i, "is of full age");
  } else {
    console.log(i, "is undr age");
  }
}

let arrayA = [];

function printFullAge(year) {
  let age = calculateAge(year);
  if (age >= 18) {
    arrayA.push(true);
  } else {
    arrayA.push(false);
  }
  return arrayA;
}

for (let i of array1) {
  printFullAge(i);
}
