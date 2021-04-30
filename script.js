//Exercises - functions

//- Write a function called 'describeSelf' which takes threeprameter 'name', 'age', 'favouriteFood'. Based on the inputreturn a string with the format like this:

//'My name is xx and I'm xx years old. My favourite food is xx.'

//- Call this functions 3 times, with the input from 3 differentpeople.

//Store the returned values in 3 different variables,and log them to the console.

function describeSelf(vem) {
  const myName = ["Oa Blom", "Martin Blom", "Jan Blom"];
  const myAge = [1991, 1988, 1960];
  const favouriteFood = ["hamburger", "pizza", "meat"];

  function calcAge(age) {
    return 2021 - myAge[age];
  }

  return `My name is ${myName[vem]}, I am ${calcAge(
    vem
  )} years old and my favourite food is ${favouriteFood[vem]}.`;
}

for (let i = 0; i <= 2; i++) {
  console.log(`${describeSelf(i)}`);
}
