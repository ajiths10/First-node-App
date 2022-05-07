const arr = ['apple','orange','mango','','lemon'];


const array= arr.filter((ele,i)=>{
     return ele !==''
})
console.log(array)

const newarr =[...array,'cherry']
console.log(newarr)