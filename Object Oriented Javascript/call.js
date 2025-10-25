function setUsername(username){
this.username=username
console.log("called");

}
function cerateuser(username, email, pass){
    setUsername.call(this, username)

this.email=email
this.pass=pass

}
const chai= new cerateuser("chai","chai.com","12345")
console.log(chai);





