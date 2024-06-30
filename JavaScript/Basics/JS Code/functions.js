function addNums(num1=1,num2=5) {    //default values
    //console.log(num1+num2);
    return num1+num2;
}
addNums();
addNums(5,5);
console.log(addNums(5,5));
//addNums(1,2);


// Arrow Function
const addNums2 = (num1=1, num2=2) => num1 + num2;

console.log(addNums2(5,5));