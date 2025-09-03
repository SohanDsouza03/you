const actors = ["tigershroff","hrithikroshan","mrjain"]
const actress =["jaqueline","samantha","sunny"]

// actors.push(actress)
// console.log(actress);

//  actors.concat(actress)
// console.log(actors);

// const allheros= actors.concat(actress)
// console.log(allheros);

//spreading

// const allNewHeros = [...actors,...actress]
// console.log(allNewHeros);

const anotherarray = [1,2,3,[4,5,6],7,[6,4,[2,1]]]

const realAnotherArray = anotherarray.flat(Infinity)
console.log(realAnotherArray);

console.log(Array.isArray("sohan"));
console.log(Array.from("sohan"));

console.log(Array.from({name:"sohan"})); // intersenting

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));


