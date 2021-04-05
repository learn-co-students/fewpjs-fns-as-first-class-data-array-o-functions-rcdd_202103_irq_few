function wakeDog(dogName, dogBreed) {
  console.log(`Wake ${dogName} the ${dogBreed}`);
  return `Wake ${dogName} the ${dogBreed}`;
}
function leashDog(dogName, dogBreed) {
  console.log(`Leash ${dogName} the ${dogBreed}`);
  return `Leash ${dogName} the ${dogBreed}`;
}
function walkToPark(dogName, dogBreed) {
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  return `Walk to the park with ${dogName} the ${dogBreed}`;
}
function throwFrisbee(dogName, dogBreed) {
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  return `Throw the frisbee for ${dogName} the ${dogBreed}`;
}
function walkHome(dogName, dogBreed) {
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  return `Walk home with ${dogName} the ${dogBreed}`;
}
function unleashDog(dogName, dogBreed) {
  console.log(`unleash ${dogName} the ${dogBreed}`);
  return `Unleash ${dogName} the ${dogBreed}`;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];
function exerciseDog(dogName, dogBreed){
   let finalRoutne= [];
  for (let i =0; i < routine.length; i++){
    finalRoutne.push(routine[i](dogName, dogBreed));
  }
  return finalRoutne;
  
}

exerciseDog("Esther","Dalmation");
wakeDog("Xerox","Border Collie");
leashDog("Boo Radley","Pibble");
walkToPark("Bunny","Labrador");
throwFrisbee("Mary J. Blige","Papillon");
walkHome("Santa Paws","Husky");
unleashDog("Lauren","Golden Retriever");


