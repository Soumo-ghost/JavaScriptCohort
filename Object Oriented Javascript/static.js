class User{
    constructor(Username){
        this.Username=username
    }
logme(){
    console.log(`Userbname ${this.Username}`);
    
}
static cretae(){
return 1234;
}


}
const soumo= new User("soumo")
console.log(soumo.cretae());

class Teacher extends User{
    constructor(mail){
super(this.username)

        this.mail=mail
    }
}
const Iphone= new Teacher("iphone","Phone.com","21345")
console.log(Iphone.cretae());
//static can give result


