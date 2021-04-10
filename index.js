const wakeDog = function (dogName, dogBreed){
  let str = `Wake ${dogName} the ${dogBreed}`;
  console.log(str);
  return str;
}

const leashDog = function (dogName, dogBreed){
  let str = `Leash ${dogName} the ${dogBreed}`;
  console.log(str);
  return str;
}

const walkToPark = function (dogName, dogBreed){
  let str = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(str);
  return str;
}

const throwFrisbee = function (dogName, dogBreed){
  let str = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(str);
  return str;
}

const walkHome = function (dogName, dogBreed){
  let str = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(str);
  return str;
}

const unleashDog = function (dogName, dogBreed){
  let str = `Unleash ${dogName} the ${dogBreed}`;
  console.log(str);
  return str;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog,]

function exerciseDog(dogName, dogBreed){
  let arrOfFunction = [];
  for (let i = 0; i < routine.length; i++){
    routine[i](dogName, dogBreed);
    arrOfFunction.push(routine[i](dogName, dogBreed));
  }
  return arrOfFunction;
}
