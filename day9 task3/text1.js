var one=[1,2,3,4,5];
var two=[6,7,8,9];
var combine=one.concat(two);
console.log("ex for concatination")
console.log(combine);

var three=[7,8,9,5,6];
console.log("finding index")
console.log(three.indexOf(5));

var four=[5,7,4,8,9,11,13,2,4,9];
console.log("finding last index");
console.log(four.lastIndexOf(9,7));

var five=[4,66,7,8,9];
console.log("including array");
console.log(five.includes(66));
console.log("not include")
console.log(five.includes(44));

var six=[4,5,6,7,8];
console.log(" without arrow function for each");
var feach=six.forEach(function(item)
{
        console.log(`${item}`)  
})

var elem=[4,5,6,7,8];
console.log("for each using arrow")
var arrowe=elem.forEach((item)=>{
    console.log(`${item+1}`);
});
    


var seven = [3,4,5,6,7];
console.log("filter using arrow")
var fill=seven.filter((seven1)=>seven1!=0);
console.log(fill)

var str=["good","bad"];
console.log("to string");
var strs=str.toString();
console.log(strs);

var ten=[3,4,5,6];
console.log("finding array or not")
var final=Array.isArray(ten);
console.log(final);


 var eleven=[3,4,5,67,6];
 console.log("map arrow")
 var mpa=eleven.map((item)=>{
     console.log(`${item*2}`)
 })
