const courses = ["pain", "lait", "riz", "cafe"];

courses.push("sucre") ;
const index  =  courses.indexOf("lait"); 

    courses.splice(index  ,  1)  ;

let bum  = courses.length ;
console.log(`le number des arctiles est  : ${bum}`) ;
let f  = 0 ;
for (let  i = 0 ;  i < courses.length  ; i ++)
{
    console.log(`${i+1} . ${courses[i]}`); 
    if(courses[i] == "cafe") 
    {
        f= 1 ;
    }
}
if(f==  1)
{
    console.log("le cafe est bien dans la liste .") ;
}