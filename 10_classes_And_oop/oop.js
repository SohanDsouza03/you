const user = {
    username: "Sohan",
    loginCount: 5,                  //<-- object literal
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



console.log(user.username)
console.log(user.getUserDetails());
console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("Sohan", 12, true)
const userTwo = new User("Dsouza", 11, false)  //<--- value overide
console.log(userOne.constructor);
console.log(userTwo);