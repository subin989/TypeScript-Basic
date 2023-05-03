// if you declear variable and assign that value into that vriable then it willnot show any built-it types
// for example
let fullname: String="Ram";

// also can be declear as 
let full_name="Shyam";

// but we declear the variable without assigning the value then we can see the any type there
let roll_num;

//but this is not the use case of the "any" type 
//when we are passing argumenst into the function then the arguments may be of any type.
//for example
function AnyType(file){
    console.log(file)
}