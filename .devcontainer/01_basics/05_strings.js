const name="sohan"
const repoCount=50

console.log(name+repoCount+"valueis");
console.log(`hello bro my name is ${name} and my repo count is ${repoCount}`);

const GameName= new String('Sohan-Dso-uza')

console.log(GameName[0]);
console.log(GameName.__proto__);

console.log(GameName.length);

console.log(GameName.toUpperCase());

console.log(GameName.charAt(4));
console.log(GameName.indexOf('D'));

const newString = GameName.substring(0,4)
console.log(newString);

const anotherString = GameName.slice(-10,4)
console.log(anotherString);

const newStringone = "       sohan         "
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://sohan.com/Sohan%20Dsouza"

console.log(url.replace('%20','-'));


console.log(url.includes('sohan'));

console.log(GameName.split('-'));









