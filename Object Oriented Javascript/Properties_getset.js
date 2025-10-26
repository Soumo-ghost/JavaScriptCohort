function User( mail, pass){
    this.mail=mail;
    this.pass=pass
Object.defineProperty(this, 'mail',{
    get: function(){
        return this._mail.toUpperCase()
    },
    set:function(val){
this._mail=val
    }
})
Object.defineProperty(this, 'pass',{
    get: function(){
        return this._pass.toUpperCase()
    },
    set:function(val){
this._pass=val
    }
})


}
const cha= new User("chai@chai.com", "chai")
