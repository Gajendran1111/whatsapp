// loops 
// for loop 
// syntax 
// for(initilization;condition;incrementor,decrement){}

for (let a =1;a<=5;a++){
    console.log("java");   
}

let b =1;
while(b<=4){
    console.log("javascript");
    b++
}

// do while
let d =1;
do{
    console.log("hi");
    d++
}while(d<=5)

// for of 
let fruit =["apple","orange","mango","banana","graps"];
for(single of fruit){
    console.log(single.toUpperCase());
}

// for in 

let obj = {
    name:"adhithyan",
    age:28,
    place:"chennai"
}
for(details in obj){
    console.log(details+":"+obj[details]);
    
}
