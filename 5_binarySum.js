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
    for(let i = result2.length-1; i >= 0; i--)
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
       

       console.log(final.join(''));
       return final.join('');
             
}
addBinary('1101', '1011');