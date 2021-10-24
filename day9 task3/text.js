// default constructor
function dcon(age=21){
     console.log("default constructor"+age);
}
dcon()

// rest parameter
function arr(...args){
    console.log(args);
}
arr(22,21)

// spread parameter
const age=[21,22,23];
const age1=[24,25,26];
const spread=[...age,...age1];
console.log(spread);

// for loop
var ele=[1,2,3,4];
for(let newele of ele){
    newele=newele*2;
    console.log(newele);
}
// destructor
const object={
    color:"red",
    nam:"unknown",
    height:25
}
const {color,nam,height}=object;
console.log(`${color} ${nam} ${height}`);

// array destructor
function num(){
    return [55,66,77,88];
}
var newnum=num();
console.log(newnum);
// using rest 

console.log(...newnum);

 