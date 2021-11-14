//Array Slice

const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
var modifiedFood = foods.slice(1,4);
console.log("Sliced Food : ",modifiedFood);

//Array Splice
var removedfood = foods.splice(2,0,"noodles","icecream");
console.log("Spliced Food : ",foods);

// Filter

const numberArray = [12,324,213,4,2,3,45,4234];
var isEven = numberArray.filter(temp => {
    if(temp%2!=1){
        return temp;
    }
});
console.log("Even Number : ",isEven);

var isPrime = numberArray.filter(temp => {
    if(temp%2==0){
        temp = false;
    }
    else{
        return temp;
    }
});
console.log("Prime Elements : ",isPrime);

// Reject

var nonPrime = numberArray.filter(temp => {
    if(temp%2==0){
        return temp;
    }
});
console.log("Non-Prime Elements : ",nonPrime);

// Map

const myArray = [11,34,20,5,53,16];
var findSquareOfNumbers = myArray.map(a=>a**2);
console.log("Square : ",findSquareOfNumbers);

// Reduce

const myarray = [2,3,5,10];
var multiply = myarray.map(a=>{
   var reduce = myarray.reduce((accumulator,current)=>{
        return accumulator*current;
    });
    return reduce;
});
console.log("Multiply:",multiply);