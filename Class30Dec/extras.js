//currying
function calculate(a,b,c,d)
{
    return;
}

function calc (a)
{
    return function(b)
    {
        return function(c)
        {
            return function(d)
            {
                return a*b*c*d;
            }
        }
    }
}
let ans = calc(2)(2)(3);

console.log(ans);