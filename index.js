const wakeDog = function (dogName, dogBreed){
  let string = `Wake ${dogName} the ${dogBreed}`;
  console.log(string);
  return string;
}

const leashDog = function (dogName, dogBreed){
  let string2 = `Leash ${dogName} the ${dogBreed}`;
  console.log(string2);
  return string2;
}

const walkToPark = function (dogName, dogBreed){
  let string3 = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(string3);
  return string3;
}

const throwFrisbee = function (dogName, dogBreed){
  let string4 = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(string4);
  return string4;
}

const walkHome = function (dogName, dogBreed){
  let string5 = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(string5);
  return string5;
}

const unleashDog = function (dogName, dogBreed){
  let string6 = `Unleash ${dogName} the ${dogBreed}`;
  console.log(string6);
  return string6;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog,]

function exerciseDog(dogName, dogBreed){
  let arrayFunction = [];
  for (let i = 0; i < routine.length; i++){
    routine[i](dogName, dogBreed);
    arrayFunction.push(routine[i](dogName, dogBreed));
  }
  return arrayFunction;
}
