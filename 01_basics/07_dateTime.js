// Dates

let myDate = new Date()
console.log(myDate,toString());

//let myCreatedDate = new Date(2026,2,23)
// let myCreatedDate = new Date(2026,2,23,5,3)
let myCreatedDate = new Date("01-14-2026")
// console.log(myCreatedDate.toLocaleString());


 //let myTimestamp = Date.now()
// console.log(myTimestamp); 
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

// `${newDAte.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday : "long"
})