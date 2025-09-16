let myName = "sohan     "
let mychannel = "Dsouza      "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.Sohan = function(){
    console.log(`Sohan is present in all objects`);
}

Array.prototype.heySohan = function(){
    console.log(`Sohan says hello`);
}

// heroPower.Sohan()
// myHeros.Sohan()
// myHeros.heySohan()
// heroPower.heySohan()

// // inheritance

const User = {
    name: "Sohan",
    email: "Dsouza@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "SohanCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Sohan".trueLength()
"iceTea".trueLength()