class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}  Sohan`
    }

    set password(value){
        this._password = value
    }
}

const sohan = new User("s@sohan.ai", "abc")
console.log(sohan.email);
console.log(sohan.password);
