//for

   for(let i=0; i<5; i++){
    console.log("Hello World",i);
}

   for(let i=0; i<=5; i++){
    console.log("Hello World",i);
}
for(let i=0; i<=5; i++){
   if (i % 2 !== 0) console.log(i);
}
for(let i=5; i>=1; i--){
    if (i % 2 !== 0) console.log(i);
 }


//for in

const person ={
    name:'siva',
    age:25,
    sex:"Male"
};

for(let key in person){

    console.log(`${key}:${person[key]}`);
}
    //Dot notation
     person.name
     //Bracket notation
     person['name']


     

//for of 

let colors = ["red","green","black"];


for(let color of colors){
    console.log("color:" + color)
}




//ForEach function

var avengers = ['Iron Man',"Captain America","Thor","Hulk"];

const aven = avengers.forEach((e)=> console.log(e));
