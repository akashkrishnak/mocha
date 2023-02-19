class math{
    factorial(num)
{
    if(num===1|num===0)
    {
        return 1;
    }
    else
    {
        let result=1;
        for(let i=1;i<=num;i++)
        {
            result*=i;
        }
        return result;
    }
}
}

module.exports=math;