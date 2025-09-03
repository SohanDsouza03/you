// singleton
// object create     ex: Object.create   <-- using constructure
//objects literals


const mysymbol =Symbol("key1")


const JsUser ={
    name:"sohan",
    "full name":"sohan dsouza",
    [mysymbol]:"myKey1",        // [] <-- this basically says this is an symbol key
    age:21,
    location:"honnavar",
    email:"sohan@gmail.com",
    isLoggedIn:false,
    lastLoggedInDays:["monday","sunday"],

}
console.log(JsUser.email);         //    . <--- this dots consist of object
console.log(JsUser["email"]);      // <--- actuall way to use object

console.log(JsUser["full name"]); //  <-- example

console.log(JsUser[mysymbol]);


JsUser.email="sohan@gpt.com"
// Object.freeze(JsUser)               //<-- this makes freeze next email does'nt works

JsUser.email="sohan@google.com"
// console.log(JsUser)

JsUser.greetings= function(){
    console.log("hello JS User");    
}

JsUser.greetings2= function(){
    console.log(`hello JS User,${this.name} `);    
}
console.log(JsUser.greetings());
console.log(JsUser.greetings2());


// IMPRT 
// value access use --> .
// also use sqare brackets --> []











