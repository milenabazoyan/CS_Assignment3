function addBinary(num1,num2)
{
    let result1 = [];
    for(let i = 0 ; i <= num1.length-1; i++)
    {
    result1.push(Number(num1[i]));
    }
    let result2 = [];
    for(let i = 0; i <= num2.length-1; i++)
    {
        result2.push(Number(num2[i]));
    }
    if(result2.length > result1.length )
    {
        for(let i = result1.length; i < result2.length; i++)
        {
            result1.unshift(0);
        }
    }
    else if(result1.length > result2.length)
    {
        for(let i = result2.length; i < result1.length; i++)
        {
            result2.unshift(0);}
    }
    let carry = 0;
    let final = [];
    for(let i = result2.length-1; i >= 0;i--)
    {
        if(result1[i]+result2[i]===2)
        {      
            final[i] = carry;
            carry = 1;
        }
        else if(carry + result1[i] + result2[i]===2)
        {
            final[i] = 0;
            carry = 1;
        }
        else
        {
            final[i]=carry + result1[i]+result2[i];
            carry=0;
        }
    }
    if(carry + result1[0]+result2[0]>=2);
    {
        final.unshift(1);
        }
       
       return final.join('');
             
}
function reverseBinary(number){
    let num = number.toString();
    let array=[];
    let finalArray=[];
    for (let i = 0; i <num.length; i++){
        array.push(Number(num.charAt(i)));
    }
    for(i = 0; i<array.length; i++){
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

function twosComplement(number) {

    let reverse =  reverseBinary(number)

    let sum = addBinary(reverse, "1") 

    return sum

}

let answer = twosComplement("1101")
console.log(answer);