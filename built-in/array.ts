// when we declear the array with the particular values then it will indicates that it is array of specific type
// for example
let books=[1,4,6,7]
// when we hover over that variable then we can see that is array of number type

//but if you declear empty array we can see "any" type of array while hovering
let guess=[]
// so if we want a empty array we must anoted with desired type
//for example
let store:string[]=[]

//it is also useful we are using arrow function we can get numbers of function or module which we cannot found in javascript
books.forEach(n=>(n.toExponential()))