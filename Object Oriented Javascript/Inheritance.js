class User{
    constructor(username){
        this.username=username
    }
logme(){
    console.log(`usernameis ${this.username}`);
    
}

}



class Teacher extends User{
    constructor(username, Mail, pass){
        super(username)

        this.mail=mail
        this.pass=pass
    }
addcouse(){
    console.log(`a new course was add ${this.username}`);
    
}

}
const chai=new Teacher("chai","mail.com","12345")
chai.addcouse()
const masla=new User("MASALACHAI")
masla.addcouse()//dont have the acsess
masla.logme()
console.log(chai===masla);//false
console.log(chai===Teacher);//false
console.log(chai instanceof Teacher);//true







