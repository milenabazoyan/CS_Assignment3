function reverseBinary(number){
let num = number.toString();
let array=[];
let finalArray=[];
for (let i = 0; i < num.length; i++){
    array.push(Number(num.charAt(i)));
}
for(i = 0; i < array.length; i++){
    if (array[i]===0){
        finalArray.push(array[i] + 1)
    }
    else if (array[i] === 1){
        finalArray.push(array[i]-1);
    }
}
if (finalArray.length % 4 !== 0){
    finalArray.unshift(1)
} 
return finalArray.join('')
}
console.log(reverseBinary(101))