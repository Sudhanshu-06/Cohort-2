// const ages=[21,22,23,24,36,48,100];
// const numberOfPeople=ages.length;

// for(let i=0; i<numberOfPeople; i++)
// {
//     if(ages[i]%2==0)
//     {
//         console.log(ages[i]);
//     }
// }

// const personArray=["Sudhanshu", "Suman", "Priya"];
// const genderArray=["male","male","female"];

// for(let i=0; i<personArray.length; i++){
//     if(genderArray[i]=="male") {
//         console.log(personArray[i]);
//     }
// }

//object

// const user1={
//     firstNmae:"Sudhanshu",
//     age:25,
//     gender:"male"


// }
// console.log(user1["gender"]);

// const user=[1,2,3]
// const user2=["Sudhanshu","raman"]
//array of object
const allUsers=[{
    firstName:"Sudhanshu",
    gender:"male"
},{
    firstName:"raman",
    gender:"male",
    metadata:{
        age:23,
        address:""
    }
},{
    firstName:"Priya",
    gender:"female"
}]

for(let i=0; i<allUsers.length; i++){
    if(allUsers[i]["gender"] == "male"){
        console.log(allUsers[i]["firstName"])
    }
}

