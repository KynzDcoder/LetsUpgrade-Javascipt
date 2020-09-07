const obj = [{
    name:"Bob",
    age:28,
    country:"England",
    hobbies:["Singing","Dancing","Swimming"]
},{
    name:"Alice",
    age:32,
    country:"India",
    hobbies:["Singing","Dancing","Reading"]
},{
    name:"John",
    age:20,
    country:"US",
    hobbies:["Coding","Reading","Music"]
},{
    name:"Julie",
    age:40,
    country:"England",
    hobbies:["Singing","Gardening","Grooming"]
},{
    name:"Megha",
    age:24,
    country:"India",
    hobbies:["Dancing","Coding","Music"]
}];

function getObjects(){
    console.log("The following is the list of all the objects:");
    console.log(obj);
}


function ageObject(){
    const ageArray =[];
    obj.forEach(function(obj){
        if(obj.age < 30){
            ageArray.push(obj); 
        }
    });
    console.log("The following is the list of all the objects whose age is less than 30:");
    console.log(ageArray);

}

function countryObject(){
    const countryArray = [];
    obj.forEach(function(obj){
        if(obj.country === "India"){
            countryArray.push(obj);
        }
    });
    console.log("The following is the list of all the objects whose country is India:");
    console.log(countryArray);
}

