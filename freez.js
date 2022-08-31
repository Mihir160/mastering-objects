const bottle = {color: 'Yellow', price: 50, isCleaned: true, capacity:1}
const keys = Object.keys(bottle)
const values = Object.values(bottle)
// console.log(values)
const pair = Object.entries(bottle)
// console.log(pair)

// delete bottle.isCleaned;
// console.log(bottle)

// Object.seal(bottle);
// delete bottle.isCleaned;
// console.log(bottle);
Object.freeze(bottle);
delete bottle.isCleaned;
console.log(bottle)