let wakeDog = function wakeDog(dogName, dogBreed) {
    return `Wake ${dogName} the ${dogBreed}`;
  }
  let leashDog = function leashDog(dogName, dogBreed){
    console.log(`Leash ${dogName} the ${dogBreed}`);
    return `Leash ${dogName} the ${dogBreed}`;
  }
  let walkToPark = function walkToPark(dogName, dogBreed){
     console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
     return `Walk to the park with ${dogName} the ${dogBreed}`;
  }
  let throwFrisbee = function throwFrisbee(dogName, dogBreed){
     console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
     return `Throw the frisbee for ${dogName} the ${dogBreed}`;
  }
  let walkHome = function walkHome(dogName, dogBreed){
     console.log(`Walk home with ${dogName} the ${dogBreed}`);
     return `Walk home with ${dogName} the ${dogBreed}`;
  }
  let unleashDog = function unleashDog(dogName, dogBreed){
     console.log(`Unleash ${dogName} the ${dogBreed}`);
     return `Unleash ${dogName} the ${dogBreed}`;
  }
  const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog,]
function exerciseDog(dogName, dogBreed){  let arrayFunction = [];  for (let i = 0; i < routine.length; i++){    routine[i](dogName, dogBreed);    arrayFunction.push(routine[i](dogName, dogBreed));  }  return arrayFunction;}