/* 1). Create a function that finds the maximum range of a triangle's
third edge, where the side lengths are all integers. */

//Input
const side1=8;
const side2=10;

// Function that finds the maximum range of a triangle's third edge
function nextEdge(side1, side2){
return (side1+side2)-1;
}

//Output:
console.log("1: "+(nextEdge(side1, side2)));


/* 2). The right shift operation is similar to floor division by powers of
two. Write a function that mimics (without the use of >>) the right
shift operator and returns the result from the two given integers. Try
to solve this challenge by recursion. */

//Input

let num1=80;
let num2=3;

function rightShiftResult(num1,num2){
return Math.floor(num1/(2**num2));
}
//Output
console.log("2: "+(rightShiftResult(num1,num2)));






/* 3). Create a function that takes numbers b and m as arguments and
returns the second derivative of the function f(x)=x^b +x* (e^(b*m))
with respect to x evaluated at x=m, where b and m are constants. */

//Input
const b=1;
const m=2;

//Returns the second derivative of the function
function secondDerivativeFun(b,m){
    return ((m**b)+m*(Math.E**(b*m)));
}

//Output
console.log("3: "+(secondDerivativeFun(b,m)));


/* 4). This Triangular Number Sequence is generated from a pattern of
dots that form a triangle. */

//Input

const triangularNumSeq=6;

//Function to find the cumulative sum of the number of all the previous dots 
function cumulativeSum(n){
    count=0;
    totalSum=0;
    for(let i=1;i<=n;i++){
        count+=i;
        totalSum+=count;
    }
    return totalSum;
}

//Output
console.log("4: "+(cumulativeSum(triangularNumSeq)));

/* 5). Given a total due and an array representing the amount of
change in your pocket, determine whether or not you are able to pay
for the item. */

//Input
const changeAvailable=[30,40,20,5];
const itemCost=12.55;

const quarterToDollar=4;
const dimesToDollar=10;
const nickelsToDollar=20;
const penniesToDollar=100;

// Function to determine whether or not you are able to pay for the item.

function changeEnough(changeAvailable, itemCost){
const amtAvailableInDollars=((changeAvailable[0]/quarterToDollar)+(changeAvailable[1]/dimesToDollar)+(changeAvailable[2]/nickelsToDollar)+(changeAvailable[3]/penniesToDollar));
return amtAvailableInDollars>=itemCost;
}

//Output
console.log("5: "+changeEnough(changeAvailable,itemCost));
