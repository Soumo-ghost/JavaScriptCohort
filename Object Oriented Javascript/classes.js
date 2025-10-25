//Es6>
class User{
    constructor(username, mail, pass){
        this.username=username;
        this.mail=mail
        this.pass=pass
    }
encryptpass(){
    return `${this.pass}abc`
}
capuser(){
    return`${this.username.toUppercase()}`
}
}

const chai= new User("chai","mial.com","1234")
console.log(chai.encryptpass());
console.log(chai.capuser);
//BEhind th escence
// function User(Usernaem, Mail, pass){
//     this.username=username;
//         this.mail=mail
//         this.pass=pass
// }
// User.prototype.encrypt=function(){
//     return `${this.pass}abc`
// }
// User.prototype.capuser=function(){
//     return`${this.username.toUppercase()}`
// }









