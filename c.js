console.log("hey I am a javascript code");

var a = {name:"Manan", age:"21", city:"UTTAR PRADESH"}
var b = {name:"Amogh", age:"21", city:"UTTAR PRADESH"}
var c = {name:"Arunesh", age:"21", city:"UTTAR PRADESH"}

console.time('Time taken');
console.log("Hey")
console.error("an error occured!");
console.warn("Hey this is a warning!!");
console.table({a ,b ,c})
console.log('%c Custom message','color:blue;')
console.timeEnd('Time taken');