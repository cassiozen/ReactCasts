const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];

// There are a few non-destructive methods available for arrays.
// One example is slice. It returns a piece of a given Array
// without modifiyng the original one.

console.log(houses.slice(0, 4)); // ['Arryn', 'Frey', 'Greyjoy', 'Stark']

console.log(houses); // ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell']



// Besides slice, there are other and useful array methods 
// such as filter, map and reduce that also returns new arrays 
// instead of modifying the original one.

const direwolves = [
  { name: 'Ghost', alive: true },
  { name: 'Nymeria', alive: true },
  { name: 'Lady', alive: false },
  { name: 'Grey Wind', alive: false },
  { name: 'Shaggydog', alive: false },
  { name: 'Summer', alive: false }
]

const wolves = direwolves.filter(wolf => wolf.alive)

console.log(direwolves); //Full Array
console.log(wolves); // [{name:'Ghost', alive: true},{name:'Nymeria', alive:true}]



// Javascript ES6 introduces a new operator called the spread operator.
// The Spread operator provides an easy way to create a new array
// by copying values from another array.

const completeHouses = [...houses, 'Targaryen'];
console.log(houses) //        ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']
console.log(completeHouses) //['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell','Targaryen']

// There is a proposal for object spread syntax for the next version
// of the JS language, and you can use it right now with Babel.

const state = {
  name: 'Jon Snow',
  occupation: 'Lord Commander',
  skills: [] // knows nothing...
}

// Now, using the spread operator I will copy the original state objects keys
// and values, while at the same changing the occupation value.

const newState = { ...state, occupation: 'King in the North' };
console.log(newState);
// {name:'Jon Snow', occupation:'King in the North', skills:[]}
console.log(state);
// {name:'Jon Snow', occupation:'Lord Commander', skills:[]}


// The spread operator makes shallow copies, which means 
// it only goes one level deep while copying.
// If you want to update the array, you will need to make it
// in an immutable fashion as well:

newState.skills = [...state.skills, 'fighting'];
console.log(newState);
// {name:'Jon Snow', occupation:'King in the North', skills:[fighting]}
console.log(state);
// {name:'Jon Snow', occupation:'Lord Commander', skills:[]}
