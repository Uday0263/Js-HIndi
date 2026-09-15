// singleton
 
//object literals
const mySym = Symbol("key1")
const JsUser = {
    name : "Uday",
    [mySym]:"mykey1",
    age : 19,
    location: "jaipur",
    email: "uday@gmail.com",
    isLoggedIN: false,
    lastLoginDays:["Monday","staurday"]
}
console.log(JsUser.email);
console.log(JsUser["email"])
console.log( JsUser[mySym])

JsUser.email = "uday.12@gmail.com"
//Object.freeze(JsUser)
JsUser.email="udaymicrsosft"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(JsUser.greeting());