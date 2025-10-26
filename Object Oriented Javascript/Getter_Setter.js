class User{
    constructor(mail, pass){
        this.mail=mail;
        this.pass=pass;
    }
    get mail(){
        return this._mail.toUpperCase()
    }
    set mail(val){
return this._mail=val
    }
    get pass(){
return `${this._pass}hitesh`
    }
    set pass(val){
this._pass=val
    }
}
const hitesh= new User("Soumo","abc")
console.log(hitesh.pass);












