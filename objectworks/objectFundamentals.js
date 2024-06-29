var students=[{
    name:"aswin",
    course:"django",
    degree:"bsc",
    total:450,
    "transportation":["bike","byfoot","bus"]
    // points:10
},
{
    name:"johnson",
    course:"django",
    degree:"bsc",
    total:450,
    "transportation":["truck","byfoot","bus"]

},
{
    name:"balu",
    course:"django",
    degree:"bsc",
    total:450,
    "transportation":["scooter","byfoot","cycle"]

}
]

// console.log(students.transportation);


for(let ch of students){
    for(let i of ch.transportation){
        if(i=="bus"){
            console.log(ch);
        }
    }
}

// console.log(students.name);
// console.log(students.degree);

// students.grade="a+";

// console.log(students);

// if("total" in students){
//     console.log("present");
// }
// else{
//     console.log("not present");
// }


// if("points" in students){

//     students.points+=10                                 //update

// }
// else{
//     students.points=15                                  //add
// }
// console.log(students);