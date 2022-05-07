const arr = ['apple','orange','mango','','lemon'];
newarr = [];

const array= arr.filter((ele,i)=>{
     return ele !==''
})
console.log(array)