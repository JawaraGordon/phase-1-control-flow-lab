function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance <= 400) {
    return "This one is on me!"; 
  } else if (distance >= 2000 && distance < 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

scuberGreetingForFeet(199)

function ternaryCheckCity(place){
  // Write your code here!
  // let city = "NYC"
  // let place = "NYC"
  return place === "NYC" ? "Ok, sounds good." :  "No go."
 
}

function switchOnCharmFromTip(charm){
  // Write your code here!

switch (charm) {
    case "generous":
      return "Thank you so much."
        break;
    case "not as generous":
      return "Thank you."
        break;
    default : 
    return "Bye."
  }
}

/* function addFive(someNumber) {
  //Everything I want my function to do I put inside these curly braces
  //In this example, let's say I want my function, addFive, to add 5 to
  //any number I pass in (someNumber), but only IF the number is greater
  //than zero:
  let result
  if (someNumber > 0) {
    result = someNumber + 5;
  }
  //at the end, if I want my function to return something, I need to state it:
  return result
}

//once our function is declared, we can call addFive, passing in values 
//as arguments:

addFive(10);
//=> 15

addFive(20);
//=> 25

addFive(-5);
//=> undefined

addFive(addFive(5));
//=> 15!! In this case, the return value of addFive(5), 10, is passed in 
//as the argument to the outer addFive, returning 15 */