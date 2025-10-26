const User={
    _email:'mail.com',
    _pass:'12345a',

get email(){
return this._email.toUpperCase()
},
set email(valu){
this._email=valu
}


}



const tea=Object.create(User)
console.log(tea.email);
